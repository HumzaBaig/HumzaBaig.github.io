$(function() {
    var span = $('#transitioning-word');
    var words = ['Web Developer', 'Math Enthusiast', 'Mozlem', 'Mufti-in-training',
                 'Salafi hater', 'Belieber', 'Father of 3', 'Daddy'];

    function changingTheWord() {
      span.fadeIn(1000);
      setTimeout(1000);
      span.fadeOut(1000);

      span.text(words[Math.floor(Math.random() * 7)]);
    }

    setInterval(changingTheWord, 2000);
});
