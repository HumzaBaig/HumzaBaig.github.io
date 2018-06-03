$(function() {
    var span = $('#transitioning-word');
    var words = ['Humza Baig','a Web Developer', 'a Math Enthusiast', 'a Student of Knowledge', 'a Machine Learning Engineer-in-training',
                 'a Basketball Fan', 'a Gym Freak', 'a Videogame Expert', 'a Coffee Addict', 'a Hip-Hop Head', 'an Explorer', 'a Binge Watcher', 'an Anime Aficionado', 'a Software Engineer', 'a Full-Stack Developer', 'a Great Asset'];
    var lastIdx = 0;
    var arrLength = words.length;

    function changingTheWord() {
      span.fadeIn(1000);
      setTimeout(1000);
      span.fadeOut(1000);

      var randNum = Math.floor(Math.random() * arrLength);

      if (lastIdx == randNum) { //if same word
        randNum++;

        if (randNum >= arrLength) { //if out of bounds
          randNum = 0;
        }
      }
      lastIdx = randNum;
      span.text(words[randNum]);
    }

    span.text(words[0]); //intial word before transitioning
    setTimeout(1000);
    span.fadeOut(1750);

    setInterval(changingTheWord, 2750);
});
