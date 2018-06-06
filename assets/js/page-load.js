$(document).ready(function() {
  $('.first').fadeIn(1500, function() {
    $('.third').fadeIn(500, function() {
      $('.fourth').fadeIn(500, function() {
        $('.fifth').fadeIn(500, function() {
          $('.sixth').fadeIn(500, function() {
            $('.seventh').fadeIn(500, function() {
              $('.eighth').fadeIn(500, function() {
                $('.ninth').fadeIn(500, function() {
                  $('.tenth').fadeIn(500, function() {
                    $('.eleventh').fadeIn(500, function() {
                      $('.twelfth').fadeIn(500, function() {
                        $('.thirteenth').fadeIn(500);
                      });
                    });
                    $('.eleventh').slideIn(500);
                  });
                  $('.tenth').slideIn(500);
                });
                $('.ninth').slideIn(500);
              });
              $('.eighth').slideIn(500);
            });
            $('.seventh').slideIn(500);
          });
          $('.sixth').slideIn(500);
        });
        $('.fifth').slideIn(500);
      });
      $('.fourth').slideIn(500);
    });
  });
});
