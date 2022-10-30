use chess::{Board, File, Rank, Square};
use std::sync::Mutex;

#[derive(Default)]
pub struct Game(pub Mutex<Board>);

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
