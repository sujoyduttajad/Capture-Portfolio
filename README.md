# Capture Portfolio

A landing page built with react to showcase company's portfolio comprising of it's Products and Services



## AnimatePresence

AnimatePresence allows components to animate out when they're removed from the React tree.

It's required to enable exit animations because React lacks a lifecycle method that:

Notifies components when they're going to be unmounted and
Allows them to defer that unmounting until after an operation is complete (for instance an animation).

```
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


[https://www.framer.com/docs/animate-presence/](For More information, click here)


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
