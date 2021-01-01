$(document).ready(() => {
    $('#show').click(function() {
        $('p').show('slow');
    });
    $('#hide').click(function() {
        $('p').hide(5000);
    });
    $('#toggle').click(function() {
        $('p').toggle();
        alert('Paragraph hidden');
    });

    $('#fade-in').click(()=> {
        $('#box1').fadeIn();
    });

    $('#fade-out').click(()=> {
        $('#box1').fadeOut();
    });

    $('#fade-toggle').click(()=> {
        $('#box1').fadeToggle();
    });

    $('#fade-to').click(()=> {
        $('#box1').fadeTo('slow',0.5);
    });

    $('#panel').click(() => {
        // $('#desc').slideUp();
        // $('#desc').slideDown();
        $('#desc').slideToggle();
    });


    $('#box2').dblclick(() => {
        $('#box2').animate({left: '300px',opacity: '0.3',width: '+=150px'},'slow');
        $('#box2').animate({fontSize: '4em'},'fast');
        $('#box2').animate({fontSize: '2em'},'slow')
    });

    $('#stop').click(()=>{
        $('#box2').stop(true);
    })

    $('p')
    .css('color','blue')
    .hide(3000)
    .fadeIn(2000);

});

// $(document).on('click', '#show', ()=>{
//     $('p').show();
// })

