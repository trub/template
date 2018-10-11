// ADDS JS for Hero Section
ScrollReveal().reveal('.load1',
 { 
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  scale      : 1,
 })
ScrollReveal().reveal('.load2', { 
  delay: 500,
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1, })
ScrollReveal().reveal('.load3', { 
  delay: 1000,
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
 })
 ScrollReveal().reveal('.load4', { 
  delay: 1500,
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
 })

 new Typed('#typed',{
  strings : ['..taco Lover','..aspiring UX Designer', '..information Arhcitecture Nerd'],
  typeSpeed : 100,
  delaySpeed : 100,
  loop : true
});


// ADDS JS for WORK SECTION

(function scrollReveal() {
  window.sr = ScrollReveal();
  
ScrollReveal().reveal('.card', {   
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-in',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
  viewFactor : 0,
});
})();