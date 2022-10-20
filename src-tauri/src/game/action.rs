use crate::game::game::Piece;

pub fn king_action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
) -> Result<String, String> {
    Ok("success".to_string())
}
pub fn queen_action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
) -> Result<String, String> {
    Err("success".to_string())
}
pub fn rook_action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
) -> Result<String, String> {
    Ok("success".to_string())
}
pub fn knight_action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
) -> Result<String, String> {
    Ok("success".to_string())
}
pub fn bishop_action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
) -> Result<String, String> {
    Ok("success".to_string())
}
pub fn pawn_action(
    piece: Piece,
    x: i32,
    y: i32,
    from_x: i32,
    from_y: i32,
) -> Result<String, String> {
    Ok("success".to_string())
}
