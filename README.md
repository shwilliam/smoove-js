# Smoove JS

> A small helper library for FLIP animations

## What the FLIP?

The FLIP approach to animation, coined by Paul Lewis, translates transitions of expensive style-properties (`width`, `height`, `top`, `left`, etc.) to more performant transitions using transforms. For an explanation as to why these pixel-based transitions often result in UI jank, I highly recommend [this article](https://aerotwist.com/blog/pixels-are-expensive/) that goes into some detail about this.

## Install

```shell
$ npm i smoove-js
```

## Getting started

To get started, I recommend having a look at an example implementation, such as in `demo/main.js`. The first thing you will want to do when transitioning an element with Smoove is to initialize an animation, passing the DOM-element you wish to transition.

```js
import smoove from 'smoove-js'

const myEl = document.getElementById('el')
const myAnim = smoove.init(myEl)
```

Now, to transition the element, simply call the animate method on `myAnim` and pass a callback that applies the element's style change(s).

```js
myAnim.animate(() => (myEl.style.left = '100px'))
```

If you wish to transition to a new element, you can pass this element as the animation option `to`.

```js
myAnim.animate(showBiggerEl, {to: myBiggerEl})
```

[![Edit Smoove JS Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ancient-sun-shefs?fontsize=14&hidenavigation=1&theme=dark)

## API

### `smoove.init(el) => <AnimObj>`

Initializes a new animation.

#### Props

| Name | Type        | Required | Description        |
| ---- | ----------- | :------: | ------------------ |
| el   | HTMLElement |    ✅    | Target DOM element |

### `<AnimObj>.measure() => <AnimObj>`

Measures the current position of target element.

### `<AnimObj>.animate(stylingFn, animationOpts) => <AnimObj>`

Animates target element from bounds (based on previous measure or init) to bounds after callback.

#### Props

| Name          | Type    | Required | Description                                                                       |
| ------------- | ------- | :------: | --------------------------------------------------------------------------------- |
| stylingFn     | funtion |    ✅    | Function that performs style changes                                              |
| animationOpts | obj     |    ❌    | Object describing transition (see [docs](https://shwilliam.github.io/smoove-js/)) |

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/smoove-js/issues). If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/smoove-js)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/smoove-js/pull/new/master)
