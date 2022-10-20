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

    pub fn is_attacked(&self, x: i32, y: i32, def_color: PieceColor) -> bool {
        let attack_color = match def_color {
            PieceColor::BLACK => PieceColor::WHITE,
            PieceColor::WHITE => PieceColor::BLACK,
        };

        for row in self.board {
            for piece in &row {
                let attacks: bool = match piece {
                    Some(p) => {
                    
                    },
                    None => false,
                };

                if attacks {
                    return true;
                }
            }
        }
        false
    }

    pub fn action(
        &self,
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        if x == from_x && y == from_y {
            return Err("Invalid move".to_string());
        }

        match piece.piece_type {
            PieceType::KING => self.king_action(piece, x, y, from_x, from_y),
            PieceType::QUEEN => Game::queen_action(piece, x, y, from_x, from_y),
            PieceType::ROOK => Game::rook_action(piece, x, y, from_x, from_y),
            PieceType::BISHOP => Game::bishop_action(piece, x, y, from_x, from_y),
            PieceType::KNIGHT => Game::knight_action(piece, x, y, from_x, from_y),
            PieceType::PAWN => Game::pawn_action(piece, x, y, from_x, from_y),
        }
    }
}
