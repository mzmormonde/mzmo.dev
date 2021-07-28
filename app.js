const buttons = document.querySelectorAll('.backgroundButton');
const body = document.querySelector('body');

console.log(buttons);

var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

let count = 0;

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.id === 'opposite') {
            // body.style.backgroundColor = e.target.id;
            console.log("is clicked");
            count++;
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

        }
    })
})