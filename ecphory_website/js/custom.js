console.log("hello,world");

//Makes the stage
function makeStage(w, h) {
    var bcolor = d3.rgb("#339fff")
    var stage = d3.select(".container")
    .insert("center")
    .insert("svg")
    .attr("width",w)
    .attr("height",h)
    .style("background-color", bcolor);
    //whenDone(stage);
    return stage;
}

//define a function called clearStimulus
function clearStimulus(stage) {
    stage.selectAll("text").remove();
}

//define a function called clearButton

function clearButton() {
    d3.select(".container")
    .selectAll("button")
    .remove();
}

//define function called drawStimulus
function drawWord(stage, text, x, y, font, size, color) {

 stage.insert("text").text(text)
      .attr("x",x)
      .attr("y",y)
      .attr("font-family", font)
      .attr("font-size", size)
      .attr("text-anchor", "middle")
      .attr("fill", color)
}

function drawDefinition(stage, definition, x, y, font, size, color) {

 stage.insert("text").text(definition)
      .attr("x",x)
      .attr("y",y)
      .attr("font-family", font)
      .attr("font-size", size)
      .attr("text-anchor", "middle")
      .style("text-color", color)
      .attr("font-style","italic")
}


//clearStimulus(mystage)
//clearButton();

var trials = [ {"word":"abjure", "definition": "to reject, renounce"},
               {"word":"abrogate", "definition": "to abolish, usually by authority"},
               {"word":"acerbic", "definition": "biting, bitter in tone or taste"},
               {"word":"acrimony", "definition": "bitterness, discord"}
              ];

var mystage = makeStage(600,400)
//              function (mystage) {
//                    drawStimulus(mystage,500/2,400/2,50);
//              })



//define function called drawStimulus
function drawButtons(text1, text2, text3, callback) {

  d3.select(".container")
    .insert("button")
    .attr("type","button")
    .attr("class","btn btn-default btn-lg")
    .text(text1)
    .on("click", function(d) { console.log("clicked"); callback(); } );

    d3.select(".container")
      .insert("button")
      .attr("type","button")
      .attr("class","btn btn-default btn-lg")
      .text(text2)
      .on("click", function(d) { console.log("clicked"); callback(); } );

      d3.select(".container")
        .insert("button")
        .attr("type","button")
        .attr("class","btn btn-default btn-lg")
        .text(text3)
        .on("click", function(d) { console.log("clicked"); callback(); } );
}

//drawButton("Next Trial")

function doTrial(stage, stim_array) {
    if (stim_array.length >0) {
    var stim = stim_array.shift();
    clearStimulus(stage);
    clearButton();
    drawWord(stage, stim["word"], 600/2, 400/3, "sans-serif", 100, "white");
    window.onkeydown = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 32) { //up key
            drawDefinition(stage, stim["definition"], 600/2, 250, "sans-serif", 30, "white");;
        }
    };
    drawButtons("I didn't know it", "I was close", "I know this well", function () {doTrial(stage, stim_array);});
} else {
        alert("i'm done");
    }
}




doTrial(mystage, trials)

//<button type="button" class="btn btn-default btn-lg">
//<span class="glyphicon glyphicon-star"></span> Star
//</button>
