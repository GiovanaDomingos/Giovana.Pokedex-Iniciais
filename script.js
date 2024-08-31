document.getElementById('toggle-header-btn').addEventListener('click', function() {
    var header = document.getElementById('header');
    var showButton = document.getElementById('show-header-btn');

    header.classList.toggle('hidden');

    if (header.classList.contains('hidden')) {
        showButton.classList.add('show');
    } else {
        showButton.classList.remove('show');
    }
});

document.getElementById('show-header-btn').addEventListener('click', function() {
    var header = document.getElementById('header');
    var showButton = document.getElementById('show-header-btn');

    header.classList.remove('hidden');
    showButton.classList.remove('show');
});
