

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


roll.addEventListener('click', function() {
    let audio = new Audio("./sounds/diceSound.mp3");
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
    }
    audio.play();
    audio.volume = 0.4;
    rollDice1();
    rollDice2();
    getTurn();
    console.log(turn);
    setTimeout(function(){ goToSquare(); }, 2900);
    setTimeout(function(){ showCard(); }, 3200);
    setTimeout(function(){ tec(); }, 3300);
}, false);

let diceNumber1 = [
    dice1.src = "./images/dice/dice1/one.png",
    dice1.src = "./images/dice/dice1/two.png",
    dice1.src = "./images/dice/dice1/three.png",
    dice1.src = "./images/dice/dice1/four.png",
    dice1.src = "./images/dice/dice1/five.png",
    dice1.src = "./images/dice/dice1/six.png"];

function rollDice1(j) {
    let dice1 = document.getElementById('dice1');
        
    for (let j = 0; j <= 3; j++) {
    setTimeout(function(){ dice1.src = "./images/dice/dice1/two.png"; }, j * 100);
    setTimeout(function(){ dice1.src = "./images/dice/dice1/four.png"; }, j * 200);
    setTimeout(function(){ dice1.src = "./images/dice/dice1/six.png"; }, j * 300);
    setTimeout(function(){ dice1.src = "./images/dice/dice1/one.png"; }, j * 400);
    setTimeout(function(){ dice1.src = "./images/dice/dice1/three.png"; }, j * 500);
    setTimeout(function(){ dice1.src = "./images/dice/dice1/five.png"; }, j * 600);
    setTimeout(function(){ dice1.src = "./images/dice/dice1/four.png"; }, j * 650);
    setTimeout(function(){ 
        diceNumber1.sort(function(a, b){return 0.5 - Math.random()});
        dice1.src = diceNumber1[5];
     }, j * 700); 
    };
    
} 

let diceNumber2 = [
    dice2.src = "./images/dice/dice1/one.png",
    dice2.src = "./images/dice/dice1/two.png",
    dice2.src = "./images/dice/dice1/three.png",
    dice2.src = "./images/dice/dice1/four.png",
    dice2.src = "./images/dice/dice1/five.png",
    dice2.src = "./images/dice/dice1/six.png"];

function rollDice2(h) {
    let dice2 = document.getElementById('dice2');
        
    for (let h = 0; h <= 3; h++) {
    setTimeout(function(){ dice2.src = "./images/dice/dice1/five.png"; }, h * 100);
    setTimeout(function(){ dice2.src = "./images/dice/dice1/three.png"; }, h * 200);
    setTimeout(function(){ dice2.src = "./images/dice/dice1/one.png"; }, h * 300);
    setTimeout(function(){ dice2.src = "./images/dice/dice1/six.png"; }, h * 400);
    setTimeout(function(){ dice2.src = "./images/dice/dice1/four.png"; }, h * 500);
    setTimeout(function(){ dice2.src = "./images/dice/dice1/two.png"; }, h * 600);
    setTimeout(function(){ dice2.src = "./images/dice/dice1/three.png"; }, h * 650);
    setTimeout(function(){ 
        diceNumber2.sort(function(a, b){return 0.5 - Math.random()});
        dice2.src = diceNumber2[5];
     }, h * 700); 
    };
}

let start = document.getElementById('start'),
    startObj = {
        name: "Go",
        sallary: "2000",
        cords: [
            // car //
            "1223px",
            "1300px",
            // shoe //
            "1280px",
            "1300px",
            // hat //
            "1223px",
            "1355px",
            // dog //
            "1280px",
            "1355px"]
    };

let oldKent = document.getElementById('oldKent'),
    oldKentObj = {
        owned: "Not Owned",
        name: "Old Kent Road",
        price: "60",
        card: ["2" ,"10" ,"30" ,"90" ,
        "160" ,"250" ,"MORTGAGE value 30" ,"50" ,"50" ],
        cords: [
            // car //
            "1103px",
            "1300px",
            // shoe //
            "1160px",
            "1300px",
            // hat //
            "1103px",
            "1355px",
            // dog //
            "1160px",
            "1355px"]
    };

let comChest1 = document.getElementById('comChest1'),
    comChest1Obj = {
        name: "Comunity Chest",
        cords: [
            // car //
            "988px",
            "1300px",
            // shoe //
            "1046px",
            "1300px",
            // hat //
            "988px",
            "1355px",
            // dog //
            "1046px",
            "1355px"]
    };

let whiteRoad = document.getElementById('whiteRoad'),
    whiteRoadObj = {
        owned: "Not Owned",
        name: "Whitechapel Road",
        price: "80",
        card: ["4" ,"20" ,"60" ,"180" ,
        "320" ,"450" ,"MORTGAGE value 30" ,"50" ,"50" ],
        cords: [
            // car //
            "868px",
            "1300px",
            // shoe //
            "928px",
            "1300px",
            // hat //
            "868px",
            "1355px",
            // dog //
            "928px",
            "1355px"]
    };

let incTax1 = document.getElementById('incTax1'),
    incTax1Obj = {
        name: "Income Tax",
        cords: [
            // car //
            "740px",
            "1300px",
            // shoe //
            "800px",
            "1300px",
            // hat //
            "740px",
            "1355px",
            // dog //
            "800px",
            "1355px"]
    };

let st1 = document.getElementById('st1'),
    st1Obj = {
        owned: "Not Owned",
        name: "Marylebon Station",
        price: "200",
        card: ["4" ,"20" ,"6$" ,"180" ,
        "320" ,"450" ,"MORTGAGE value 100" ],
        cords: [
            // car //
            "622px",
            "1300px",
            // shoe //
            "680px",
            "1300px",
            // hat //
            "622px",
            "1355px",
            // dog //
            "680px",
            "1355px"]
    };

let theAngel = document.getElementById('theAngel'),
    theAngelObj = {
        owned: "Not Owned",
        name: "The Angel Inslington",
        price: "100",
        card: ["6" ,"30" ,"90" ,"270" ,
        "400" ,"550" ,"MORTGAGE value 50" ,"50" ,"50" ],
        cords: [
            // car //
            "500px",
            "1300px",
            // shoe //
            "560px",
            "1300px",
            // hat //
            "500px",
            "1355px",
            // dog //
            "560px",
            "1355px"]
    };

let chanse1 = document.getElementById('chanse1'),
    chanse1Obj = {
        name: "Chanse",
        cords: [
            // car //
            "377px",
            "1300px",
            // shoe //
            "437px",
            "1300px",
            // hat //
            "377px",
            "1355px",
            // dog //
            "437px",
            "1355px"]
    };

