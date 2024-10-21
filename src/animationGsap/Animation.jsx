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

export const scrollTrigger=(element)=>{
  gsap.to(element,{
    x:-1000,
    scrollTrigger:{
      trigger:element,
      start:'top bottom',
      end:'center center',
      scrub:true,
    },
  });
  gsap.to(element,{
    x:0,
    scrollTrigger:{
      trigger:element,
      start:'center center',
      end: 'bottom top',
      scrub:true,
    }
  });
}