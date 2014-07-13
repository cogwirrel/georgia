$(document).ready(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 1024) {
  	console.log("Start skrollr");
    window.skrl = skrollr.init({forceHeight: false,smoothScrolling: true, smoothScrollingDuration: 1500});
  }
});