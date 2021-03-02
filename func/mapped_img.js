function calculate_mapped_img_size(number) {
    return (840-(20*(number)))/number;
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, rgbToHex(15,15,15)],
    ["Silver", 10.49, rgbToHex(15,15,15)],
    ["Gold", 19.30, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"]
  ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

  var options = {
    title: "color percentage",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}
var checkboxes=[];

function check_function(numbe) {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
    if(numbe == 2){
    text.style.display = "block";
    document.getElementById("templates").innerHTML =` ${paintings_names.map(imageTemplate).join('')};`
    document.getElementById("templates").innerHTML +=` ${paintings_names.map(mappingTemplate).join('')};`
    checkBox.checked = false;
    }
  } 
  else 
  {
     text.style.display = "none";
  }
}