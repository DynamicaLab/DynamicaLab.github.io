var parent = d3.select("body")
            .select("#d3graphparent");

var element = parent.node();
var w = element.getBoundingClientRect().width;
var h = element.getBoundingClientRect().height;

var el = d3.select("body")
            .select("#d3graph");

console.log(el);
var svg = el.append("svg")
            .attr("width", w)
            .attr("height", h);


var dataset = [];      
var n_nodes = w/20;
if (n_nodes<10){n_nodes = 10}
else if (n_nodes>100){n_nodes = 100};

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
        return "white"
    });

svg.selectAll("circle-fill")
   .data(dataset)
   .enter()
   .append("circle")
       .attr("cx", function (d) { return d[0]; })
       .attr("cy", function (d) { return d[1]; })
       .attr("r", function (d) { return 5; })
       .style("fill", function(d) { return parent.style("background-color");  })
       .style("opacity", function(d){ return 1});


svg.selectAll("circles")
   .data(dataset)
   .enter()
   .append("circle")
       .attr("cx", function (d) { return d[0]; })
       .attr("cy", function (d) { return d[1]; })
       .attr("r", function (d) { return Math.random()*5; })
       .style("fill", function(d) { return "white"; })
       .attr("stroke-width", function(d){ return 1})
       .attr("stroke", function(d){ return "white"})
       .attr("fill-opacity", 0)
       .style("opacity", function(d){ return 0.4});







