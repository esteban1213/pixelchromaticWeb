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
    transition: {
      duration: 0.5, // Duration of the animation
      ease: "easeOut", // Easing function for fade-up effect
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeIn", // Easing function for exit animation
    },
  },
};

export const slideUp = {
  initial: { opacity: 1, y: "89%" }, // Initial state (hidden below the page)
  animate: { opacity: 1, y: "0%" }, // Animation state (visible at the default position)
  exit: { opacity: 1, y: "89%" }, // Exit state (hidden below the page again)
};
