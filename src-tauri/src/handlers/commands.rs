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
    mut board:State<Board>,
) -> Result<String, String> {
    let to_square = get_square(x, y);
    let from_square = get_square(from_x, from_y);
    let action = ChessMove::new(from_square, to_square, None);
    let result = board.make_move(action, &board);
    println!("{:?}", result);
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
        7 => Some(File::A),
        6 => Some(File::B),
        5 => Some(File::C),
        4 => Some(File::D),
        3 => Some(File::E),
        2 => Some(File::F),
        1 => Some(File::G),
        0 => Some(File::H),
        _ => None,
    }
}
