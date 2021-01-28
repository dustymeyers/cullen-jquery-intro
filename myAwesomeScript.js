console.log('I haz JS');

$(document).ready(onReady);

function onReady() {
  console.log('onReady');
  // $ is the name of jQuery's function
  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  // h2.css('background-color', 'green');
  // same as $('h2').css('background-color', 'green
  $('h2').addClass('froggy');

  // change the text
  const h1Text = $('h1').text();
  console.log('h1Text is', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!!';
  $('h1').text(louderText);
}
