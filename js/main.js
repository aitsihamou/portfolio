$('.portfolio ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'All') {
      $(' .box').css('display', '');
    } else {
      $('.box').css('display', 'none');
      $($(this).data('class')).css('display', '');
    }
  });