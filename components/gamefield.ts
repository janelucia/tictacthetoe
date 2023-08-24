type FieldType<T> = [[T, T, T], [T, T, T], [T, T, T]];

export class Field<T = string> {
  private field: FieldType<T>;

  constructor(_init: () => T) {
    this.field = [
      [_init(), _init(), _init()],
      [_init(), _init(), _init()],
      [_init(), _init(), _init()],
    ];
  }

  getXY(x: number, y: number): T {
    return this.field[x][y];
  }

  hasWon() {
    return (
      this.field[0][0] === this.field[0][1] &&
      this.field[0][1] === this.field[0][2]
    );
  }

  hasSubFields() {
    return this.field[0][0] instanceof Field;
  }

  getRows() {
    return this.field;
  }
}
