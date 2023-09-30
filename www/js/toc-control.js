let chapLinks = $('.toc-link'),
    h = $('html'),
    elements = $('h2[id],h3[id],h4[id],p[id],.toc-anchor[id]'),
    toc = $('.toc-link-cont');

// Controls the Table of contents element
// A version of this function (one for each toc section) is added to a scroll listener on window
const chapterIndicator = (element) => {

    // Get scroll position of page
    let hScroll = h.scrollTop();

    // Get position of sections, id of sections
    let elY = $(element).offset().top - hScroll;
    elemId = element.id;

    // Get the respective chapter link in the TOC
    let chapLink = $(`.toc a[href="#${elemId}"]`);

    // If element is on screen
    // ie if element is below top of viewport & element is above bottom of viewport
    if ((elY > 0) && (elY < window.innerHeight)) {

        // console.log(chapLink, `: ${elY}`);

        // If section is below the first quarter of the viewport, target the previous chapter link in TOC
        // A quarter is arbitrary, but needed to be something between 0% & 50%
        if (elY > (window.innerHeight / 4)) {
            chapLink = chapLink.prev();
        }

        // If near the bottom of the page, target the last chapter link in the TOC
        if (h.height() <= (h.scrollTop() + (5 * window.innerHeight / 4))) {
            chapLink = chapLinks.last();
        }

        // If the selected chapter link is not already active, remove active from all chapter links and make selected chapter link active
        if (chapLink && !chapLink.hasClass('active')) {

            chapLinks.removeClass('active');
            chapLink.addClass('active');
        }
    }
}

const tocBG = () => {
    let bgElems = $('.toc-add-bg'),
        tocRect = toc[0].getBoundingClientRect(),
        over = false;

    overArr = $.map(bgElems, function(n) {
        let elRect = n.getBoundingClientRect();
        return (elRect.top <= tocRect.bottom && elRect.bottom >= tocRect.top);
    });

    overArr.length && (over = overArr.reduce((p,c) => p||c));

    over
        ? toc.addClass('toc-bg')
        : toc.removeClass('toc-bg');
};

$(function() {
    elements.each((i, e) => $(window).scroll(function() {
        chapterIndicator(e)
    }));
    $(window).scroll(() => tocBG());
})