let eustonRoad = document.getElementById('eustonRoad'),
    eustonRoadObj = {
        owned: "Not Owned",
        name: "Euston Road",
        price: "110",
        card: ["8" ,"30" ,"90" ,"270" ,
        "400" ,"550" ,"MORTGAGE value 50" ,"50" ,"50" ],
        cords: [
            // car //
            "250px",
            "1300px",
            // shoe //
            "310px",
            "1300px",
            // hat //
            "250px",
            "1355px",
            // dog //
            "310px",
            "1355px"]
    };

let pentonRoad = document.getElementById('pentonRoad'),
    pentonRoadObj = {
        owned: "Not Owned",
        name: "Pentonvile Road",
        price: "120",
        card: ["10" ,"40" ,"100" ,"300" ,
        "450" ,"600" ,"MORTGAGE value 60" ,"50" ,"50" ],
        cords: [
            // car //
            "120px",
            "1300px",
            // shoe //
            "180px",
            "1300px",
            // hat //
            "120px",
            "1355px",
            // dog //
            "180px",
            "1355px"]
    };

let jail = document.getElementById('jail'),
    jailObj = {
        name: "Just Jail",
        cords: [
            // car //
            "6px",
            "1300px",
            // shoe //
            "62px",
            "1300px",
            // hat //
            "6px",
            "1355px",
            // dog //
            "62px",
            "1355px"]
    };

let palMal = document.getElementById('palMal'),
    palMalObj = {
        owned: "Not Owned",
        name: "Pal Mal Street",
        price: "140",
        card: ["12" ,"50" ,"150" ,"450" ,
        "630" ,"750" ,"MORTGAGE value 70" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "1180px",
            // shoe //
            "62px",
            "1180px",
            // hat //
            "6px",
            "1235px",
            // dog //
            "62px",
            "1235px"]
    };

let eCompany1 = document.getElementById('eCompany1'),
    eCompany1Obj = {
        name: "Electric Company",
        cords: [
            // car //
            "6px",
            "1050px",
            // shoe //
            "62px",
            "1050px",
            // hat //
            "6px",
            "1105px",
            // dog //
            "62px",
            "1105px"]
    };

let whiteHall = document.getElementById('whiteHall'),
    whiteHallObj = {
        name: "Whitehall Street",
        price: "150",
        card: ["14" ,"50" ,"150" ,"450" ,
        "630" ,"750" ,"MORTGAGE value 70" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "930px",
            // shoe //
            "62px",
            "930px",
            // hat //
            "6px",
            "985px",
            // dog //
            "62px",
            "985px"]
    };

let northLimber = document.getElementById('northLiber'),
    northLimberObj = {
        name: "Northlimberian Road",
        price: "160",
        card: ["16" ,"60" ,"180" ,"500" ,
        "700" ,"900" ,"MORTGAGE value 80" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "800px",
            // shoe //
            "62px",
            "800px",
            // hat //
            "6px",
            "855px",
            // dog //
            "62px",
            "855px"]
    };

let st2 = document.getElementById('st2'),
    st2Obj = {
        owned: "Not Owned",
        name: "Fenchurch Station",
        price: "50",
        cords: [
            // car //
            "6px",
            "670px",
            // shoe //
            "62px",
            "670px",
            // hat //
            "6px",
            "725px",
            // dog //
            "62px",
            "725px"]
    };

let bowStreet = document.getElementById('bowStreet'),
    bowStreetObj = {
        owned: "Not Owned",
        name: "Bow Street",
        price: "180",
        card: ["18" ,"70" ,"200" ,"550" ,
        "700" ,"900" ,"MORTGAGE value 90" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "540px",
            // shoe //
            "62px",
            "540px",
            // hat //
            "6px",
            "595px",
            // dog //
            "62px",
            "595px"]
    };

let comChest2 = document.getElementById('comChest2'),
    comChest2Obj = {
        name: "Comunity Chest",
        cords: [
            // car //
            "6px",
            "410px",
            // shoe //
            "62px",
            "410px",
            // hat //
            "6px",
            "465px",
            // dog //
            "62px",
            "465px"]
    };

let malborStreet = document.getElementById('malborStreet'),
    malborStreetObj = {
        owned: "Not Owned",
        name: "Malborough Street",
        price: "190",
        card: ["20" ,"75" ,"210" ,"580" ,
        "750" ,"950" ,"MORTGAGE value 100" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "280px",
            // shoe //
            "62px",
            "280px",
            // hat //
            "6px",
            "335px",
            // dog //
            "62px",
            "335px"]
    };

let vineStreet = document.getElementById('vineStreet'),
    vineStreetObj = {
        owned: "Not Owned",
        name: "Vine Street",
        price: "200",
        card: ["22" ,"80" ,"220" ,"600" ,
        "800" ,"1000" ,"MORTGAGE value 100" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "150px",
            // shoe //
            "62px",
            "150px",
            // hat //
            "6px",
            "205px",
            // dog //
            "62px",
            "205px"]
    };

let parking = document.getElementById('parking'),
    parkingObj = {
        name: "Parking",
        cords: [
            // car //
            "6px",
            "30px",
            // shoe //
            "62px",
            "30px",
            // hat //
            "6px",
            "85px",
            // dog //
            "62px",
            "85px"]
    };

let strandStreet = document.getElementById('strandStreet'),
    strandStreetObj = {
        owned: "Not Owned",
        name: "Strand Street",
        price: "220",
        card: ["24" ,"90" ,"250" ,"700" ,
        "880" ,"1000" ,"MORTGAGE value 110" ,"150" ,"150" ],
        cords: [
            // car //
            "120px",
            "30px",
            // shoe //
            "180px",
            "30px",
            // hat //
            "120px",
            "85px",
            // dog //
            "180px",
            "85px"]
    };

let chanse2 = document.getElementById('chanse2'),
    chanse2Obj = {
        name: "Chanse2",
        cords: [
            // car //
            "250px",
            "30px",
            // shoe //
            "310px",
            "30px",
            // hat //
            "250px",
            "85px",
            // dog //
            "310px",
            "85px"]
    };

let fleetStreet = document.getElementById('fleetStreet'),
    fleetStreetObj = {
        owned: "Not Owned",
        name: "Fleet Street",
        price: "230",
        card: ["26" ,"95" ,"280" ,"730" ,
        "900" ,"1050" ,"MORTGAGE value 110" ,"150" ,"150" ],
        cords: [
            // car //
            "377px",
            "30px",
            // shoe //
            "437px",
            "30px",
            // hat //
            "377px",
            "85px",
            // dog //
            "437px",
            "85px"]
    };

let trafSquare = document.getElementById('trafSquare'),
    trafSquareObj = {
        owned: "Not Owned",
        name: "Trafalguare Square",
        price: "240",
        card: ["28" ,"100" ,"300" ,"750" ,
        "930" ,"1100" ,"MORTGAGE value 120" ,"150" ,"150" ],
        cords: [
            // car //
            "500px",
            "30px",
            // shoe //
            "560px",
            "30px",
            // hat //
            "500px",
            "85px",
            // dog //
            "560px",
            "85px"]
    };

