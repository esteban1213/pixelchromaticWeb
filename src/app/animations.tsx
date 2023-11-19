export const mainFadeVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const swipeOut = {
  initial: { y: "0%", opacity: 1 },
  animate: { y: "100%", opacity: 1 },
  exit: { y: "100%", opacity: 1 },
};
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.01,
      ease: "easeIn", // Easing function for exit animation
    },
  },
};

export const slideUp = {
  initial: { opacity: 1, y: "89%" }, // Initial state (hidden below the page)
  animate: { opacity: 1, y: "40%" }, // Animation state (visible at the default position)
  exit: { opacity: 1, y: "40%" }, // Exit state (hidden below the page again)
};

export const fadeInOut = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

export const scaleIn = {
  initial: { scale: 0.4 },
  whileInView: { scale: 1 },
};
