export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  export const rotateScale = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };
  
  export const welcomeAnimation = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.5, 0.05, 0.1, 0.3] 
      } 
    },
  };
  
  export const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  