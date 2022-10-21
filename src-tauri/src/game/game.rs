use serde::{Deserialize, Serialize};

use crate::parser::fen::parse_fen;

const DEFAULT_POSITION: &str = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

#[derive(Debug, Serialize, Deserialize)]
pub enum PieceColor {
    WHITE,
    BLACK,
}
#[derive(Clone)]
pub struct Game {
    pub board: Vec<Vec<Option<Box<dyn Piece>>>>,
    pub white_move: bool,
}
trait PieceClone{
    fn clone_box(&self) -> Box<dyn Piece>;
}
impl<T> PieceClone for T
where
    T: 'static + Piece + Clone,
{
    fn clone_box(&self) -> Box<dyn Piece> {
        Box::new(self.clone())
    }
}

impl Clone for Box<dyn Piece> {
    fn clone(&self) -> Self {
        self.clone_box()
    }
}

pub trait Piece: Sync + Send {
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String>;
}

impl Game {
    pub fn new() -> Game {
        Game {
            board: parse_fen(DEFAULT_POSITION),
            white_move: (true),
        }
    }

    pub fn get_piece(&self, x: i32, y: i32) -> &Option<Box<dyn Piece>> {
        self.board.get(y as usize).unwrap().get(x as usize).unwrap()
    }

    pub fn is_attacked(&self, x: i32, y: i32, def_color: PieceColor) -> bool {
        let attack_color = match def_color {
            PieceColor::BLACK => PieceColor::WHITE,
            PieceColor::WHITE => PieceColor::BLACK,
        };

        for row in self.board {
            for piece in &row {
                let attacks: bool = match piece {
                    Some(p) => return false,
                    None => false,
                };

                if attacks {
                    return true;
                }
            }
        }
        false
    }

    pub fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        if x == from_x && y == from_y {
            return Err("Invalid move".to_string());
        }

        let piece = self.get_piece(x, y);
        match piece {
            Some(p) => p.action(x, y, from_x, from_y),
            None => Err("unknown piece".to_string()),
        }
    }
}
