window.addEventListener("DOMContentLoaded", function() {
  let LoadingTime = 0;
  let endTime = new Date().getTime();
  LoadingTime = endTime - performance.timing.navigationStart;
  document.getElementById("time").innerHTML = `Page loaded - ${LoadingTime} ms`
});