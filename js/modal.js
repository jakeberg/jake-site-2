$(document).ready(function() {
  $('#modalOne, #modalTwo, #modalThree, #modalFour, #modalFive, #modalSix, #modalSeven, #modalEight, #modalNine, #modalTen').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
});
