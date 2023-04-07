var urlParams = new URLSearchParams(window.location.search);
var characterId = urlParams.get('id');

$.ajax({
    url: 'https://rickandmortyapi.com/api/character/' + characterId,
    method: 'GET',
    success: function(character) {
        $('#character-image').attr('src', character.image);
        $('#character-name').text(character.name);
        $('#character-status').text('Status: ' + character.status);
        $('#character-species').text('Species: ' + character.species);
        $('#character-gender').text('Gender: ' + character.gender);
        $('#character-location').text('Location: ' + character.location.name);
        $('#character-episodes').text('Episodes: ' + character.episode.length);
    }
});

