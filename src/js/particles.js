class Particle {
    constructor() {
        this.x = Math.random() * 5 + 5,
            this.y = Math.random() * 5 + 5,
            this.width = Math.random() * canvas.width
        this.height = Math.random() * canvas.height
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random(),
            this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random(),
            this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random(),
            this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random()
    }

    update() {
        this.x += this.speedX + this.angleX
        this.y += this.speedY + this.angleY

        if (this.x < 0 || this.x + this.width > canvas.width) {
            const sign = this.x < 0 ? 1 : -1
            this.angleX = Math.random() * 2 * sign
            this.speedX = -speedX
        }

        if (this.y < 0 || this.y + this.width > canvas.width) {
            const sign = this.y < 0 ? 1 : -1
            this.angleY = Math.random() * 2 * sign
            this.speedY = -speedY
        }
    }

    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(x, y, width, height)
    }
}

export default Particle 