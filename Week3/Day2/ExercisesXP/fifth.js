let element = document.querySelector('h1');

element.addEventListener('click', function() {
  element.style.color = 'yellow';
});

element.addEventListener('mouseover', function() {
  element.style.fontSize = '200px';
});

element.addEventListener('mouseout', function() {
  element.style.backgroundColor = 'red';
});

element.addEventListener('dblclick', function() {
  element.style.backgroundColor = 'pink';
});