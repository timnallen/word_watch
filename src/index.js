import $ from 'jquery'

$(document).ready(() => {
  var getValue = function() {fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
    .then(response => response.json())
    .then(results => {
      let word = Object.keys(results.word)
      $('h3').text(`Top results from Word Watch API: ${word} ${results.word[word]}`)
    });
  }

  getValue();

  $('#breakdown').on('click', function () {
    let value = $("textarea").val()
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
