export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const animationTitle = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
        duration: 0.75,
        ease: "easeOut"
    }
  },
};
