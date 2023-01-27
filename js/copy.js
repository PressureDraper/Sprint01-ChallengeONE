$(document).ready(function() {
    var clipboard = new ClipboardJS('#copy');

    $("#copy").click(function () {
        clipboard.on('success', function(e) {
            e.clearSelection();
        });
    });
});