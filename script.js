$(document).ready(function(){})

$('form').on('submit', function(e) {
    e.preventDefault();
    const itemNovo = $('#novo-item').val();
    const itemLista = $('<li></li>');
    $(`<div class="check-list"> ${itemNovo} </div>`).appendTo(itemLista);
    $(itemLista).appendTo('ul');
})

$('ul').on('click','li', function() {
    $(this).addClass('riscar');
})