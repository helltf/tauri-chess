use std::str::FromStr;

use crate::game::game::{get_square, Game};
use chess::{Board, ChessMove, BoardStatus};
use tauri::State;

#[tauri::command]
pub fn get_position(game: State<Game>) -> String {
    return game.0.lock().unwrap().to_string();
}

#[tauri::command]
pub fn set_position(position: String, game: State<Game>) -> Result<String, String> {
    let board = Board::from_str(&position);
    return match board {
        Ok(b) => {
            *game.0.lock().unwrap() = b;
            Ok("Valid position".to_string())
        }
        Err(_e) => Err("invalid position".to_string()),
    };
}

#[tauri::command]
pub fn action(
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
    game: State<Game>,
) -> Result<String, String> {
    let mut board = game.0.lock().unwrap();

    let from_square = get_square(from_x, from_y);
    let to_square = get_square(x, y);
    let action = ChessMove::new(from_square, to_square, None);
    let legal = board.legal(action);
    if legal {
        let result = board.make_move_new(action);
        *board = result;
        return Ok("Success".to_string());
    }

    return Err("invalid move".to_string());
}

#[tauri::command]
pub fn reset(game: State<Game>) -> () {
    *game.0.lock().unwrap() = Board::default()
}

#[tauri::command]
pub fn get_status(game: State<Game>) -> BoardStatus {
    let board = game.0.lock().unwrap();
    board.status()
}

