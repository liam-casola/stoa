function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    // isLoggedIn = true;
    location = 'index.html';
    return false;
}
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('login-area');
    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
})