$('.portfolio ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'All') {
      $(' .project').parent().css('display', '');
    } else {
      $('.project').parent().css('display', 'none');
      $($(this).data('class')).parent().css('display', '');
    }
  });
