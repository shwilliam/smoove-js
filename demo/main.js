import smoove from '../dist/index.js'

const dino = document.getElementById('dino')
const dinoContainer = document.getElementById('dino-container')
const dinoTwo = document.getElementById('dino-two')
const btnDinoX = document.getElementById('btn-dino-x')
const btnDinoY = document.getElementById('btn-dino-y')
const btnDinoScale = document.getElementById('btn-dino-scale')
const btnContainerX = document.getElementById('btn-container-x')
const btnBoth = document.getElementById('btn-both')
const btnToggleDinoTwo = document.getElementById(
  'btn-toggle-dino-two',
)

const dinoAnim = smoove.init(dino)
const dinoContainerAnim = smoove.init(dinoContainer)
const dinoTwoAnim = smoove.init(dinoTwo)

const moveDinoLeft = () => (dino.dataset.xPos = 'left')
const moveDinoRight = () => (dino.dataset.xPos = 'right')
const moveDinoUp = () => (dino.dataset.yPos = 'up')
const moveDinoDown = () => (dino.dataset.yPos = 'down')
const scaleDinoUp = () => (dino.dataset.size = 'large')
const scaleDinoDown = () => (dino.dataset.size = 'small')
const moveContainerLeft = () => (dinoContainer.dataset.xPos = 'left')
const moveContainerRight = () =>
  (dinoContainer.dataset.xPos = 'right')
const showDinoTwo = () => {
  dinoTwo.style.visibility = ''
  dino.style.opacity = 0.2
}
const hideDinoTwo = () => {
  dinoTwo.style.visibility = 'hidden'
  dino.style.opacity = 1
}

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

btnDinoScale.addEventListener('click', () => {
  switch (dino.dataset.size) {
    case 'large':
      dinoAnim.animate(scaleDinoDown)
      break
    case 'small':
      dinoAnim.animate(scaleDinoUp)
      break
    default:
      dinoAnim.animate(scaleDinoUp)
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

btnToggleDinoTwo.addEventListener('click', () => {
  switch (dinoTwo.style.visibility === 'hidden') {
    case true:
      dinoAnim.animate(showDinoTwo, {to: dinoTwo})
      break
    case false:
      dinoTwoAnim.animate(hideDinoTwo, {to: dino})
      break
    default:
      dinoAnim.animate(showDinoTwo, {to: dinoTwo})
      break
  }
})
