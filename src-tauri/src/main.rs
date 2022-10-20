#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
mod game;
mod handlers;
mod parser;

use game::game::Game;
use handlers::commands;

fn main() {
    tauri::Builder::default()
        .manage(Game::new())
        .invoke_handler(tauri::generate_handler![
            commands::get_position,
            commands::action
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
