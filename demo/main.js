import * as smoove from '../dist/index.js'

const dino = document.getElementById('dino')
const dinoContainer = document.getElementById('dino-container')
const btnDinoX = document.getElementById('btn-dino-x')
const btnDinoY = document.getElementById('btn-dino-y')
const btnContainerX = document.getElementById('btn-container-x')
const btnBoth = document.getElementById('btn-both')

const dinoAnim = smoove.init(dino)
const dinoContainerAnim = smoove.init(dinoContainer)

btnDinoX.addEventListener('click', () => {
  dinoAnim.measure()

  switch (dino.dataset.xPos) {
    case 'right':
      dinoAnim.animate(() => {
        dino.dataset.xPos = 'left'
      })
      break
    case 'left':
      dinoAnim.animate(() => {
        dino.dataset.xPos = 'right'
      })
      break
    default:
      dinoAnim.animate(() => {
        dino.dataset.xPos = 'right'
      })
      break
  }
})

btnDinoY.addEventListener('click', () => {
  dinoAnim.measure()

  switch (dino.dataset.yPos) {
    case 'up':
      dinoAnim.animate(() => {
        dino.dataset.yPos = 'down'
      })
      break
    case 'down':
      dinoAnim.animate(() => {
        dino.dataset.yPos = 'up'
      })
      break
    default:
      dinoAnim.animate(() => {
        dino.dataset.yPos = 'down'
      })
      break
  }
})

btnContainerX.addEventListener('click', () => {
  dinoContainerAnim.measure()

  switch (dinoContainer.dataset.xPos) {
    case 'right':
      dinoContainerAnim.animate(() => {
        dinoContainer.dataset.xPos = 'left'
      })
      break
    case 'left':
      dinoContainerAnim.animate(() => {
        dinoContainer.dataset.xPos = 'right'
      })
      break
    default:
      dinoContainerAnim.animate(() => {
        dinoContainer.dataset.xPos = 'right'
      })
      break
  }
})

btnBoth.addEventListener('click', () => {
  dinoAnim.measure()
  dinoContainerAnim.measure()

  switch (dino.dataset.yPos) {
    case 'up':
      dinoAnim.animate(() => {
        dino.dataset.yPos = 'down'
      })
      break
    case 'down':
      dinoAnim.animate(() => {
        dino.dataset.yPos = 'up'
      })
      break
    default:
      dinoAnim.animate(() => {
        dino.dataset.yPos = 'down'
      })
      break
  }

  switch (dinoContainer.dataset.xPos) {
    case 'right':
      dinoContainerAnim.animate(() => {
        dinoContainer.dataset.xPos = 'left'
      })
      break
    case 'left':
      dinoContainerAnim.animate(() => {
        dinoContainer.dataset.xPos = 'right'
      })
      break
    default:
      dinoContainerAnim.animate(() => {
        dinoContainer.dataset.xPos = 'right'
      })
      break
  }
})
