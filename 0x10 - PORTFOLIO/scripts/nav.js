window.addEventListener('scroll', myFunction);


var navbar = document.getElementById("nav-container");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

}


$('.smooth-goto').on('click', function () {


$('html,body').animate({scrollTop: $(saut).offset().top}, 1000);
  return false;
});

