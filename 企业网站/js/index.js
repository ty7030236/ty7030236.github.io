
{
    let dot = $(".hd ul li")
    let banner = $(".bd ul li")
    dot.mouseover(function () {
        dot.css({background: "#000", opacity: 0.7})
            .filter(this).css({
            background: "#fff"
        })
        var index = $(this).index();
        banner.css("opacity", "0").eq(index).css("opacity", "1")
    })

    let num = 0
    function move() {
        num++;
        if (num === dot.length) {
            num = 0
        }
        dot.filter(".active").removeClass("active").end().eq(num).addClass("active")
        banner.filter(".active").removeClass("active").fadeOut(200).end().eq(num).addClass("active").fadeIn(500);
    }

    var st = setInterval(move, 3000)
    $(".bd").mouseover(function () {
        clearInterval(st)
    })
    $(".bd").mouseout(function () {
        st = setInterval(move, 3000)
    })
}