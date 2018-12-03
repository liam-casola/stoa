document.addEventListener("DOMContentLoaded", function() {
  console.log('buildNav');
});

function selectElement(element) {
    var buttons = document.querySelectorAll('.button-primary.focus');
    for (let e of buttons) {
        e.classList.remove('focus');
    }
    element.classList.add('focus');
    changeData(element);
}

function changeData(element) {
    var secondaryMenu = false;
    
    if (element.getAttribute('data') === 'announcement') {
        document.getElementById('page-frame').src = 'announcement.html';
    } else if (element.getAttribute('data') === 'calendar') {
        document.getElementById('page-frame').src = 'https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=mcmaster.ca_1070pjmt48obikqbsadt22bduo%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FToronto';
    } else if (element.getAttribute('data') === 'overview') {
        document.getElementById('page-frame').src = 'course1/outline.pdf';
    } else if (element.getAttribute('data') === 'grade') {
        document.getElementById('page-frame').src = 'grade.html';
    } else if (element.getAttribute('data') === 'lecture') {
        document.getElementById('secondary-menu').classList.remove('collapse');
        secondaryMenu = true;
    } else {
        document.getElementById('page-frame').src = 'course1/assignment_1.pdf';
    }
    
    if(secondaryMenu === false){
       document.getElementById('secondary-menu').classList.add('collapse');
    }
}

function buildNavigation() {
    courseData.forEach( function(p) {
        var navNode = document.createElement('button');
        var svgNode = document.createElement('svg');
        var imageNode = document.createElement('image');
        navNode.setAttribute('class', 'button-primary');
        navNode.setAttribute('onclick', 'selectElement(this)');
        navNode.setAttribute('data', p.data);
        svgNode.setAttribute('class', 'icon');
        imageNode.setAttribute('xlink:href', p.link);
        
        // complete me
    });
}