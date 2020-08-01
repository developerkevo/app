document.getElementById('main').setAttribute(

    "style"," background-color:blue",
    "padding","0 px",
     "margin","0 px",
     "display","flex"

);

let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("myModal");
let btn = document.getElementById("btn-in-modal");
btn.onclick = function() {
    modal.style.display = "block";
  }
  

  span.onclick = function() {
    modal.style.display = "none";
  }
  

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }