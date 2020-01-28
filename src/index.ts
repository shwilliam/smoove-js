interface IRetVal {
  measure: TMeasure,
  animate: TAnimate,
}
type TMeasure = () => IRetVal
type TAnimate = (
  stylingFn: () => any,
  newEl?: HTMLElement
) => IRetVal

const init = (el: HTMLElement): IRetVal => ({
  measure: () => measure(el),
  animate: (stylingFn, newEl) => animate(
    newEl || el,
    el.getBoundingClientRect(),
    stylingFn,
  ),
})

const animate = (
  el: HTMLElement,
  initialBounds: ClientRect,
  stylingFn: () => any,
) : IRetVal => {
  stylingFn() // layout change

  const finalBounds: ClientRect = el.getBoundingClientRect()
  const deltaX: number = initialBounds.left - finalBounds.left
  const deltaY: number = initialBounds.top - finalBounds.top
  const deltaW: number = initialBounds.width / finalBounds.width
  const deltaH: number = initialBounds.height / finalBounds.height

  el.animate([{
    transformOrigin: 'top left', // TODO: passed as param?
    transform: `
      translate(${deltaX}px, ${deltaY}px)
      scale(${deltaW}, ${deltaH})
    `,
  }, {
    transformOrigin: 'top left',
    transform: 'none',
  }], {
    duration: 300, // TODO: allow to be passed as param
    easing: 'ease-in-out',
    fill: 'both',
  })

  return ({
    measure: () => measure(el),
    animate: (stylingFn, newEl) => animate(
      newEl || el,
      finalBounds,
      stylingFn
    ),
  })
}

const measure = (el: HTMLElement): IRetVal => ({
  measure: () => measure(el),
  animate: (stylingFn, newEl) => animate(
    newEl || el,
    el.getBoundingClientRect(),
    stylingFn,
  )
})

export {init}
export default {init}
