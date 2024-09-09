// get all html-elements we're gonna use
const countryListHTML = document.querySelector('#countryList');
const countryInputField = document.querySelector('#countryInputField');
const countryAddButton = document.querySelector('#countryAddButton');
const searchInputField = document.querySelector('#searchBar');

// make list to contain countries in an array
let countriesList = [];

// display-update function - really a part of step 4
const updateListDisplay = (countriesList) => {
    countryListHTML.innerHTML = ''; 

    countriesList.forEach(countryInputField => {

        // make a list-item from input
        const listItem = document.createElement('li');

        //content of <li> is from country input field
        listItem.textContent = countryInputField;
    

        // make delete country-button
        const removeCountry = document.createElement('span');
        removeCountry.innerHTML = '<img class="cross" src="https://www.svgrepo.com/show/505353/cross-small.svg"></img>' 
        //idk if we're really allowed to just copy an svg-link from a website like this 
    
        //on click of the X do this-
        removeCountry.addEventListener('click', () => {
            listItem.remove();
            countriesList.pop(); //make sure it's also removed from the array
        });
        countryListHTML.appendChild(listItem);
        listItem.appendChild(removeCountry);

    });
  
};

//ok so i need to add the input to the list
    const addCountryToList = (countryInputField) => { 
    countriesList.push(countryInputField); //first time trying a .push tbh
    updateListDisplay(countriesList); //show list of all entries
    
};

//listen if 'add' button is clicked and country-field is not empty
//add country to list
//empty field returns an alert
countryAddButton.addEventListener('click', () => {
    const countryContent = countryInputField.value;
    if (countryContent !== '') {
        addCountryToList(countryContent);
        countryInputField.value = ''; 
    }else {
        alert('Error: You cant leave the Country-field empty');
    };

});



// search-function A
const searchStartsWith = (element, searchWord) => {
    return element.startsWith(searchWord); 
    //returns if list-elements that start with the input == True? -yes.
};

// search-function B
 const listSearch = (yourListHere, searchWord) => {
    const filteredList = yourListHere.filter(element => searchStartsWith(element.toLowerCase(), searchWord.toLowerCase()));
    if (filteredList.length > 0){
        console.log(filteredList);
        return filteredList;
    }else {
        console.log('result !in-list');
        return [];
    }
};

//listen for input 
searchInputField.addEventListener('input', () => {
    
    //make all input lowercase to match with input to the array
        const searchInputFieldValue = searchInputField.value.toLowerCase();

    //run listSearch from step B
        let listInSearch = listSearch(countriesList, searchInputFieldValue);

    //if input-field is not empty search through list we already have
        if (searchInputFieldValue.length > 0){
            if (listInSearch !== '[]'){

                //update list with the filtered list as long as it's not empty
                if (listSearch(countriesList, searchInputFieldValue) !== '[]'){
                    updateListDisplay(listInSearch);
                }

                console.log('search input upper');
            }else{
                console.log('Searchbox empty?');
            }
    } else{
        updateListDisplay(countriesList);
    }
    }
);

// optional parts of assignments not attempted










