// Get the modal
var sevenModal = document.getElementById('sevenModal');
var squikyModal = document.getElementById('squikyModal');
var unqModal = document.getElementById('unqModal');
var eqiModal = document.getElementById('eqiModal');
var slutModal = document.getElementById('slutModal');
// Get the button that opens the modal
var sevenDetails = document.getElementById("sevenDetails");
var squikyDetails = document.getElementById("squikyDetails");
var unqDetails = document.getElementById("unqDetails");
var eqiDetails = document.getElementById("eqiDetails");
var slutDetails = document.getElementById("slutDetails");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
// When the user clicks on the button, open the modal
sevenDetails.onclick = function() {
    sevenModal.style.display = "block";
}
squikyDetails.onclick = function() {
    squikyModal.style.display = "block";
}
unqDetails.onclick = function() {
    unqModal.style.display = "block";
}
eqiDetails.onclick = function() {
    eqiModal.style.display = "block";
}
slutDetails.onclick = function() {
    slutModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    sevenModal.style.display = "none";
}
span1.onclick = function() {
    squikyModal.style.display = "none";
}
span2.onclick = function() {
    unqModal.style.display = "none";
}
span3.onclick = function() {
    eqiModal.style.display = "none";
}
span4.onclick = function() {
    slutModal.style.display = "none";
}

$('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false
});


$('.tabs a').click(function() {
  $(this).addClass('js-active');
  if($(this).hasClass('js-active')){
    $(this).siblings().removeClass('js-active');
  }
});

$('.heroes').click(function() {
  if($(this).hasClass('js-active')){
    $('.hero-slider').css('display', 'block');
    $('.latest-games').removeClass('js-active');
  }
});

$('.latest-games').click(function() {
  if($(this).hasClass('js-active')) {
    $('.hero-slider').css('display', 'none');
    $('.heroes').removeClass('js-active');
  }
});

$('.latest-games').click(function() {
  if($(this).hasClass('js-active')) {
    $('.win-rate').css('display', 'block');
  }
});

$('.heroes').click(function() {
  if($(this).hasClass('js-active')) {
    $('.win-rate').css('display', 'none');
  }
});

$('span').click(function(){
    $('.hero-slider').css('display', 'none');
    $('.win-rate').css('display', 'none');
})
