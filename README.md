# Capture Portfolio

A landing page built with react to showcase company's portfolio comprising of it's Products and Services


<img src="./Capture Portfolio.png" alt="the screenshot of the home page"/>

## AnimatePresence

AnimatePresence allows components to animate out when they're removed from the React tree.

It's required to enable exit animations because React lacks a lifecycle method that:

1. Notifies components when they're going to be unmounted and
2. Allows them to defer that unmounting until after an operation is complete (for instance an animation).

```javascript
import { motion, AnimatePresence } from "framer-motion";

export const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
);
```

### Usage

In our case, AnimatePresence will only work when we let 'framer-motion' know that user is transitioning to another page. That's where we need to use the useLocation hook from 'react-router-dom'.

AnimatePresence requires a key(pathname), which essentially will let it know that the user is on another page and it should start animating.

Thus, in the Switch component we need two things to add as props -

- key: location.pathname
- location: location(current location)

```javascript
<AnimatePresence>
  <Switch location={location} key={location.pathname}></Switch>
</AnimatePresence>
```

[For More information, click here](https://www.framer.com/docs/animate-presence/)

## AnimateSharedLayout

The AnimateSharedLayout component enables you to perform layout animations:

- Across a set of components that don't otherwise share state.
- Between different components that share a layoutId as they're added/removed.

```javascript
import { AnimateSharedLayout } from "framer-motion"
```
motion components with a layout prop will automatically animate layout changes that occur when they re-render.

```javascript
<motion.div layout />
```

However, if a layout component changes layout due to local state change, surrounding components need a way to know they should animate their layout, too.

[For More information, click here](https://www.framer.com/docs/animate-shared-layout/)

### Usage

## Colors

- green color: `#23d997` (Caribbean Green)
- white color: `#ffffff`
- black color: `#1b1b1b` (Eerie Black)
- gray color: `#CCC` (Light Gray)
- Frame colors 
  - background-color: `#ff8efb`
  - background-color: `#8ed2ff`
  - background-color: `#8effa0`


## FAQ Accordion

Well the accordion works quite good with framer-motion animation but I wanted to provide a close/open icon for better useability/accessbility so decided to use a cross and plus icon which incorporated framer-motion animation.

Came across this codesandbox resource 
- [Codesandbox link, click here](https://codesandbox.io/s/framer-motion-5-1-line-drawing-ph6ln?from-embed=&file=/src/App.js)

- [Framer Documentation, click here](https://www.framer.com/docs/component/)


