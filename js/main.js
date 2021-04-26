// for add & remove NiceScroll
$(document).ready(function myResize() {
    let myW = $(document).width();
    if (myW > 768) {
        $('body').append($('<script>').attr('src', 'js/jquery.nicescroll.min.js'));
    }
}());

// Nice Scroll setting
$("body").niceScroll({
    cursorcolor: "#a247e3",
    cursorwidth: "14px",
    background: "rgba(20,20,20,0.3)",
    cursorborder: "none",
    zindex: "555555555"
});
$(".nicescroll-box").niceScroll(".wrap", {cursorcolor: "aquamarine"});
$("<your div>").getNiceScroll().resize();

// for Notification class
$(document).ready(function () {
    $('#bgClass,#Class').removeClass('d-none');
    $('#bgClass,.x-button').on("click", function () {
        $('#bgClass,#Class').fadeOut();
    })
});


// toggle nav
function openNav() {
    const doc = document.getElementById("toggleNav");
    if (doc.style.right == -70 + "%") {
        //for show
        doc.style.right = 0 + "%";
        document.getElementById("closeNav").innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="33.527" height="32.527" viewBox="0 0 33.527 32.527">\n' +
            '  <g id="Group_152" data-name="Group 152" transform="translate(-353.381 -18.737)">\n' +
            '    <line id="Line_12" data-name="Line 12" x1="36" transform="translate(357.916 47.728) rotate(-45)" fill="none" stroke="#696969" stroke-linecap="round" stroke-width="5"/>\n' +
            '    <line id="Line_16" data-name="Line 16" x1="36" transform="translate(356.916 22.272) rotate(45)" fill="none" stroke="#696969" stroke-linecap="round" stroke-width="5"/>\n' +
            "  </g>\n" +
            "</svg>\n";
    } else {
        //for close
        doc.style.right = -70 + "%";
        document.getElementById("closeNav").innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="27" viewBox="0 0 43 27">\n' +
            '                <g id="Group_152" data-name="Group 152" transform="translate(-347.144 -21.5)" opacity="0.69">\n' +
            '                    <line id="Line_12" data-name="Line 12" x1="36" transform="translate(350.644 45)" fill="none"\n' +
            '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
            '                    <line id="Line_13" data-name="Line 13" x1="36" transform="translate(350.644 35)" fill="none"\n' +
            '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
            '                    <line id="Line_14" data-name="Line 14" x1="18" transform="translate(368.644 25)" fill="none"\n' +
            '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
            "                </g>\n" +
            "            </svg>";
    }
}

function closeNav() {
    //for close
    document.getElementById("toggleNav").style.right = -70 + "%";
    document.getElementById("closeNav").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="27" viewBox="0 0 43 27">\n' +
        '                <g id="Group_152" data-name="Group 152" transform="translate(-347.144 -21.5)" opacity="0.69">\n' +
        '                    <line id="Line_12" data-name="Line 12" x1="36" transform="translate(350.644 45)" fill="none"\n' +
        '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
        '                    <line id="Line_13" data-name="Line 13" x1="36" transform="translate(350.644 35)" fill="none"\n' +
        '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
        '                    <line id="Line_14" data-name="Line 14" x1="18" transform="translate(368.644 25)" fill="none"\n' +
        '                          stroke="#272727" stroke-linecap="round" stroke-width="7"/>\n' +
        "                </g>\n" +
        "            </svg>";
}

// default template
window.ga = function () {
    ga.q.push(arguments)
};
ga.q = [];
ga.l = +new Date;
ga('create', 'UA-XXXXX-Y', 'auto');
ga('set', 'anonymizeIp', true);
ga('set', 'transport', 'beacon');
ga('send', 'pageview')
