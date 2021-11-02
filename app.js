const buttons = document.querySelectorAll('.backgroundButton');
const body = document.querySelector('body');

console.log(buttons);

var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

let count = 0;

console.log("Well, hello there. If you're looking for some info," +
" check out my readme:  " ); 
console.log('https://github.com/mzmormonde/mzmo.dev/blob/main/README.md#-welcome-'); 


// button on dark mode page to get to light mode 
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'opposite') {

      if (count % 2 == 0) {

        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'reverse.css';

        // Append link element to HTML head
        head.appendChild(link);
      } else if (count % 2 != 0) {
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style.css';

        // Append link element to HTML head
        head.appendChild(link);
      }
      count++;
    }
  })
})

// button on light mode to get back to dark mode
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'opposite2') {

      if (count % 2 == 0) {

        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/reverse.css';

        // Append link element to HTML head
        head.appendChild(link);
      } else if (count % 2 != 0) {
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/style.css';

        // Append link element to HTML head
        head.appendChild(link);
      }
      count++;
    }
  })
})


// hamburger menu animation
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click',
    function () {

      $('.animated-icon3').toggleClass('open');
    });
});


//scroll offset
$('.nav-link').click(function () {
  divId = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(divId).offset().top - 300
  }, 200);
});

//navigate to match game page
document.getElementById("matchGameLink").onclick = function () {
  location.href = "Pages/MatchGame/index.html";
};

//navigate to higher lower game page
document.getElementById("higherLowerLink").onclick = function () {
  location.href = "Pages/HigherLower/index.html";
};

//navigate to hackathon game page
document.getElementById("aug2021Hackathon").onclick = function () {
  location.href = "Pages/Aug21Hackathon/index.html";
};

// document.getElementById("aug2021Hackathon").onclick = function (){
//   window.open("https://mzmormonde.github.io/Aug2021Hackathon/",
//   '_blank'); 
// }; 




