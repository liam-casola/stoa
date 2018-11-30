function selectElement(element) {
    var buttons = document.querySelectorAll('.button-primary.focus');
    for (let e of buttons) {
        e.classList.remove('focus');
    }
    element.classList.add('focus');
    changeData(element);
}

function changeData(element) {
    if (element.getAttribute('data') === 'calendar') {
        document.getElementById('page-frame').src = 'https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=mcmaster.ca_1070pjmt48obikqbsadt22bduo%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FToronto';
    } else if (element.getAttribute('data') === 'overview') {
        document.getElementById('page-frame').src = 'course1/4HC3Outline-2018.pdf';
    } else {
        document.getElementById('page-frame').src = '4HC3-Assignment%201-2018.pdf';
    }
}