$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Hide");
    } else {
      $(".expand-btn").html("See all");
    }
  });
  $(".play-button").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".close-btn").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".header-bars").click(function () {
    $(".leftMenu").toggleClass("moved");
  });
  $(".CloseMenu").click(function () {
    $(".leftMenu").toggleClass("moved");
  });

  $("nav.menuList a").click(function () {
    $(".leftMenu").toggleClass("moved");
  });
  $(".default-button").click(function () {
    alert("This part of site is not ready yet, please come back later");
  });
});
