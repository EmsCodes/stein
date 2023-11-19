function scrollReveal() {
  var revealPoint = 300;
  var revealElement = document.querySelectorAll(".img-div");
  for (let i = 0; i < revealElement.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElement[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("active");
    } else {
      revealElement[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
