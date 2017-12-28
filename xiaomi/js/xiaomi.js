// 轮播图
{
    const bannerbox = document.querySelector(".banner-box")
    // console.log(bannerbox)
    const banners = document.querySelectorAll(".banner-box a img")
    // console.log(banners)
    const sliders = document.querySelectorAll(".lunbodian-box div a")
    // console.log(sliders)

    sliders.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (var i = 0; i < sliders.length; i++) {
                sliders[i].classList.remove("active")
                banners[i].classList.remove("active");
            }
            // 清除类名
            this.classList.add("active");
            banners[index].classList.add("active")
            num = index
            // 添加类名
        }
    })


    let num = 0
    let move = function () {
        num++;
        if (num == sliders.length) {
            num = 0
        }
        // 判断
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove("active");
            banners[i].classList.remove("active");
        }
        sliders[num].classList.add("active")
        banners[num].classList.add("active")
    };
}

// 选项卡
{
    const banners = document.querySelectorAll(".banner-box a img")
    const sliders = document.querySelectorAll(".lunbodian-box div a")
    const bannerbox = document.querySelector(".banner-box")//获取单个元素.bannerbox
    const prev = document.querySelector(".xuanxiangka-left")
    // console.log(prev)
    const next = document.querySelector(".xuanxiangka-right")
    // console.log(next)
    sliders.forEach(function (ele, index) {   //ele代表的  dianlist    index索引值
        ele.onmouseover = function () {
            for (let i = 0; i < sliders.length; i++) {
                sliders[i].classList.remove("active");  //移除类名
                banners[i].classList.remove("active");//移除类名
            }
            this.classList.add("active");
            banners[index].classList.add("active");
            // bannerbox.style.background = colorarr[index]
            num = index
        }
    })

    //自动切换轮播图
    let num = 0
    let move = function () {
        num++;
        if (num == sliders.length) {
            num = 0
        }
        ;
        if (num == -1) {
            num = sliders.length - 1;
        }
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove("active");//移除类名
            banners[i].classList.remove("active");//移除类名
        }
        sliders[num].classList.add("active")//当前对应的加上类名
        banners[num].classList.add("active")//当前对应的加上类名
    };
    let st = setInterval(move, 3000)
    bannerbox.onmouseover = function () {
        clearInterval(st)
    }
    bannerbox.onmouseout = function () {
        st = setInterval(move, 3000)
    }
    next.onclick = function () {
        move();
    };
    prev.onclick = function () {
        num -= 2;
        move();
    };
}


// 内容选项卡
{
    let bannerbox = document.querySelectorAll(".neirong-box>div ")
    // console.log(bannerbox)

    function xiaomibanner(bannerbox) {//此处封装以下内容
        let banner = bannerbox.querySelector(".neirong-box >div .neirong-box-one-inner")
        // console.log(banner)
        let dians = bannerbox.querySelectorAll(".neirong-box>div .neirong-dot")
        // console.log(dians)
        let next = bannerbox.querySelector(".neirong-box>div .neirong-xxk-right-box")
        // console.log(next)
        let prev = bannerbox.querySelector(".neirong-box >div .neirong-xxk-left-box")
        // console.log(prev)
        let now = 0

        // console.log(now)
        //点击圆点的时候图片的切换
        dians.forEach(function (ele, index) {
            ele.onclick = function () {
                let left = -index * 296;
                banner.style.left = left + "px"
                dians[now].style.background = "#B0B0B0";
                dians[now].style.border = "2px solid #fff"
                this.style.background = "#fff"
                this.style.border = "2px solid #FF6700"
                now = index;
            }
        })
        //以下是点击左右箭头的时候，点颜色的变化和图片的切换
        next.onclick = function () {
            if (now === dians.length - 1) {
                return
            }
            dians[now].style.background = "#B0B0B0"
            dians[now].style.border = "2px solid #fff"
            now++;
            banner.style.left = -now * 296 + "px"
            dians[now].style.background = "#fff";
            dians[now].style.border = "2px solid #FF6700"
        }
        prev.onclick = function () {
            if (now === 0) {//左右箭头点击点击到最后一张的时候就点不动不能点了
                return;
            }
            dians[now].style.background = "#B0B0B0";
            dians[now].style.border = "2px solid #fff"
            now--;
            banner.style.left = -now * 296 + "px"
            dians[now].style.background = "#fff";
            dians[now].style.border = "2px solid #FF6700"
        }
        //下面是鼠标经过的时候左右箭头显示，离开的时候左右箭头隐藏
        bannerbox.onmouseover = function () {
            prev.style.opacity = "0.7"
            next.style.opacity = "0.7"
            //opacity中1是显示0是隐藏
        }
        bannerbox.onmouseout = function () {
            prev.style.opacity = "0"
            next.style.opacity = "0"
            //opacity中1是显示0是隐藏
        }
    }

    bannerbox.forEach(function (ele) {
        xiaomibanner(ele);//调用封装函数
    })
}


// 小米明星单品
{
    let banner = document.querySelector(".xiaomi-bgbox-inner")
    // console.log(banner)
    let next = document.querySelector(".xiaomi-star-xxk-right")
    // console.log(next)
    let prev = document.querySelector(".xiaomi-star-xxk-left")
    // console.log(prev)
    let now = 0
    // console.log(now)

    next.onclick = function () {
        if (now === 1) {
            return
        }
        now++;
        banner.style.left = -now * 1200 + "px"
    }
    prev.onclick = function () {
        if (now === 0) {//左右箭头点击点击到最后一张的时候就点不动不能点了
            return;
        }
        now--;
        banner.style.left = -now * 1200 + "px"
    }
}
