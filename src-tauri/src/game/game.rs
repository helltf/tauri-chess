use serde::{Deserialize, Serialize};

use crate::parser::fen::parse_fen;

const DEFAULT_POSITION: &str = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

#[derive(Debug, Serialize, Deserialize)]
pub enum PieceType {
    KING,
    ROOK,
    QUEEN,
    KNIGHT,
    PAWN,
    BISHOP,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum PieceColor {
    WHITE,
    BLACK 
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Piece {
#[serde(rename(deserialize = "type"))]
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
