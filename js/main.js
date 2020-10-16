


$('.portfolio ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'All') {
      $('.projects .card-group .card').css('display', '');
    } else {
      $('.projects .card-group .card').css('display', 'none');
      $($(this).data('class')).css('display', '');
    }
  });