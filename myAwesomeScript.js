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

  // handle the event called click
  $('#submitBtn').on('click', whenIAddAHarmonica);
  $('.deleteBtn').on('click', deleteMe);
  // delete btn is created on load so vv
  // event delegation
  // descendent selectors

  $('#harmonicas').on('click', '.deleteBtn', deleteMe);
  console.log('delete Btn is', $('.deleteBtn'));
}

function deleteMe() {
  // this refers to the specific thing we target at the time of the event
  let thisThing = $(this);
  console.log('Whats this?', thisThing);
  $(this).parent().remove();
}

// if we put in "event" for the argument
function whenIAddAHarmonica(event) {
  // this will allow us to ignore the default behavior of reloading on the page at
  // the time of form submission

  event.preventDefault();
  // stuff to do when we add a harmonica
  console.log('clicked the btn');

  // grab that data
  let brand = $('#brand').val();
  console.log('brand is', brand);

  $('#harmonicas').append(`
  <li class="harmonica-item">
    Brand is: ${brand}
    <button class="deleteBtn">Delete Me</button>
  </li>
  `);
}
