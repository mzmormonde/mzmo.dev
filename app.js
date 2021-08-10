const buttons = document.querySelectorAll('.backgroundButton');
const body = document.querySelector('body');

console.log(buttons);

var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

let count = 0;

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        //console.log(e.target);
        if (e.target.id === 'opposite') {
            // body.style.backgroundColor = e.target.id;
            //console.log("is clicked");
            
            if (count % 2 == 0) {
                //document.body.style.backgroundColor = "white";
                // document.body.style.color = "black"; 
                // document.getElementById("p").style.color = "#0000";
                // set the attributes for link element 
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


$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });


  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});
