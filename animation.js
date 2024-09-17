const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
const particules = []
const configuration = {
  numberParticules: 120,
  minSpeed: 0.4,
  maxSpeed: 0.8,
  maxDistance: 0.07 * window.innerWidth + 0.05 * window.innerHeight,
  radius: 2,
  backgroundColor: '#000',
  frontColor: '#FFF',
  mouseSpace: 100,
  opacity: 0.2 // Set particle opacity (reduce the value to make them more subtle)
}
let mouseX = -300
let mouseY = -300

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const render = () => {
  requestAnimationFrame(render)
  ctx.fillStyle = configuration.backgroundColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  particules.forEach(particule => {
    const x = particule.x + particule.speedX
    const y = particule.y + particule.speedY

    if(x <= 0 || x >= window.innerWidth) particule.speedX *= -1
    if(y <= 0 || y >= window.innerHeight) particule.speedY *= -1

    particule.x = x
    particule.y = y

    ctx.globalAlpha = configuration.opacity; // Apply reduced opacity to particles
    ctx.beginPath()
    ctx.fillStyle = configuration.frontColor
    ctx.arc(particule.x, particule.y, configuration.radius, 0, Math.PI * 2, true)
    ctx.fill()

    // Reduce opacity for connecting lines as well
    particules.forEach(nextParticule => {
      const dx = particule.x - nextParticule.x
      const dy = particule.y - nextParticule.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if(d <= configuration.maxDistance) {
        ctx.save()
        ctx.globalAlpha = (1 - d / configuration.maxDistance) * configuration.opacity // Apply reduced opacity to lines
        ctx.beginPath()
        ctx.strokeStyle = configuration.frontColor
        ctx.moveTo(particule.x, particule.y)
        ctx.lineTo(nextParticule.x, nextParticule.y)
        ctx.stroke()
        ctx.restore()
      }
    })
  })

  // Reset the globalAlpha to full opacity for any subsequent elements
  ctx.globalAlpha = 1;
}

const createParticules = () => {
  return new Promise(resolve => {
    for(let i = 0; i < configuration.numberParticules; i++) {
      const particule = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: Math.random() * (configuration.maxSpeed - configuration.minSpeed) + configuration.minSpeed,
        speedY: Math.random() * (configuration.maxSpeed - configuration.minSpeed) + configuration.minSpeed,
        isColliding: false
      }
      if(Math.random() <= 0.5) particule.speedX *= -1
      if(Math.random() <= 0.5) particule.speedY *= -1
      particules.push(particule)
    }
    resolve()
  })
}

createParticules().then(() => {
  render()
})
