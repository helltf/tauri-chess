use crate::parser::fen::parse_fen;

const DEFAULT_POSITION: &str = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

#[derive(Debug)]
pub enum PieceType {
    KING,
    ROOK,
    QUEEN,
    KNIGHT,
    PAWN,
    BISHOP,
}

#[derive(Debug)]
pub enum PieceColor {
    WHITE,
    BLACK,
}

#[derive(Debug)]
pub struct Piece {
    pub piece_type: PieceType,
    pub color: PieceColor,
}

pub struct Game {
    pub board: Vec<Vec<Option<Piece>>>,
    pub white_move: bool,
}

impl Game {
    pub fn new() -> Game {
        Game {
            board: parse_fen(DEFAULT_POSITION),
            white_move: (true),
        }
    }
}

