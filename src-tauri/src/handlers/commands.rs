use crate::game::game::Game;
use tauri::State;

#[tauri::command]
pub fn get_position(state: State<Game>) -> String {
println!("{:?}", state.board);
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}
