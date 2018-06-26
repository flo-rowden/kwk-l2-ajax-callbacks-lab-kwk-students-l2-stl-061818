$(document).ready(function (){
});


function searchRepositories() {
  const searchTerms = $('searchTerms').val()
  $.get ('application/vnd.github.mercy-preview+json')
    $('searchTerms'); data => {
      $('#results').html();
    }
} 