


$('.portfolio ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'All') {
      $('.projects .project').css('display', '');
    } else {
      $('.projects .project').css('display', 'none');
      $($(this).data('class')).css('display', '');
    }
  });