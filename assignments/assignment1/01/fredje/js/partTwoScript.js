
// - Get html-elements from css-ids
const countryList = document.querySelector('#countryList');
const country = document.querySelector('#countryInputField');
const addBtn = document.querySelector('#countryAdd');




const addCountryToList = (country) => {

  //make text-input from country attached to the <li>
    const listItem = document.createElement('li');
    listItem.textContent = country;
    //append to list
    countryList.appendChild(listItem);


//Step 2

    //Make wrapper element to put x and country
    const wrapX = document.createElement('span');

    // Make X, an svg logo in an img inside a span class for the sake of css
    const kryssUt = document.createElement('span');
    kryssUt.innerHTML = '<img class="cross" src="https://www.svgrepo.com/show/505353/cross-small.svg">';
    
    // Remove clicked list-item
    kryssUt.addEventListener('click', () => {listItem.remove()});

    // append 
    listItem.appendChild(kryssUt);
    listItem.appendChild(wrapX);



};

/*checks if input is blank and 
throws an alert, if not calls
addCountry-function with the input*/
addBtn.addEventListener('click', () => {
    const countryValue = country.value;
    if (countryValue !== ''){
        addCountryToList(countryValue);
        country.value = '';
    } else {
        alert('skriv inn et land a');
    }

});

// Search-Functions 
// A 
const shortSearch = (element, searchWord) => {
    return element.startsWith(searchWord);

};
/* B, function passes the list through
  our shortSearch-function and returns
  the countries that passes*/
const listSearch = (list, searchWord) => {
    return list.filter(element => shortSearch(element, searchWord));
};


//Step 4.. Integrating it and adding update search 
//on new text-entry.
const searchInput = document.querySelector("#searchBar");
const search = (searchInput) => {
    listSearch(countryList, country);
    shortSearch()

}

