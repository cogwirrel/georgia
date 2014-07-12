$(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 1024) {
    skrollr.init({forceHeight: false,smoothScrolling: true, smoothScrollingDuration: 1500});
  }
});