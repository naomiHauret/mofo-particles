class Vector {
  /*
	* * constructor
	*/
  constructor(valX, valY) {
    this._valX = valX;
    this._valY = valY;
  }

  /*
	* * accessors
	*/
  get x() {
    return this._valX;
  }

  get y() {
    return this._valY;
  }

  set x(newX) {
    this._valX = newX;
  }

  set y(newY) {
    this._valY = newY;
  }
}

export default Vector