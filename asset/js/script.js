 
 
 
//  ====================================================
 // Detect when the page is refreshed or loaded
 window.addEventListener('beforeunload', function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementsByClassName('circleWrap').classList.remove('fade-in-section');
  }, 3000); // Change the delay value (in milliseconds) to your desired time
});



window.sections = [...document.querySelectorAll('.section')];
window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;
  
  const section = window.sections
    .map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return {el, rect};
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
  document.body.style.background = section.el.getAttribute('data-bg');
  
}




// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    ctrlKey(e, 'R') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    
  )
  
    return false;
};
document.onkeydown = function(e) {
  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
      alert('not allowed');
  }
  return false;
};

const d = new Date();
let year = d.getFullYear();
document.getElementById("copyYear").innerHTML = year;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var preloader = document.getElementById('preloader');
function body_preloader() {

  preloader.style.display = 'none'
}