let st3 = document.getElementById('st3'),
    st3Obj = {
        owned: "Not Owned",
        name: "Kings Cross Station",
        price: "50",
        cords: [
            // car //
            "622px",
            "30px",
            // shoe //
            "680px",
            "30px",
            // hat //
            "622px",
            "85px",
            // dog //
            "680px",
            "85px"]
    };

let LeicSquare = document.getElementById('LeicSquare'),
    LeicSquareObj = {
        owned: "Not Owned",
        name: "Leicester Square",
        price: "260",
        card: ["30" ,"110" ,"330" ,"800" ,
        "980" ,"1100" ,"MORTGAGE value 130" ,"150" ,"150" ],
        cords: [
            // car //
            "740px",
            "30px",
            // shoe //
            "800px",
            "30px",
            // hat //
            "740px",
            "85px",
            // dog //
            "800px",
            "85px"]
    };

let CovStreet = document.getElementById('CovStreet'),
    CovStreetObj = {
        owned: "Not Owned",
        name: "Coventry Street",
        price: "270",
        card: ["32" ,"115" ,"340" ,"830" ,
        "1000" ,"1150" ,"MORTGAGE value 130" ,"150" ,"150" ],
        cords: [
            // car //
            "868px",
            "30px",
            // shoe //
            "928px",
            "30px",
            // hat //
            "868px",
            "85px",
            // dog //
            "928px",
            "85px"]
    };

let waterWorks = document.getElementById('waterWorks'),
    waterWorksObj = {
        name: "Water Works",
        cords: [
            // car //
            "988px",
            "30px",
            // shoe //
            "1046px",
            "30px",
            // hat //
            "988px",
            "85px",
            // dog //
            "1046px",
            "85px"]
    };

let PiccStreet = document.getElementById('PiccStreet'),
    PiccStreetObj = {
        owned: "Not Owned",
        name: "Piccadilly Street",
        price: "280",
        card: ["34" ,"120" ,"360" ,"850" ,
        "1030" ,"1200" ,"MORTGAGE value 140" ,"150" ,"150" ],
        cords: [
            // car //
            "1103px",
            "30px",
            // shoe //
            "1160px",
            "30px",
            // hat //
            "1103px",
            "85px",
            // dog //
            "1160px",
            "85px"]
    };

let goToJail = document.getElementById('goToJail'),
    goToJailObj = {
        name: "Go To Jail",
        cords: [
            // car //
            "1223px",
            "30px",
            // shoe //
            "1280px",
            "30px",
            // hat //
            "1223px",
            "85px",
            // dog //
            "1280px",
            "85px"]
    };

let regentStreet = document.getElementById('regentStreet'),
    regentStreetObj = {
        owned: "Not Owned",
        name: "Regent Street",
        price: "300",
        card: ["36" ,"130" ,"390" ,"900" ,
        "1100" ,"1300" ,"MORTGAGE value 150" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "150px",
            // shoe //
            "1280px",
            "150px",
            // hat //
            "1223px",
            "205px",
            // dog //
            "1280px",
            "205px"]
    };

let oxfordStreet = document.getElementById('oxfordStreet'),
    oxfordStreetObj = {
        owned: "Not Owned",
        name: "Oxford Street",
        price: "310",
        card: ["38" ,"140" ,"410" ,"950" ,
        "1150" ,"1350" ,"MORTGAGE value 150" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "280px",
            // shoe //
            "1280px",
            "280px",
            // hat //
            "1223px",
            "335px",
            // dog //
            "1280px",
            "335px"]
    };

let comChest3 = document.getElementById('comChest3'),
    comChest3Obj = {
        name: "Comunity Chest",
        cords: [
            // car //
            "1223px",
            "410px",
            // shoe //
            "1280px",
            "410px",
            // hat //
            "1223px",
            "465px",
            // dog //
            "1280px",
            "465px"]
    };

let bondStreet = document.getElementById('bondStreet'),
    bondStreetObj = {
        owned: "Not Owned",
        name: "Bond Street",
        price: "320",
        card: ["40" ,"150" ,"450" ,"1000" ,
        "1200" ,"1400" ,"MORTGAGE value 160" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "540px",
            // shoe //
            "1280px",
            "540px",
            // hat //
            "1223px",
            "595px",
            // dog //
            "1280px",
            "595px"]
    };

let st4 = document.getElementById('st4'),
    st4Obj = {
        owned: "Not Owned",
        name: "Liverpool Station",
        price: "50",
        cords: [
            // car //
            "1223px",
            "670px",
            // shoe //
            "1280px",
            "670px",
            // hat //
            "1223px",
            "725px",
            // dog //
            "1280px",
            "725px"]
    };

let chanse3 = document.getElementById('chanse3'),
    chanse3Obj = {
        name: "Chanse",
        cords: [
            // car //
            "1223px",
            "800px",
            // shoe //
            "1280px",
            "800px",
            // hat //
            "1223px",
            "855px",
            // dog //
            "1280px",
            "855px"]
    };

let parkLane = document.getElementById('parkLane'),
    parkLaneObj = {
        owned: "Not Owned",
        name: "Park Lane",
        price: "350",
        card: ["44" ,"180" ,"500" ,"1100" ,
        "1300" ,"1500" ,"MORTGAGE value 180" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "930px",
            // shoe //
            "1280px",
            "930px",
            // hat //
            "1223px",
            "985px",
            // dog //
            "1280px",
            "985px"]
    };

let superTax = document.getElementById('superTax'),
    superTaxObj = {
        name: "Super Tax",
        cords: [
            // car //
            "1223px",
            "1050px",
            // shoe //
            "1280px",
            "1050px",
            // hat //
            "1223px",
            "1105px",
            // dog //
            "1280px",
            "1105px"]
    };

let mayFair = document.getElementById('mayFair'),
    mayFairObj = {
        owned: "Not Owned",
        name: "Mayfaire Street",
        price: "400",
        card: ["50" ,"200" ,"600" ,"1400" ,
        "1700" ,"2000" ,"MORTGAGE value 200" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "1190px",
            // shoe //
            "1280px",
            "1190px",
            // hat //
            "1223px",
            "1245px",
            // dog //
            "1280px",
            "1245px"]
    };

car.addEventListener('click', function() {
    car.style.position = "absolute";
    car.style.left = startObj.cords[0];
    car.style.top = startObj.cords[1];
    document.getElementById('topLeft').style.display = "grid";
    document.getElementById('carBallance').innerHTML = carObj.cash + " $";
}, false)

shoe.addEventListener('click', function() {
    shoe.style.position = "absolute";
    shoe.style.left = startObj.cords[2];
    shoe.style.top = startObj.cords[3];
    document.getElementById('topRight').style.display = "grid";
    document.getElementById('shoeBallance').innerHTML = shoeObj.cash + " $";
}, false)

