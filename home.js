function hide(element) {
    uList = element.parentElement.parentElement;
    element.parentElement.remove();
    if (uList.innerHTML.trim().length == 0) {
        listItem = document.createElement('li');
        listItem.innerHTML = 'no new announcements';
        uList.appendChild(listItem);
    }
}

function storeName() {
    console.log('name stored');
}