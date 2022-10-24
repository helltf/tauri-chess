#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
extern crate chess;

mod handlers;

use handlers::commands::{self, Game};
use chess::Board;

fn main() {
    tauri::Builder::default()
        .manage(Game(Default::default()))
        .invoke_handler(tauri::generate_handler![
            commands::get_position,
            commands::action
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
