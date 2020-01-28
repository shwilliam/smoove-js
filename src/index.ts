const init = (el: HTMLElement): IRetVal => ({
  measure: () => measure(el),
  animate: (stylingFn, animationOpts) => animate(
    el,
    el.getBoundingClientRect(),
    stylingFn,
    animationOpts,
  ),
})

const transform = (
  el: HTMLElement,
  initialBounds: ClientRect,
  options?: IAnimationOpts,
): ClientRect => {
  const finalBounds: ClientRect = el.getBoundingClientRect()
  const deltaX: number = initialBounds.left - finalBounds.left
  const deltaY: number = initialBounds.top - finalBounds.top
  const deltaW: number = initialBounds.width / finalBounds.width
  const deltaH: number = initialBounds.height / finalBounds.height

  el.animate([{
    transformOrigin: (
      options && options.transformOrigin
    ) || 'top left',
    transform: `
      translate(${deltaX}px, ${deltaY}px)
      scale(${deltaW}, ${deltaH})
    `,
  }, {
    transformOrigin: (
      options && options.transformOrigin
    ) || 'top left',
    transform: 'none',
  }], {
    duration: (options && options.duration) || 300,
    easing: (options && options.ease) || 'ease-in-out',
    fill: 'both',
  })

  return finalBounds
}

const animate = (
  el: HTMLElement,
  initialBounds: ClientRect,
  stylingFn: () => any,
  animationOpts?: IAnimationOpts,
) : IRetVal => {
  stylingFn() // layout change

  const finalEl = (animationOpts && animationOpts.to) || el
  const finalBounds = transform(
    finalEl,
    initialBounds,
    animationOpts,
  )

  return ({
    measure: () => measure(el),
    animate: (stylingFn, animationOpts) => animate(
      el,
      finalBounds,
      stylingFn,
      animationOpts,
    ),
  })
}

const measure = (el: HTMLElement): IRetVal => ({
  measure: () => measure(el),
  animate: (stylingFn, animationOpts) => animate(
    el,
    el.getBoundingClientRect(),
    stylingFn,
    animationOpts,
  )
})

interface IRetVal {
  measure: TMeasure,
  animate: TAnimate,
}

type TMeasure = () => IRetVal

type TAnimate = (
  stylingFn: () => any,
  animationOpts?: IAnimationOpts,
) => IRetVal

interface IAnimationOpts {
  to?: HTMLElement,
  duration?: number,
  transformOrigin?: string,
  ease?: string,
}

export {init}
export default {init}

