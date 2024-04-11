export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error('Sqft must be a number');
    this._sqft = sqft;

    if (this.constructor !== Building &&
    Object.getPrototypeOf(this).evacuationWarningMessage === Building.prototype.evacuationWarningMessage)
      throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}