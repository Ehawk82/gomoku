var myUI;
myUI = {
    init: function(){
        var startPage = createEle("div"),
        	gameChoice = createEle("div"),
        	small = createEle("button"), large = createEle("button");

        small.innerHTML = "15x15";
        small.onclick = myUI.evalBoardChoice(15,startPage);

        large.innerHTML = "19x19";
        large.onclick = myUI.evalBoardChoice(19,startPage);

        gameChoice.className = "gameChoice";
        gameChoice.append(small,large);

        startPage.className = "startPage";
        startPage.append(gameChoice);

        body.append(startPage);

        setTimeout(function(){
        	makeFull(startPage);
        },0);
    },
    evalBoardChoice: function(c,startPage){
    	return function(){
    		takeFull(startPage);
    		deleteThis(startPage,1001);
    		setTimeout(function(){
    			myUI.createBoard(c);
        	},1002);
    	}
    },
    createBoard: function(c){
    	var tb = createEle("table");

    	for (var i = 0; i < c; i++) {
    		var tr = createEle("tr");

    		for (var k = 0; k < c; k++) {
    			var td = createEle("td");
    			
    			td.innerHTML = "⚫";

    			tr.append(td);
    		}

    		tb.append(tr);
    	}

    	body.append(tb);
    }
};

window.onload = function() {
    myUI.init();
}