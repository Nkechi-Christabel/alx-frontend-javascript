import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = typeof floors === 'number' ? floors : 0;
  }

  get sqft() {
    return this._sqft;
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') throw TypeError('Floors must be a number');
    this._floors = newFloors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
