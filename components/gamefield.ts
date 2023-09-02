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

  hasWon(): boolean {
    return (
      this.field[0][0] === this.field[0][1] &&
      this.field[0][1] === this.field[0][2]
    );
  }

  /**
   * if the field is the outer grid  - if not it is the inner grid
   * @returns true if the field is the outer grid
   */
  hasSubFields(): boolean {
    return this.field[0][0] instanceof Field;
  }

  getRows(): FieldType<T> {
    return this.field;
  }
}
