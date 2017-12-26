for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
        $("<div></div>").addClass("block").attr("id", j + "-" + i).appendTo(".scene");
    }
}
var snackArr = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}];
var snackHead = snackArr[snackArr.length - 1];
function drawSnack() {
    $(".snackbody").removeClass("snackbody");
    $(".snackhead").removeClass("snackhead");
    $.each(snackArr, function (index, value) {
        $("#" + value.x + "-" + value.y).addClass("snackbody");
    });
    $("#" + snackHead.x + "-" + snackHead.y).addClass("snackhead");
}
drawSnack();
var dir = "r";
function move() {
    switch (dir) {
        case "r":
            snackHead = {x: snackHead.x + 1, y: snackHead.y};
            break;
        case "l":
            snackHead = {x: snackHead.x - 1, y: snackHead.y};
            break;
        case "t":
            snackHead = {x: snackHead.x, y: snackHead.y - 1};
            break;
        case "b":
            snackHead = {x: snackHead.x, y: snackHead.y + 1};
            break;
    }

    snackArr.push(snackHead);
    var head = $("#" + snackHead.x + "-" + snackHead.y);
    if (head.hasClass("snackbody") || head.length === 0) {
        alert('game over！！ 碰壁了，还要继续加油哦！');
        location.reload();
    }
    if (head.hasClass("food")) {
        head.removeClass("food");
        createFood();
    } else {
        snackArr.shift();
    }
    drawSnack();
}


$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 65:
        case 37:
            dir = "l";
            break;
        case 87:
        case 38:
            dir = "t";
            break;
        case 68:
        case 39:
            dir = "r";
            break;
        case 83:
        case 40:
            dir = "b";
            break;
    }
});
function createFood() {
    do {
        var rx = Math.floor(Math.random() * 20);
        var ry = Math.floor(Math.random() * 20);
    } while ($("#" + rx + "-" + ry).hasClass("snackbody"));
    $("#" + rx + "-" + ry).addClass("food");
}
createFood();

$("#btn1").click(function () {
    setInterval(move, 300);
})
$("#btn2").click(function () {
    setInterval(move, 300);
})