$.ajax({
    url: 'https://rickandmortyapi.com/api/character/',
    method: 'GET',
    success: function(data) {
        $.each(data.results, function(i, character) {
            var characterCard = $('<div class="col">');
            var characterImage = $('<img>').attr('src', character.image);
            var characterName = $('<h5>').text(character.name);
            characterCard.append(characterImage).append(characterName);
            $('#character-list').append(characterCard);
            characterCard.click(function() {
                window.location.href = 'character.html?id=' + character.id;
            });
        });
    }
});

