pub fn get_position() -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}

pub struct Piece {}

pub struct Game {
    pub board: Vec<Vec<Option<Piece>>>,
    pub white_move: bool,
}
impl Game {
    pub fn New() -> Game {
        Game{board:}
    }
}
