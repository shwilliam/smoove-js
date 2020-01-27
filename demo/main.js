import * as smoove from '../dist/index.js'

const dino = document.getElementById('dino')
const btnX = document.getElementById('button-x')
const btnY = document.getElementById('button-y')

const dinoAnim = smoove.init(dino)

btnX.addEventListener('click', () => {
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

btnY.addEventListener('click', () => {
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
