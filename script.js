const sections = $('section');
let currentTopPos;
let counterPage = 0;
let prevCounterPage;
let topSections = [];
$('.main--images img').hide()
$('.main--videos div').hide()

sections.each(function () {
    topSections.push(Math.floor($(this).offset().top))


})


$(window).on('scroll', () => {
    currentTopPos = $(window).scrollTop() + 90;

    if (currentTopPos > topSections[counterPage + 1]) {
        console.log(topSections[counterPage + 1]);
        counterPage++;
    } else if (counterPage > 0 && currentTopPos < topSections[counterPage]) {
        counterPage--;
    }
    showImages()
})


function showImages() {
    if (currentTopPos > topSections[1]) {

        $('.main--images img').fadeIn(1500)
    }
    else if (currentTopPos < 400) {

        $('.main--images img').hide()
    }

    if (currentTopPos > topSections[2]) {
        $('.main--videos div').fadeIn(1500)
    } else if (currentTopPos < 400) {

        $('.main--videos div').hide()
    }
}