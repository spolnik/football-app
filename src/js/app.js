$(() => {
  return $('[data-toggle="tooltip"]').tooltip();
});

$('#menu').onePageNav({
  currentClass: "active",
  changeHash: false,
  scrollThreshold: 0.5,
  scrollSpeed: 500,
  filter: '',
  easing: 'swing'
});
