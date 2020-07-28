var myUI;
myUI = {
    init: function(){
        var startPage = createEle("div");

        startPage.className = "startPage";
        startPage.append("game will go here");

        body.append(startPage);
    }
}

window.onload = function() {
    myUI.init();
}