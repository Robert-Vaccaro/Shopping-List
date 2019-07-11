$(function() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();

        $('#shopping-list-entry').val('');

        $("ul").append(
            `<li><span class=\"shopping-item\">${newItem}</span><div class=\"shopping-item-controls\"><button class=\"shopping-item-toggle\"><span class=\"button-label\">check</span></button><button class=\"shopping-item-delete\"><span class=\"button-label\">delete</span></button></div></li>`
        );
    });

    $('.shopping-item').removeClass('shopping-item__checked');
    //This line is to used to get rid of the line through milk that is there //intially.

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});
