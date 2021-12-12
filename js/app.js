$(document).ready(function () {
  let currentFloor = 2;
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let floorPath = $(".main-image path");

  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr("data-floor");
    floorPath.removeClass("current-floor");
    $(`[data-floor = ${currentFloor}]`).toggleClass("current-floor");
    $(".counter-item").text(currentFloor);
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      useCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter-item").text(useCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${useCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      useCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter-item").text(useCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${useCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
