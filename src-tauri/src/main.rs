#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
extern crate chess;

mod handlers;
mod game;

use game::game::Game;
use handlers::commands;

fn main() {
    tauri::Builder::default()
        .manage(Game(Default::default()))
        .invoke_handler(tauri::generate_handler![
            commands::get_position,
            commands::action,
            commands::reset,
            commands::set_position,
            commands::get_status
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
