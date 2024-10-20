import gsap from 'gsap'

export const slide=(element)=>{
    gsap.fromTo(
      element,
      {
        x: 200,
        opacity: 0,
        duration: 2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
      },
    );

};
