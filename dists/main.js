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
