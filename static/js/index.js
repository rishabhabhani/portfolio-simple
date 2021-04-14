var navOffset;
function setOffset() {
  var nav = $("#navigator");
  navOffset = nav.offset();
}

$(window).scroll(function (e) {
  var $el = $("#navigator");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > navOffset.top && !isPositionFixed) {
    $el.css({ position: "fixed", top: "0px" });
    $(".nav-title").css("display", "block");
    $(".nav-title").velocity(
      {
        opacity: "1",
      },
      { duration: 200 }
    );
    $(".nav-button").velocity(
      {
        width: "30%",
        height: "2rem",
        "font-size": "0.75rem",
        // "border-width": "0px"
        "margin-left": "0px",
      },
      { duration: 200 }
    );
  } else if ($(this).scrollTop() < navOffset.top && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
    $(".nav-title").css("display", "none");
    $(".nav-title").velocity(
      {
        opacity: "0",
      },
      { duration: 200 }
    );
    $(".nav-button").velocity(
      {
        width: "50%",
        height: "3rem",
        "font-size": "1.5rem",
        // "border-width": "3px"
        "margin-left": "15px",
      },
      { duration: 200 }
    );
  }
});
