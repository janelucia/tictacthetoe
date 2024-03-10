type FieldType<T> = [[T, T, T], [T, T, T], [T, T, T]];

export class Field<T> {
    private field: FieldType<T>;

    constructor(_init: () => T) {
        this.field = reactive([
            [_init(), _init(), _init()],
            [_init(), _init(), _init()],
            [_init(), _init(), _init()],
        ]);
    }

    get hasWon(): string | null {
        const combinations = [
            0b000000111, // ROW1
            0b000111000, //ROW2
            0b111000000, //ROW3
            0b100100100, //COL1
            0b010010010, // COL2
            0b001001001, // COL3
            0b100010001, // DIAG1
            0b001010100, //DIAG2
        ];

        for (const player of ['X', 'O']) {
            const fieldValue = this.field.reduce(
                (acc, row, i) =>
                    row.reduce(
                        (acc1, col, j) => acc1 + ((this.hasSubFields ? col.hasWon : col) === player ? 2 ** (i * 3 + j) : 0),
                        acc,
                    ),
                0,
            );
            for (const combination of combinations) {
                if ((fieldValue & combination) === combination) {
                    return player;
                }
            }
        }

        const isDraw = this.field.every((row) =>
            row.every((col) => ['X', 'O'].includes(this.hasSubFields ? col.hasWon : col)),
        );
        if (isDraw) {
            return 'D';
        }

        return null;
    }

    /**
     * if the field is the outer grid  - if not it is the inner grid
     * @returns true if the field is the outer grid
     */
    get hasSubFields(): boolean {
        return this.field[0][0] instanceof Field;
    }

    get rows(): FieldType<T> {
        return this.field;
    }

    subFieldIsWon(x, y): 'X' | 'O' | 'D' | null {
        if (!this.hasSubFields) {
            throw new Error('Cannot check subfield of non subfield');
        }
        return this.field[x][y].hasWon !== null ? this.field[x][y].hasWon : null;
    }

    getXY(x: number, y: number): T {
        return this.field[x][y];
    }

    markField(x: number, y: number, value: T): void {
        if (this.hasSubFields) {
            throw new Error('Cannot mark field of subfield');
        }
        this.field[x][y] = value;
    }
}
