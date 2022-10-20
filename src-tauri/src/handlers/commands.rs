use crate::game::game::{Game, Piece};
use tauri::State;

#[tauri::command]
pub fn get_position(state: State<Game>) -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}

#[tauri::command]
pub fn action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
    game: State<Game>,
) -> Result<String, String> {
    game.action(piece, x, y, from_x, from_y)
    return Ok("success".to_string());
}