hat.addEventListener('click', function () {
    hat.style.position = "absolute";
    hat.style.left = startObj.cords[4];
    hat.style.top = startObj.cords[5];
    document.getElementById('bottomLeft').style.display = "grid";
    document.getElementById('hatBallance').innerHTML = hatObj.cash + " $";
}, false);

dog.addEventListener('click', function () {
    dog.style.position = "absolute";
    dog.style.left = startObj.cords[6];
    dog.style.top = startObj.cords[7];
    document.getElementById('bottomRight').style.display = "grid";
    document.getElementById('dogBallance').innerHTML = dogObj.cash + " $";
}, false);

    // Button functionality when GAME-CARD is shown 
let buy = document.getElementById('buy'),
    pass = document.getElementById('pass'),
    cardVisible = document.getElementById('cardOptions');
    

pass.addEventListener('click', function() {
    cardVisible.style.display = "none";
}, false);

buy.addEventListener('click', function(){

}, false);

const field = [
    square[39], square[38], square[37], square[36], square[35], 
    square[34], square[33], square[32], square[31], square[30], 
    square[29], square[27], square[25], square[23], square[21], 
    square[19], square[17], square[15], square[13], square[11],
    square[0], square[1], square[2], square[3], square[4], 
    square[5], square[6], square[7], square[8], square[9], 
    square[10], square[12], square[14], square[16], square[18], 
    square[20], square[22], square[24], square[26], square[28]
];

const fieldObj = [
    startObj, oldKentObj, comChest1Obj, whiteRoadObj, incTax1Obj,
    st1Obj, theAngelObj, chanse1Obj, eustonRoadObj, pentonRoadObj,
    jailObj, palMalObj, eCompany1Obj, whiteHallObj, northLimberObj,
    st2Obj, bowStreetObj, comChest2Obj, malborStreetObj, vineStreetObj,
    parkingObj, strandStreetObj, chanse2Obj, fleetStreetObj, trafSquareObj,
    st3Obj, LeicSquareObj, CovStreetObj, waterWorksObj, PiccStreetObj,
    goToJailObj, regentStreetObj, oxfordStreetObj, comChest3Obj, bondStreetObj,
    st4Obj, chanse3Obj, parkLaneObj, superTaxObj, mayFairObj];

    let carM = 0,
    shoeM = 0,
    hatM = 0,
    dogM = 0,
    players = [car, shoe, hat, dog],
    turn = 0;



