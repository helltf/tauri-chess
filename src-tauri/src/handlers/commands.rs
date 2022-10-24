use std::sync::Mutex;

use chess::{Board, ChessMove, File, Rank, Square};
use tauri::State;

#[tauri::command]
pub fn get_position() -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}

#[derive(Default)]
pub struct Game(pub Mutex<Board>);

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

pub fn get_square(x: i32, y: i32) -> Square {
    let rank = get_rank(y).expect("invalid rank");
    let file = get_file(x).expect("invalid file");
    Square::make_square(rank, file)
}

pub fn get_rank(rank: i32) -> Option<Rank> {
    match rank {
        7 => Some(Rank::First),
        6 => Some(Rank::Second),
        5 => Some(Rank::Third),
        4 => Some(Rank::Fourth),
        3 => Some(Rank::Fifth),
        2 => Some(Rank::Sixth),
        1 => Some(Rank::Seventh),
        0 => Some(Rank::Eighth),
        _ => None,
    }
}

pub fn get_file(file: i32) -> Option<File> {
    match file {
        0 => Some(File::A),
        1 => Some(File::B),
        2 => Some(File::C),
        3 => Some(File::D),
        4 => Some(File::E),
        5 => Some(File::F),
        6 => Some(File::G),
        7 => Some(File::H),
        _ => None,
    }
}
