use tauri::State;
use chess::ChessMove;
use crate::game::game::{Game, get_square};

#[tauri::command]
pub fn get_position() -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
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

    let to_square = get_square(x, y);
    let from_square = get_square(from_x, from_y);
    let action = ChessMove::new(from_square, to_square, None);
    let legal = board.legal(action);
    if legal {
        let result = board.make_move_new(action);
        *board = result;
        return Ok("Success".to_string());
    }

    return Err("abc".to_string());
}

