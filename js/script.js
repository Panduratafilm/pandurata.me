$(document).ready(function () {
  //Modal
  $(".modal").modal("hide");
  $(".figure-img>a").click(function (event) {
    event.preventDefault();
    var img = $(this).attr("src");
    $(".pop-img").attr("src", img);
    $(".modal").show();
  });
  // Modal show-hide
  $(".modal .close").click(function () {
    $(".modal").hide();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 3) {
      $(".mouse").fadeOut(50);
    } else {
      $(".mouse").fadeIn();
    }
  });
  $("#campaignStrategy").click(function (event) {
    event.preventDefault();
    // $(".description").fadeOut(300, function () {
    //   $(this).text("Hello world!").fadeIn(300);
    // });

    $(".description")
      .animate({ opacity: 0.5, marginLeft: "10px" }, 200)
      .queue(function (next) {
        $(this).text("Hello world!");
        next();
      })
      .animate({ opacity: 1, marginLeft: "0" }, 200);
  });
});
