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
                    $(".blockquote p").css("margin-left", "800px").animate({"margin-left": 0,}, 2000);
                    $(".blockquote .author").css("margin-left", "800px").animate({"margin-left": 0}, 2000);
                    $(".download h3").css("margin-top", "1000px").animate({"margin-top": 0,}, 3000);
                    $(".download p").css("margin-top", "1000px").animate({"margin-top": 0,}, 3000);
                }
            },
            onLeave: function (anchor, index) {
                if (index === 4) {
                    $(".blockquote p").animate({"margin-left": "800px"}, 2000);
                    $(".blockquote .author").animate({"margin-left": "800px"}, 2000);
                    $(".download h3").animate({"margin-top": "1000px",}, 2000);
                    $(".download p").animate({"margin-top": "1000px",}, 2000);
                }
            }
        });
    });
}

{
    const marks = document.querySelectorAll(".mask")
    marks.forEach(function (ele, index) {
        ele.onmouseover = function () {
            marks[index].style.opacity = "1"
            marks[index].style.transition = ".2s all"

        }
        ele.onmouseout = function () {
            marks[index].style.opacity = "0"
            marks[index].style.transition = ".2s all"
        }
    })
}

{
    let canvas1 = document.querySelector("#can1")
    let canvas2 = document.querySelector("#can2")
    let canvas3 = document.querySelector("#can3")
    let canvas4 = document.querySelector("#can4")
    let canvas5 = document.querySelector("#can5")
    let canvas6 = document.querySelector("#can6")
    let canvas7 = document.querySelector("#can7")
    let canvas8 = document.querySelector("#can8")

    function progress(canvas, percent, color = "red") {
        let cobj = canvas.getContext("2d");
        let [width,height]=[canvas.width, canvas.height]
        cobj.translate(canvas.width / 2, canvas.height / 2);
        cobj.restore(-Math.PI / 2);
        let maxangle = 360 * percent / 100;
        cobj.strokeStyle = color;
        cobj.lineWidth = 10;
        let angle = 0
        cobj.font = '20px 微软雅黑'
        cobj.textAlign = "center"
        cobj.textBaseline = "middle"
        function fn() {
            angle++
            cobj.clearRect(-width / 2, -height / 2, width, height)
            cobj.beginPath();
            cobj.arc(0, 0, width * 0.4, 0, angle * Math.PI / 180)
            cobj.fillText(Math.round(angle / 360 * 100) + "%", 0, 0)
            cobj.stroke()
            if (angle >= maxangle) {
                return
            }
            requestAnimationFrame(fn)
        }

        fn()
    }

//    接收一个画布对象 接收一个百分比 接收一个颜色
    
    progress(canvas1, 100, "orange")
    progress(canvas2, 85, "red")
    progress(canvas3, 90, "yellow")
    progress(canvas4, 80, "green")
    progress(canvas5, 70, "red")
    progress(canvas6, 75, "blue")
    progress(canvas7, 90, "gary")
    progress(canvas8, 73, "pink")
}
