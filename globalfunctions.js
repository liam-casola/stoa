var alertClosed = localStorage.getItem('alertClosed');

function toggleAlert() {
    var ico = document.getElementById('alert-icon').classList;
    if (ico != null && ico.contains('alert')) {
        localStorage.setItem('alertClosed', 'true');
        document.getElementById('alert-bar').classList.add('closed');
        document.getElementById('alert-icon').classList.remove('alert');
    } else {
        localStorage.setItem('alertClosed', 'false');
        document.getElementById('alert-bar').classList.remove('closed');
        document.getElementById('alert-icon').classList.add('alert');
    }
}

var isLoggedIn = false;

if (isLoggedIn == false) {
    pages = location.href.split(/[\s/]+/);
    if (pages[pages.length-1] != 'login.html') {
        // location = 'login.html';
    }
}