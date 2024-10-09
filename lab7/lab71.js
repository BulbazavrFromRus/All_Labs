document.addEventListener('DOMContentLoader', function(){
        createCircle(100, 100);

        document.body.addEventListener('click', function(event){

            if(!event.target.classList.contains('circle')){
                createCircle(event.clientX - 50, event.clientY - 50);
            }
        })
});

function createCircle(x, y){
const circle = document.createElement('div');
circle.classList.add('circle');
circle.style.top = y + 'px';
circle.style.left = x + 'px';

let clickCount = 0;

circle.addEventListener('click', function(event){
event.stopPropagation();
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