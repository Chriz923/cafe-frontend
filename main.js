fetch('http://localhost:3000/cafes')
    .then (response => response.json())
    .then(function(cafes){
        rendercafeList(cafes);
        registerEvents(cafes);
    });

function rendercafeList(cafes) {
    console.log(cafes)

    const ul = document.querySelector('ul#cafes');
    console.log(ul);

    ul.innerHTML = '';
    for (let i = 0; i < cafes.length; i++) {
        const cafe = cafes[i];
        console.log(cafes)

        const li = document.createElement('li');
        li.innerHTML = `
    <p class="cafeName">Cafe Name: ${cafe.cafe_name}</p>
        <p class="cafeOpen">Opening Hour: ${cafe.opening_hour}</p> 
        <p class="cafelocation">Location: ${cafe.location}</p>
        <p class="cafeNumber">Telephone Number: ${cafe.cafe_number}</p>`;
        ul.appendChild(li);
    }

}


function registerEvents (cafes) {
    const button = document.querySelector('button.filter');
    console.log(button)
    button.addEventListener ('click', function (){
        const wifiInput = document.querySelector('input#wifi');
        const musicInput = document.querySelector('input#music');
        const priceInput = document.querySelector('input#prices');
        const cafenameInput = document.querySelector('input#cafename');
        const noiseInput = document.querySelector('input#noise');
        const chairInput = document.querySelector('input#chairs');
        const couchInput = document.querySelector('input#couch');
        console.log(wifiInput, musicInput, priceInput, cafenameInput, noiseInput, chairInput, couchInput);
        const minimumWifi = wifiInput.value;
        const minimumMusic = musicInput.value;
        const minimumPrices = priceInput.value;
        const minimumCafename = cafenameInput.value;
        const minimumnoise = noiseInput.value;
        const minimumChair = chairInput.value;
        const minimumCouch = couchInput.value;

        const filteredCafes = [];
        for (let i = 0; i < cafes.length; i++) {
            debugger;
            const cafe = cafes[i];
            if((cafe.prices) === (minimumPrices)){
                filteredCafes.push(cafe);}
            if((cafe.wifi) === (minimumWifi)){
                filteredCafes.push(cafe);
            }


        }
        rendercafeList(filteredCafes);
    });

}
fetch('http://localhost:3000/cafes', {
    method: "POST",
    body: JSON.stringify(cafe),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(function (isSuccessfulString) {
        console.log(isSuccessfulString);
    });



