
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (btn) => {

      btn.addEventListener('click', function (e) {

            // console.log(e);         // Event
            // console.log(e.target);  // Target Element Click

            let expr = e.target.id
            switch(expr) {
                  case 'white':
                        body.style.backgroundColor = expr;
                        body.style.color = "black";
                        break;
                  case 'blue':
                        body.style.backgroundColor = expr;
                        body.style.color = "white";
                        break;
                  case 'yellow':
                        body.style.backgroundColor = expr;
                        body.style.color = "black";
                        break;
                  case 'red':
                        body.style.backgroundColor = expr;
                        break;
                  case 'green':
                        body.style.backgroundColor = expr;
                        break;
                  default:
                        body.style.backgroundColor = "grey"; 
            }
      });
});