function showCard() {
    let cardName = document.getElementById('cardName'),
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

    if (turn == 1 && carM == 1 || turn == 2 && shoeM == 1 || turn == 3 && hatM == 1 || turn == 4 && dogM == 1) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = oldKentObj.name;
        cardName.style.backgroundColor = "rgb(133, 76, 23)";
        siteonly.innerHTML = oldKentObj.card[0] + "$";
        house1.innerHTML = oldKentObj.card[1] + "$";
        house2.innerHTML = oldKentObj.card[2] + "$";
        house3.innerHTML = oldKentObj.card[3] + "$";
        house4.innerHTML = oldKentObj.card[4] + "$";
        hotel.innerHTML = oldKentObj.card[5] + "$";
        mortgage.innerHTML = oldKentObj.card[6] + "$";
        housecost.innerHTML = oldKentObj.card[7] + "$";
        hotelcost.innerHTML = oldKentObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + oldKentObj.price + "$";
    } else if (turn == 1 && carM == 2 || turn == 2 && shoeM == 2 || turn == 3 && hatM == 2 || turn == 4 && dogM == 2) {
        // cardVisible.style.display = "grid";
            // comchest1

    } else if (turn == 1 && carM == 3 || turn == 2 && shoeM == 3 || turn == 3 && hatM == 3 || turn == 4 && dogM == 3) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = whiteHallObj.name;
        cardName.style.backgroundColor = "rgb(133, 76, 23)";
        siteonly.innerHTML = whiteRoadObj.card[0] + "$";
        house1.innerHTML = whiteRoadObj.card[1] + "$";
        house2.innerHTML = whiteRoadObj.card[2] + "$";
        house3.innerHTML = whiteRoadObj.card[3] + "$";
        house4.innerHTML = whiteRoadObj.card[4] + "$";
        hotel.innerHTML = whiteRoadObj.card[5] + "$";
        mortgage.innerHTML = whiteRoadObj.card[6] + "$";
        housecost.innerHTML = whiteRoadObj.card[7] + "$";
        hotelcost.innerHTML = whiteRoadObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + whiteRoadObj.price + "$";
    } else if (turn == 1 && carM == 4 || turn == 2 && shoeM == 4 || turn == 3 && hatM == 4 || turn == 4 && dogM == 4) {
        // cardVisible.style.display = "grid";
            // incometax1
        
    } else if (turn == 1 && carM == 5 || turn == 2 && shoeM == 5 || turn == 3 && hatM == 5 || turn == 4 && dogM == 5) {
        // cardVisible.style.display = "grid";
            // st1

    } else if (turn == 1 && carM == 6 || turn == 2 && shoeM == 6 || turn == 3 && hatM == 6 || turn == 4 && dogM == 6) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = theAngelObj.name;
        cardName.style.backgroundColor = "rgb(68, 188, 224)";
        siteonly.innerHTML = theAngelObj.card[0] + "$";
        house1.innerHTML = theAngelObj.card[1] + "$";
        house2.innerHTML = theAngelObj.card[2] + "$";
        house3.innerHTML = theAngelObj.card[3] + "$";
        house4.innerHTML = theAngelObj.card[4] + "$";
        hotel.innerHTML = theAngelObj.card[5] + "$";
        mortgage.innerHTML = theAngelObj.card[6] + "$";
        housecost.innerHTML = theAngelObj.card[7] + "$";
        hotelcost.innerHTML = theAngelObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + theAngelObj.price + "$";
    }  else if (turn == 1 && carM == 7 || turn == 2 && shoeM == 7 || turn == 3 && hatM == 7 || turn == 4 && dogM == 7) {
        // cardVisible.style.display = "grid";
            // chanse1
        
    } else if (turn == 1 && carM == 8 || turn == 2 && shoeM == 8 || turn == 3 && hatM == 8 || turn == 4 && dogM == 8) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = eustonRoadObj.name;
        cardName.style.backgroundColor = "rgb(68, 188, 224)";
        siteonly.innerHTML = eustonRoadObj.card[0] + "$";
        house1.innerHTML = eustonRoadObj.card[1] + "$";
        house2.innerHTML = eustonRoadObj.card[2] + "$";
        house3.innerHTML = eustonRoadObj.card[3] + "$";
        house4.innerHTML = eustonRoadObj.card[4] + "$";
        hotel.innerHTML = eustonRoadObj.card[5] + "$";
        mortgage.innerHTML = eustonRoadObj.card[6] + "$";
        housecost.innerHTML = eustonRoadObj.card[7] + "$";
        hotelcost.innerHTML = eustonRoadObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + eustonRoadObj.price + "$";
    } else if (turn == 1 && carM == 9 || turn == 2 && shoeM == 9 || turn == 3 && hatM == 9 || turn == 4 && dogM == 9) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = pentonRoadObj.name;
        cardName.style.backgroundColor = "rgb(68, 188, 224)";
        siteonly.innerHTML = pentonRoadObj.card[0] + "$";
        house1.innerHTML = pentonRoadObj.card[1] + "$";
        house2.innerHTML = pentonRoadObj.card[2] + "$";
        house3.innerHTML = pentonRoadObj.card[3] + "$";
        house4.innerHTML = pentonRoadObj.card[4] + "$";
        hotel.innerHTML = pentonRoadObj.card[5] + "$";
        mortgage.innerHTML = pentonRoadObj.card[6] + "$";
        housecost.innerHTML = pentonRoadObj.card[7] + "$";
        hotelcost.innerHTML = pentonRoadObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + pentonRoadObj.price + "$";
    } else if (turn == 1 && carM == 10 || turn == 2 && shoeM == 10 || turn == 3 && hatM == 10 || turn == 4 && dogM == 10) {
        // cardVisible.style.display = "grid";
            // jail

    } else if (turn == 1 && carM == 11 || turn == 2 && shoeM == 11 || turn == 3 && hatM == 11 || turn == 4 && dogM == 11) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = palMalObj.name;
        cardName.style.backgroundColor = "rgb(224, 68, 211)";
        siteonly.innerHTML = palMalObj.card[0] + "$";
        house1.innerHTML = palMalObj.card[1] + "$";
        house2.innerHTML = palMalObj.card[2] + "$";
        house3.innerHTML = palMalObj.card[3] + "$";
        house4.innerHTML = palMalObj.card[4] + "$";
        hotel.innerHTML = palMalObj.card[5] + "$";
        mortgage.innerHTML = palMalObj.card[6] + "$";
        housecost.innerHTML = palMalObj.card[7] + "$";
        hotelcost.innerHTML = palMalObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + palMalObj.price + "$";
    } else if (turn == 1 && carM == 12 || turn == 2 && shoeM == 12 || turn == 3 && hatM == 12 || turn == 4 && dogM == 12) {
        // cardVisible.style.display = "grid";
        // ecompany1

    } else if (turn == 1 && carM == 13 || turn == 2 && shoeM == 13 || turn == 3 && hatM == 13 || turn == 4 && dogM == 13) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = whiteHallObj.name;
        cardName.style.backgroundColor = "rgb(224, 68, 211)";
        siteonly.innerHTML = whiteHallObj.card[0] + "$";
        house1.innerHTML = whiteHallObj.card[1] + "$";
        house2.innerHTML = whiteHallObj.card[2] + "$";
        house3.innerHTML = whiteHallObj.card[3] + "$";
        house4.innerHTML = whiteHallObj.card[4] + "$";
        hotel.innerHTML = whiteHallObj.card[5] + "$";
        mortgage.innerHTML = whiteHallObj.card[6] + "$";
        housecost.innerHTML = whiteHallObj.card[7] + "$";
        hotelcost.innerHTML = whiteHallObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + whiteHallObj.price + "$";
    } else if (turn == 1 && carM == 14 || turn == 2 && shoeM == 14 || turn == 3 && hatM == 14 || turn == 4 && dogM == 14) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = northLimberObj.name;
        cardName.style.backgroundColor = "rgb(224, 68, 211)";
        siteonly.innerHTML = northLimberObj.card[0] + "$";
        house1.innerHTML = northLimberObj.card[1] + "$";
        house2.innerHTML = northLimberObj.card[2] + "$";
        house3.innerHTML = northLimberObj.card[3] + "$";
        house4.innerHTML = northLimberObj.card[4] + "$";
        hotel.innerHTML = northLimberObj.card[5] + "$";
        mortgage.innerHTML = northLimberObj.card[6] + "$";
        housecost.innerHTML = northLimberObj.card[7] + "$";
        hotelcost.innerHTML = northLimberObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + northLimberObj.price + "$";
    } else if (turn == 1 && carM == 15 || turn == 2 && shoeM == 15 || turn == 3 && hatM == 15 || turn == 4 && dogM == 15) {
        // cardVisible.style.display = "grid";
            // st2

    } else if (turn == 1 && carM == 16 || turn == 2 && shoeM == 16 || turn == 3 && hatM == 16 || turn == 4 && dogM == 16) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = bowStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 143, 16)";
        siteonly.innerHTML = bowStreetObj.card[0] + "$";
        house1.innerHTML = bowStreetObj.card[1] + "$";
        house2.innerHTML = bowStreetObj.card[2] + "$";
        house3.innerHTML = bowStreetObj.card[3] + "$";
        house4.innerHTML = bowStreetObj.card[4] + "$";
        hotel.innerHTML = bowStreetObj.card[5] + "$";
        mortgage.innerHTML = bowStreetObj.card[6] + "$";
        housecost.innerHTML = bowStreetObj.card[7] + "$";
        hotelcost.innerHTML = bowStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + bowStreetObj.price + "$";
    } else if (turn == 1 && carM == 17 || turn == 2 && shoeM == 17 || turn == 3 && hatM == 17 || turn == 4 && dogM == 17) {
        // cardVisible.style.display = "grid";
            // comchest2

    } else if (turn == 1 && carM == 18 || turn == 2 && shoeM == 18 || turn == 3 && hatM == 18 || turn == 4 && dogM == 18) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = malborStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 143, 16)";
        siteonly.innerHTML = malborStreetObj.card[0] + "$";
        house1.innerHTML = malborStreetObj.card[1] + "$";
        house2.innerHTML = malborStreetObj.card[2] + "$";
        house3.innerHTML = malborStreetObj.card[3] + "$";
        house4.innerHTML = malborStreetObj.card[4] + "$";
        hotel.innerHTML = malborStreetObj.card[5] + "$";
        mortgage.innerHTML = malborStreetObj.card[6] + "$";
        housecost.innerHTML = malborStreetObj.card[7] + "$";
        hotelcost.innerHTML = malborStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + malborStreetObj.price + "$";
    } else if (turn == 1 && carM == 19 || turn == 2 && shoeM == 19 || turn == 3 && hatM == 19 || turn == 4 && dogM == 19) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = vineStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 143, 16)";
        siteonly.innerHTML = vineStreetObj.card[0] + "$";
        house1.innerHTML = vineStreetObj.card[1] + "$";
        house2.innerHTML = vineStreetObj.card[2] + "$";
        house3.innerHTML = vineStreetObj.card[3] + "$";
        house4.innerHTML = vineStreetObj.card[4] + "$";
        hotel.innerHTML = vineStreetObj.card[5] + "$";
        mortgage.innerHTML = vineStreetObj.card[6] + "$";
        housecost.innerHTML = vineStreetObj.card[7] + "$";
        hotelcost.innerHTML = vineStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + vineStreetObj.price + "$";
    } else if (turn == 1 && carM == 20 || turn == 2 && shoeM == 20 || turn == 3 && hatM == 20 || turn == 4 && dogM == 20) {
        // cardVisible.style.display = "grid";
            // parking

    } else if (turn == 1 && carM == 21 || turn == 2 && shoeM == 21 || turn == 3 && hatM == 21 || turn == 4 && dogM == 21) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = strandStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 50, 16)";
        siteonly.innerHTML = strandStreetObj.card[0] + "$";
        house1.innerHTML = strandStreetObj.card[1] + "$";
        house2.innerHTML = strandStreetObj.card[2] + "$";
        house3.innerHTML = strandStreetObj.card[3] + "$";
        house4.innerHTML = strandStreetObj.card[4] + "$";
        hotel.innerHTML = strandStreetObj.card[5] + "$";
        mortgage.innerHTML = strandStreetObj.card[6] + "$";
        housecost.innerHTML = strandStreetObj.card[7] + "$";
        hotelcost.innerHTML = strandStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + strandStreetObj.price + "$";
    } else if (turn == 1 && carM == 22 || turn == 2 && shoeM == 22 || turn == 3 && hatM == 22 || turn == 4 && dogM == 22) {
        // cardVisible.style.display = "grid";
            // chanse2

    } else if (turn == 1 && carM == 23 || turn == 2 && shoeM == 23 || turn == 3 && hatM == 23 || turn == 4 && dogM == 23) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = fleetStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 50, 16)";
        siteonly.innerHTML = fleetStreetObj.card[0] + "$";
        house1.innerHTML = fleetStreetObj.card[1] + "$";
        house2.innerHTML = fleetStreetObj.card[2] + "$";
        house3.innerHTML = fleetStreetObj.card[3] + "$";
        house4.innerHTML = fleetStreetObj.card[4] + "$";
        hotel.innerHTML = fleetStreetObj.card[5] + "$";
        mortgage.innerHTML = fleetStreetObj.card[6] + "$";
        housecost.innerHTML = fleetStreetObj.card[7] + "$";
        hotelcost.innerHTML = fleetStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + fleetStreetObj.price + "$";
    } else if (turn == 1 && carM == 24 || turn == 2 && shoeM == 24 || turn == 3 && hatM == 24 || turn == 4 && dogM == 24) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = trafSquareObj.name;
        cardName.style.backgroundColor = "rgb(240, 50, 16)";
        siteonly.innerHTML = trafSquareObj.card[0] + "$";
        house1.innerHTML = trafSquareObj.card[1] + "$";
        house2.innerHTML = trafSquareObj.card[2] + "$";
        house3.innerHTML = trafSquareObj.card[3] + "$";
        house4.innerHTML = trafSquareObj.card[4] + "$";
        hotel.innerHTML = trafSquareObj.card[5] + "$";
        mortgage.innerHTML = trafSquareObj.card[6] + "$";
        housecost.innerHTML = trafSquareObj.card[7] + "$";
        hotelcost.innerHTML = trafSquareObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + trafSquareObj.price + "$";
    } else if (turn == 1 && carM == 25 || turn == 2 && shoeM == 25 || turn == 3 && hatM == 25 || turn == 4 && dogM == 25) {
        // cardVisible.style.display = "grid";
            // st3

    } else if (turn == 1 && carM == 26 || turn == 2 && shoeM == 26 || turn == 3 && hatM == 26 || turn == 4 && dogM == 26) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = LeicSquareObj.name;
        cardName.style.backgroundColor = "rgb(240, 236, 16)";
        siteonly.innerHTML = LeicSquareObj.card[0] + "$";
        house1.innerHTML = LeicSquareObj.card[1] + "$";
        house2.innerHTML = LeicSquareObj.card[2] + "$";
        house3.innerHTML = LeicSquareObj.card[3] + "$";
        house4.innerHTML = LeicSquareObj.card[4] + "$";
        hotel.innerHTML = LeicSquareObj.card[5] + "$";
        mortgage.innerHTML = LeicSquareObj.card[6] + "$";
        housecost.innerHTML = LeicSquareObj.card[7] + "$";
        hotelcost.innerHTML = LeicSquareObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + LeicSquareObj.price + "$";
    } else if (turn == 1 && carM == 27 || turn == 2 && shoeM == 27 || turn == 3 && hatM == 27 || turn == 4 && dogM == 27) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = CovStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 236, 16)";
        siteonly.innerHTML = CovStreetObj.card[0] + "$";
        house1.innerHTML = CovStreetObj.card[1] + "$";
        house2.innerHTML = CovStreetObj.card[2] + "$";
        house3.innerHTML = CovStreetObj.card[3] + "$";
        house4.innerHTML = CovStreetObj.card[4] + "$";
        hotel.innerHTML = CovStreetObj.card[5] + "$";
        mortgage.innerHTML = CovStreetObj.card[6] + "$";
        housecost.innerHTML = CovStreetObj.card[7] + "$";
        hotelcost.innerHTML = CovStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + CovStreetObj.price + "$";
    } else if (turn == 1 && carM == 28 || turn == 2 && shoeM == 28 || turn == 3 && hatM == 28 || turn == 4 && dogM == 28) {
        // cardVisible.style.display = "grid";
            // waterworks

    } else if (turn == 1 && carM == 29 || turn == 2 && shoeM == 29 || turn == 3 && hatM == 29 || turn == 4 && dogM == 29) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = PiccStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 236, 16)";
        siteonly.innerHTML = PiccStreetObj.card[0] + "$";
        house1.innerHTML = PiccStreetObj.card[1] + "$";
        house2.innerHTML = PiccStreetObj.card[2] + "$";
        house3.innerHTML = PiccStreetObj.card[3] + "$";
        house4.innerHTML = PiccStreetObj.card[4] + "$";
        hotel.innerHTML = PiccStreetObj.card[5] + "$";
        mortgage.innerHTML = PiccStreetObj.card[6] + "$";
        housecost.innerHTML = PiccStreetObj.card[7] + "$";
        hotelcost.innerHTML = PiccStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + PiccStreetObj.price + "$";
    } else if (turn == 1 && carM == 30 || turn == 2 && shoeM == 30 || turn == 3 && hatM == 30 || turn == 4 && dogM == 30) {
        // cardVisible.style.display = "grid";
            // gotojail

    } else if (turn == 1 && carM == 31 || turn == 2 && shoeM == 31 || turn == 3 && hatM == 31 || turn == 4 && dogM == 31) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = regentStreetObj.name;
        cardName.style.backgroundColor = "rgb(11, 165, 70)";
        siteonly.innerHTML = regentStreetObj.card[0] + "$";
        house1.innerHTML = regentStreetObj.card[1] + "$";
        house2.innerHTML = regentStreetObj.card[2] + "$";
        house3.innerHTML = regentStreetObj.card[3] + "$";
        house4.innerHTML = regentStreetObj.card[4] + "$";
        hotel.innerHTML = regentStreetObj.card[5] + "$";
        mortgage.innerHTML = regentStreetObj.card[6] + "$";
        housecost.innerHTML = regentStreetObj.card[7] + "$";
        hotelcost.innerHTML = regentStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + regentStreetObj.price + "$";
    } else if (turn == 1 && carM == 32 || turn == 2 && shoeM == 32 || turn == 3 && hatM == 32 || turn == 4 && dogM == 32) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = oxfordStreetObj.name;
        cardName.style.backgroundColor = "rgb(11, 165, 70)";
        siteonly.innerHTML = oxfordStreetObj.card[0] + "$";
        house1.innerHTML = oxfordStreetObj.card[1] + "$";
        house2.innerHTML = oxfordStreetObj.card[2] + "$";
        house3.innerHTML = oxfordStreetObj.card[3] + "$";
        house4.innerHTML = oxfordStreetObj.card[4] + "$";
        hotel.innerHTML = oxfordStreetObj.card[5] + "$";
        mortgage.innerHTML = oxfordStreetObj.card[6] + "$";
        housecost.innerHTML = oxfordStreetObj.card[7] + "$";
        hotelcost.innerHTML = oxfordStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + oxfordStreetObj.price + "$";
    } else if (turn == 1 && carM == 33 || turn == 2 && shoeM == 33 || turn == 3 && hatM == 33 || turn == 4 && dogM == 33) {
        // cardVisible.style.display = "grid";
            // comchest3

    } else if (turn == 1 && carM == 34 || turn == 2 && shoeM == 34 || turn == 3 && hatM == 34 || turn == 4 && dogM == 34) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = bondStreetObj.name;
        cardName.style.backgroundColor = "rgb(11, 165, 70)";
        siteonly.innerHTML = bondStreetObj.card[0] + "$";
        house1.innerHTML = bondStreetObj.card[1] + "$";
        house2.innerHTML = bondStreetObj.card[2] + "$";
        house3.innerHTML = bondStreetObj.card[3] + "$";
        house4.innerHTML = bondStreetObj.card[4] + "$";
        hotel.innerHTML = bondStreetObj.card[5] + "$";
        mortgage.innerHTML = bondStreetObj.card[6] + "$";
        housecost.innerHTML = bondStreetObj.card[7] + "$";
        hotelcost.innerHTML = bondStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + bondStreetObj.price + "$";
    } else if (turn == 1 && carM == 35 || turn == 2 && shoeM == 35 || turn == 3 && hatM == 35 || turn == 4 && dogM == 35) {
        // cardVisible.style.display = "grid";
            // st4

    } else if (turn == 1 && carM == 36 || turn == 2 && shoeM == 36 || turn == 3 && hatM == 36 || turn == 4 && dogM == 36) {
        // cardVisible.style.display = "grid";
            // chanse3

    } else if (turn == 1 && carM == 37 || turn == 2 && shoeM == 37 || turn == 3 && hatM == 37 || turn == 4 && dogM == 37) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = parkLaneObj.name;
        cardName.style.backgroundColor = "rgb(116, 86, 172)";
        siteonly.innerHTML = parkLaneObj.card[0] + "$";
        house1.innerHTML = parkLaneObj.card[1] + "$";
        house2.innerHTML = parkLaneObj.card[2] + "$";
        house3.innerHTML = parkLaneObj.card[3] + "$";
        house4.innerHTML = parkLaneObj.card[4] + "$";
        hotel.innerHTML = parkLaneObj.card[5] + "$";
        mortgage.innerHTML = parkLaneObj.card[6] + "$";
        housecost.innerHTML = parkLaneObj.card[7] + "$";
        hotelcost.innerHTML = parkLaneObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + parkLaneObj.price + "$";
    } else if (turn == 1 && carM == 38 || turn == 2 && shoeM == 38 || turn == 3 && hatM == 38 || turn == 4 && dogM == 38) {
        // cardVisible.style.display = "grid";
            // supertax

    } else if (turn == 1 && carM == 39 || turn == 2 && shoeM == 39 || turn == 3 && hatM == 39 || turn == 4 && dogM == 39) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = mayFairObj.name;
        cardName.style.backgroundColor = "rgb(116, 86, 172)";
        siteonly.innerHTML = mayFairObj.card[0] + "$";
        house1.innerHTML = mayFairObj.card[1] + "$";
        house2.innerHTML = mayFairObj.card[2] + "$";
        house3.innerHTML = mayFairObj.card[3] + "$";
        house4.innerHTML = mayFairObj.card[4] + "$";
        hotel.innerHTML = mayFairObj.card[5] + "$";
        mortgage.innerHTML = mayFairObj.card[6] + "$";
        housecost.innerHTML = mayFairObj.card[7] + "$";
        hotelcost.innerHTML = mayFairObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + mayFairObj.price + "$";
    }
}


