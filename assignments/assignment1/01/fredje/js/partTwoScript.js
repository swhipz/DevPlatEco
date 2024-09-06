
// - Get html-elements from css-ids
const countryHtmlList = document.querySelector('#countryList');
const country = document.querySelector('#countryInputField');
const addBtn = document.querySelector('#countryAdd');
//s4
const searchInput = document.querySelector('#searchBar');



const addCountryToList = (country) => {

  //make text-input from country attached to the <li>
    const listItem = document.createElement('li');
    listItem.textContent = country;
    //append to list
    countryHtmlList.appendChild(listItem);


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
        alert('Enter a country');
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


//Step 4.. Integrating search and adding update search on new text-entry.


//define list
let listOfCountries = [];

//get input-field

//listen for inputs to search-field?
searchInput.addEventListener('input', () => {
    //make all input lowercase to remove case-sensetive search issues
    const searchWord = searchInput.value.toLowerCase();
    const countryList = listOfCountries.filter(country => shortSearch(element.toLowercase(), searchWord.toLowerCase()));


});

// Function to update search 
const updateSearchResults = (listOfCountries) => {
    countryHtmlList.innerHTML = '';
    listOfCountries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = country;
        console.log('added' + country);

        countryHtmlList.appendChild(listItem);
    })

}

