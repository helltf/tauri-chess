#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
mod game;
mod handlers;

use handlers::commands;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::get_position])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
