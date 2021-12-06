document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
	const modals = document.querySelectorAll('.g_modal');
	const btns = document.querySelectorAll('.g_modal_trigger');
	const span = document.querySelectorAll('.g_close');
	const body = document.querySelector('body');
	btns.forEach((elem, index) => {
    elem.onclick = function() {
      modals[index].style.display = "block";
      body.style.overflow= "hidden";
    }
    if (index < span.length){
      span[index].onclick = function() {
        body.style.overflow= "inherit";
        modals[index].style.display = "none";
      }
    }
  })
  window.onclick = function(event) {
    modals.forEach(elem => {
      if (event.target === elem) {
        body.style.overflow= "inherit";
        elem.style.display = "none";
      }
    })
  }
});
