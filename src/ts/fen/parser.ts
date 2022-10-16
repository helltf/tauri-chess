
interface Piece {
	type: string
	color: 'white' | 'black'
}
type PieceRow = (Piece | null)[]
type Pieces = PieceRow[]

const pieceEncodings: {[key: string]: string} = {
	k: 'King',
	r: 'Rook',
	q: 'Queen',
	n: 'Knight',
	p: 'Pawn'
}

const isLowerCase = (chars: string): boolean => {
	return chars.toLowerCase() === chars
}

const parseRow = (row: string): PieceRow => {
	const chars = row.split('')

	return chars.map(c => {
		const mappedPiece = pieceEncodings[c]

		return mappedPiece ? {
			type: mappedPiece,
			color: isLowerCase(c) ? 'white' : 'black'
		} as Piece : null;
	})
}

const parsePosition = (position: string): Pieces => {
	const rows = position.split('/')

	return rows.map(parseRow)
}

export const parse = (fen: string): Pieces => {
	const [position,
		move,
		castling,
		en_passant,
		halfmove,
		fullmove] = fen.split(' ')
	const pieces = parsePosition(position)
	return pieces
}
