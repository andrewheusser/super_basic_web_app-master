console.log("hello,world");

//Makes the stage
function makeStage(w, h) {
    var stage = d3.select(".container")
    .insert("svg")
    .attr("width",w)
    .attr("height",h)
    //whenDone(stage);
    return stage;
}

//define a function called clearStimulus
function clearStimulus(stage) {
    stage.selectAll("circle").remove();
}

//define a function called clearButton

function clearButton() {
    d3.select(".container")
    .selectAll("button")
    .remove();
}

//define function called drawStimulus
function drawStimulus(stage,cx,cy,radius,circleColor) {
    
 stage.insert("circle")
      .attr("cx",cx)
      .attr("cy",cy)
      .attr("r",radius)
      .attr("fill",circleColor)
      //.attr("stroke",strokeColor)
      //.attr("stroke-width",5)
}


//clearStimulus(mystage)
//clearButton();

var trials = [ {"color":"lightblue", "radius":20},
               {"color":"yellow", "radius":20},
               {"color":"green", "radius":50},
               {"color":"purple", "radius":20}
              ];

var mystage = makeStage(500,400)
//              function (mystage) {
//                    drawStimulus(mystage,500/2,400/2,50);
//              })



//define function called drawStimulus
function drawButton(text, callback) {
    
  d3.select(".container")
    .insert("button")
    .attr("type","button")
    .attr("class","btn btn-default btn-lg")
    .text(text)
    .on("click", function(d) { console.log("clicked"); callback(); } );
}

//drawButton("Next Trial")

function doTrial(stage, stim_array) {
    if (stim_array.length >0) {
    var stim = stim_array.shift();
    clearStimulus(stage);
    clearButton();
    drawStimulus(stage, 500/2., 400/2., stim["radius"], stim["color"], stim["color"]);
    drawButton("Next Trial", function () {doTrial(stage, stim_array);});
} else {
        alert("i'm done");
    }
}


doTrial(mystage, trials)

//<button type="button" class="btn btn-default btn-lg">
//<span class="glyphicon glyphicon-star"></span> Star
//</button>