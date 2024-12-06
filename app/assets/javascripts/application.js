//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})
document.getElementById("toggle-chart").addEventListener("click", function () {
  const chartView = document.getElementById("chart-view");
  const tableView = document.getElementById("table-view");
  const isChartVisible = !chartView.classList.contains("hidden");

  // Toggle visibility
  chartView.classList.toggle("hidden");
  tableView.classList.toggle("hidden");

  // Update button text and ARIA attributes
  this.textContent = isChartVisible ? "Change to chart view " : "Change to table and accessible view ";
  this.setAttribute("aria-expanded", !isChartVisible);
  chartView.setAttribute("aria-hidden", isChartVisible);
  tableView.setAttribute("aria-hidden", !isChartVisible);
});

