$(document).ready(() => {
    $('.card').hide();

    $('.title').click(() => {
        // $(this)
        // .next()
        // .slideToggle();

        console.log($(this));
        console.log(this);
    });

    // $('.title').eq(0).click(() => {
    //     $('.title').eq(0).next().toggle();
    // });

    // $('.title').eq(1).click(() => {
    //     $('.title').eq(1).next().toggle();
    // });

    // $('.title').eq(2).click(() => {
    //     $('.title').eq(2).next().toggle();
    // });
});