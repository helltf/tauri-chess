export enum PieceColor {
	BLACK = 'BLACK',
	WHITE = 'WHITE'
}

export enum PieceType {
	KING = "KING",
	QUEEN = "QUEEN",
	ROOK = "ROOK",
	KNIGHT = "KNIGHT",
	PAWN = "PAWN",
	BISHOP = "BISHOP"
}

export interface Piece {
	type: string
	color: PieceColor
}

export type PieceRow = (Piece | null)[]
export type Pieces = PieceRow[]

const pieceEncodings: {[key: string]: PieceType} = {
	k: PieceType.KING,
	r: PieceType.ROOK,
	q: PieceType.QUEEN,
	n: PieceType.KNIGHT,
	p:PieceType.PAWN,
	b: PieceType.BISHOP
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
				color: isLowerCase(c) ? PieceColor.BLACK : PieceColor.WHITE
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
