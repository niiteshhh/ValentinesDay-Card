$(document).ready(function () {
  $(".happy-valentines")
    .mouseenter(function () {
      $(".valentines-day-card").stop().animate(
        {
          top: "-150px",
          height: "0px"
        },
        1000
      );
    })
    .mouseenter(function () {
      $(".valentines-day-card-back").stop().animate(
        {
          top: "300px",
          height: "300px"
        },
        1000
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

window.onload = function () {
  let params = new URLSearchParams(window.location.search);
  let message = params.get('message');

  if (message) {
    document.getElementById('message').value = decodeURIComponent(message);
    document.getElementById('message').disabled = true;
    document.getElementById('generateLink').style.display = 'none';
    document.getElementById('copyLink').style.display = 'none';
    document.getElementById('link').style.display = 'none';
  }
};

document.getElementById('generateLink').addEventListener('click', function () {
  let message = encodeURIComponent(document.getElementById('message').value);
  let shareableLink = `http://localhost/assignment1/main-card/main.html?message=${message}`;
  document.getElementById('link').value = shareableLink;
});

document.getElementById('copyLink').addEventListener('click', function () {
  let copyText = document.getElementById('link');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Copied the text: ' + copyText.value);
});