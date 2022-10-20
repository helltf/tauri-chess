export interface Piece {
	type: string
	color: 'white' | 'black'
}

export type PieceRow = (Piece | null)[]
export type Pieces = PieceRow[]

const pieceEncodings: {[key: string]: string} = {
	k: 'king',
	r: 'rook',
	q: 'queen',
	n: 'knight',
	p: 'pawn',
	b: 'bishop'
}

const isLowerCase = (chars: string): boolean => {
	return chars.toLowerCase() === chars
}

const parseRow = (row: string): PieceRow => {
	const chars = row.split('')

	return chars.reduce((pieces, c) => {
		const mappedPiece = pieceEncodings[c.toLowerCase()]

		if (mappedPiece) {
			pieces.push({
				type: mappedPiece,
				color: isLowerCase(c) ? 'black' : 'white'
			})
			return pieces
		}

		const offset = Number(c)

		if (offset) {
			pieces.push(...Array(offset).fill(null))
		}

		return pieces
	}, [] as PieceRow)
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
