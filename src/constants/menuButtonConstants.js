const barsAnimationDuration = 0.3;

export const options =["home", "about", "projects", "contact"]

export const variants = {
  openMenu: { width: "200px", height: "300px", transition: { duration: 0.3 } },
  moveIcon: { x: 10, y: 10 },
  options: { x:10, opacity:1, transition: { duration: 0.5, delay:0.2 } },
};

export const topBar = {
  open: { y: 6, transition: { duration: barsAnimationDuration } },
  close: {
    y: 0,
    transition: {
      duration: barsAnimationDuration,
      delay: barsAnimationDuration,
    },
  },
  openRotate: {
    rotate: 45,
    transition: {
      duration: barsAnimationDuration,
      delay: barsAnimationDuration,
    },
  },
  closeRotate: { rotate: 0, transition: { duration: barsAnimationDuration } },
};

export const bottomBar = {
  open: { y: -6, transition: { duration: barsAnimationDuration } },
  close: {
    y: 0,
    transition: {
      duration: barsAnimationDuration,
      delay: barsAnimationDuration,
    },
  },
  openRotate: {
    rotate: -45,
    transition: {
      duration: barsAnimationDuration,
      delay: barsAnimationDuration,
    },
  },
  closeRotate: { rotate: 0, transition: { duration: barsAnimationDuration } },
};
