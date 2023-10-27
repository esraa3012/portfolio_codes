window.addEventListener("touchstart", {});
const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
      let theme = localStorage.getItem('theme');

      if (theme === 'dark') enableDarkMode();

      darkModeToggleBtn.addEventListener('click', () => {
        theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          disableDarkMode();
      
        } else {
          enableDarkMode();
          
        }
      });

      function enableDarkMode() {
        darkModeToggleBtn.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
      }

      function disableDarkMode() {
        darkModeToggleBtn.innerHTML = '🌒';
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
      }

      // window
      //   .matchMedia('(prefers-color-scheme: dark)')
      //   .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));

        //-----------------------------------------------------------------------------

        const heyLogoSrc =['word.png','figma.png','git.png','php.png','sql.png','js.png','css.png','html.png','skills.png'];

        const listOfItems = [
            'WordPress',
            'Figma',
            'GitHub',
            'PHP',
            'MySQL',
            'JavaScript',
            'CSS 3',
            'HTML 5',
            'My Skills',
          ];

          const baseScaleChange = 0.033333333;
const baseTranslateChange = 0.7;
document.addEventListener('DOMContentLoaded', function () {
  const stack = document.getElementById('stack');
  for (let i = 0; i < listOfItems.length; i++) {
    let div = document.createElement('div');
    div.classList.add('single-block');
    div.innerHTML = `
      <div class="content">
        <img src="${heyLogoSrc[i]}" />
        <div><h3>${listOfItems[i]}</h3></div>
      </div>`;
    const reverseIndex = listOfItems.length - 1 - i;
    div.style.transform = `scale(${
      1 - reverseIndex * baseScaleChange
    }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    stack.append(div);
  }

  stack.addEventListener('click', function (e) {
    e.stopPropagation();
    const blocks = this.querySelectorAll('.single-block');
    blocks.forEach((block, i) => {
      const reverseindex = blocks.length - 1 - i;
      block.style.transform = `rotate(${reverseindex * 1.1}deg) translate(-${
        reverseindex * 0.2
      }rem, -${reverseindex * 4}rem)`;
    });
  });

  document.addEventListener('click', function (e) {
    const blocks = document.querySelectorAll('.single-block');
    blocks.forEach((block, i) => {
      const reverseIndex = listOfItems.length - 1 - i;
      block.style.transform = `scale(${
        1 - reverseIndex * baseScaleChange
      }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    });
  });
});

//------------------------------------------------------------------------------


if (window.matchMedia("(min-width: 1347px)").matches) {
const ticketElm = document.querySelectorAll('.ticket-visual_visual');
ticketElm.forEach(ticket => {
  const { x, y, width, height } = ticket.getBoundingClientRect();
      const centerPoint = { x: x + width / 2, y: y + height / 2 };

      window.addEventListener('mousemove', (e) => {
        const degreeX = (e.clientY - centerPoint.y) * 0.008;
        const degreeY = (e.clientX - centerPoint.x) * -0.008;

        ticket.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
      });
      
});     

    }

    
      //----------------------------------------------------------------------------------------
      const form = document.querySelector("form");
      const p = document.querySelector('.perror');
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        let data = new FormData(form);
        fetch("add.php", { method: "POST", body: data })
            .then(response => response.json())
            .then((results) => {
                if (results.responseServer === true && results.responseMail === true) {
                  form.reset(); 
                  p.textContent = "The Message is Sended";
                  p.classList.add("perror_valid");
                   
                }else{
                  p.classList.add("perror");
                  p.textContent = "You Have Error Sorry Try Again";
                  p.classList.remove("perror_valid");
                } });
                return false;
              
            }) ;
  //------------------------------------------------------------------------
  var xx = window.matchMedia("(max-width: 800px)")
  var divViee = document.querySelector('#dark-mode-toggle');
  divViee.addEventListener("click",() =>{
    const box = document.getElementsByClassName('nav_links');
    if (xx.matches) { // If media query matches
      box[0].style.visibility = "hidden";
      //box[0].style.transition = "1000ms";
      
    } else {
      box[0].style.visibility = "visible";
      //box[0].style.transition = "1000ms";
      
    }
})
  var divView = document.querySelector('.view');
  divView.addEventListener("click",() =>{
    const box = document.getElementsByClassName('nav_links');
    if (xx.matches) { // If media query matches
      box[0].style.visibility = "hidden";
      //box[0].style.transition = "1000ms";
    } else {
      box[0].style.visibility = "visible";
      //box[0].style.transition = "1000ms";
    }
})
var divVieww = document.querySelector('.vieww');
divVieww.addEventListener("click",() =>{
  const box = document.getElementsByClassName('nav_links');
  if (xx.matches) { 
    box[0].style.visibility = "hidden";
    //box[0].style.transition = "1000ms";
  } else {
    box[0].style.visibility = "visible";
    //box[0].style.transition = "1000ms";
  }
})
var divVieew = document.querySelector('.vieew');
divVieew.addEventListener("click",() =>{
  const box = document.getElementsByClassName('nav_links');
  if (xx.matches) {
    box[0].style.visibility = "hidden";
    //box[0].style.transition = "1000ms";
  } else {
    box[0].style.visibility = "visible";
    //box[0].style.transition = "1000ms";
  }
})

var divLogo = document.querySelector('.logo');
divLogo.addEventListener("click",() =>{
    const box = document.getElementsByClassName('nav_links');
    if (xx.matches) {
      box[0].style.visibility = "hidden";
      //box[0].style.transition = "500ms";
    } else {
      box[0].style.visibility = "visible";
      //box[0].style.transition = "500ms";
    }
})

var divLabel = document.querySelector('label');
  divLabel.addEventListener("click",() =>{
      const box = document.getElementsByClassName('nav_links');
      box[0].style.visibility = "visible";
      //box[0].style.transition = "1000ms";
  })

  //------------------------------------------
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__button--right') ;
  const prevButton = document.querySelector('.carousel__button--left') ;
  //const dotsNav = document.querySelector('carousel__nav');
  //const dots = Array.from(dotsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;
  
  const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px' ;
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }

  //const updateDots = (currentDot,targetDot ) => {
  //  currentDot.classList.remove('current-slode');
  //  targetDot.classList.add('current-slode');
  //}

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
    if(targetIndex === 0){
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1){
      prevButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
    } else{
      prevButton.classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
    }
  }
  prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    //const currentDot = dotsNav.querySelector('.current-slide');
    //const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    moveToSlide(track, currentSlide, prevSlide);
    //updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

  });
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    //const currentDot = dotsNav.querySelector('.current-slide');
    //const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    //updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

  });

  // dotsNav.addEventListener('click', e => {
  //   const targetDot = e.target.closest('button');
  //   if(!targetDot)return;
  //   const currentSlide = track.querySelector('.current-slide');
  //   const currentDot = dotsNav.querySelector('.current-slide');
  //   const targetIndex = dots.findIndex(dot => dot === targetDot);
  //   const targetSlide = slides[targetIndex];

  //   moveToSlide(track, currentSlide, targetSlide);
  //   updateDots(currentDot, targetDot);
  //   hideShowArrows(slides, prevButton, nextButton, targetIndex);
    
    
  
  // })

  