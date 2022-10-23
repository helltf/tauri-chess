use tauri::State;
use chess::Board;

#[tauri::command]
pub fn get_position(state: State<Board>) -> String {
    return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1".to_string();
}

#[tauri::command]
pub fn action(
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
    board: State<Board>,
) -> Result<String, String> {

    return Err("abc");
}
