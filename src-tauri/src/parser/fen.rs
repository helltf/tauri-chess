use crate::game::{
    action::{Bishop, King, Knight, Pawn, Queen, Rook},
    game::{Piece, PieceColor},
};

fn is_lowercase(character: char) -> bool {
    return char::is_lowercase(character);
}

fn get_piece(character: char) -> Option<Box<dyn Piece>> {
    let color: PieceColor = if is_lowercase(character) {
        PieceColor::BLACK
    } else {
        PieceColor::WHITE
    };

    let low_char = String::from_iter(character.to_lowercase().collect::<Vec<_>>());

    if low_char == "k" {
        return Some(Box::new(King { color }));
    }

    if low_char == "r" {
        return Some(Box::new(Rook { color }));
    }

    if low_char == "q" {
        return Some(Box::new(Queen { color }));
    }

    if low_char == "n" {
        return Some(Box::new(Knight { color }));
    }

    if low_char == "p" {
        return Some(Box::new(Pawn { color }));
    }

    if low_char == "b" {
        return Some(Box::new(Bishop { color }));
    }

    None
}

fn parse_row(row: &str) -> Vec<Option<Box<dyn Piece>>> {
    let chars = row.chars().collect::<Vec<char>>();
    let mut result: Vec<Option<Box<dyn Piece>>> = Vec::new();

    for character in chars {
        let piece = get_piece(character);
        match piece {
            Some(p) => result.push(Some(p)),
            None => {
                let offset = character as u32 - '0' as u32;
                for _ in 0..offset {
                    result.push(None)
                }
            }
        }
    }
    result
}

fn parse_position(position: &str) -> Vec<Vec<Option<Box<dyn Piece>>>> {
    let rows: Vec<&str> = position.split('/').collect();

    let parsed_rows = rows
        .iter()
        .map(|row| parse_row(row))
        .collect::<Vec<Vec<Option<Piece>>>>();
    parsed_rows
}

pub fn parse_fen(fen: &str) -> Vec<Vec<Option<Box<dyn Piece>>>> {
    let parts: Vec<&str> = fen.split(" ").collect::<Vec<&str>>();

    let pieces = parse_position(parts[0]);
    return pieces;
}
