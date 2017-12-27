{
    $(function () {
        $("#dowebok").fullpage({
            autoScrolling: true,
            scrollingSpeed: 700,
            continuousVertical: true, //循环滚动
            css3: true,
            slidesNavigation: true,
            anchors: ["a", "b", "c", "d", "e", "f", "g"],
            afterLoad: function (anchor, index) {
                if (index === 4) {
                    $(".blockquote p").css("margin-left", "800px").animate({"margin-left": 0}, 2000);
                    $(".blockquote .author").css("margin-left", "800px").animate({"margin-left": 0}, 2000);
                    $(".download h3").css("margin-top", "1000px").animate({"margin-top": 0}, 3000);
                    $(".download p").css("margin-top", "1000px").animate({"margin-top": 0}, 3000);
                }
            },
            onLeave: function (anchor, index) {
                if (index === 4) {
                    $(".blockquote p").animate({"margin-left": "800px"}, 2000);
                    $(".blockquote .author").animate({"margin-left": "800px"}, 2000);
                    $(".download h3").animate({"margin-top": "1000px"}, 2000);
                    $(".download p").animate({"margin-top": "1000px"}, 2000);
                }
            }
        });
    });
}

{
    const marks = document.querySelectorAll(".mask");
    marks.forEach(function (ele, index) {
        ele.onmouseover = function () {
            marks[index].style.opacity = "1";
            marks[index].style.transition = ".2s all"

        };
        ele.onmouseout = function () {
            marks[index].style.opacity = "0";
            marks[index].style.transition = ".2s all"
        }
    })
}

