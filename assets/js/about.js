$(document).ready(function() {
  $('#about').click(function() {
    $('#main').fadeOut(1500, function() {
      $('#main').html(`<section id='one'>
        <header class='major'>
          <h2>Well...</h2>
        </header>
        <p>
          I am an enthusiastic programmer that continuously finds the most efficient ways to solve problems. Two words that describe me well are Math and Computer Science. My current expertise is Full-Stack Development, but have recently set my sights on creating Artificial Intelligence applications, specifically Machine Learning applications.
        </p>
        <p>
          Math was always my favorite subject in and out of school. I did all my assignments, and when it came to formulas, I had everything memorized. Although I thought I was good at math, I realized my senior year in high school that I truly wasn't, at least not yet. I wondered how I could be good at it, if I didn't truly understand it. This is when I started reading books about the great mathematicians and proving theorems from algebra, geometry, and calculus. This love for math helped me understand that to truly get better at something, the fundamentals are key, and this leads to my second passion.
        </p>
        <p>
          My initial exposure in 9th grade gave me the desire to delve deeper into software programming. It all began with a simple GPA calculator that I created using Java, for my own personal use. Curious about everything software, I quickly learned new skills, and used these skills to expand on my initial calculator. Soon after, it began to look and feel almost professional. Learning all the fundamentals from this project, I was able to see the versatility of programming, which led to other side projects. This was only the beginning of my life in programming. I began experimenting with different languages for their strengths in different areas. Currently I am focusing on the web development area studying Ruby on Rails and Angular/React. I'm relatively new to Github, so most of my projects aren't up yet.
        </p>
        <p>
          I am most comfortable with Ruby on Rails, Javascript, and Python at the moment, and would love to give to the community. If there are any project suggestions, or open-source opportunities that I could be apart of, message me.
        </p>
        <ul class='actions'>
          <li><a href='/' class='button'>Back</a></li>
        </ul>
      </section>`);
    });

    $('#header').addClass('slideRight');
    $('#main').delay(1000).fadeIn(1750);

    setTimeout(function() {
      $('#header').html(``);
      $('#header').css('width', '25%');
      $('#main').css('padding-left', '+=35%');
      $('#header').css('background', 'no-repeat center/100% url("https://bit.ly/2yYu2iv")');
      $('#header').addClass('slideLeft');
    }, 1500);
  });
});
