import $ from 'jquery'

$(document).ready(() => {
  var getValue = function() {fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
    .then(response => response.json())
    .then(results => {
      let word = Object.keys(results.word);
      let count = results.word[word];
      let upWord = word[0].toUpperCase();
      $('#word').text(`${upWord}`);
      $('#count').text(`${count}`);
    });
  }

  getValue();

  $('#breakdown').on('click', function () {
    let value = $("textarea").val()
    alert(value + " was submitted!")
    var words = value.split(" ")
    for (let counter = 0; counter < words.length; counter++) {
      $.post("https://wordwatch-api.herokuapp.com/api/v1/words", { word: { value: words[counter] } })
        .done(response => {
          console.log(response);
        });
    }
    getValue();
  });
});
