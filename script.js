
$($(document).ready(function() {
  var img = ["http://67.media.tumblr.com/5d740e3a7948a9afbf5cf71514c519a9/tumblr_nhhiqclOho1ri87b4o1_250.jpg", "http://www.gifbin.com/bin/032010/1269259657_omg_cat.gif", "https://s-media-cache-ak0.pinimg.com/564x/45/91/b2/4591b2ec5726c7ad10537568415e8b07.jpg", "http://thumbpress.com/wp-content/uploads/2013/04/Funny-Cat-Pictures-with-Captions-25.jpg", "https://media0.giphy.com/media/ZKnFkETq4LrX2/200_s.gif"];
  var clickCount = 0;
  $("img").click(function(event) {
    clickCount++;
    var id = event.target.id
    var planet = document.getElementById(id);
    if (id === 'earth2' || id === 'earth1') {
      planet.src = img[0];
      if ($('#earth2').attr('src') === img[0] && $('#earth1').attr('src') === img[0]) {
        $(".cards #earth1").fadeOut(2000);
        $(".cards #earth2").fadeOut(2000);
      }
    } else if (id === 'mars1' || id === 'mars2') {
      planet.src = img[1];
      if ($('#mars1').attr('src') === img[1] && $('#mars2').attr('src') === img[1]) {
        $(".cards #mars1").fadeOut(2000);
        $(".cards #mars2").fadeOut(2000);
      }
    } else if (id === 'sun1' || id === 'sun2') {
      planet.src = img[2];
      if ($('#sun2').attr('src') === img[2] && $('#sun1').attr('src') === img[2]) {
        $(".cards #sun1").fadeOut(2000);
        $(".cards #sun2").fadeOut(2000);
      }
    } else if (id === 'jup1' || id === 'jup2') {
      planet.src = img[3];
      if ($('#jup2').attr('src') === img[3] && $('#jup1').attr('src') === img[3]) {
        $(".cards #jup1").fadeOut(2000);
        $(".cards #jup2").fadeOut(2000);
      }
    }

    function tmr() {
      if (clickCount >= 2) {
        planet.src = img[4];
        $('img').attr('src', img[4])
      }
      clickCount = 0;
    }
    setTimeout(tmr, 3000)

  });
});


