     // PLAYER ICONS INFORMATION
let square = document.getElementsByClassName('square'),
    car = document.getElementById('car'),
    carObj = {
        name: "Car",
        cash: "2000",
        streets: "0",
        houses: "0",
        hotels: "0"
    },
    hat = document.getElementById('hat'),
    hatObj = {
        name: "Hat",
        cash: "2000",
        streets: "0",
        houses: "0",
        hotels: "0"
    },
    shoe = document.getElementById('shoe'),
    shoeObj = {
        name: "Shoe",
        cash: "2000",
        streets: "0",
        houses: "0",
        hotels: "0"
    },
    dog = document.getElementById('dog'),
    dogObj = {
        name: "Dog",
        cash: "2000",
        streets: "0",
        houses: "0",
        hotels: "0"
    },
    roll = document.getElementById('roll');
    let audio = new Audio("./sounds/diceSound.mp3");

    // Dice Icon Information
let diceNumber1 = [
    dice1.src = "./images/dice/dice1/one.png",
    dice1.src = "./images/dice/dice1/two.png",
    dice1.src = "./images/dice/dice1/three.png",
    dice1.src = "./images/dice/dice1/four.png",
    dice1.src = "./images/dice/dice1/five.png",
    dice1.src = "./images/dice/dice1/six.png"];

let diceNumber2 = [
    dice2.src = "./images/dice/dice1/one.png",
    dice2.src = "./images/dice/dice1/two.png",
    dice2.src = "./images/dice/dice1/three.png",
    dice2.src = "./images/dice/dice1/four.png",
    dice2.src = "./images/dice/dice1/five.png",
    dice2.src = "./images/dice/dice1/six.png"];

    // CHANSE & COMUNITY BUTTON
const chButton = document.getElementById('chButton');
const comButton = document.getElementById('comButton');

    // Button functionality when BUY-GAME-CARD is shown 
let buy = document.getElementById('buy'),
    pass = document.getElementById('pass'),
    pay = document.getElementById('pay'),
    turnText = document.getElementById('turnText'),
    cardName = document.getElementById('cardName'),
    siteonly = document.getElementById('siteOnly'),
    house1 = document.getElementById('house1'),
    house2 = document.getElementById('house2'),
    house3 = document.getElementById('house3'),
    house4 = document.getElementById('house4'),
    hotel = document.getElementById('hotel'),
    mortgage = document.getElementById('mortgage'),
    housecost = document.getElementById('houseCost'),
    hotelcost = document.getElementById('hotelCost'),
    cardVisible = document.getElementById('cardOptions'),
    buyText = document.getElementById('buyText'),
    passText = document.getElementById('passText');

    // Car Score Board
let carBallance = document.getElementById('carBallance'),
    carStreets = document.getElementById('carStreets'),
    carHouses = document.getElementById('carHouses'),
    carHotels = document.getElementById('carHotels');

    // Shoe Score Board
let shoeBallance = document.getElementById('shoeBallance'),
    shoeStreets = document.getElementById('shoeStreets'),
    shoeHouses = document.getElementById('shoeHouses'),
    shoeHotels = document.getElementById('shoeHotels');

    // Hat Score Board
let hatBallance = document.getElementById('hatBallance'),
    hatStreets = document.getElementById('hatStreets'),
    hatHouses = document.getElementById('hatHouses'),
    hatHotels = document.getElementById('hatHotels');
    
    // Dog Score Board
let dogBallance = document.getElementById('dogBallance'),
    dogStreets = document.getElementById('dogStreets'),
    dogHouses = document.getElementById('dogHouses'),
    dogHotels = document.getElementById('dogHotels');

    // Array field Objs
const field = [
    start, oldKent, comChest1, whiteRoad, incTax1,
    st1, theAngel, chanse1, eustonRoad, pentonRoad,
    jail, palMal, eCompany1, whiteHall, northLimber,
    st2, bowStreet, comChest2, malborStreet, vineStreet,
    parkingObj, strandStreet, chanse2, fleetStreet, trafSquare,
    st3, LeicSquare, CovStreet, waterWorks, PiccStreet,
    goToJail, regentStreet, oxfordStreet, comChest3, bondStreet,
    st4, chanse3, parkLane, superTax, mayFair];

const fieldObj = [
    startObj, oldKentObj, comChest1Obj, whiteRoadObj, incTax1Obj,
    st1Obj, theAngelObj, chanse1Obj, eustonRoadObj, pentonRoadObj,
    jailObj, palMalObj, eCompany1Obj, whiteHallObj, northLimberObj,
    st2Obj, bowStreetObj, comChest2Obj, malborStreetObj, vineStreetObj,
    parkingObj, strandStreetObj, chanse2Obj, fleetStreetObj, trafSquareObj,
    st3Obj, LeicSquareObj, CovStreetObj, waterWorksObj, PiccStreetObj,
    goToJailObj, regentStreetObj, oxfordStreetObj, comChest3Obj, bondStreetObj,
    st4Obj, chanse3Obj, parkLaneObj, superTaxObj, mayFairObj];

const buildObj = [
    strandStreetObj, fleetStreetObj, trafSquareObj, LeicSquareObj, CovStreetObj,
    PiccStreetObj, vineStreetObj, regentStreetObj, malborStreetObj, oxfordStreetObj,
    bowStreetObj, bondStreetObj, northLimberObj, whiteHallObj, parkLaneObj,
    palMalObj, mayFairObj, pentonRoadObj, eustonRoadObj, theAngelObj, whiteRoadObj, oldKentObj];

const buildField = [
    'strandStreet', 'fleetStreet', 'trafSquare', 'LeicSquare', 'CovStreet',
    'PiccStreet', 'vineStreet', 'regentStreet', 'malborStreet', 'oxfordStreet',
    'bowStreet', 'bondStreet', 'northLimber', 'whiteHall', 'parkLane',
    'palMal', 'mayFair', 'pentonRoad', 'eustonRoad', 'theAngel', 'whiteRoad', 'oldKent'];

let carM = 0,
    shoeM = 0,
    hatM = 0,
    dogM = 0,
    players = [car, shoe, hat, dog],
    turn = 0;

// PAY-Card information when it's shown
let payVisible = document.getElementById('payOptions'),
    payName = document.getElementById('payName'),
    paySiteOnly = document.getElementById('paySiteOnly'),
    payHouse = document.getElementById('payHouse'),
    payHotel = document.getElementById('payHotel'),
    payText = document.getElementById('payText');

const jpsButton = document.getElementById('jpsButton');
