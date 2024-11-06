import gsap from "gsap";

export const slideUD = (element) => {
  gsap.fromTo(
    element,
    {
      y: -50,
      opacity: 0,
      duration: 2,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
    }
  );
};

export const slideRL = (element) => {
  gsap.fromTo(
    element,
    {
      x: 40,
      opacity: 0,
      duration: 2,
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
    }
  );
};
