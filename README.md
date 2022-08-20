# Capture Portfolio

A landing page built with react to showcase company's portfolio comprising of it's Products and Services



## AnimatePresence

AnimatePresence allows components to animate out when they're removed from the React tree.

It's required to enable exit animations because React lacks a lifecycle method that:

1. Notifies components when they're going to be unmounted and
2. Allows them to defer that unmounting until after an operation is complete (for instance an animation).

```javascript
import { motion, AnimatePresence } from "framer-motion"

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
)
```
### Usage

In our case, AnimatePresence will only work when we let 'framer-motion' know that user is transitioning to another page. That's where we need to use the useLocation hook from 'react-router-dom'.

AnimatePresence requires a key(pathname), which essentially will let it know that the user is on another page and it should start animating.

Thus, in the Switch component we need two things to add as props - 
- key: location.pathname
- location: location(current location)

```javascript
  <AnimatePresence>
        <Switch 
          location={location} 
          key={location.pathname}
        ></Switch>
  </AnimatePresence>
```

[For More information, click here](https://www.framer.com/docs/animate-presence/)


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
