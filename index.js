$(document).ready(function (){
});

let url =''

function searchRepositories() {
  const searchTerms = $('searchTerms').val()
  $.get ('application/vnd.github.mercy-preview+json')
    $('searchTerms'); data => {
      $('#results').html();
    }
}