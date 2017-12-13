$.ajax({
    url: "http://api.jisuapi.com/area/province",
    data: {appkey: "21ae63b92a5f3c32"},
    dataType: "jsonp",
    success: function (r) {
        $.each(r.result, function (index, v) {
            $("<option>").html(v.name).val(v.id).appendTo("#province");
        })
    }
});

$("#province").on("change blur", function () {
    var parentId = $(this).val();
    $.ajax({
        url: "http://api.jisuapi.com/area/city",
        data: {
            parentid: parentId,
            appkey: "21ae63b92a5f3c32",
        },
        dataType: "jsonp",
        success: function (r) {
            $("#city").empty();
            $.each(r.result, function (index, v) {
                $("<option>").val(v.id).html(v.name).appendTo("#city");
            })
        }
    })
})


$("#search").on("click", function () {
    var cityId = $("#city").val();
    $.ajax({
        url: "http://api.jisuapi.com/weather/query",
        dataType: "jsonp",
        data: {
            cityid: cityId,
            appkey: "21ae63b92a5f3c32"
        },
        success: function (r) {
            var v = r.result;
            console.log(r);
            $("#cy").html(v.city);
            $("#date").html(v.date + " " + v.week);
            $(".img").html(`<img src='icon/天气图标/weathercn/${v.daily[0].day.img}.png'>`);
            $("#wendu").html(v.daily[0].day.temphigh + "~" + v.daily[0].night.templow + "℃");
            $("#tianqi").html(v.weather);
            $("#fengxiang").html(v.winddirect);
            $("#iso2").html(v.aqi.iso2);
            $("#ino2").html(v.aqi.ino2);
            $("#ico").html(v.aqi.ico);
            $("#io3").html(v.aqi.io3);
            $("#quality").html(v.aqi.quality);
            $("#color").html(`<div style='background:${v.aqi.aqiinfo.color};width:20px;height:10px;display: inline-block;margin-left:5px'></div>`);
            $("#affect").html(v.aqi.aqiinfo.affect);
            $("#measure").html(v.aqi.aqiinfo.measure);
            $(".week").html(v.daily[1].week);
            $(".riqi").html(v.daily[1].date);
            $(".img2").html(`<img src='icon/天气图标/weathercn/${v.daily[1].day.img}.png'>`);
            $(".qiwen").html(v.daily[1].day.temphigh + "~" + v.daily[1].night.templow + "℃");
            $(".tianqi").html(v.daily[1].day.weather);
            $(".fengxiang").html(v.daily[1].day.windpower);
            $(".week2").html(v.daily[2].week);
            $(".riqi2").html(v.daily[2].date);
            $(".img3").html(`<img src='icon/天气图标/weathercn/${v.daily[2].day.img}.png'>`);
            $(".qiwen2").html(v.daily[2].day.temphigh + "~" + v.daily[2].night.templow + "℃");
            $(".tianqi2").html(v.daily[2].day.weather);
            $(".fengxiang2").html(v.daily[2].day.windpower);
            $(".week3").html(v.daily[3].week);
            $(".riqi3").html(v.daily[3].date);
            $(".img4").html(`<img src='icon/天气图标/weathercn/${v.daily[3].day.img}.png'>`);
            $(".qiwen3").html(v.daily[3].day.temphigh + "~" + v.daily[3].night.templow + "℃");
            $(".tianqi3").html(v.daily[3].day.weather);
            $(".fengxiang3").html(v.daily[3].day.windpower);
            $(".week4").html(v.daily[4].week);
            $(".riqi4").html(v.daily[4].date);
            $(".img5").html(`<img src='icon/天气图标/weathercn/${v.daily[4].day.img}.png'>`);
            $(".qiwen4").html(v.daily[4].day.temphigh + "~" + v.daily[4].night.templow + "℃");
            $(".tianqi4").html(v.daily[4].day.weather);
            $(".fengxiang4").html(v.daily[4].day.windpower);
        }
    })
})

// $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js", function () {
//     var city = remote_ip_info.city;
//
//
//
// });
