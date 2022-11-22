fetch('http://localhost:3000/cafes')
    .then (response => response.json())
    .then(function(cafes){
        rendercafeList(cafes);
    });
function rendercafeList(cafes) {
    console.log(cafes)
    const ul = document.querySelector('ul#cafeList');
    console.log(ul);
    ul.innerHTML = '';
    for (let i = 0; i < cafes.length; i++) {
        const cafe = cafes[i];
        console.log(cafe)
    }
    const li = document.createElement('li');
    li.innerHTML = `
    <p class="text">${cafes.text}</p>`;
    ul.appendChild(li);
}

function registerEventlisteners (cafes) {
    const button = document.querySelector('button.minimum');
    console.log(button)
    const minimumInput = document.querySelector('input');
    button.addEventListener ('click', function (){
        const minimumPrice = minimumInput.value;
        const filtercafes = cafes.filter(cafe => parseInt(cafe.price) > minimumPrice);
        rendercafeList(filtercafes);
    });

}