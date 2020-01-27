import * as smoove from '../dist/index.js'

const dino = document.getElementById('dino')
const dinoContainer = document.getElementById('dino-container')
const btnDinoX = document.getElementById('btn-dino-x')
const btnDinoY = document.getElementById('btn-dino-y')
const btnContainerX = document.getElementById('btn-container-x')
const btnBoth = document.getElementById('btn-both')

const dinoAnim = smoove.init(dino)
const dinoContainerAnim = smoove.init(dinoContainer)

const moveDinoLeft = () => (dino.dataset.xPos = 'left')
const moveDinoRight = () => (dino.dataset.xPos = 'right')
const moveDinoUp = () => (dino.dataset.yPos = 'up')
const moveDinoDown = () => (dino.dataset.yPos = 'down')
const moveContainerLeft = () => (dinoContainer.dataset.xPos = 'left')
const moveContainerRight = () =>
  (dinoContainer.dataset.xPos = 'right')

btnDinoX.addEventListener('click', () => {
  switch (dino.dataset.xPos) {
    case 'right':
      dinoAnim.animate(moveDinoLeft)
      break
    case 'left':
      dinoAnim.animate(moveDinoRight)
      break
    default:
      dinoAnim.animate(moveDinoRight)
      break
  }
})

btnDinoY.addEventListener('click', () => {
  switch (dino.dataset.yPos) {
    case 'up':
      dinoAnim.animate(moveDinoDown)
      break
    case 'down':
      dinoAnim.animate(moveDinoUp)
      break
    default:
      dinoAnim.animate(moveDinoDown)
      break
  }
})

btnContainerX.addEventListener('click', () => {
  switch (dinoContainer.dataset.xPos) {
    case 'right':
      dinoContainerAnim.animate(moveContainerLeft)
      break
    case 'left':
      dinoContainerAnim.animate(moveContainerRight)
      break
    default:
      dinoContainerAnim.animate(moveContainerRight)
      break
  }
})

btnBoth.addEventListener('click', () => {
  switch (dino.dataset.yPos) {
    case 'up':
      dinoAnim.animate(moveDinoDown)
      break
    case 'down':
      dinoAnim.animate(moveDinoUp)
      break
    default:
      dinoAnim.animate(moveDinoDown)
      break
  }

  switch (dinoContainer.dataset.xPos) {
    case 'right':
      dinoContainerAnim.animate(moveContainerLeft)
      break
    case 'left':
      dinoContainerAnim.animate(moveContainerRight)
      break
    default:
      dinoContainerAnim.animate(moveContainerRight)
      break
  }
})
