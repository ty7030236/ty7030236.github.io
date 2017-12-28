// 轮播图
{
    const bannerbox = document.querySelector(".bd");
    // console.log(bannerbox);
    const banners = document.querySelectorAll(".bd ul li");
    // console.log(banners);
    const sliders = document.querySelectorAll(".hd ul li");
    // console.log(sliders);

    sliders.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (var i = 0; i < sliders.length; i++) {
                sliders[i].classList.remove("active");
                banners[i].classList.remove("active");
            }
            // 清除类名
            this.classList.add("active");
            banners[index].classList.add("active");
            num = index
            // 添加类名
        }
    });

    let num = 0;
    let move = function () {
        num++;
        if (num === sliders.length) {
            num = 0
        }
        if (num === -1) {
            num = sliders.length - 1;
        }
        // 判断
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove("active");
            banners[i].classList.remove("active");
        }
        sliders[num].classList.add("active");
        banners[num].classList.add("active");
    };

    let st = setInterval(move, 3000);
    bannerbox.onmouseover = function () {
        clearInterval(st)
    };
    bannerbox.onmouseout = function () {
        st = setInterval(move, 3000)
    };
}
