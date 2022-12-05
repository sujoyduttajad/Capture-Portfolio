# Capture Portfolio

A business landing page template built with react to showcase a company's portfolio highlighting it's Products and Services.

Tools and Technologies I have used - 
- React
- React router dom
- [Framer-motion](https://www.framer.com/motion/)
- Styled Components
- react-intersection-observer

This website has four pages(or routes) 

- **About Us** - Initial page which answers what and why the company exists
- **Our Work** - Showcases the business experience and proof of work
- **Subscriptions** - What services the company provides at what cost
- **Contact Us** - An interactive way to communicate

All the the components and contents are customizable and responsive. 

**Anybody can use this template for the portfolio**

<img src="./Capture Portfolio.png" alt="the screenshot of the home page"/>

# Framer Motion

I have used a few Framer motion features to perform some cool animation across the app. The Framer motion for developers has all the cool references and Components you need to know about 

[Framer-motion-developers](https://www.framer.com/developers/)


For the Documentation refer to [this link](https://www.framer.com/docs/)

## Framer motion features
### AnimatePresence

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

#### Usage in the App

Here, AnimatePresence will only work when we let 'framer-motion' know that user is transitioning to another page. That's where we need to use the useLocation hook from 'react-router-dom'.

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

### AnimateSharedLayout

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

[For More information, click here](https://www.framer.com/docs/animate-shared-layout/)

#### Usage in the App

I used in the FAQ section as wrapper to another component named Toggle that performs the motion animations

```javascript
    <AnimateSharedLayout>
      <Toggle title="How Do I Start?">
        <div className="answer">
          ...
        </div>
      </Toggle>
    </AnimateSharedLayout>
```

# Colors

- Primary green color: `#23d997` (Caribbean Green)
- Secondary white color: 
    1. `#ffffff`
    2. `f7f7f7`
- Secondary black color: 
    1. `#1b1b1b` (Eerie Black)
    2. `#353535` (Jet Black)
    3. `#282828`
- Secondary gray color: `#CCC` (Light Gray)
- Frame colors 
  - background-color: `#ff8efb`
  - background-color: `#8ed2ff`
  - background-color: `#8effa0`


# FAQ Accordion

Well the accordion works quite good with framer-motion animation but I wanted to provide a close/open icon for better useability/accessbility so decided to use a cross and plus icon which incorporated framer-motion animation.

Came across this codesandbox resource 
- [Codesandbox link, click here](https://codesandbox.io/s/framer-motion-5-1-line-drawing-ph6ln?from-embed=&file=/src/App.js)
- [Framer Documentation, click here](https://www.framer.com/docs/component/)
- [Framer Rotate tutorial](https://www.youtube.com/watch?v=ILxNdOtKbNQ&t=368s)
- [Quick Animation resource ](https://pavanjadhaw.me/blog/animate-svg-using-framer-motion)

### How to rotate an SVG using Framer-motion -

So I created this accordion and thought it would be great if I can show the user that the arrow to expand the Accordion rotates smoothly when accordion is closed or opened. 


To create such animation on event all you need to do is to create a variant with hidden and visible prop

```javascript
export const rotateSvg = {
  hidden: {
    rotate: -45,
    opacity: 1
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
```

Then use the animate prop inside the SVG to animate on some state boolean value
Here, ```toggle``` is the state

```javascript
  <motion.svg
    animate={toggle ? "visible" : "hidden"}
  >
    <motion.line
      variants={rotateSvg}
    />
  </motion.svg>
```

# Case Study

These are the designs that were particularly fascinating to me and I took inspiration from these

- (https://dribbble.com/shots/18995515-Photographer-Portfolio-Website-Design)
- (https://www.skeletonproductions.com/insights/video-brand-guidelines)
- (https://wearecovalent.com/services/)
- (https://clutch.co/agencies/video-production)

For more information on HTML5 video tag refer this [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
