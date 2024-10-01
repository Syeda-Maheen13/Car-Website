// card button handle

function handleButtonClick() {
   
    window.location.href = 'your-page.html'; 
}










$(window).on('scroll', function(){
    const navbar = $('#navbar');
    if ($(this).scrollTop() > 50) {
        navbar.addClass('scrolled');
    } else{
        navbar.removeClass('scrolled');
    }
});