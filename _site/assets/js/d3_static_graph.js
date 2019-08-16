var parent = d3.select("body")
            .select("#d3graphparent");

var element = parent.node();
var w = element.getBoundingClientRect().width;
var h = element.getBoundingClientRect().height;

var el = d3.select("body")
            .select("#d3graph");


var svg = el.append("svg")
            .attr("width", w)
            .attr("height", h);


var dataset = [];      
var n_nodes = w*h/1000;
if (n_nodes<60){n_nodes = 60}
else if (n_nodes>250){n_nodes = 250};

for (var i = 0; i < n_nodes; i++) {           
    var x = Math.random() * w;  
    var y = Math.random() * h;  
    dataset.push([x,y]);        
}

var edges = []
for (var i = 0; i < dataset.length; i++) {
    var pos1 = dataset[i];
    for (var j = i+1; j < dataset.length; j++) {
        var pos2 = dataset[j];
        if (((pos1[0]-pos2[0])**2+(pos1[1]-pos2[1])**2)**(0.5)<Math.max(60,w*0.02)){
            edges.push([i,j])
        }

    }
}              


svg.selectAll("line")
   .data(edges)
   .enter()
   .append("line")
    .attr("x1", function(d) {
        var index = d[0];
        var pos = dataset[index];
        return pos[0]
    })
    .attr("y1", function(d) {
        var index = d[0];
        var pos = dataset[index]
        return pos[1]
    })
    .attr("x2", function(d) {
        var index = d[1];
        var pos = dataset[index]
        return pos[0]
    })
    .attr("y2", function(d) {
        var index = d[1];
        var pos = dataset[index]
        return pos[1]
    })
    .attr("stroke-width", 2)
    .style("opacity", function(d){
        return Math.random()*0.4;
   	})
    .attr("stroke", function(d){
        var index = Math.floor(Math.random() * 11);
        // var colors = ['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695']
        var colors = ['#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e'];
        // var colors= ['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd'];
        return colors[index];
    });
