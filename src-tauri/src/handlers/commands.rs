use crate::game::game::{Game, Piece};
use tauri::State;

#[tauri::command]
pub fn get_position(state: State<Game>) -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}

#[tauri::command]
pub fn action(
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
    game: State<Game>,
) -> Result<String, String> {
    let result = game.action(x, y, from_x, from_y);

    match result {
        Ok(s) => game.update(x, y, from_x, from_y),
        Err(e) => println!("{:?}", e),
    }
    return result;
}
