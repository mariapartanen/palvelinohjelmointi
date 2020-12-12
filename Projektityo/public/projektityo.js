const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

// 6.12. En tiedä vielä kuinka saada tiedot tallennettua tietokantaan
// Tallennetaan tuotteet/tehtävät paikalliselle levylle
if(window.localStorage.getItem("items") == undefined){
     var items = [];
     window.localStorage.setItem("items", JSON.stringify(items));
}

var itemsEX = window.localStorage.getItem("items");
var items = JSON.parse(itemsEX);


class item{
	constructor(name){
        this.createItem(name);
       
    }
     //Luodaan asialle/tehtävälle rivi
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        // Luodaan muuttuja, input-kenttä, jonne syötetään teksti
    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

        // Luodaan muuttuja, muokkaus-painike
        // Tehdään painikkeelle tapahtumankäsittely (klikkauksesta) 
    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

        // Luodaan muuttuja, poista-painike
        // Tehdään painikkeelle tapahtumankäsittely (klikkauksesta) 
    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = items.indexOf(name);
            items[indexof] = input.value;
            window.localStorage.setItem("items", JSON.stringify(items));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = items.indexOf(name);
        items.splice(index, 1);
        window.localStorage.setItem("item", JSON.stringify(items));
    }
}
// Lisätään enter-näppäimeen tapahtumankäsittely, kutsuu "check -funktion"
// Lisää uuden tuotteen/tehtävän
add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})
//Luodaan funktio tarkastamaan että kenttä on tyhjä, kun luodaan uusi tuote/tehtävä
function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        items.push(inputValue.value);
        window.localStorage.setItem("items", JSON.stringify(items));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < items.length ; v++){
    new item(items[v]);
}


