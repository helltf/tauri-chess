use crate::game::game::Game;
use tauri::State;

#[tauri::command]
pub fn get_position(state: State<Game>) -> String {}
