import styles from "./styles/main.css"
import Particle from "./js/particles"

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const number = 80
const particles = []

canvas.width = window.innerWidth
canvas.height = window.innerHeight
for(i= 0; i < number; i++) particles.push(new Particle())

    const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach((particle) =>{
        particle.draw()
        particle.update()
    })
    requestAnimationFrame(animate)
}
animate()