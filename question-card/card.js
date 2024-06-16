$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
          height: "170px"
        },
        1000
      );
    })
    .mouseenter(function () {
      $(".flap").stop().animate(
        {
          top: "-107px",
          height: "212px",
          width: "213px",

        },
        600
      );
    })
    .mouseenter(function () {
      $(".card-cover").stop().animate(
        {
          height: "0px",
          top: "100px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });

});
