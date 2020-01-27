interface IRetVal {
  measure: TMeasure,
  animate: TAnimate,
}
type TMeasure = () => IRetVal
type TAnimate = (cb: () => any) => IRetVal

const init = (el: HTMLElement): IRetVal => ({
  measure: () => measure(el),
  animate: cb => animate(
    el,
    el.getBoundingClientRect(),
    cb
  ),
})

const animate = (
  el: HTMLElement,
  initialBounds: ClientRect,
  cb: () => any,
) : IRetVal => {
  cb() // layout change

  const finalBounds: ClientRect = el.getBoundingClientRect()
  const deltaX: number = initialBounds.left - finalBounds.left
  const deltaY: number = initialBounds.top - finalBounds.top
  const deltaW: number = initialBounds.width / finalBounds.width
  const deltaH: number = initialBounds.height / finalBounds.height

  el.animate([{
    transformOrigin: 'top left',
    transform: `
      translate(${deltaX}px, ${deltaY}px)
      scale(${deltaW}, ${deltaH})
    `
  }, {
    transformOrigin: 'top left',
    transform: 'none'
  }], {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'both'
  })

  return ({
    measure: () => measure(el),
    animate: cb => animate(el, finalBounds, cb)
  })
}

const measure = (el: HTMLElement): IRetVal => ({
  measure: () => measure(el),
  animate: cb => animate(el, el.getBoundingClientRect(), cb)
})

export { init }
