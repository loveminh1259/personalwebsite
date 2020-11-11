const menus = $(".navbar-menu li");
console.log(menus);
for (let index = 0; index < menus.length; index++) {
  const element = menus[index];
  element.addEventListener("click", function (e) {
    $(".active").removeClass("active");
    element.classList.add("active");
  });
}
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $(".nav-content").css("position", "fixed");
    $(".nav-content").css("background", "black");
    $(".nav-content").css("top", "0");
  } else {
    $(".nav-content").css("position", "relative");
    $(".nav-content").css("background", "transparent");
  }
  //>=, not <=
  if (scroll < 500) {
    $(".active").removeClass("active");
    $("#home-link").addClass("active");
  }
  if (scroll >= 500 && scroll < 1000) {
    $(".active").removeClass("active");
    $("#about-link").addClass("active");
  }
  if (scroll >= 1000) {
    $(".active").removeClass("active");
    $("#skill-link").addClass("active");
  }
}); //missing );
calcPaths(3)

function calcPaths(totalDur) {
  // unset 'animated' class to body which will reset the animation
  document.body.classList.remove('animated')

  // get all SVG elements - lines and dots
  const paths = document.querySelectorAll('.signature-path')
  // prepare path length variable
  let len = 0
  // prepare animation delay length variable
  let delay = 0

  // escape if no elements found
  if (!paths.length) {
    return false
  }

  // set duration in seconds of animation to default if not set
  const totalDuration = totalDur || 5

  // calculate the full path length
  paths.forEach((path) => {
    const totalLen = path.getTotalLength()
    len += totalLen
  })

  paths.forEach((path) => {
    const pathElem = path
    // get current path length
    const totalLen = path.getTotalLength()
    // calculate current animation duration
    const duration = totalLen / len * totalDuration

    // set animation duration and delay
    pathElem.style.animationDuration = `${duration < 0.001 ? 0.001 : duration}s`
    pathElem.style.animationDelay = `${delay}s`
    console.log(duration)
    // set dash array and offset to path length - this is how you hide the line
    pathElem.setAttribute('stroke-dasharray', totalLen)
    pathElem.setAttribute('stroke-dashoffset', totalLen)

    // set delay for the next path - added .2 seconds to make it more realistic
    delay += duration + 0.001
  })

  // set 'animated' class to body which will start the animation
  document.body.classList.add('animated')

  return true
}

calcPaths()
