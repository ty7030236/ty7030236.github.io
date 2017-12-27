// banner效果
{
    const banners = document.querySelectorAll(".banner-image-mask>img")
    const bannerbox = document.querySelector(".banner-image-mask")
    // console.log(banners,bannerbox)
    let num = 0
    let move = function () {
        num++;
        if (num == 2) {
            num = 0
        }
        ;
        for (var i = 0; i < 2; i++) {
            banners[i].classList.remove("active");//移除类名
        }
        banners[num].classList.add("active")//当前对应的加上类名
    };
    setInterval(move, 3000)
}

// 电视应用效果
{
    const marks = document.querySelectorAll(".app-block-element-mask")
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

// 导航栏下拉效果
{
    const lis = document.querySelectorAll(".nav-one > li")
    console.log(lis)
    const sec = document.querySelectorAll(".dropdown-menu")
    console.log(sec)
    // 一般方法
    const heightarr = []
    sec.forEach(function (ele) {
        let height = ele.querySelectorAll("li").length * 30;
        heightarr.push(height)
    });
    // // 箭头函数的方法
    // const heightarr=Array.from(sec)
    //     .map(e=>e.querySelectorAll("li").length*30);
    lis.forEach(function (ele, index) {
        ele.onmouseover = function () {
            sec[index].style.height = heightarr[index] + "px"
        }
        ele.onmouseout = function () {
            sec[index].style.height = 0
        }
    })
}


