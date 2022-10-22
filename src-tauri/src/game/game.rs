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
pub struct BitBoard(pub u64);
pub struct Board {
    pub pieces: [BitBoard; 12],
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

    pub fn get_piece(&self, x: i32, y: i32) -> &Option<Piece> {
        self.board.get(y as usize).unwrap().get(x as usize).unwrap()
    }

    pub fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        if x == from_x && y == from_y {
            return Err("Invalid move".to_string());
        }
        let piece = self.get_piece(from_x, from_y);

        match piece {
            Some(p) => {
                return match p.piece_type {
                    PieceType::KING => self.king_action(p, x, y, from_x, from_y),
                    PieceType::QUEEN => Game::queen_action(p, x, y, from_x, from_y),
                    PieceType::ROOK => Game::rook_action(p, x, y, from_x, from_y),
                    PieceType::BISHOP => Game::bishop_action(p, x, y, from_x, from_y),
                    PieceType::KNIGHT => Game::knight_action(p, x, y, from_x, from_y),
                    PieceType::PAWN => Game::pawn_action(p, x, y, from_x, from_y),
                }
            }
            None => Err("invalid piece".to_string()),
        }
    }
}
