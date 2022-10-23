#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
extern crate chess;

mod game;
mod handlers;
mod parser;

use game::game::Game;
use handlers::commands;
use chess::Board;

fn main() {
    tauri::Builder::default()
        .manage(Board::default())
        .invoke_handler(tauri::generate_handler![
            commands::get_position,
            commands::action
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
