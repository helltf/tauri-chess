use chess::{Board, ChessMove, File, Rank, Square};
use tauri::State;

#[tauri::command]
pub fn get_position(state: State<Board>) -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}

#[tauri::command]
pub fn action(
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
    board: State<Board>,
) -> Result<String, String> {
    println!("{}{}", x, y);
    let to_square = get_square(x, y);
    let from_square = get_square(from_x, from_y);

    let action = ChessMove::new(from_square, to_square, None);
    board.make_move_new(action);
    return Err("abc".to_string());
}

pub fn get_square(x: i32, y: i32) -> Square {
    Square::make_square(get_rank(y).unwrap(), get_file(x).unwrap())
}

pub fn get_rank(rank: i32) -> Option<Rank> {
    println!("rank: {}", rank);
    match rank {
        1 => Some(Rank::First),
        2 => Some(Rank::Second),
        3 => Some(Rank::Third),
        4 => Some(Rank::Fourth),
        5 => Some(Rank::Fifth),
        6 => Some(Rank::Sixth),
        7 => Some(Rank::Seventh),
        8 => Some(Rank::Eighth),
        _ => None,
    }
}

pub fn get_file(file: i32) -> Option<File> {
    println!("file: {}", file);
    match file {
        1 => Some(File::A),
        2 => Some(File::B),
        3 => Some(File::C),
        4 => Some(File::D),
        5 => Some(File::E),
        6 => Some(File::F),
        7 => Some(File::G),
        8 => Some(File::H),
        _ => None,
    }
}