function getTurn() {
    turn +=1;
    if (turn === 5) {
        turn = 1;
    }
}

function tec() {
    if (diceNumber1[5] === diceNumber2[5]) {
        turn -=1;
        console.log("tec");
        console.log(diceNumber1[5]);
        console.log(diceNumber2[5]);
        } 
}

function goToSquare() {
    let dn1 = diceNumber1[5],
        dn2 = diceNumber2[5],
        two =  dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/one.png" ,
        three = dn1 === "./images/dice/dice1/two.png" && dn2 === "./images/dice/dice1/one.png" ||
                dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/two.png",
        four = dn1 === "./images/dice/dice1/two.png" && dn2 === "./images/dice/dice1/two.png" ||
                dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/three.png" || 
                dn1 === "./images/dice/dice1/three.png" && dn2 === "./images/dice/dice1/one.png",
        five = dn1 === "./images/dice/dice1/two.png" && dn2 === "./images/dice/dice1/three.png" ||
                dn1 === "./images/dice/dice1/three.png" && dn2 === "./images/dice/dice1/two.png" || 
                dn1 === "./images/dice/dice1/four.png" && dn2 === "./images/dice/dice1/one.png" ||
                dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/four.png",
        six = dn1 === "./images/dice/dice1/three.png" && dn2 === "./images/dice/dice1/three.png" ||
                dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/five.png" || 
                dn1 === "./images/dice/dice1/five.png" && dn2 === "./images/dice/dice1/one.png" ||
                dn1 === "./images/dice/dice1/two.png" && dn2 === "./images/dice/dice1/four.png" || 
                dn1 === "./images/dice/dice1/four.png" && dn2 === "./images/dice/dice1/two.png" ||
                dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/five.png",
        seven = dn1 === "./images/dice/dice1/one.png" && dn2 === "./images/dice/dice1/six.png" ||
                dn1 === "./images/dice/dice1/two.png" && dn2 === "./images/dice/dice1/five.png" ||
                dn1 === "./images/dice/dice1/three.png" && dn2 === "./images/dice/dice1/four.png" ||
                dn1 === "./images/dice/dice1/four.png" && dn2 === "./images/dice/dice1/three.png" ||
                dn1 === "./images/dice/dice1/five.png" && dn2 === "./images/dice/dice1/two.png" ||
                dn1 === "./images/dice/dice1/six.png" && dn2 === "./images/dice/dice1/one.png",
        eight = dn1 === "./images/dice/dice1/two.png" && dn2 === "./images/dice/dice1/six.png" ||
                dn1 === "./images/dice/dice1/three.png" && dn2 === "./images/dice/dice1/five.png" ||
                dn1 === "./images/dice/dice1/four.png" && dn2 === "./images/dice/dice1/four.png" ||
                dn1 === "./images/dice/dice1/five.png" && dn2 === "./images/dice/dice1/three.png" ||
                dn1 === "./images/dice/dice1/six.png" && dn2 === "./images/dice/dice1/two.png",
        nine = dn1 === "./images/dice/dice1/three.png" && dn2 === "./images/dice/dice1/six.png" ||
                dn1 === "./images/dice/dice1/four.png" && dn2 === "./images/dice/dice1/five.png" ||
                dn1 === "./images/dice/dice1/five.png" && dn2 === "./images/dice/dice1/four.png" ||
                dn1 === "./images/dice/dice1/six.png" && dn2 === "./images/dice/dice1/three.png",
        ten = dn1 === "./images/dice/dice1/four.png" && dn2 === "./images/dice/dice1/six.png" ||
                dn1 === "./images/dice/dice1/five.png" && dn2 === "./images/dice/dice1/five.png" ||
                dn1 === "./images/dice/dice1/six.png" && dn2 === "./images/dice/dice1/four.png",
        eleven = dn1 === "./images/dice/dice1/five.png" && dn2 === "./images/dice/dice1/six.png" ||
                dn1 === "./images/dice/dice1/six.png" && dn2 === "./images/dice/dice1/five.png",
        twelve = dn1 === "./images/dice/dice1/six.png" && dn2 === "./images/dice/dice1/six.png";
        
        if (turn === 1) {
            
                if (two) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 2;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 2) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (three) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 3;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 3) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
    
                } else if (four) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 4;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 4) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (five) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 5;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 5) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (six) {
                
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 6;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 6) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (seven) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 7;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 7) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (eight) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 8;
                    if(carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 8) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (nine) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 9;
                    if (carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 9) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (ten) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 10;
                    if (carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 49) {
                        carM = 9;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 10) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    console.log(fieldObj[carM].cords[1]);
                    
                } else if (eleven) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 11;
                    if (carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 49) {
                        carM = 9;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 50) {
                        carM = 10;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 11) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                    
                } else if (twelve) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 12;
                    if (carM === 40) {
                        carM = 0;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 49) {
                        carM = 9;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 50) {
                        carM = 10;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 51) {
                        carM = 11;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM + 12) {
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    }
                    
                    console.log(fieldObj[carM]);
                    console.log(fieldObj[carM].cords[0]);
                }
    
                console.log(carM);
            
        } else if (turn === 2) {
            
                if (two) {
                        
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 2;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 2) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (three) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 3;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 3) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                
                } else if (four) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 4;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 4) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (five) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 5;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 5) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (six) {
                
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 6;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 6) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (seven) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 7;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 7) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (eight) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 8;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 8) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (nine) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 9;
                    if (shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 9) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (ten) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 10;
                    if (shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 49) {
                        shoeM = 9;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 10) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    console.log(fieldObj[shoeM].cords[3]);
                    
                } else if (eleven) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 11;
                    if (shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 49) {
                        shoeM = 9;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 50) {
                        shoeM = 10;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 11) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                    
                } else if (twelve) {
                    
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 12;
                    if (shoeM === 40) {
                        shoeM = 0;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 49) {
                        shoeM = 9;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 50) {
                        shoeM = 10;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 51) {
                        shoeM = 11;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM + 12) {
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    }
                    
                    console.log(fieldObj[shoeM]);
                    console.log(fieldObj[shoeM].cords[2]);
                }
                
                console.log(shoeM);
            
        } else if (turn === 3) {
            
                if (two) {
                        
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 2;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 2) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (three) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 3;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 3) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                
                } else if (four) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 4;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 4) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (five) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 5;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 5) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (six) {
                
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 6;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 6) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (seven) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 7;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 7) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (eight) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 8;
                    if(hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 8) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (nine) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 9;
                    if (hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 9) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (ten) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 10;
                    if (hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 49) {
                        hatM = 9;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 10) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    console.log(fieldObj[hatM].cords[5]);
                    
                } else if (eleven) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 11;
                    if (hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 49) {
                        hatM = 9;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 50) {
                        hatM = 10;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 11) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                    
                } else if (twelve) {
                    
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 12;
                    if (hatM === 40) {
                        hatM = 0;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 49) {
                        hatM = 9;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 50) {
                        hatM = 10;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 51) {
                        hatM = 11;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM + 12) {
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    }
                    
                    console.log(fieldObj[hatM]);
                    console.log(fieldObj[hatM].cords[4]);
                }
                
                console.log(hatM);
            
        } else if (turn === 4) {
            
                if (two) {
                        
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 2;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 2) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (three) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 3;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 3) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                
                } else if (four) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 4;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 4) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (five) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 5;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 5) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (six) {
                
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 6;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 6) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (seven) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 7;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 7) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (eight) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 8;
                    if(dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 8) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (nine) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 9;
                    if (dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 9) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (ten) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 10;
                    if (dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 49) {
                        dogM = 9;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 10) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    console.log(fieldObj[dogM].cords[7]);
                    
                } else if (eleven) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 11;
                    if (dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 49) {
                        dogM = 9;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 50) {
                        dogM = 10;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 11) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                    
                } else if (twelve) {
                    
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 12;
                    if (dogM === 40) {
                        dogM = 0;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 49) {
                        dogM = 9;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 50) {
                        dogM = 10;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 51) {
                        dogM = 11;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM + 12) {
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    }
                    
                    console.log(fieldObj[dogM]);
                    console.log(fieldObj[dogM].cords[6]);
                }
                
                console.log(dogM);
            
        }
}