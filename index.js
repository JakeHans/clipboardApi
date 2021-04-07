var  clipboard =new ClipboardJS('.btn', {
    text: function(trigger) {
        return trigger.getAttribute('aria-label');
    }
});


clipboard.on('success', function(e) {

    var button = document.querySelector('button');

    e.clearSelection();

    button.innerText = "copied!"

    setTimeout(function () {

        button.innerText = "copy"

        
    }, 2000)

});


