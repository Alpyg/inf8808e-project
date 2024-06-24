/**
 * Sets the size of the SVG canvas containing the graph.
 *
 * @param {number} width The desired width
 * @param {number} height The desired height
 */
function setCanvasSize(width, height) {
  d3.select("#stackedArea")
    .select("svg")
    .attr("width", width)
    .attr("height", height);
}

/**
 * Appends an SVG g element which will contain the axes.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */
function appendAxes(g) {
  g.append("g").attr("class", "x axis");

  g.append("g").attr("class", "y axis");
}
