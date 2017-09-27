import styles from "./styles/main.css"
import System from "./js/systems"
import Particle from "./js/particles"

const canvas = document.querySelector("#canvas")
const system = new System(canvas)
const funkyButton = document.querySelector('button')
system.animate()
document.body.addEventListener('click', (e)=> {
    if (e.target == canvas ) {
        e.preventDefault()
        funkyButton.innerHTML = "Why don't you click me ? :("
    } else {
        funkyButton.innerHTML = "Yay!"
    }
})

