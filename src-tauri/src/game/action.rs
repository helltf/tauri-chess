use crate::game::game::Piece;

use super::game::{Game, PieceColor};

pub struct King {
    pub color: PieceColor,
}

pub struct Queen {
    pub color: PieceColor,
}
pub struct Rook {
    pub color: PieceColor,
}
pub struct Bishop {
    pub color: PieceColor,
}
pub struct Knight {
    pub color: PieceColor,
}
pub struct Pawn {
    pub color: PieceColor,
}
impl Piece for King {
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        Ok("success".to_string())
    }
}

impl Piece for Queen {
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        Ok("success".to_string())
    }
}

impl Piece for Rook{
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        Ok("success".to_string())
    }
}

impl Piece for Bishop{
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        Ok("success".to_string())
    }
}

impl Piece for Knight{
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        Ok("success".to_string())
    }
}

impl Piece for Pawn{
    fn action(&self, x: i32, y: i32, from_x: i32, from_y: i32) -> Result<String, String> {
        Ok("success".to_string())
    }
}
/*
impl Game {
    pub fn king_action(
        &self,
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        let x_diff = from_x - x;
        let y_diff = from_y - y;
        let y_valid = y_diff == -1 || y_diff == 1;
        let x_valid = x_diff == -1 || x_diff == 1;
        let x_no_diff = x_diff == 0;
        let y_no_diff = y_diff == 0;

        if (y_valid && x_no_diff) || (x_valid && y_no_diff) || (x_valid && y_valid) {
            if !is_attacked(x, y, piece.color) {
                return Ok("success".to_string());
            }
        }

        Err("Invalid move".to_string())
    }
    pub fn queen_action(
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        Err("success".to_string())
    }
    pub fn rook_action(
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        Ok("success".to_string())
    }
    pub fn knight_action(
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        Ok("success".to_string())
    }
    pub fn bishop_action(
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        Ok("success".to_string())
    }
    pub fn pawn_action(
        piece: Piece,
        x: i32,
        y: i32,
        from_x: i32,
        from_y: i32,
    ) -> Result<String, String> {
        Ok("success".to_string())
    }
}*/
