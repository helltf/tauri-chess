use crate::game::game::{PieceColor, PieceType, Piece};

fn is_lowercase(character: char) -> bool {
    return char::is_lowercase(character);
}

fn get_piece(character: char) -> Option<Piece> {
    let color: PieceColor = if is_lowercase(character) {
        PieceColor::BLACK
    } else {
        PieceColor::WHITE
    };

    let low_char = String::from_iter(character.to_lowercase().collect::<Vec<_>>());

    if low_char == "k" {
        return Some(Piece {
            piece_type: PieceType::KING,
            color: color,
        });
    }

    if low_char == "r" {
        return Some(Piece {
            piece_type: PieceType::ROOK,
            color: color,
        });
    }

    if low_char == "q" {
        return Some(Piece {
            piece_type: PieceType::QUEEN,
            color: color,
        });
    }

    if low_char == "n" {
        return Some(Piece {
            piece_type: PieceType::KNIGHT,
            color: color,
        });
    }

    if low_char == "p" {
        return Some(Piece {
            piece_type: PieceType::PAWN,
            color: color,
        });
    }

    if low_char == "b" {
        return Some(Piece {
            piece_type: PieceType::BISHOP,
            color: color,
        });
    }

    None
}

fn parse_row(row: &str) -> Vec<Option<Piece>> {
    let chars = row.chars().collect::<Vec<char>>();
    let mut result: Vec<Option<Piece>> = Vec::new();

    for character in chars {
        let piece = get_piece(character);
        match piece {
            Some(p) => result.push(Some(p)),
            None => {
                let offset = character as u32 - '0' as u32;
                for i in 0..offset {
                    result.push(None)
                }
            }
        }
    }
    result
}

fn parse_position(position: &str) -> Vec<Vec<Option<Piece>>> {
    let rows: Vec<&str> = position.split('/').collect();

    let parsed_rows = rows
        .iter()
        .map(|row| parse_row(row))
        .collect::<Vec<Vec<Option<Piece>>>>();
    parsed_rows
}

pub fn parse_fen(fen: String) -> Vec<Vec<Option<Piece>>> {
    let parts: Vec<&str> = fen.split(" ").collect::<Vec<&str>>();

    let pieces = parse_position(parts[0]);
    return pieces;
}
