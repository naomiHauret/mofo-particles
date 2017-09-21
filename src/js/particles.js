class Particle {
    constructor(canvas) {
        this.x = Math.random() * 5 + 5,
        this.y = Math.random() * 5 + 5,
        this.width = 10,
        this.height = 10,
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.color = this.randomColor()
    }

    update(canvas) {
        this.x += this.speedX + this.angleX
        this.y += this.speedY + this.angleY

        if (this.x < 0 || this.x + this.width > canvas.width) {
            const sign = this.x < 0 ? 1 : -1
            this.angleX = Math.random() * 2 * sign
            this.speedX = -this.speedX
        }

        if (this.y < 0 || this.y + this.width > canvas.width) {
            const sign = this.y < 0 ? 1 : -1
            this.angleY = Math.random() * 2 * sign
            this.speedY = -this.speedY
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    randomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}


export default Particle 