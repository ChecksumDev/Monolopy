

let square = document.getElementsByClassName('square'),
    dog = document.getElementById('dog'),
    dogCords = dog.getBoundingClientRect(),
    dogObj = {
        name: "Dog",
        cash: "20000"
    },
    car = document.getElementById('car'),
    hat = document.getElementById('hat'),
    shoe = document.getElementById('shoe'),
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
    setTimeout(function(){ tec(); }, 3000);
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
        sallary: "2000$",
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
        price: "100$",
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
        name: "Old Kent Road",
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        price: "100$",
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
        name: "Regent Street",
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
        name: "Oxford Street",
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
        price: "100$",
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
        price: "100$",
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
        name: "Park Lane",
        price: "100$",
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
        price: "100$",
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
}, false)

shoe.addEventListener('click', function() {
    shoe.style.position = "absolute";
    shoe.style.left = startObj.cords[2];
    shoe.style.top = startObj.cords[3];
}, false)

hat.addEventListener('click', function () {
    hat.style.position = "absolute";
    hat.style.left = startObj.cords[4];
    hat.style.top = startObj.cords[5];
}, false);

dog.addEventListener('click', function () {
    dog.style.position = "absolute";
    dog.style.left = startObj.cords[6];
    dog.style.top = startObj.cords[7];
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
    st2Obj, bowStreetObj, comChest2Obj, bowStreetObj, vineStreetObj,
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