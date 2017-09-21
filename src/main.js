import styles from "./styles/main.css"
import Particle from "./js/particles"

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const number = 800
const particles = []


function repaint(canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

repaint(canvas)
window.addEventListener('resize', repaint(canvas))

for(let i= 0; i < number; i++) particles.push(new Particle(canvas))

    const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach((particle) =>{
        particle.draw(ctx)
        particle.update(canvas)
    })
    requestAnimationFrame(animate)
}
animate()
