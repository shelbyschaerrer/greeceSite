// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

//new homepage hero image
  const homeSlides = document.querySelectorAll('.home-hero-slide');
const homeDots = document.querySelectorAll('.home-dot');

let homeIndex = 0;
const totalHomes = homeSlides.length;

function showHomeSlide(i) {
  homeIndex = (i + totalHomes) % totalHomes;

  homeSlides.forEach((s, idx) => s.classList.toggle('active', idx === homeIndex));
  homeDots.forEach((d, idx) => d.classList.toggle('active', idx === homeIndex));

}


homeDots.forEach((dot, i) => dot.addEventListener('click', () => showHomeSlide(i)));

// Optional auto-play
setInterval(() => showHomeSlide(homeIndex + 1), 6000);


//end new homepage hero


    //cards that change size on homepage
    const cards = document.querySelectorAll(".individualCaseStudyCard");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    // Remove wide class from all cards
    cards.forEach(c => c.classList.remove("wide"));

    // Add wide class to hovered card
    card.classList.add("wide");
  });
});



    //accordions
    const accordions = document.querySelectorAll('.accordion');

    
    document.addEventListener("DOMContentLoaded", () => {
      const accordions = document.querySelectorAll('.accordion');
    
      accordions.forEach((accordion) => {
        const header = accordion.querySelector('.accordion-header');
    
        header.addEventListener('click', () => {
          // Close others
          accordions.forEach((acc) => {
            if (acc !== accordion) {
              acc.classList.remove('open');
              acc.querySelector('.accordion-header').classList.remove('active');
            }
          });
    
          // Toggle current
          accordion.classList.toggle('open');
          header.classList.toggle('active');
        });
      });
    });
    
    //end accordions

    //case studies hero image
    const caseSlides = document.querySelectorAll('.case-slide');
    const caseDots = document.querySelectorAll('.case-dot');
//const casePrev = document.querySelector('.case-arrow.left');
//const caseNext = document.querySelector('.case-arrow.right');

let caseIndex = 0;
const totalCases = caseSlides.length;

function showCaseSlide(i) {
  caseIndex = (i + totalCases) % totalCases;

  caseSlides.forEach((s, idx) => s.classList.toggle('active', idx === caseIndex));
  caseDots.forEach((d, idx) => d.classList.toggle('active', idx === caseIndex));
}

//caseNext.addEventListener('click', () => showCaseSlide(caseIndex + 1));
//casePrev.addEventListener('click', () => showCaseSlide(caseIndex - 1));
caseDots.forEach((dot, i) => dot.addEventListener('click', () => showCaseSlide(i)));

// Optional auto-play
setInterval(() => showCaseSlide(caseIndex + 1), 6000);

//end of case studies hero

//cat
function toggleCatColor(el) {
  el.classList.toggle("active");
}

