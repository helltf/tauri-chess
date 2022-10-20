use serde::{Deserialize, Serialize};

use crate::parser::fen::parse_fen;
use crate::game::action::{king_action, bishop_action,pawn_action,queen_action,knight_action, rook_action};

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
    BLACK,
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
    pub fn action(
&self,
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        match piece.piece_type {
           PieceType::KING => king_action(piece, x, y, from_x, from_y),
           PieceType::QUEEN => queen_action(piece, x, y, from_x, from_y),
           PieceType::ROOK => rook_action(piece, x, y, from_x, from_y),
           PieceType::BISHOP => bishop_action(piece, x, y, from_x, from_y),
           PieceType::KNIGHT => knight_action(piece, x, y, from_x, from_y),
           PieceType::PAWN => pawn_action(piece, x, y, from_x, from_y),
        }
    }
}
