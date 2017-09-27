import Vector from "./utils"

class Particle {
  /*
	* * constructor
	*/
  constructor(size, position, direction, velocity, canvas, ctx) {
    this._size = size
    this._position = position
    this._direction = direction
    this._velocity = velocity
    this._canvas = canvas
    this._ctx = ctx
    this._color = this.randomColor()
  }

  /*
	* * accessors
	*/
  get size() {
    return this._size
  }

  get position() {
    return this._position
  }

  get direction() {
    return this._direction
  }

  get velocity() {
    return this._velocity
  }

  get canvas() {
    return this._canvas
  }

  get ctx() {
    return this._ctx
  }

  get color() {
    return this._color
  }

  set size(newSize) {
    this._size = newSize
  }

  set position(newPosition) {
    this._position = newPosition
  }

  set direction(newDirection) {
    this._direction = newDirection
  }

  set velocity(newVelocity) {
    this._size = newVelocity
  }

  /*
	* * specific methods
	*/

  draw(ctx, particle) {
    ctx.beginPath()
    ctx.lineWidth = "2"
    ctx.fillStyle = particle.color
    ctx.arc(
      particle.position.x,
      particle.position.y,
      particle.size.x,
      0,
      2 * Math.PI
    )
    ctx.fill()
  }

  update(canvas) {
    this.position.x += this.velocity.x + this.direction.x
    this.position.y += this.velocity.y + this.direction.y

    if (this.position.x < 0 || this.position.x + this.size.x > canvas.width) {
      const sign = this.position.x < 0 ? 1 : -1
      this.direction.x = Math.random() * 2 * sign
      this.velocity.x = -this.velocity.x
    }

    if (this.position.y < 0 || this.position.y + this.size.x > canvas.width) {
      const sign = this.position.y < 0 ? 1 : -1
      this.direction.y = Math.random() * 2 * sign
      this.velocity.y = -this.velocity.y
    }
  }

  randomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
}

export default Particle