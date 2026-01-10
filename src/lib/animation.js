export const slideUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleUp = {
  hidden: {
    opacity: 0, // 👈 jangan 0
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 2.5, // 👈 lebih panjang
      ease: [0.22, 1, 0.36, 1], // easeOutQuint
    },
  },
};

export const scaleFade = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const itemUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const itemVariants = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80, 
      damping: 18, 
      mass: 1.2,
    },
  },
};