const countryList = document.querySelector('#countryList');
const country = document.querySelector('#countryInputField');
const addBtn = document.querySelector('#countryAdd');


const addCountryToList = (country) => {
    // Make X
    const kryssUt = document.createElement('span');
    kryssUt.innerHTML = '<img class="cross" src="https://www.svgrepo.com/show/505353/cross-small.svg">';
    kryssUt.classList.add('kryssUt');

    /*make <li> */
    const listItem = document.createElement('li');
    listItem.textContent = country;

    //Make wrapper element to put x and country
    const wrapX = document.createElement('span');

;   


    // append 
    listItem.appendChild(kryssUt);
    listItem.appendChild(wrapX);
    countryList.appendChild(listItem);


}

addBtn.addEventListener('click', () => {
    const countryValue = country.value.trim();
    if (countryValue !== ''){
        addCountryToList(countryValue);
        country.value = '';
    } else {
        alert('skriv inn et land a');
    }
});







