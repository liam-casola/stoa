document.addEventListener("DOMContentLoaded", function() {
    buildNavigation('primary-menu', courseData);
    selectElement(document.getElementsByClassName('button-primary')[0]);
});

function selectElement(element) {
    var buttons = document.querySelectorAll('.button-primary.focus');
    for (let e of buttons) {
        if (
            element.parentElement.id == 'primary-menu' ||
            e.parentElement.id == 'secondary-menu'
        ) {
            e.classList.remove('focus');
        }
    }
    element.classList.add('focus');
    changeData(element);
}

function changeData(element) {
    if (element.data.constructor === Array) {
        buildNavigation('secondary-menu', element.data);
        document.getElementById('secondary-menu').classList.remove('collapse');
    } else {
        if (element.parentElement.id != 'secondary-menu') {
            document.getElementById('secondary-menu').classList.add('collapse');
        }
        document.getElementById('page-frame').src = element.data;
    }
}

function buildNavigation(nav, navItems) {
    // empty the nav since it's being fille again
    document.getElementById(nav).innerHTML = '';
    
    navItems.forEach( function(p) {
        var navNode = document.createElement('button');
        var svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // var imageNode = document.createElement('image');
        
        navNode.setAttribute('class', 'button-primary');
        navNode.setAttribute('onclick', 'selectElement(this)');
        navNode.data = p.link;
        navNode.innerHTML = p.label;
        
        if(nav == 'primary-menu') {
            svgNode.setAttribute('class', 'icon');
            svgNode.setAttribute('viewBox', p.iconScale);
            // imageNode.setAttribute('href', p.icon);
            svgNode.innerHTML = p.icon;
            navNode.prepend(svgNode);    
        }
        
        document.getElementById(nav).appendChild(navNode);
    });
}