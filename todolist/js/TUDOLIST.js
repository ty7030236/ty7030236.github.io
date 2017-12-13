
$(".textarea").on("keydown keyup", function () {
    var l = $(this).val().length;
    if (l > 40) {
        l = 40;
        alert("请输入正确字数限制")
        $(this).val(function (i, val) {
            return val.slice(0, 40)
        });
    }
    $(".notice span").text(function () {
        return l < 10 ? "0" + l : l;
    });
});

$(".submit").click(function () {
    var val=$(".textarea").val();
    if(val===""){
        alert("请输入内容再提交");
        return;
    }
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time,isDone:false,isStar:false,isDelete:false});
    saveData(data);
    $(".textarea").val("");
    $(".notice span").text("00");
    alert("添加成功")
    reWrite();
})


$(".close").click(function () {
    $(".add").slideUp(500);
    $(".wait").delay(500).slideDown(1000);
})


function getData() {
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else {
        return [];
    }
}
function saveData(data) {
    localStorage.todo=JSON.stringify(data);
}

function reWrite() {
    $(".item ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function (index,value) {
        if(value.isDone==false){
            str1+=`<div id="${index}">
                            <li class="check"><input type="checkbox"></li>
                            <li class="text">${value.text}</li>
                            <li class="time">${time(value.time)}</li>
                            <i class="iconfont star">&#xe622;</i>
                        </div>`
        }else {
            str2+=`<div id="${index}">
                            <li class="check"><input type="checkbox"></li>
                            <li class="text">${value.text}</li>
                            <li class="time">${time(value.time)}</li>
                            <i class="star"></i>
                        </div>`
        }
    })
    $(".waitcon ul").html(str1);
    $(".donecon ul").html(str2);
}
reWrite();
$(".addbtn").click(function () {
    $(".wait").slideUp(200);
    $(".add").slideDown(200);
})
function time(ms) {
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    var mouth=date.getMonth()+1;
    var getdate=date.getDate();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    return year+"/"+mouth+"/"+getdate+"&nbsp;"+hour+":"+minute+":"+second;
}
$(".movetobtn").click(function () {
    $(".waitcon .waitList div").each(function () {
        var data=getData();
        if($(this).find(":checkbox").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDone=true;
        }
        saveData(data);
        reWrite();
    })
})
$(".moveoutbtn").click(function () {
    var data=getData();
    $(".donecon .doneList div").each(function () {
        if($(this).find(":checkbox").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDelete=true;
        }
    })
    data=data.filter(function (ele) {
        return !ele.isDelete;
    })
    saveData(data);
    reWrite();
})
$(".leftbar ul li").click(function () {
    $(".add").slideUp(200);
    var index=$(this).index();
    $(".con .items").slideUp(200).eq(index-1).slideDown(200);
})
