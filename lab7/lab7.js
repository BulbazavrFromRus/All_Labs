document.addEventListener('DOMContentLoaded', function() {
    createCircle(100, 100);
    

    document.body.addEventListener('click', function(event) {
        // Проверяем, что клик был по области страницы, а не по кругу
        if (!event.target.classList.contains('circle')) {
            createCircle(event.clientX - 50, event.clientY - 50);
        }
    });
});

function createCircle(x, y) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';
    

    //move circle
    circle.addEventListener('mousedown', function(event) {
        isDragging = true;
        offsetX = event.clientX - circle.getBoundingClientRect().left;
        offsetY = event.clientY - circle.getBoundingClientRect().top;
    });
    
    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            circle.style.left = (event.clientX - offsetX) + 'px';
            circle.style.top = (event.clientY - offsetY) + 'px';
        }
    });
    
    document.addEventListener('mouseup', function(event) {
        isDragging = false;
    });
    


    let clickCount = 0;

    circle.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем создание нового круга

        clickCount++;
        
        if (clickCount === 1) {
            circle.classList.add('enlarged');
        } else if (clickCount === 2) {
            circle.classList.remove('enlarged');
        } else if (clickCount === 3) {
            circle.classList.add('outline');
        } else if (clickCount === 4) {
            circle.remove();
        }
    });

    document.body.appendChild(circle);
}
