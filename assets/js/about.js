function toAboutPage() {
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
          <li><a href='#' id='back' class='button'>Back</a></li>
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

    fromAboutPage();
  });
}

function fromAboutPage() {
  $('#back').click(function() {
    $('#main').fadeOut(1500, function() {
      $('#main').html(`<section id="one first">
        <header class="major first">
          <h2>Hi, I am <span id="transitioning-word"></span></h2>
        </header>
        <p class="first">
          I am an enthusiastic programmer that continuously finds the most efficient ways to solve problems. Two words that describe me well are Math and Computer Science. My current expertise is Full-Stack Development, but have recently set my sights on creating Artificial Intelligence applications, specifically Machine Learning applications.
        </p>
        <ul class="actions first">
          <li><a href="#" id="about" class="button">About me</a></li>
        </ul>
      </section>

    <!-- Two -->
      <section id="two">
        <h2 class="second">Recent Work</h2>
        <div class="row">
          <article class="6u 12u$(xsmall) work-item third">
            <a href="https://letsgetcake.herokuapp.com" data-poptrox="ignore" class="image fit thumb third"
            onmouseover="this.childNodes[1].src = 'images/letsgetcake.gif'"
            onmouseout="this.childNodes[1].src = 'https://bit.ly/2ICeZKV'">
              <img src="https://bit.ly/2ICeZKV" alt="Lets Get Cake Thumbnail" />
            </a>
            <h3 class="fourth">Lets Get Cake!</h3>
            <p class="fourth">A full-stack, single-page meetup app inspired by <i>TeaWithStrangers</i>.</p>
            <br />
            <p class="fourth">Tech Stack: Ruby on Rails, React.js with the Redux data-flow, and a PostgreSQL database</p>
          </article>

          <article class="6u$ 12u$(xsmall) work-item fifth">
            <a href="https://humzabaig.github.io/simple_geometry" data-poptrox="ignore" class="image fit thumb fifth"
            onmouseover="this.childNodes[1].src = 'images/simplegeometry.gif'"
            onmouseout="this.childNodes[1].src = 'https://bit.ly/2MztAZY'">
              <img src="https://bit.ly/2MztAZY" alt="Simple Geometry Thumbnail" />
            </a>
            <h3 class="sixth">Simple Geometry</h3>
            <p class="sixth">A frontend application demostrating <i>Bridson's Algorithm</i> for sampling to create a pointillism effect.</p>
            <br />
            <p class="sixth">Tech Stack: Vanilla JavaScript, jQuery, and HTML5/CSS3</p>
          </article>

          <article class="6u 12u$(xsmall) work-item seventh">
            <a href="https://github.com/Aelho-Pak/pabang" data-poptrox="ignore" class="image fit thumb seventh" onmouseover="this.childNodes[1].src = 'https://bit.ly/2MvScmh'"
            onmouseout="this.childNodes[1].src = 'https://bit.ly/2KxenI7'">
              <img src="https://bit.ly/2KxenI7" alt="Pabang Webcrawler Thumbnail" />
            </a>
            <h3 class="eighth">Pabang Webcrawler</h3>
            <p class="eighth">A webcrawling application that applies to jobs for you on the most famous job application sites.</p>
            <br />
            <p class="eighth">Tech Stack: Ruby and Selenium Webdriver</p>
          </article>

          <article class="6u$ 12u$(xsmall) work-item ninth">
            <a href="https://bit.ly/2IBKNPU" data-poptrox="ignore" class="image fit thumb ninth"
            onmouseover="this.childNodes[1].src = 'https://bit.ly/2IBKNPU'"
            onmouseout="this.childNodes[1].src = 'https://bit.ly/2yYv1PJ'">
              <img src="https://bit.ly/2yYv1PJ" alt="Javascript 30 Thumbnail" />
            </a>
            <h3 class="tenth">JavaScript30</h3>
            <p class="tenth">Coming Soon!</p>
            <br />
            <p class="tenth">Tech Stack: Only Vanilla Javascript</p>
          </article>
        </div>
        <ul class="actions eleventh">
          <li><a href="#" class="button">Full Portfolio</a></li>
        </ul>
      </section>

    <!-- Three -->
      <section id="three twelfth">
        <h2 class="twelfth">Get In Touch</h2>
        <p class="twelfth">If you have any questions, feel free to contact me!</p>
        <div class="row twelfth">
          <div class="8u 12u$(small)">
            <form method="post" action="#">
              <div class="row uniform 50%">
                <div class="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                <div class="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                <div class="12u$"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
              </div>
            </form>
            <ul class="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </div>
          <div class="4u$ 12u$(small)">
            <ul class="labeled-icons">
              <li>
                <h3 class="icon fa-home"><span class="label">Address</span></h3>
                Spring, TX 77388
                <br />
                United States
              </li>
              <li>
                <h3 class="icon fa-mobile"><span class="label">Phone</span></h3>
                832-515-7091
              </li>
              <li>
                <h3 class="icon fa-envelope-o"><span class="label">Email</span></h3>
                <a href="#">humzacodemail@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>`);
    });

    $('#header').addClass('slideRight');
    $('#main').delay(1000).fadeIn(1750);

    setTimeout(function() {
      $('#header').html(``);
      $('#header').css('width', '22%');
      $('#main').css('padding-left', '-=35%');
      $('#header').css('background-color', '#1f1815');
      $('#header').css('background-attachment', 'scroll,								fixed');
      $('#header').css('background-image', 'url("images/overlay.png"), url("../../images/bg.jpg")');
      $('#header').css('background-position', 'top left,							top left');
      $('#header').css('background-repeat', 'repeat,								no-repeat');
      $('#header').css('background-size', 'auto,								auto 100%');
      $('#header').addClass('slideLeft');
    }, 1500);

    toAboutPage();
  });
}

$(document).ready(function() {
  toAboutPage();
});
