var alertClosed = false;

function closeAlert() {
    var alertBar = document.getElementById('alert-bar');
    alertBar.classList.add('closed');
}

var isLoggedIn = false;

if (isLoggedIn == false) {
    console.log('code hit');
    pages = location.href.split(/[\s/]+/);
    if (pages[pages.length-1] != 'login.html') {
        // location = 'login.html';
    }
}