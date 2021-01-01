/// Solution 1 ///
$(document).ready(() => {

    $('button').click((e) => { // For red, blue, green items
        let color = $(e.target).attr('class');
        filterFunc(color);
    })

    $('button.all').click(() => {  // For all items
        $('li').show();
    });

    filterFunc = (color) => {
        $('li')
        .not('.' + color)
        .hide();

        $('li')
        .filter('.' + color)
        .show();
    }
})

/// Solution 2 ///
// $(document).ready(() => {

//     $('button.all').click(() => {
//         $('li').show();
//     });

//     $('button.red').click(() => {
//         const color = 'red';
//         filterFunc(color);
//     });

//     $('button.blue').click(() => {
//         const color = 'blue';
//         filterFunc(color);
//     });

//     $('button.green').click(() => {
//         const color = 'green';
//         filterFunc(color);
//     })

//     filterFunc = (color) => {
//         $('li')
//         .not('.' + color)
//         .hide();

//         $('li')
//         .filter('.' + color)
//         .show();
//     }
// })

