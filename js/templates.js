let buildings = document.querySelectorAll('.build');

let oneHouse = ` <img class="hh1" src="images/house.png"/>`,
    twoHouses = ` <img class="hh1" src="images/house.png"/>
        <img class="hh2" src="images/house.png"/>`,
    treeHouses = ` <img class="hh1" src="images/house.png"/>
        <img class="hh2" src="images/house.png"/>
        <img class="hh3" src="images/house.png"/>`,
    fourHouses = ` <img class="hh1" src="images/house.png"/>
        <img class="hh2" src="images/house.png"/>
        <img class="hh3" src="images/house.png"/>
        <img class="hh4" src="images/house.png"/>`,
    oneHotel =` <img class="ho1" src="images/hotel.png"/> `
    oneHotelV = 1;

for(let i = 0; i < buildings.length; i++) {
        buildings[i].setAttribute('title', 'Click here to build');

        buildings[i].addEventListener('click', function() {
        let buildOptions = document.getElementById('buildOptions'),
            buildTemplate = `
        <div id="buildHeader">
            <h2 id="buildName">${buildObj[i].name}</h2>
            <table id="buildMiddle">
                <tr>
                    <td colspan="3"><b>Owned by:</b></td>
                    <td id="ownedBy"><b>${buildings[i].innerHTML}</b></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="ho1" type="radio" name="house"/></td>
                    <td><label for="ho1">1 House</lable></td>
                    <td id="house1">${buildObj[i].card[1]}$</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="ho2" type="radio" name="house"/></td>
                    <td><label for="ho2">2 Houses</lable></td>
                    <td id="house2">${buildObj[i].card[2]}$</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="ho3" type="radio" name="house"/></td>
                    <td><label for="ho3">3 Houses</lable></td>
                    <td id="house3">${buildObj[i].card[3]}$</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="ho4" type="radio" name="house"/></td>
                    <td><label for="ho4">4 Houses</lable></td>
                    <td id="house4">${buildObj[i].card[4]}$</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="hot" type="radio" name="hotel"/></td>
                    <td><label for="hot">HOTEL</lable></td>
                    <td id="hotel">${buildObj[i].card[5]}$</td>
                </tr>
            </table>
        </div>
        <p>If a player owns all the sites of any Color-Group, he can <u>build</u> houses and hotels</p>
        <div id="buildFooter">
                <p id="mortgage"><b>MORTGAGE value ${buildObj[i].card[6]}$</b></p>
            <table id="buildBottom">
                <tr>
                    <td colspan="2">Houses cost</td>
                    <td id="houseCost">${buildObj[i].card[7]}$</td>
                    <td>each</td>
                </tr>
                <tr>
                    <td colspan="2">Hotels cost</td>
                    <td id="hotelCost">${buildObj[i].card[8]}$</td>
                    <td>each</td>
                </tr>
                <tr>
                    <td colspan="4">plus 4 houses</td>
                </tr>
            </table>
        </div>
        <div class="buttonMenu">
            <a id="build" href="#build"><p id="buildText">Build</p></a>
            <a id="cancel" href="#cancel"><p id="cancelText">Cancel</p></a>
        </div>`;
        buildOptions.innerHTML = buildTemplate;
        buildOptions.style.display = 'grid';
        document.getElementById('buildName').style.background = buildObj[i].color;

        let build = document.getElementById('build');
        build.addEventListener('click', function() {
            let ho1 = document.getElementById('ho1'),
                ho2 = document.getElementById('ho2'),
                ho3 = document.getElementById('ho3'),
                ho4 = document.getElementById('ho4'),
                hot = document.getElementById('hot');
            function checkRadio(hhot, structure, cards, bs){
                if(hhot.checked && document.getElementById(buildField[i]).childNodes.length <= 7) {
                    let hh = document.createElement('div');
                    hh.setAttribute('class', 'hhh');
                    hh.innerHTML = structure;
                    buildings[i].insertAdjacentElement('afterEnd', hh);
                    buildOptions.innerHTML = "";
                    buildOptions.style.display = 'none';
                    if (buildings[i].innerHTML == "Car") {
                        if (buildings[i].nextElementSibling.innerHTML = structure) {
                            carBallance.innerHTML = (carObj.cash - buildObj[i].card[cards]) + " $";
                            carObj.cash -= buildObj[i].card[cards];
                            carObj.houses = bs;
                            carHouses.innerHTML = carObj.houses;
                        }
                    } else if (buildings[i].innerHTML == "Shoe") {
                        if (buildings[i].nextElementSibling.innerHTML = structure) {
                            shoeBallance.innerHTML = (shoeObj.cash - buildObj[i].card[cards]) + " $";
                            shoeObj.cash -= buildObj[i].card[cards];
                            shoeObj.houses = bs;
                            shoeHouses.innerHTML = shoeObj.houses;
                        }
                    } else if (buildings[i].innerHTML == "Hat") {
                        if (buildings[i].nextElementSibling.innerHTML = structure) {
                            hatBallance.innerHTML = (hatObj.cash - buildObj[i].card[cards]) + " $";
                            hatObj.cash -= buildObj[i].card[cards];
                            hatObj.houses = bs;
                            hatHouses.innerHTML = hatObj.houses;
                        }
                    } else if (buildings[i].innerHTML == "Dog") {
                        if (buildings[i].nextElementSibling.innerHTML = structure) {
                            dogBallance.innerHTML = (dogObj.cash - buildObj[i].card[cards]) + " $";
                            dogObj.cash -= buildObj[i].card[cards];
                            dogObj.houses = bs;
                            dogHouses.innerHTML = dogObj.houses;
                        }
                    } else {
                        buildings[i].nextElementSibling.innerHTML = "";
                        alert("You need to own the property in order to build");
                    }
                } else if (hhot.checked && buildings[i].nextElementSibling.childElementCount > 0) {
                    if(buildings[i].nextElementSibling.childElementCount >= 5) {
                        alert("You can't build more than 5 buildings per street");
                    } else {
                        
                    buildings[i].nextElementSibling.innerHTML += structure;
                    buildOptions.innerHTML = "";
                    buildOptions.style.display = 'none';
                    if (buildings[i].innerHTML == "Car") {
                        if (structure && buildings[i].nextElementSibling.childElementCount <= 5) {
                            carBallance.innerHTML = (carObj.cash - buildObj[i].card[cards]) + " $";
                            carObj.cash -= buildObj[i].card[cards];
                            carObj.houses += bs;
                            carHouses.innerHTML = carObj.houses;
                        }
                    } else if (buildings[i].innerHTML == "Shoe") {
                        if (structure && buildings[i].nextElementSibling.childElementCount <= 5) {
                            shoeBallance.innerHTML = (shoeObj.cash - buildObj[i].card[cards]) + " $";
                            shoeObj.cash -= buildObj[i].card[cards];
                            shoeObj.houses += bs;
                            shoeHouses.innerHTML = shoeObj.houses;
                        }
                    } else if (buildings[i].innerHTML == "Hat") {
                        if (structure && buildings[i].nextElementSibling.childElementCount <= 5) {
                            hatBallance.innerHTML = (hatObj.cash - buildObj[i].card[cards]) + " $";
                            hatObj.cash -= buildObj[i].card[cards];
                            hatObj.houses += bs;
                            hatHouses.innerHTML = hatObj.houses;
                        }
                    } else if (buildings[i].innerHTML == "Dog") {
                        if (structure && buildings[i].nextElementSibling.childElementCount <= 5) {
                            dogBallance.innerHTML = (dogObj.cash - buildObj[i].card[cards]) + " $";
                            dogObj.cash -= buildObj[i].card[cards];
                            dogObj.houses += bs;
                            dogHouses.innerHTML = dogObj.houses;
                        }
                    } else {
                        alert("You can't build more than 5 buildings per street");
                    }
                        if (buildings[i].nextElementSibling.childElementCount > 5) {
                            alert("You can't build more than 5 buildings per street");
                            buildings[i].nextElementSibling.innerHTML = structure;
                        }
                    }
                } else {
                    buildOptions.innerHTML = "";
                    buildOptions.style.display = 'none';
                }
            }
            
            checkRadio(hot, oneHotel, 5, 1);
            checkRadio(ho1, oneHouse, 1, 1);
            checkRadio(ho2, twoHouses, 2, 2);
            checkRadio(ho3, treeHouses, 3, 3);
            checkRadio(ho4, fourHouses, 4, 4);

        }, false);

        let cancel = document.getElementById('cancel');
        cancel.addEventListener('click', function() {
            buildOptions.innerHTML = "";
            buildOptions.style.display = 'none';
        }, false);
    }, false);
}



