import Vector from "./utils"
import Particle from "./particles"

class System {
  /*
	* * constructor
	*/
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.particles = []
    //this.particulesNumber = 100

    return this.initiate()
  }

  addParticle() {
    this.particles.push(
      new Particle(
        new Vector(3, 3),
        new Vector(Math.random() * 5, Math.random() * 5),
        new Vector(
          Math.random() > 0.5 ? Math.random() : -Math.random(),
          Math.random() > 0.5 ? Math.random() : -Math.random()
        ),
        new Vector(
          Math.random() > 0.5 ? Math.random() : -Math.random(),
          Math.random() > 0.5 ? Math.random() : -Math.random()
        )
      )
    )
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles.forEach((particle, index) => {
      particle.draw(this.ctx, particle)
      particle.update(this.canvas)
    })
    requestAnimationFrame(this.animate.bind(this))
  }

  initiate() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.bg = "rgb(255, 255, 255)"
    this.canvas.style.backgroundColor = this.bg


    return this.handler()
  }

  /*
	* * handlers
	*/
  handleResize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  handleClick(e) {
    let size = new Vector(3, 3)

    for (let i = 0; i < 15; i++) {
      let position = new Vector(e.clientX, e.clientY)
      let direction = new Vector(
        Math.random() > 0.5 ? Math.random() : -Math.random(),
        Math.random() > 0.5 ? Math.random() : -Math.random()
      )
      let velocity = new Vector(
        Math.random() > 0.5 ? Math.random() : -Math.random(),
        Math.random() > 0.5 ? Math.random() : -Math.random()
      )
      this.particles.push(new Particle(size, position, direction, velocity))
      this.ctx.beginPath()
      this.ctx.lineWidth = "2"
      this.ctx.arc(position.x, position.y, size.x, 0, 2 * Math.PI)
      this.ctx.stroke()
    }
  }

  handleHover(e) {

  }

  handler() {
    window.addEventListener("resize", this.handleResize.bind(this))
    window.addEventListener("click", this.handleClick.bind(this))
    window.addEventListener("mousemove", this.handleHover.bind(this))
  }
}

export default System