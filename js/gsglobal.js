
function gsBtnEnter_click() {
    $(location).prop('href', 'carInput.html');
}

function gsBtnList_click() {
    $("#gsHome").hide();
    $("#gsCarList").show();
    gsShowCarList();
}

function gsBtnSave_click() {
    saveCar();
}

function gsCarViewBack_click() {
    $(location).prop('href', 'index.html');
}

function gsCarListBack_click() {
    $(location).prop('href', 'index.html');
}

function init() {
    $("#gsBtnEnter").on("click", gsBtnEnter_click);
    $("#gsBtnList").on("click", gsBtnList_click);
    $("#gsBtnSave").on("click", gsBtnSave_click);
    $("#gsCarViewBack").on("click", gsCarViewBack_click);
    $("#gsCarListBack").on("click", gsCarListBack_click);

}


$(document).ready(function () {
    init();
    $("#gsCarList").hide();
});