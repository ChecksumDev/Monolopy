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

    // DICES FUNCTIONALITY
roll.addEventListener('click', function() {
    let audio = new Audio("./sounds/diceSound.mp3");
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
    }
    audio.play();
    audio.volume = 0.4;
    rollDice1();
    rollDice2();
    console.log(turn);
    setTimeout(function(){ goToSquare(); }, 2900);
    setTimeout(function(){ showCard(); }, 3200);
    setTimeout(function(){ showPay(); }, 3200);
    setTimeout(function(){ showCh(); }, 3200);
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

    // NORMAL CARDS INFORMATION

let start = document.getElementById('start'),
    startObj = {
        name: "Go",
        sallary: "2000",
        cords: [
            // car //
            "1223px",
            "1310px",
            // shoe //
            "1280px",
            "1310px",
            // hat //
            "1223px",
            "1365px",
            // dog //
            "1280px",
            "1365px"]
    };

let oldKent = document.getElementById('oldKentH'),
    oldKentObj = {
        owned: "Not Owned",
        name: "Old Kent Road",
        price: "60",
        card: ["2" ,"10" ,"30" ,"90" ,
        "160" ,"250" ,"30" ,"50" ,"50" ],
        cords: [
            // car //
            "1103px",
            "1310px",
            // shoe //
            "1160px",
            "1310px",
            // hat //
            "1103px",
            "1365px",
            // dog //
            "1160px",
            "1365px"]
    };

let comChest1 = document.getElementById('comChest1'),
    comChest1Obj = {
        name: "Comunity Chest",
        cords: [
            // car //
            "988px",
            "1310px",
            // shoe //
            "1046px",
            "1310px",
            // hat //
            "988px",
            "1365px",
            // dog //
            "1046px",
            "1365px"]
    };

let whiteRoad = document.getElementById('whiteRoadH'),
    whiteRoadObj = {
        owned: "Not Owned",
        name: "Whitechapel Road",
        price: "80",
        card: ["4" ,"20" ,"60" ,"180" ,
        "320" ,"450" ,"30" ,"50" ,"50" ],
        cords: [
            // car //
            "868px",
            "1310px",
            // shoe //
            "928px",
            "1310px",
            // hat //
            "868px",
            "1365px",
            // dog //
            "928px",
            "1365px"]
    };

let incTax1 = document.getElementById('incTax1'),
    incTax1Obj = {
        name: "Income Tax",
        card: ["200", "0"],
        cords: [
            // car //
            "740px",
            "1310px",
            // shoe //
            "800px",
            "1310px",
            // hat //
            "740px",
            "1365px",
            // dog //
            "800px",
            "1365px"]
    };

let st1 = document.getElementById('st1H'),
    st1Obj = {
        owned: "Not Owned",
        name: "Marylebon Station",
        price: "200",
        card: ["100" ,"200" ,"300" ,"400" ,"100" ],
        cords: [
            // car //
            "622px",
            "1310px",
            // shoe //
            "680px",
            "1310px",
            // hat //
            "622px",
            "1365px",
            // dog //
            "680px",
            "1365px"]
    };

let theAngel = document.getElementById('theAngelH'),
    theAngelObj = {
        owned: "Not Owned",
        name: "The Angel Inslington",
        price: "100",
        card: ["6" ,"30" ,"90" ,"270" ,
        "400" ,"550" ,"50" ,"50" ,"50" ],
        cords: [
            // car //
            "500px",
            "1310px",
            // shoe //
            "560px",
            "1310px",
            // hat //
            "500px",
            "1365px",
            // dog //
            "560px",
            "1365px"]
    };

let chanse1 = document.getElementById('chanse1'),
    chanse1Obj = {
        name: "Chanse",
        cords: [
            // car //
            "377px",
            "1310px",
            // shoe //
            "437px",
            "1310px",
            // hat //
            "377px",
            "1365px",
            // dog //
            "437px",
            "1365px"]
    };

let eustonRoad = document.getElementById('eustonRoadH'),
    eustonRoadObj = {
        owned: "Not Owned",
        name: "Euston Road",
        price: "110",
        card: ["8" ,"30" ,"90" ,"270" ,
        "400" ,"550" ,"50" ,"50" ,"50" ],
        cords: [
            // car //
            "250px",
            "1310px",
            // shoe //
            "310px",
            "1310px",
            // hat //
            "250px",
            "1365px",
            // dog //
            "310px",
            "1365px"]
    };

let pentonRoad = document.getElementById('pentonRoadH'),
    pentonRoadObj = {
        owned: "Not Owned",
        name: "Pentonvile Road",
        price: "120",
        card: ["10" ,"40" ,"100" ,"300" ,
        "450" ,"600" ,"60" ,"50" ,"50" ],
        cords: [
            // car //
            "120px",
            "1310px",
            // shoe //
            "180px",
            "1310px",
            // hat //
            "120px",
            "1365px",
            // dog //
            "180px",
            "1365px"]
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

let palMal = document.getElementById('palMalH'),
    palMalObj = {
        owned: "Not Owned",
        name: "Pal Mal Street",
        price: "140",
        card: ["12" ,"50" ,"150" ,"450" ,
        "630" ,"750" ,"70" ,"100" ,"100" ],
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

let eCompany1 = document.getElementById('eCompany1H'),
    eCompany1Obj = {
        name: "Electric Company",
        price: "150",
        card: ["200", "400", "80" ],
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

let whiteHall = document.getElementById('whiteHallH'),
    whiteHallObj = {
        name: "Whitehall Street",
        price: "150",
        card: ["14" ,"50" ,"150" ,"450" ,
        "630" ,"750" ,"70" ,"100" ,"100" ],
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

let northLimber = document.getElementById('northLimberH'),
    northLimberObj = {
        name: "Northlimberian Road",
        price: "160",
        card: ["16" ,"60" ,"180" ,"500" ,
        "700" ,"900" ,"80" ,"100" ,"100" ],
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

let st2 = document.getElementById('st2H'),
    st2Obj = {
        owned: "Not Owned",
        name: "Fenchurch Station",
        price: "200",
        card: ["100" ,"200" ,"300" ,"400" ,"100" ],
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

let bowStreet = document.getElementById('bowStreetH'),
    bowStreetObj = {
        owned: "Not Owned",
        name: "Bow Street",
        price: "180",
        card: ["18" ,"70" ,"200" ,"550" ,
        "700" ,"900" ,"90" ,"100" ,"100" ],
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

let malborStreet = document.getElementById('malborStreetH'),
    malborStreetObj = {
        owned: "Not Owned",
        name: "Malborough Street",
        price: "190",
        card: ["20" ,"75" ,"210" ,"580" ,
        "750" ,"950" ,"100" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "290px",
            // shoe //
            "62px",
            "290px",
            // hat //
            "6px",
            "345px",
            // dog //
            "62px",
            "345px"]
    };

let vineStreet = document.getElementById('vineStreetH'),
    vineStreetObj = {
        owned: "Not Owned",
        name: "Vine Street",
        price: "200",
        card: ["22" ,"80" ,"220" ,"600" ,
        "800" ,"1000" ,"100" ,"100" ,"100" ],
        cords: [
            // car //
            "6px",
            "160px",
            // shoe //
            "62px",
            "160px",
            // hat //
            "6px",
            "215px",
            // dog //
            "62px",
            "215px"]
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

let strandStreet = document.getElementById('strandStreetH'),
    strandStreetObj = {
        owned: "Not Owned",
        name: "Strand Street",
        price: "220",
        card: ["24" ,"90" ,"250" ,"700" ,
        "880" ,"1000" ,"110" ,"150" ,"150" ],
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

let fleetStreet = document.getElementById('fleetStreetH'),
    fleetStreetObj = {
        owned: "Not Owned",
        name: "Fleet Street",
        price: "230",
        card: ["26" ,"95" ,"280" ,"730" ,
        "900" ,"1050" ,"110" ,"150" ,"150" ],
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

let trafSquare = document.getElementById('trafSquareH'),
    trafSquareObj = {
        owned: "Not Owned",
        name: "Trafalguare Square",
        price: "240",
        card: ["28" ,"100" ,"300" ,"750" ,
        "930" ,"1100" ,"120" ,"150" ,"150" ],
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

let st3 = document.getElementById('st3H'),
    st3Obj = {
        owned: "Not Owned",
        name: "Kings Cross Station",
        price: "200",
        card: ["100" ,"200" ,"300" ,"400" ,"100"],
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

let LeicSquare = document.getElementById('LeicSquareH'),
    LeicSquareObj = {
        owned: "Not Owned",
        name: "Leicester Square",
        price: "260",
        card: ["30" ,"110" ,"330" ,"800" ,
        "980" ,"1100" ,"130" ,"150" ,"150" ],
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

let CovStreet = document.getElementById('CovStreetH'),
    CovStreetObj = {
        owned: "Not Owned",
        name: "Coventry Street",
        price: "270",
        card: ["32" ,"115" ,"340" ,"830" ,
        "1000" ,"1150" ,"130" ,"150" ,"150" ],
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

let waterWorks = document.getElementById('waterWorksH'),
    waterWorksObj = {
        name: "Water Works",
        price: "150",
        card: ["200", "400", "80" ],
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

let PiccStreet = document.getElementById('PiccStreetH'),
    PiccStreetObj = {
        owned: "Not Owned",
        name: "Piccadilly Street",
        price: "280",
        card: ["34" ,"120" ,"360" ,"850" ,
        "1030" ,"1200" ,"140" ,"150" ,"150" ],
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

let regentStreet = document.getElementById('regentStreetH'),
    regentStreetObj = {
        owned: "Not Owned",
        name: "Regent Street",
        price: "300",
        card: ["36" ,"130" ,"390" ,"900" ,
        "1100" ,"1300" ,"150" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "160px",
            // shoe //
            "1280px",
            "160px",
            // hat //
            "1223px",
            "215px",
            // dog //
            "1280px",
            "215px"]
    };

let oxfordStreet = document.getElementById('oxfordStreetH'),
    oxfordStreetObj = {
        owned: "Not Owned",
        name: "Oxford Street",
        price: "310",
        card: ["38" ,"140" ,"410" ,"950" ,
        "1150" ,"1350" ,"150" ,"200" ,"200" ],
        cords: [
            // car //
            "1223px",
            "290px",
            // shoe //
            "1280px",
            "290px",
            // hat //
            "1223px",
            "345px",
            // dog //
            "1280px",
            "345px"]
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

let bondStreet = document.getElementById('bondStreetH'),
    bondStreetObj = {
        owned: "Not Owned",
        name: "Bond Street",
        price: "320",
        card: ["40" ,"150" ,"450" ,"1000" ,
        "1200" ,"1400" ,"160" ,"200" ,"200" ],
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

let st4 = document.getElementById('st4H'),
    st4Obj = {
        owned: "Not Owned",
        name: "Liverpool Station",
        price: "200",
        card: ["100" ,"200" ,"300" ,"400" ,"100" ],
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

let parkLane = document.getElementById('parkLaneH'),
    parkLaneObj = {
        owned: "Not Owned",
        name: "Park Lane",
        price: "350",
        card: ["44" ,"180" ,"500" ,"1100" ,
        "1300" ,"1500" ,"180" ,"200" ,"200" ],
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
        card: ["400", "0"],
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

let mayFair = document.getElementById('mayFairH'),
    mayFairObj = {
        owned: "Not Owned",
        name: "Mayfaire Street",
        price: "400",
        card: ["50" ,"200" ,"600" ,"1400" ,
        "1700" ,"2000" ,"200" ,"200" ,"200" ],
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

    // CHANSE CARDS INFORMATION
const chanseCards = [
    {
        text: "Advance to Go and Collect 2000$"
    },
    {
        text: "Advance 1 Spaces"
    },
    {
        text: "Advance 3 Spaces"
    },
    {
        text: "Advance 4 Spaces."
    },
    {
        text: "Advance 5 Spaces."
    },
    {
        text: "Bank pays you dividend of 1000$"
    },
    {
        text: "Get Out of Jail Free"
    },
    {
        text: "Go Back 2 Spaces"
    },
    {
        text: "Go Back 4 Spaces"
    },
    {
        text: "Go Back 5 Spaces"
    },
    {
        text: "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$"
    },
    {
        text: "Make general repairs on all your property. For each house pay 25$. For each hotel 100$"
    },
    {
        text: "Pay poor tax of 300$"
    },
    {
        text: "You have been elected Chairman of the Board–Pay each player 500$"
    },
    {
        text: "Your building and loan matures. Collect 1500$"
    },
    {
        text: "You have won in a Cassino. Collect 4000$"
    }
];

    // Chanse Cards Functionality

function chCards(){
    chText = document.getElementById('chText');
    chanseCards.sort(function(a, b){return 0.5 - Math.random()});
        chText.innerHTML = chanseCards[0].text;
}

function showCh() {
    chOptions = document.getElementById('chOptions');
    chCards();
    if(turn == 0 && (carM == 7 || carM == 22 || carM == 36)) {
        chOptions.style.display = "grid";

    } else if (turn == 1 && (shoeM == 7 || shoeM == 22 || shoeM == 36)) {
        chOptions.style.display = "grid";

    } else if (turn == 2 && (hatM == 7 || hatM == 22 || hatM == 36)) {
        chOptions.style.display = "grid";

    } else if (turn == 3 && (dogM == 7 || dogM == 22 || dogM == 36)) {
        chOptions.style.display = "grid";

    }
}

    // Chanse Button Functionality

const chButton = document.getElementById('chButton');

chButton.addEventListener('click', function(){
    if (turn == 0) {
        chOptions.style.display = "none";
        chCardsEvents();
        // showCard();
        // setTimeout(function(){ getTurn(); }, 200);
        // setTimeout(function(){ tec(); }, 100);

        // if ( tec() ) {
        //     turn -= 1;
        //     turnText.innerHTML = "It's Car Turn !";
        // } else {
        //     turnText.innerHTML = "It's Shoe Turn !";
        // }  
    } else if (turn == 1) {
        chOptions.style.display = "none";
        chCardsEvents();
        // setTimeout(function(){ getTurn(); }, 200);
        // setTimeout(function(){ tec(); }, 100);
       
        // if ( tec() ) {
        //     turn -= 1;
        //     turnText.innerHTML = "It's Shoe Turn !";
        // } else {
        //     turnText.innerHTML = "It's Hat Turn !";
        // }
    } else if (turn == 2) {
        chOptions.style.display = "none";
        chCardsEvents();
        // setTimeout(function(){ getTurn(); }, 200);
        // setTimeout(function(){ tec(); }, 100);
        
        // if ( tec() ) {
        //     turn -= 1;
        //     turnText.innerHTML = "It's Hat Turn !";
        // } else {
        //     turnText.innerHTML = "It's Dog Turn !";
        // }
    } else if (turn == 3) {
        chOptions.style.display = "none";
        chCardsEvents();
        // setTimeout(function(){ getTurn(); }, 200);
        // setTimeout(function(){ tec(); }, 100);
        
        // if ( tec() ) {
        //     turn -= 1;
        //     turnText.innerHTML = "It's Dog Turn !";
        // } else {
        //     turnText.innerHTML = "It's Car Turn !";
        // }
    }
}, false)

function chCardsEvents(){
    chText = document.getElementById('chText');
    if (turn == 0) {
        if (chText.innerHTML == "Advance to Go and Collect 2000$") {
            carM = 0;
            carBallance.innerHTML = (2000 + +carObj.cash) + " $";
            carObj.cash = 2000 + +carObj.cash;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "Advance 1 Spaces") {
            carM += 1;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            showCard();
            showPay();
            
        } else if (chText.innerHTML == "Advance 3 Spaces") {
            carM += 3;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            showCard();
            showPay();
    
        } else if (chText.innerHTML == "Advance 4 Spaces.") {
            carM += 4;
            if(carM === 40) {
                carM = 0;
                carBallance.innerHTML = (2000 + +carObj.cash) + " $";
                carObj.cash = 2000 + +carObj.cash;
                car.style.left = fieldObj[carM].cords[0];
                car.style.top = fieldObj[carM].cords[1];
                turn +=1;
                turnText.innerHTML = "It's Shoe Turn !"

            } else if (carM + 4) {
                car.style.left = fieldObj[carM].cords[0];
                car.style.top = fieldObj[carM].cords[1];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Advance 5 Spaces.") {
            carM += 5;
            if(carM === 40) {
                carM = 0;
                carBallance.innerHTML = (2000 + +carObj.cash) + " $";
                carObj.cash = 2000 + +carObj.cash;
                car.style.left = fieldObj[carM].cords[0];
                car.style.top = fieldObj[carM].cords[1];
                turn +=1;
                turnText.innerHTML = "It's Shoe Turn !"

            } else if (carM + 5) {
                car.style.left = fieldObj[carM].cords[0];
                car.style.top = fieldObj[carM].cords[1];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Bank pays you dividend of 1000$") {
            carBallance.innerHTML = (1000 + +carObj.cash) + " $";
            carObj.cash = 1000 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "Get Out of Jail Free") {
            // jail
        } else if (chText.innerHTML == "Go Back 2 Spaces") {
            carM -= 2;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 4 Spaces") {
            carM -= 4;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 5 Spaces") {
            carM -= 5;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            carM == 10;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            carBallance.innerHTML = (carObj.cash - 300) + " $";
            carObj.cash = carObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "You have been elected Chairman of the Board–Pay each player 500$") {
            
            shoeBallance.innerHTML = (shoeObj.cash - 500) + " $";
            shoeObj.cash = +shoeObj.cash - 500;
            
            hatBallance.innerHTML = (hatObj.cash - 500) + " $";
            hatObj.cash = +hatObj.cash - 500;
            
            dogBallance.innerHTML = (dogObj.cash - 500) + " $";
            dogObj.cash = +dogObj.cash - 500;
            
            carBallance.innerHTML = (1500 + +carObj.cash) + " $";
            carObj.cash = 1500 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"
    
        } else if (chText.innerHTML == "Your building and loan matures. Collect 1500$") {
            carBallance.innerHTML = (1500 + +carObj.cash) + " $";
            carObj.cash = 1500 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"
    
        } else if (chText.innerHTML == "You have won in a Cassino. Collect 4000$") {
            carBallance.innerHTML = (4000 + +carObj.cash) + " $";
            carObj.cash = 4000 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"
        }
    } else if (turn == 1) {
        if (chText.innerHTML == "Advance to Go and Collect 2000$") {
            shoeM = 0;
            shoeBallance.innerHTML = (2000 + +shoeObj.cash) + " $";
            shoeObj.cash = 2000 + +shoeObj.cash;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"

        } else if (chText.innerHTML == "Advance 1 Spaces") {
            shoeM += 1;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            showCard();
            showPay();
            
        } else if (chText.innerHTML == "Advance 3 Spaces") {
            shoeM += 3;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            showCard();
            showPay();
    
        } else if (chText.innerHTML == "Advance 4 Spaces.") {
            shoeM += 4;
            if(shoeM === 40) {
                shoeM = 0;
                shoeBallance.innerHTML = (2000 + +shoeObj.cash) + " $";
                shoeObj.cash = 2000 + +shoeObj.cash;
                shoe.style.left = fieldObj[shoeM].cords[2];
                shoe.style.top = fieldObj[shoeM].cords[3];
                turn +=1;
                turnText.innerHTML = "It's Hat Turn !"

            } else if (shoeM + 4) {
                shoe.style.left = fieldObj[shoeM].cords[2];
                shoe.style.top = fieldObj[shoeM].cords[3];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Advance 5 Spaces.") {
            shoeM += 5;
            if(shoeM === 40) {
                shoeM = 0;
                shoeBallance.innerHTML = (2000 + +shoeObj.cash) + " $";
                shoeObj.cash = 2000 + +shoeObj.cash;
                shoe.style.left = fieldObj[shoeM].cords[2];
                shoe.style.top = fieldObj[shoeM].cords[3];
                turn +=1;
                turnText.innerHTML = "It's Hat Turn !"

            } else if (shoeM + 5) {
                shoe.style.left = fieldObj[shoeM].cords[2];
                shoe.style.top = fieldObj[shoeM].cords[3];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Bank pays you dividend of 1000$") {
            shoeBallance.innerHTML = (1000 + +shoeObj.cash) + " $";
            shoeObj.cash = 1000 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"

        } else if (chText.innerHTML == "Get Out of Jail Free") {
            // jail
        } else if (chText.innerHTML == "Go Back 2 Spaces") {
            shoeM -= 2;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 4 Spaces") {
            shoeM -= 4;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 5 Spaces") {
            shoeM -= 5;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            shoeM == 10;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"

        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            shoeBallance.innerHTML = (shoeObj.cash - 300) + " $";
            shoeObj.cash = shoeObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "You have been elected Chairman of the Board–Pay each player 500$") {
            
            carBallance.innerHTML = (carObj.cash - 500) + " $";
            carObj.cash = +carObj.cash - 500;
            
            hatBallance.innerHTML = (hatObj.cash - 500) + " $";
            hatObj.cash = +hatObj.cash - 500;
            
            dogBallance.innerHTML = (dogObj.cash - 500) + " $";
            dogObj.cash = +dogObj.cash - 500;
            
            shoeBallance.innerHTML = (1500 + +shoeObj.cash) + " $";
            shoeObj.cash = 1500 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
    
        } else if (chText.innerHTML == "Your building and loan matures. Collect 1500$") {
            shoeBallance.innerHTML = (1500 + +shoeObj.cash) + " $";
            shoeObj.cash = 1500 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
    
        } else if (chText.innerHTML == "You have won in a Cassino. Collect 4000$") {
            shoeBallance.innerHTML = (4000 + +shoeObj.cash) + " $";
            shoeObj.cash = 4000 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        }
    } else if (turn == 2) {
        if (chText.innerHTML == "Advance to Go and Collect 2000$") {
            hatM = 0;
            hatBallance.innerHTML = (2000 + +hatObj.cash) + " $";
            hatObj.cash = 2000 + +hatObj.cash;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "Advance 1 Spaces") {
            hatM += 1;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            showCard();
            showPay();
            
        } else if (chText.innerHTML == "Advance 3 Spaces") {
            hatM += 3;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            showCard();
            showPay();
    
        } else if (chText.innerHTML == "Advance 4 Spaces.") {
            hatM += 4;
            if(hatM === 40) {
                hatM = 0;
                hatBallance.innerHTML = (2000 + +hatObj.cash) + " $";
                hatObj.cash = 2000 + +hatObj.cash;
                hat.style.left = fieldObj[hatM].cords[4];
                hat.style.top = fieldObj[hatM].cords[5];
                turn +=1;
                turnText.innerHTML = "It's Dog Turn !"
    
            } else if (hatM + 4) {
                hat.style.left = fieldObj[hatM].cords[4];
                hat.style.top = fieldObj[hatM].cords[5];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Advance 5 Spaces.") {
            hatM += 5;
            if(hatM === 40) {
                hatM = 0;
                hatBallance.innerHTML = (2000 + +hatObj.cash) + " $";
                hatObj.cash = 2000 + +hatObj.cash;
                hat.style.left = fieldObj[hatM].cords[4];
                hat.style.top = fieldObj[hatM].cords[5];
                turn +=1;
                turnText.innerHTML = "It's Dog Turn !"
    
            } else if (hatM + 5) {
                hat.style.left = fieldObj[hatM].cords[4];
                hat.style.top = fieldObj[hatM].cords[5];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Bank pays you dividend of 1000$") {
            hatBallance.innerHTML = (1000 + +hatObj.cash) + " $";
            hatObj.cash = 1000 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "Get Out of Jail Free") {
            // jail
        } else if (chText.innerHTML == "Go Back 2 Spaces") {
            hatM -= 2;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 4 Spaces") {
            hatM -= 4;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 5 Spaces") {
            hatM -= 5;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            hatM == 10;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            hatBallance.innerHTML = (hatObj.cash - 300) + " $";
            hatObj.cash = hatObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "You have been elected Chairman of the Board–Pay each player 500$") {
            
            carBallance.innerHTML = (carObj.cash - 500) + " $";
            carObj.cash = +carObj.cash - 500;
            
            shoeBallance.innerHTML = (shoeObj.cash - 500) + " $";
            shoeObj.cash = +shoeObj.cash - 500;
            
            dogBallance.innerHTML = (dogObj.cash - 500) + " $";
            dogObj.cash = +dogObj.cash - 500;
            
            hatBallance.innerHTML = (1500 + +hatObj.cash) + " $";
            hatObj.cash = 1500 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "Your building and loan matures. Collect 1500$") {
            hatBallance.innerHTML = (1500 + +hatObj.cash) + " $";
            hatObj.cash = 1500 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "You have won in a Cassino. Collect 4000$") {
            hatBallance.innerHTML = (4000 + +hatObj.cash) + " $";
            hatObj.cash = 4000 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        }
    } else if (turn == 3) {
        if (chText.innerHTML == "Advance to Go and Collect 2000$") {
            dogM = 0;
            dogBallance.innerHTML = (2000 + +dogObj.cash) + " $";
            dogObj.cash = 2000 + +dogObj.cash;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "Advance 1 Spaces") {
            dogM += 1;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            showCard();
            showPay();
            
        } else if (chText.innerHTML == "Advance 3 Spaces") {
            dogM += 3;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            showCard();
            showPay();
    
        } else if (chText.innerHTML == "Advance 4 Spaces.") {
            dogM += 4;
            if(dogM === 40) {
                dogM = 0;
                dogBallance.innerHTML = (2000 + +dogObj.cash) + " $";
                dogObj.cash = 2000 + +dogObj.cash;
                dog.style.left = fieldObj[dogM].cords[6];
                dog.style.top = fieldObj[dogM].cords[7];
                turn +=1;
                turnText.innerHTML = "It's Car Turn !"
    
            } else if (dogM + 4) {
                dog.style.left = fieldObj[dogM].cords[6];
                dog.style.top = fieldObj[dogM].cords[7];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Advance 5 Spaces.") {
            dogM += 5;
            if(dogM === 40) {
                dogM = 0;
                dogBallance.innerHTML = (2000 + +dogObj.cash) + " $";
                dogObj.cash = 2000 + +dogObj.cash;
                dog.style.left = fieldObj[dogM].cords[6];
                dog.style.top = fieldObj[dogM].cords[7];
                turn +=1;
                turnText.innerHTML = "It's Car Turn !"
    
            } else if (dogM + 5) {
                dog.style.left = fieldObj[dogM].cords[6];
                dog.style.top = fieldObj[dogM].cords[7];
                showCard();
                showPay();
            }
    
        } else if (chText.innerHTML == "Bank pays you dividend of 1000$") {
            dogBallance.innerHTML = (1000 + +dogObj.cash) + " $";
            dogObj.cash = 1000 + +dogObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "Get Out of Jail Free") {
            // jail
        } else if (chText.innerHTML == "Go Back 2 Spaces") {
            dogM -= 2;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 4 Spaces") {
            dogM -= 4;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go Back 5 Spaces") {
            dogM -= 5;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            showCard();
            showPay();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            dogM == 10;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            dogBallance.innerHTML = (dogObj.cash - 300) + " $";
            dogObj.cash = dogObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "You have been elected Chairman of the Board–Pay each player 500$") {
            
            carBallance.innerHTML = (carObj.cash - 500) + " $";
            carObj.cash = +carObj.cash - 500;
            
            shoeBallance.innerHTML = (shoeObj.cash - 500) + " $";
            shoeObj.cash = +shoeObj.cash - 500;
            
            hatBallance.innerHTML = (hatObj.cash - 500) + " $";
            hatObj.cash = +hatObj.cash - 500;
            
            dogBallance.innerHTML = (1500 + +dogObj.cash) + " $";
            dogObj.cash = 1500 + +dogObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "Your building and loan matures. Collect 1500$") {
            dogBallance.innerHTML = (1500 + +dogObj.cash) + " $";
            dogObj.cash = 1500 + +dogObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "You have won in a Cassino. Collect 4000$") {
            dogBallance.innerHTML = (4000 + +dogObj.cash) + " $";
            dogObj.cash = 4000 + +dogObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Car Turn !"
        }
    }
}

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

    // Pass Button Functionality
pass.addEventListener('click', function() {
    if (turn == 0) {
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);

        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Car Turn !";
        } else {
            turnText.innerHTML = "It's Shoe Turn !";
        }
        
    } else if (turn == 1) {
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);
       
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Shoe Turn !";
        } else {
            turnText.innerHTML = "It's Hat Turn !";
        }
            
    } else if (turn == 2) {
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);
        
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Hat Turn !";
        } else {
            turnText.innerHTML = "It's Dog Turn !";
        }
         
    } else if (turn == 3) {
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);
        
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Dog Turn !";
        } else {
            turnText.innerHTML = "It's Car Turn !";
        }
    }
}, false);


    // Buy Button Functionality
buy.addEventListener('click', function(){
    if (turn == 0 && field[carM].innerHTML == "Not owned") {
        carStreets++;
        field[carM].innerHTML = carObj.name;
        carBallance.innerHTML = (carObj.cash - fieldObj[carM].price) + " $";
        carObj.cash = carObj.cash - fieldObj[carM].price;
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);

        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Car Turn !";
        } else {
            turnText.innerHTML = "It's Shoe Turn !";
        }

    } else if (turn == 1 && field[shoeM].innerHTML == "Not owned") {
        shoeStreets++;
        field[shoeM].innerHTML = shoeObj.name;
        shoeBallance.innerHTML = (shoeObj.cash - fieldObj[shoeM].price) + " $";
        shoeObj.cash = shoeObj.cash - fieldObj[shoeM].price;
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);
       
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Shoe Turn !";
        } else {
            turnText.innerHTML = "It's Hat Turn !";
        }

    } else if (turn == 2 && field[hatM].innerHTML == "Not owned") {
        hatStreets++;
        field[hatM].innerHTML = hatObj.name;
        hatBallance.innerHTML = (hatObj.cash - fieldObj[hatM].price) + " $";
        hatObj.cash = hatObj.cash - fieldObj[hatM].price;
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);
        
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Hat Turn !";
        } else {
            turnText.innerHTML = "It's Dog Turn !";
        }

    } else if (turn == 3 && field[dogM].innerHTML == "Not owned") {
        dogStreets++;
        field[dogM].innerHTML = dogObj.name;
        dogBallance.innerHTML = (dogObj.cash - fieldObj[dogM].price) + " $";
        dogObj.cash = dogObj.cash - fieldObj[dogM].price;
        cardVisible.style.display = "none";
        setTimeout(function(){ getTurn(); }, 200);
        setTimeout(function(){ tec(); }, 100);
        
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Dog Turn !";
        } else {
            turnText.innerHTML = "It's Car Turn !";
        }
    }
}, false);


    // PAY BUTTON FUNCTIONALITY
pay.addEventListener('click', function(){
let payVisible = document.getElementById('payOptions');
    if (turn == 0) {

        if(
            (carM == 5 || carM == 15 || carM == 25 || carM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            carBallance.innerHTML = (carObj.cash - fieldObj[carM].card[3]) + " $";
            carObj.cash = carObj.cash - fieldObj[carM].card[3];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);
            
            if (field[carM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[carM].card[3]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[carM].card[3];

            } else if (field[carM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[carM].card[3]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[carM].card[3];

            } else if (field[carM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[carM].card[3]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[carM].card[3];
            }

        } else if (
            (carM == 5 || carM == 15 || carM == 25 || carM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            carBallance.innerHTML = (carObj.cash - fieldObj[carM].card[2]) + " $";
            carObj.cash = carObj.cash - fieldObj[carM].card[2];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[carM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[carM].card[2]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[carM].card[2];

            } else if (field[carM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[carM].card[2]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[carM].card[2];

            } else if (field[carM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[carM].card[2]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[carM].card[2];
            }    

        } else if (
            (carM == 12 || carM == 28) &&
            (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") ||
        
            (carM == 5 || carM == 15 || carM == 25 || carM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            carBallance.innerHTML = (carObj.cash - fieldObj[carM].card[1]) + " $";
            carObj.cash = carObj.cash - fieldObj[carM].card[1];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[carM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[carM].card[1]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[carM].card[1];

            } else if (field[carM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[carM].card[1]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[carM].card[1];

            } else if (field[carM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[carM].card[1]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[carM].card[1];
            }

        } else {
            carBallance.innerHTML = (carObj.cash - fieldObj[carM].card[0]) + " $";
            carObj.cash = carObj.cash - fieldObj[carM].card[0];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[carM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[carM].card[0]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[carM].card[0];

            } else if (field[carM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[carM].card[0]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[carM].card[0];

            } else if (field[carM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[carM].card[0]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[carM].card[0];
            }
        }

        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Car Turn !";
        } else {
            turnText.innerHTML = "It's Shoe Turn !";
        }

    } else if (turn == 1) {

        if(
            (shoeM == 5 || shoeM == 15 || shoeM == 25 || shoeM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            shoeBallance.innerHTML = (shoeObj.cash - fieldObj[shoeM].card[3]) + " $";
            shoeObj.cash = shoeObj.cash - fieldObj[shoeM].card[3];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100); 

            if (field[shoeM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[shoeM].card[3]) + " $";
                carObj.cash = carObj.cash + +fieldObj[shoeM].card[3];

            } else if (field[shoeM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[shoeM].card[3]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[shoeM].card[3];

            } else if (field[shoeM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[shoeM].card[3]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[shoeM].card[3];
            }

        } else if (
            (shoeM == 5 || shoeM == 15 || shoeM == 25 || shoeM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            shoeBallance.innerHTML = (shoeObj.cash - fieldObj[shoeM].card[2]) + " $";
            shoeObj.cash = shoeObj.cash - fieldObj[shoeM].card[2];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100); 

            if (field[shoeM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[shoeM].card[2]) + " $";
                carObj.cash = carObj.cash + +fieldObj[shoeM].card[2];

            } else if (field[shoeM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[shoeM].card[2]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[shoeM].card[2];

            } else if (field[shoeM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[shoeM].card[2]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[shoeM].card[2];
            }

        } else if (
            (shoeM == 12 || shoeM == 28) &&
            (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") ||
        
            (shoeM == 5 || shoeM == 15 || shoeM == 25 || shoeM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            shoeBallance.innerHTML = (shoeObj.cash - fieldObj[shoeM].card[1]) + " $";
            shoeObj.cash = shoeObj.cash - fieldObj[shoeM].card[1];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100); 

            if (field[shoeM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[shoeM].card[1]) + " $";
                carObj.cash = carObj.cash + +fieldObj[shoeM].card[1];

            } else if (field[shoeM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[shoeM].card[1]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[shoeM].card[1];

            } else if (field[shoeM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[shoeM].card[1]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[shoeM].card[1];
            }

        } else {
            shoeBallance.innerHTML = (shoeObj.cash - fieldObj[shoeM].card[0]) + " $";
            shoeObj.cash = shoeObj.cash - fieldObj[shoeM].card[0];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[shoeM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[shoeM].card[0]) + " $";
                carObj.cash = carObj.cash + +fieldObj[shoeM].card[0];

            } else if (field[shoeM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[shoeM].card[0]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[shoeM].card[0];

            } else if (field[shoeM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[shoeM].card[0]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[shoeM].card[0];
            }

        }
       
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Shoe Turn !";
        } else {
            turnText.innerHTML = "It's Hat Turn !";
        }

    } else if (turn == 2) {

        if(
            (hatM == 5 || hatM == 15 || hatM == 25 || hatM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            hatBallance.innerHTML = (hatObj.cash - fieldObj[hatM].card[3]) + " $";
            hatObj.cash = hatObj.cash - fieldObj[hatM].card[3];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[hatM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[hatM].card[3]) + " $";
                carObj.cash = carObj.cash + +fieldObj[hatM].card[3];

            } else if (field[hatM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[hatM].card[3]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[hatM].card[3];

            } else if (field[hatM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[hatM].card[3]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[hatM].card[3];
            }

        } else if (
            (hatM == 5 || hatM == 15 || hatM == 25 || hatM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            hatBallance.innerHTML = (hatObj.cash - fieldObj[hatM].card[2]) + " $";
            hatObj.cash = hatObj.cash - fieldObj[hatM].card[2];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);
            
            if (field[hatM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[hatM].card[2]) + " $";
                carObj.cash = carObj.cash + +fieldObj[hatM].card[2];

            } else if (field[hatM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[hatM].card[2]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[hatM].card[2];

            } else if (field[hatM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[hatM].card[2]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[hatM].card[2];
            }

        } else if (
            (hatM == 12 || hatM == 28) &&
            (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") ||
        
            (hatM == 5 || hatM == 15 || hatM == 25 || hatM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            hatBallance.innerHTML = (hatObj.cash - fieldObj[hatM].card[1]) + " $";
            hatObj.cash = hatObj.cash - fieldObj[hatM].card[1];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[hatM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[hatM].card[1]) + " $";
                carObj.cash = carObj.cash + +fieldObj[hatM].card[1];

            } else if (field[hatM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[hatM].card[1]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[hatM].card[1];

            } else if (field[hatM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[hatM].card[1]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[hatM].card[1];
            }

        } else {
            hatBallance.innerHTML = (hatObj.cash - fieldObj[hatM].card[0]) + " $";
            hatObj.cash = hatObj.cash - fieldObj[hatM].card[0];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[hatM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[hatM].card[0]) + " $";
                carObj.cash = carObj.cash + +fieldObj[hatM].card[0];

            } else if (field[hatM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[hatM].card[0]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[hatM].card[0];

            } else if (field[hatM].innerHTML == "Dog") {

                dogBallance.innerHTML = (dogObj.cash + +fieldObj[hatM].card[0]) + " $";
                dogObj.cash = dogObj.cash + +fieldObj[hatM].card[0];
            }
        }
        
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Hat Turn !";
        } else {
            turnText.innerHTML = "It's Dog Turn !";
        }

    } else if (turn == 3) {

        if (
            (dogM == 5 || dogM == 15 || dogM == 25 || dogM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            dogBallance.innerHTML = (dogObj.cash - fieldObj[dogM].card[3]) + " $";
            dogObj.cash = dogObj.cash - fieldObj[dogM].card[3];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);
            
            if (field[dogM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[dogM].card[3]) + " $";
                carObj.cash = carObj.cash + +fieldObj[dogM].card[3];

            } else if (field[dogM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[dogM].card[3]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[dogM].card[3];

            } else if (field[dogM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[dogM].card[3]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[dogM].card[3];
            }

        } else if (
            (dogM == 5 || dogM == 15 || dogM == 25 || dogM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            dogBallance.innerHTML = (dogObj.cash - fieldObj[dogM].card[2]) + " $";
            dogObj.cash = dogObj.cash - fieldObj[dogM].card[2];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);
            
            if (field[dogM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[dogM].card[2]) + " $";
                carObj.cash = carObj.cash + +fieldObj[dogM].card[2];

            } else if (field[dogM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[dogM].card[2]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[dogM].card[2];

            } else if (field[dogM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[dogM].card[2]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[dogM].card[2];
            }

        } else if (
            (dogM == 12 || dogM == 28) &&
            (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") ||
        
            (dogM == 5 || dogM == 15 || dogM == 25 || dogM == 35) &&
            (field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog")) {

            dogBallance.innerHTML = (dogObj.cash - fieldObj[dogM].card[1]) + " $";
            dogObj.cash = dogObj.cash - fieldObj[dogM].card[1];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[dogM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[dogM].card[1]) + " $";
                carObj.cash = carObj.cash + +fieldObj[dogM].card[1];

            } else if (field[dogM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[dogM].card[1]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[dogM].card[1];

            } else if (field[dogM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[dogM].card[1]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[dogM].card[1];
            }

        } else {
            dogBallance.innerHTML = (dogObj.cash - fieldObj[dogM].card[0]) + " $";
            dogObj.cash = dogObj.cash - fieldObj[dogM].card[0];
            payVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if (field[dogM].innerHTML == "Car") {

                carBallance.innerHTML = (carObj.cash + +fieldObj[dogM].card[0]) + " $";
                carObj.cash = carObj.cash + +fieldObj[dogM].card[0];

            } else if (field[dogM].innerHTML == "Shoe") {

                shoeBallance.innerHTML = (shoeObj.cash + +fieldObj[dogM].card[0]) + " $";
                shoeObj.cash = shoeObj.cash + +fieldObj[dogM].card[0];

            } else if (field[dogM].innerHTML == "Hat") {

                hatBallance.innerHTML = (hatObj.cash + +fieldObj[dogM].card[0]) + " $";
                hatObj.cash = hatObj.cash + +fieldObj[dogM].card[0];
            }
        }
        
        if ( tec() ) {
            turn -= 1;
            turnText.innerHTML = "It's Dog Turn !";
        } else {
            turnText.innerHTML = "It's Car Turn !";
        }
    }
}, false)

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

    let carM = 0,
    shoeM = 0,
    hatM = 0,
    dogM = 0,
    players = [car, shoe, hat, dog],
    turn = 0;


    // Showing buy card options
function showCard() {

    if (turn == 0 && carM == 1 || turn == 1 && shoeM == 1 || turn == 2 && hatM == 1 || turn == 3 && dogM == 1) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = oldKentObj.name;
        cardName.style.backgroundColor = "rgb(133, 76, 23)";
        siteonly.innerHTML = oldKentObj.card[0] + "$";
        house1.innerHTML = oldKentObj.card[1] + "$";
        house2.innerHTML = oldKentObj.card[2] + "$";
        house3.innerHTML = oldKentObj.card[3] + "$";
        house4.innerHTML = oldKentObj.card[4] + "$";
        hotel.innerHTML = oldKentObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + oldKentObj.card[6] + "$";
        housecost.innerHTML = oldKentObj.card[7] + "$";
        hotelcost.innerHTML = oldKentObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + oldKentObj.price + "$";
    } else if (turn == 0 && carM == 2 || turn == 1 && shoeM == 2 || turn == 2 && hatM == 2 || turn == 3 && dogM == 2) {
        cardVisible.style.display = "grid";
            // comchest1

    } else if (turn == 0 && carM == 3 || turn == 1 && shoeM == 3 || turn == 2 && hatM == 3 || turn == 3 && dogM == 3) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = whiteHallObj.name;
        cardName.style.backgroundColor = "rgb(133, 76, 23)";
        siteonly.innerHTML = whiteRoadObj.card[0] + "$";
        house1.innerHTML = whiteRoadObj.card[1] + "$";
        house2.innerHTML = whiteRoadObj.card[2] + "$";
        house3.innerHTML = whiteRoadObj.card[3] + "$";
        house4.innerHTML = whiteRoadObj.card[4] + "$";
        hotel.innerHTML = whiteRoadObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + whiteRoadObj.card[6] + "$";
        housecost.innerHTML = whiteRoadObj.card[7] + "$";
        hotelcost.innerHTML = whiteRoadObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + whiteRoadObj.price + "$";
    } else if (turn == 0 && carM == 4 || turn == 1 && shoeM == 4 || turn == 2 && hatM == 4 || turn == 3 && dogM == 4) {
        payVisible.style.display = "grid";
        payName.innerHTML = "Income Tax";
        payName.style.backgroundColor = "rgb(66, 179, 244)";
        paySiteOnly.innerHTML = "revision";
        payHouse.innerHTML = "revision";
        payHotel.innerHTML = "revision";
        payText.innerHTML = "Pay " + "200" + "$";
            // incometax1
        
    } else if (turn == 0 && carM == 5 || turn == 1 && shoeM == 5 || turn == 2 && hatM == 5 || turn == 3 && dogM == 5) {
        cardVisible.style.display = "grid";
        // st1
        cardName.innerHTML = st1Obj.name;
        cardName.style.backgroundColor = "rgb(148, 148, 148)";
        siteonly.innerHTML = st1Obj.card[0] + "$";
        house1.innerHTML = "can't build";
        house2.innerHTML = "can't build";
        house3.innerHTML = "can't build";
        house4.innerHTML = "can't build";
        hotel.innerHTML = "can't build";
        mortgage.innerHTML = "MORTGAGE value" + st1Obj.card[4] + "$";
        housecost.innerHTML = ",,";
        hotelcost.innerHTML = ",,";
        buyText.innerHTML = "Buy for " + st1Obj.price + "$";

    } else if (turn == 0 && carM == 6 || turn == 1 && shoeM == 6 || turn == 2 && hatM == 6 || turn == 3 && dogM == 6) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = theAngelObj.name;
        cardName.style.backgroundColor = "rgb(68, 188, 224)";
        siteonly.innerHTML = theAngelObj.card[0] + "$";
        house1.innerHTML = theAngelObj.card[1] + "$";
        house2.innerHTML = theAngelObj.card[2] + "$";
        house3.innerHTML = theAngelObj.card[3] + "$";
        house4.innerHTML = theAngelObj.card[4] + "$";
        hotel.innerHTML = theAngelObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + theAngelObj.card[6] + "$";
        housecost.innerHTML = theAngelObj.card[7] + "$";
        hotelcost.innerHTML = theAngelObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + theAngelObj.price + "$";
    }  else if (turn == 0 && carM == 7 || turn == 1 && shoeM == 7 || turn == 2 && hatM == 7 || turn == 3 && dogM == 7) {
        
            // chanse1
        
    } else if (turn == 0 && carM == 8 || turn == 1 && shoeM == 8 || turn == 2 && hatM == 8 || turn == 3 && dogM == 8) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = eustonRoadObj.name;
        cardName.style.backgroundColor = "rgb(68, 188, 224)";
        siteonly.innerHTML = eustonRoadObj.card[0] + "$";
        house1.innerHTML = eustonRoadObj.card[1] + "$";
        house2.innerHTML = eustonRoadObj.card[2] + "$";
        house3.innerHTML = eustonRoadObj.card[3] + "$";
        house4.innerHTML = eustonRoadObj.card[4] + "$";
        hotel.innerHTML = eustonRoadObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + eustonRoadObj.card[6] + "$";
        housecost.innerHTML = eustonRoadObj.card[7] + "$";
        hotelcost.innerHTML = eustonRoadObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + eustonRoadObj.price + "$";
    } else if (turn == 0 && carM == 9 || turn == 1 && shoeM == 9 || turn == 2 && hatM == 9 || turn == 3 && dogM == 9) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = pentonRoadObj.name;
        cardName.style.backgroundColor = "rgb(68, 188, 224)";
        siteonly.innerHTML = pentonRoadObj.card[0] + "$";
        house1.innerHTML = pentonRoadObj.card[1] + "$";
        house2.innerHTML = pentonRoadObj.card[2] + "$";
        house3.innerHTML = pentonRoadObj.card[3] + "$";
        house4.innerHTML = pentonRoadObj.card[4] + "$";
        hotel.innerHTML = pentonRoadObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + pentonRoadObj.card[6] + "$";
        housecost.innerHTML = pentonRoadObj.card[7] + "$";
        hotelcost.innerHTML = pentonRoadObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + pentonRoadObj.price + "$";
    } else if (turn == 0 && carM == 10 || turn == 1 && shoeM == 10 || turn == 2 && hatM == 10 || turn == 3 && dogM == 10) {
        cardVisible.style.display = "grid";
            // jail

    } else if (turn == 0 && carM == 11 || turn == 1 && shoeM == 11 || turn == 2 && hatM == 11 || turn == 3 && dogM == 11) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = palMalObj.name;
        cardName.style.backgroundColor = "rgb(224, 68, 211)";
        siteonly.innerHTML = palMalObj.card[0] + "$";
        house1.innerHTML = palMalObj.card[1] + "$";
        house2.innerHTML = palMalObj.card[2] + "$";
        house3.innerHTML = palMalObj.card[3] + "$";
        house4.innerHTML = palMalObj.card[4] + "$";
        hotel.innerHTML = palMalObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + palMalObj.card[6] + "$";
        housecost.innerHTML = palMalObj.card[7] + "$";
        hotelcost.innerHTML = palMalObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + palMalObj.price + "$";
    } else if (turn == 0 && carM == 12 || turn == 1 && shoeM == 12 || turn == 2 && hatM == 12 || turn == 3 && dogM == 12) {
        cardVisible.style.display = "grid";
        cardName.style.backgroundColor = "rgb(255, 255, 255)";
        cardName.innerHTML = "Electric Company";
        buyText.innerHTML = "Buy for " + eCompany1Obj.price + "$";
        siteonly.innerHTML = "200$ or 400$";
        house1.innerHTML = "cant build";
        house2.innerHTML = "cant build";
        house3.innerHTML = "cant build";
        house4.innerHTML = "cant build";
        hotel.innerHTML = "cant build";
        mortgage.innerHTML = "MORTGAGE value" + eCompany1Obj.card[2] + "$";
        housecost.innerHTML = "not available";
        hotelcost.innerHTML = "not available";
        // ecompany1

    } else if (turn == 0 && carM == 13 || turn == 1 && shoeM == 13 || turn == 2 && hatM == 13 || turn == 3 && dogM == 13) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = whiteHallObj.name;
        cardName.style.backgroundColor = "rgb(224, 68, 211)";
        siteonly.innerHTML = whiteHallObj.card[0] + "$";
        house1.innerHTML = whiteHallObj.card[1] + "$";
        house2.innerHTML = whiteHallObj.card[2] + "$";
        house3.innerHTML = whiteHallObj.card[3] + "$";
        house4.innerHTML = whiteHallObj.card[4] + "$";
        hotel.innerHTML = whiteHallObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + whiteHallObj.card[6] + "$";
        housecost.innerHTML = whiteHallObj.card[7] + "$";
        hotelcost.innerHTML = whiteHallObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + whiteHallObj.price + "$";
    } else if (turn == 0 && carM == 14 || turn == 1 && shoeM == 14 || turn == 2 && hatM == 14 || turn == 3 && dogM == 14) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = northLimberObj.name;
        cardName.style.backgroundColor = "rgb(224, 68, 211)";
        siteonly.innerHTML = northLimberObj.card[0] + "$";
        house1.innerHTML = northLimberObj.card[1] + "$";
        house2.innerHTML = northLimberObj.card[2] + "$";
        house3.innerHTML = northLimberObj.card[3] + "$";
        house4.innerHTML = northLimberObj.card[4] + "$";
        hotel.innerHTML = northLimberObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + northLimberObj.card[6] + "$";
        housecost.innerHTML = northLimberObj.card[7] + "$";
        hotelcost.innerHTML = northLimberObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + northLimberObj.price + "$";
    } else if (turn == 0 && carM == 15 || turn == 1 && shoeM == 15 || turn == 2 && hatM == 15 || turn == 3 && dogM == 15) {
        cardVisible.style.display = "grid";
        // st2
        cardName.innerHTML = st2Obj.name;
        cardName.style.backgroundColor = "rgb(148, 148, 148)";
        siteonly.innerHTML = st2Obj.card[0] + "$";
        house1.innerHTML = "can't build";
        house2.innerHTML = "can't build";
        house3.innerHTML = "can't build";
        house4.innerHTML = "can't build";
        hotel.innerHTML = "can't build";
        mortgage.innerHTML = "MORTGAGE value" + st2Obj.card[4] + "$";
        housecost.innerHTML = ",,";
        hotelcost.innerHTML = ",,";
        buyText.innerHTML = "Buy for " + st2Obj.price + "$";

    } else if (turn == 0 && carM == 16 || turn == 1 && shoeM == 16 || turn == 2 && hatM == 16 || turn == 3 && dogM == 16) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = bowStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 143, 16)";
        siteonly.innerHTML = bowStreetObj.card[0] + "$";
        house1.innerHTML = bowStreetObj.card[1] + "$";
        house2.innerHTML = bowStreetObj.card[2] + "$";
        house3.innerHTML = bowStreetObj.card[3] + "$";
        house4.innerHTML = bowStreetObj.card[4] + "$";
        hotel.innerHTML = bowStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + bowStreetObj.card[6] + "$";
        housecost.innerHTML = bowStreetObj.card[7] + "$";
        hotelcost.innerHTML = bowStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + bowStreetObj.price + "$";
    } else if (turn == 0 && carM == 17 || turn == 1 && shoeM == 17 || turn == 2 && hatM == 17 || turn == 3 && dogM == 17) {
        cardVisible.style.display = "grid";
            // comchest2

    } else if (turn == 0 && carM == 18 || turn == 1 && shoeM == 18 || turn == 2 && hatM == 18 || turn == 3 && dogM == 18) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = malborStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 143, 16)";
        siteonly.innerHTML = malborStreetObj.card[0] + "$";
        house1.innerHTML = malborStreetObj.card[1] + "$";
        house2.innerHTML = malborStreetObj.card[2] + "$";
        house3.innerHTML = malborStreetObj.card[3] + "$";
        house4.innerHTML = malborStreetObj.card[4] + "$";
        hotel.innerHTML = malborStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + malborStreetObj.card[6] + "$";
        housecost.innerHTML = malborStreetObj.card[7] + "$";
        hotelcost.innerHTML = malborStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + malborStreetObj.price + "$";
    } else if (turn == 0 && carM == 19 || turn == 1 && shoeM == 19 || turn == 2 && hatM == 19 || turn == 3 && dogM == 19) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = vineStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 143, 16)";
        siteonly.innerHTML = vineStreetObj.card[0] + "$";
        house1.innerHTML = vineStreetObj.card[1] + "$";
        house2.innerHTML = vineStreetObj.card[2] + "$";
        house3.innerHTML = vineStreetObj.card[3] + "$";
        house4.innerHTML = vineStreetObj.card[4] + "$";
        hotel.innerHTML = vineStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + vineStreetObj.card[6] + "$";
        housecost.innerHTML = vineStreetObj.card[7] + "$";
        hotelcost.innerHTML = vineStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + vineStreetObj.price + "$";
    } else if (turn == 0 && carM == 20 || turn == 1 && shoeM == 20 || turn == 2 && hatM == 20 || turn == 3 && dogM == 20) {
        cardVisible.style.display = "grid";
            // parking

    } else if (turn == 0 && carM == 21 || turn == 1 && shoeM == 21 || turn == 2 && hatM == 21 || turn == 3 && dogM == 21) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = strandStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 50, 16)";
        siteonly.innerHTML = strandStreetObj.card[0] + "$";
        house1.innerHTML = strandStreetObj.card[1] + "$";
        house2.innerHTML = strandStreetObj.card[2] + "$";
        house3.innerHTML = strandStreetObj.card[3] + "$";
        house4.innerHTML = strandStreetObj.card[4] + "$";
        hotel.innerHTML = strandStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + strandStreetObj.card[6] + "$";
        housecost.innerHTML = strandStreetObj.card[7] + "$";
        hotelcost.innerHTML = strandStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + strandStreetObj.price + "$";
    } else if (turn == 0 && carM == 22 || turn == 1 && shoeM == 22 || turn == 2 && hatM == 22 || turn == 3 && dogM == 22) {
        
            // chanse2

    } else if (turn == 0 && carM == 23 || turn == 1 && shoeM == 23 || turn == 2 && hatM == 23 || turn == 3 && dogM == 23) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = fleetStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 50, 16)";
        siteonly.innerHTML = fleetStreetObj.card[0] + "$";
        house1.innerHTML = fleetStreetObj.card[1] + "$";
        house2.innerHTML = fleetStreetObj.card[2] + "$";
        house3.innerHTML = fleetStreetObj.card[3] + "$";
        house4.innerHTML = fleetStreetObj.card[4] + "$";
        hotel.innerHTML = fleetStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + fleetStreetObj.card[6] + "$";
        housecost.innerHTML = fleetStreetObj.card[7] + "$";
        hotelcost.innerHTML = fleetStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + fleetStreetObj.price + "$";
    } else if (turn == 0 && carM == 24 || turn == 1 && shoeM == 24 || turn == 2 && hatM == 24 || turn == 3 && dogM == 24) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = trafSquareObj.name;
        cardName.style.backgroundColor = "rgb(240, 50, 16)";
        siteonly.innerHTML = trafSquareObj.card[0] + "$";
        house1.innerHTML = trafSquareObj.card[1] + "$";
        house2.innerHTML = trafSquareObj.card[2] + "$";
        house3.innerHTML = trafSquareObj.card[3] + "$";
        house4.innerHTML = trafSquareObj.card[4] + "$";
        hotel.innerHTML = trafSquareObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + trafSquareObj.card[6] + "$";
        housecost.innerHTML = trafSquareObj.card[7] + "$";
        hotelcost.innerHTML = trafSquareObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + trafSquareObj.price + "$";
    } else if (turn == 0 && carM == 25 || turn == 1 && shoeM == 25 || turn == 2 && hatM == 25 || turn == 3 && dogM == 25) {
        cardVisible.style.display = "grid";
        // st3
        cardName.innerHTML = st3Obj.name;
        cardName.style.backgroundColor = "rgb(148, 148, 148)";
        siteonly.innerHTML = st3Obj.card[0] + "$";
        house1.innerHTML = "can't build";
        house2.innerHTML = "can't build";
        house3.innerHTML = "can't build";
        house4.innerHTML = "can't build";
        hotel.innerHTML = "can't build";
        mortgage.innerHTML = "MORTGAGE value" + st3Obj.card[4] + "$";
        housecost.innerHTML = ",,";
        hotelcost.innerHTML = ",,";
        buyText.innerHTML = "Buy for " + st3Obj.price + "$";

    } else if (turn == 0 && carM == 26 || turn == 1 && shoeM == 26 || turn == 2 && hatM == 26 || turn == 3 && dogM == 26) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = LeicSquareObj.name;
        cardName.style.backgroundColor = "rgb(240, 236, 16)";
        siteonly.innerHTML = LeicSquareObj.card[0] + "$";
        house1.innerHTML = LeicSquareObj.card[1] + "$";
        house2.innerHTML = LeicSquareObj.card[2] + "$";
        house3.innerHTML = LeicSquareObj.card[3] + "$";
        house4.innerHTML = LeicSquareObj.card[4] + "$";
        hotel.innerHTML = LeicSquareObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + LeicSquareObj.card[6] + "$";
        housecost.innerHTML = LeicSquareObj.card[7] + "$";
        hotelcost.innerHTML = LeicSquareObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + LeicSquareObj.price + "$";
    } else if (turn == 0 && carM == 27 || turn == 1 && shoeM == 27 || turn == 2 && hatM == 27 || turn == 3 && dogM == 27) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = CovStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 236, 16)";
        siteonly.innerHTML = CovStreetObj.card[0] + "$";
        house1.innerHTML = CovStreetObj.card[1] + "$";
        house2.innerHTML = CovStreetObj.card[2] + "$";
        house3.innerHTML = CovStreetObj.card[3] + "$";
        house4.innerHTML = CovStreetObj.card[4] + "$";
        hotel.innerHTML = CovStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + CovStreetObj.card[6] + "$";
        housecost.innerHTML = CovStreetObj.card[7] + "$";
        hotelcost.innerHTML = CovStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + CovStreetObj.price + "$";
    } else if (turn == 0 && carM == 28 || turn == 1 && shoeM == 28 || turn == 2 && hatM == 28 || turn == 3 && dogM == 28) {
        cardVisible.style.display = "grid";
        cardName.style.backgroundColor = "rgb(255, 255, 255)";
        cardName.innerHTML = "Water Works";
        buyText.innerHTML = "Buy for " + waterWorksObj.price + "$";
        siteonly.innerHTML = "200$ or 400$";
        house1.innerHTML = "cant build";
        house2.innerHTML = "cant build";
        house3.innerHTML = "cant build";
        house4.innerHTML = "cant build";
        hotel.innerHTML = "cant build";
        mortgage.innerHTML = "MORTGAGE value" + waterWorksObj.card[2] + "$";
        housecost.innerHTML = "not available";
        hotelcost.innerHTML = "not available";
            // waterworks

    } else if (turn == 0 && carM == 29 || turn == 1 && shoeM == 29 || turn == 2 && hatM == 29 || turn == 3 && dogM == 29) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = PiccStreetObj.name;
        cardName.style.backgroundColor = "rgb(240, 236, 16)";
        siteonly.innerHTML = PiccStreetObj.card[0] + "$";
        house1.innerHTML = PiccStreetObj.card[1] + "$";
        house2.innerHTML = PiccStreetObj.card[2] + "$";
        house3.innerHTML = PiccStreetObj.card[3] + "$";
        house4.innerHTML = PiccStreetObj.card[4] + "$";
        hotel.innerHTML = PiccStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + PiccStreetObj.card[6] + "$";
        housecost.innerHTML = PiccStreetObj.card[7] + "$";
        hotelcost.innerHTML = PiccStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + PiccStreetObj.price + "$";
    } else if (turn == 0 && carM == 30 || turn == 1 && shoeM == 30 || turn == 2 && hatM == 30 || turn == 3 && dogM == 30) {
        cardVisible.style.display = "grid";
            // gotojail

    } else if (turn == 0 && carM == 31 || turn == 1 && shoeM == 31 || turn == 2 && hatM == 31 || turn == 3 && dogM == 31) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = regentStreetObj.name;
        cardName.style.backgroundColor = "rgb(11, 165, 70)";
        siteonly.innerHTML = regentStreetObj.card[0] + "$";
        house1.innerHTML = regentStreetObj.card[1] + "$";
        house2.innerHTML = regentStreetObj.card[2] + "$";
        house3.innerHTML = regentStreetObj.card[3] + "$";
        house4.innerHTML = regentStreetObj.card[4] + "$";
        hotel.innerHTML = regentStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + regentStreetObj.card[6] + "$";
        housecost.innerHTML = regentStreetObj.card[7] + "$";
        hotelcost.innerHTML = regentStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + regentStreetObj.price + "$";
    } else if (turn == 0 && carM == 32 || turn == 1 && shoeM == 32 || turn == 2 && hatM == 32 || turn == 3 && dogM == 32) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = oxfordStreetObj.name;
        cardName.style.backgroundColor = "rgb(11, 165, 70)";
        siteonly.innerHTML = oxfordStreetObj.card[0] + "$";
        house1.innerHTML = oxfordStreetObj.card[1] + "$";
        house2.innerHTML = oxfordStreetObj.card[2] + "$";
        house3.innerHTML = oxfordStreetObj.card[3] + "$";
        house4.innerHTML = oxfordStreetObj.card[4] + "$";
        hotel.innerHTML = oxfordStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + oxfordStreetObj.card[6] + "$";
        housecost.innerHTML = oxfordStreetObj.card[7] + "$";
        hotelcost.innerHTML = oxfordStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + oxfordStreetObj.price + "$";
    } else if (turn == 0 && carM == 33 || turn == 1 && shoeM == 33 || turn == 2 && hatM == 33 || turn == 3 && dogM == 33) {
        cardVisible.style.display = "grid";
            // comchest3

    } else if (turn == 0 && carM == 34 || turn == 1 && shoeM == 34 || turn == 2 && hatM == 34 || turn == 3 && dogM == 34) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = bondStreetObj.name;
        cardName.style.backgroundColor = "rgb(11, 165, 70)";
        siteonly.innerHTML = bondStreetObj.card[0] + "$";
        house1.innerHTML = bondStreetObj.card[1] + "$";
        house2.innerHTML = bondStreetObj.card[2] + "$";
        house3.innerHTML = bondStreetObj.card[3] + "$";
        house4.innerHTML = bondStreetObj.card[4] + "$";
        hotel.innerHTML = bondStreetObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + bondStreetObj.card[6] + "$";
        housecost.innerHTML = bondStreetObj.card[7] + "$";
        hotelcost.innerHTML = bondStreetObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + bondStreetObj.price + "$";
    } else if (turn == 0 && carM == 35 || turn == 1 && shoeM == 35 || turn == 2 && hatM == 35 || turn == 3 && dogM == 35) {
        cardVisible.style.display = "grid";
        // st4
        cardName.innerHTML = st4Obj.name;
        cardName.style.backgroundColor = "rgb(148, 148, 148)";
        siteonly.innerHTML = st4Obj.card[0] + "$";
        house1.innerHTML = "can't build";
        house2.innerHTML = "can't build";
        house3.innerHTML = "can't build";
        house4.innerHTML = "can't build";
        hotel.innerHTML = "can't build";
        mortgage.innerHTML = "MORTGAGE value" + st4Obj.card[4] + "$";
        housecost.innerHTML = ",,";
        hotelcost.innerHTML = ",,";
        buyText.innerHTML = "Buy for " + st4Obj.price + "$";

    } else if (turn == 0 && carM == 36 || turn == 1 && shoeM == 36 || turn == 2 && hatM == 36 || turn == 3 && dogM == 36) {
        
            // chanse3

    } else if (turn == 0 && carM == 37 || turn == 1 && shoeM == 37 || turn == 2 && hatM == 37 || turn == 3 && dogM == 37) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = parkLaneObj.name;
        cardName.style.backgroundColor = "rgb(116, 86, 172)";
        siteonly.innerHTML = parkLaneObj.card[0] + "$";
        house1.innerHTML = parkLaneObj.card[1] + "$";
        house2.innerHTML = parkLaneObj.card[2] + "$";
        house3.innerHTML = parkLaneObj.card[3] + "$";
        house4.innerHTML = parkLaneObj.card[4] + "$";
        hotel.innerHTML = parkLaneObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + parkLaneObj.card[6] + "$";
        housecost.innerHTML = parkLaneObj.card[7] + "$";
        hotelcost.innerHTML = parkLaneObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + parkLaneObj.price + "$";
    } else if (turn == 0 && carM == 38 || turn == 1 && shoeM == 38 || turn == 2 && hatM == 38 || turn == 3 && dogM == 38) {
        payVisible.style.display = "grid";
        payName.innerHTML = "Super Tax";
        payName.style.backgroundColor = "rgb(66, 179, 244)";
        paySiteOnly.innerHTML = "revision";
        payHouse.innerHTML = "revision";
        payHotel.innerHTML = "revision";
        payText.innerHTML = "Pay " + "400" + "$";
            // supertax

    } else if (turn == 0 && carM == 39 || turn == 1 && shoeM == 39 || turn == 2 && hatM == 39 || turn == 3 && dogM == 39) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = mayFairObj.name;
        cardName.style.backgroundColor = "rgb(116, 86, 172)";
        siteonly.innerHTML = mayFairObj.card[0] + "$";
        house1.innerHTML = mayFairObj.card[1] + "$";
        house2.innerHTML = mayFairObj.card[2] + "$";
        house3.innerHTML = mayFairObj.card[3] + "$";
        house4.innerHTML = mayFairObj.card[4] + "$";
        hotel.innerHTML = mayFairObj.card[5] + "$";
        mortgage.innerHTML = "MORTGAGE value" + mayFairObj.card[6] + "$";
        housecost.innerHTML = mayFairObj.card[7] + "$";
        hotelcost.innerHTML = mayFairObj.card[8] + "$";
        buyText.innerHTML = "Buy for " + mayFairObj.price + "$";
    }
}

    // Button functionality when PAY-Card is shown
let payVisible = document.getElementById('payOptions'),
    payName = document.getElementById('payName'),
    paySiteOnly = document.getElementById('paySiteOnly'),
    payHouse = document.getElementById('payHouse'),
    payHotel = document.getElementById('payHotel'),
    payText = document.getElementById('payText');

function showPay() {

    if (turn == 0 && carM == 1 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 1 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 1 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 1 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = oldKentObj.name;
        payName.style.backgroundColor = "rgb(133, 76, 23)";
        paySiteOnly.innerHTML = oldKentObj.card[0] + "$";
        payHouse.innerHTML = oldKentObj.card[1] + "$";
        payHotel.innerHTML = oldKentObj.card[5] + "$";
        payText.innerHTML = "Pay " + (oldKentObj.card[0]) + "$";
        
    } else if (turn == 0 && carM == 2 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 2 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 2 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 2 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // comchest1
        // payVisible.style.display = "grid";
        // cardVisible.style.display = "none";
        
    } else if (turn == 0 && carM == 3 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 3 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 3 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 3 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = whiteRoadObj.name;
        payName.style.backgroundColor = "rgb(133, 76, 23)";
        paySiteOnly.innerHTML = whiteRoadObj.card[0] + "$";
        payHouse.innerHTML = whiteRoadObj.card[1] + "$";
        payHotel.innerHTML = whiteRoadObj.card[5] + "$";
        payText.innerHTML = "Pay " + (whiteRoadObj.card[0]) + "$";
    } else if (turn == 0 && carM == 4 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 4 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 4 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 4 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // incometax1
        
    } else if (turn == 0 && carM == 5 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 5 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 5 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 5 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
        
            // ST 1
        if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st1Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st1Obj.card[3] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st1Obj.card[3] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st1Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st1Obj.card[2] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st1Obj.card[2] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st1Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st1Obj.card[1] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st1Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st1Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st1Obj.card[0] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st1Obj.card[0] + "$";
        }

    } else if (turn == 0 && carM == 6 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 6 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 6 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 6 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = theAngelObj.name;
        payName.style.backgroundColor = "rgb(68, 188, 224)";
        paySiteOnly.innerHTML = theAngelObj.card[0] + "$";
        payHouse.innerHTML = theAngelObj.card[1] + "$";
        payHotel.innerHTML = theAngelObj.card[5] + "$";
        payText.innerHTML = "Pay " + (theAngelObj.card[0] + "$");

    }  else if (turn == 0 && carM == 7 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 7 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 7 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 7 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // chanse1
        
    } else if (turn == 0 && carM == 8 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 8 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 8 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 8 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = eustonRoadObj.name;
        payName.style.backgroundColor = "rgb(68, 188, 224)";
        paySiteOnly.innerHTML = eustonRoadObj.card[0] + "$";
        payHouse.innerHTML = eustonRoadObj.card[1] + "$";
        payHotel.innerHTML = eustonRoadObj.card[5] + "$";
        payText.innerHTML = "Pay " + (eustonRoadObj.card[0] + "$");

    } else if (turn == 0 && carM == 9 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 9 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 9 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 9 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = pentonRoadObj.name;
        payName.style.backgroundColor = "rgb(68, 188, 224)";
        paySiteOnly.innerHTML = pentonRoadObj.card[0] + "$";
        payHouse.innerHTML = pentonRoadObj.card[1] + "$";
        payHotel.innerHTML = pentonRoadObj.card[5] + "$";
        payText.innerHTML = "Pay " + (pentonRoadObj.card[0]) + "$";

    } else if (turn == 0 && carM == 10 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 10 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 10 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 10 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // jail

    } else if (turn == 0 && carM == 11 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 11 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 11 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 11 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = palMalObj.name;
        payName.style.backgroundColor = "rgb(224, 68, 211)";
        paySiteOnly.innerHTML = palMalObj.card[0] + "$";
        payHouse.innerHTML = palMalObj.card[1] + "$";
        payHotel.innerHTML = palMalObj.card[5] + "$";
        payText.innerHTML = "Pay " + (palMalObj.card[0]) + "$";

    } else if (turn == 0 && carM == 12 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 12 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 12 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 12 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        if (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = eCompany1Obj.name;
            payName.style.backgroundColor = "rgb(255, 255, 255)";
            paySiteOnly.innerHTML = eCompany1Obj.card[1] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (eCompany1Obj.card[1]) + "$";
        } else {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = eCompany1Obj.name;
            payName.style.backgroundColor = "rgb(255, 255, 255)";
            paySiteOnly.innerHTML = eCompany1Obj.card[0] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (eCompany1Obj.card[0]) + "$";
        }
        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
        // ecompany1

    } else if (turn == 0 && carM == 13 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 13 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 13 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 13 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = whiteHallObj.name;
        payName.style.backgroundColor = "rgb(224, 68, 211)";
        paySiteOnly.innerHTML = whiteHallObj.card[0] + "$";
        payHouse.innerHTML = whiteHallObj.card[1] + "$";
        payHotel.innerHTML = whiteHallObj.card[5] + "$";
        payText.innerHTML = "Pay " + (whiteHallObj.card[0]) + "$";

    } else if (turn == 0 && carM == 14 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 14 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 14 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 14 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = northLimberObj.name;
        payName.style.backgroundColor = "rgb(224, 68, 211)";
        paySiteOnly.innerHTML = northLimberObj.card[0] + "$";
        payHouse.innerHTML = northLimberObj.card[1] + "$";
        payHotel.innerHTML = northLimberObj.card[5] + "$";
        payText.innerHTML = "Pay " + (northLimberObj.card[0]) + "$";

    } else if (turn == 0 && carM == 15 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 15 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 15 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 15 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
        // st2

        if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st2Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st2Obj.card[3] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st2Obj.card[3] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st2Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st2Obj.card[2] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st2Obj.card[2] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st2Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st2Obj.card[1] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st2Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st2Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st2Obj.card[0] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st2Obj.card[0] + "$";
        }

    } else if (turn == 0 && carM == 16 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 16 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 16 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 16 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = bowStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 143, 16)";
        paySiteOnly.innerHTML = bowStreetObj.card[0] + "$";
        payHouse.innerHTML = bowStreetObj.card[1] + "$";
        payHotel.innerHTML = bowStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (bowStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 17 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 17 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 17 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 17 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // comchest2

    } else if (turn == 0 && carM == 18 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 18 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 18 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 18 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = malborStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 143, 16)";
        paySiteOnly.innerHTML = malborStreetObj.card[0] + "$";
        payHouse.innerHTML = malborStreetObj.card[1] + "$";
        payHotel.innerHTML = malborStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (malborStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 19 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 19 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 19 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 19 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = vineStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 143, 16)";
        paySiteOnly.innerHTML = vineStreetObj.card[0] + "$";
        payHouse.innerHTML = vineStreetObj.card[1] + "$";
        payHotel.innerHTML = vineStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (vineStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 20 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 20 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 20 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 20 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // parking

    } else if (turn == 0 && carM == 21 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 21 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 21 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 21 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = strandStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 50, 16)";
        paySiteOnly.innerHTML = strandStreetObj.card[0] + "$";
        payHouse.innerHTML = strandStreetObj.card[1] + "$";
        payHotel.innerHTML = strandStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (strandStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 22 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 22 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 22 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 22 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // chanse2

    } else if (turn == 0 && carM == 23 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 23 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 23 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 23 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = fleetStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 50, 16)";
        paySiteOnly.innerHTML = fleetStreetObj.card[0] + "$";
        payHouse.innerHTML = fleetStreetObj.card[1] + "$";
        payHotel.innerHTML = fleetStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (fleetStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 24 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 24 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 24 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 24 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = trafSquareObj.name;
        payName.style.backgroundColor = "rgb(240, 50, 16)";
        paySiteOnly.innerHTML = trafSquareObj.card[0] + "$";
        payHouse.innerHTML = trafSquareObj.card[1] + "$";
        payHotel.innerHTML = trafSquareObj.card[5] + "$";
        payText.innerHTML = "Pay " + (trafSquareObj.card[0]) + "$";

    } else if (turn == 0 && carM == 25 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 25 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 25 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 25 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
            // st3

        if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st3Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st3Obj.card[3] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st3Obj.card[3] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st3Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st3Obj.card[2] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st3Obj.card[2] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st3Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st3Obj.card[1] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st3Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st3Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st3Obj.card[0] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st3Obj.card[0] + "$";
        }

    } else if (turn == 0 && carM == 26 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 26 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 26 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 26 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = LeicSquareObj.name;
        payName.style.backgroundColor = "rgb(240, 236, 16)";
        paySiteOnly.innerHTML = LeicSquareObj.card[0] + "$";
        payHouse.innerHTML = LeicSquareObj.card[1] + "$";
        payHotel.innerHTML = LeicSquareObj.card[5] + "$";
        payText.innerHTML = "Pay " + (LeicSquareObj.card[0]) + "$";

    } else if (turn == 0 && carM == 27 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 27 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 27 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 27 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = CovStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 236, 16)";
        paySiteOnly.innerHTML = CovStreetObj.card[0] + "$";
        payHouse.innerHTML = CovStreetObj.card[1] + "$";
        payHotel.innerHTML = CovStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (CovStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 28 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 28 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 28 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 28 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
        if (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = waterWorksObj.name;
            payName.style.backgroundColor = "rgb(255, 255, 255)";
            paySiteOnly.innerHTML = waterWorksObj.card[1] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (waterWorksObj.card[1]) + "$";
        } else {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = waterWorksObj.name;
            payName.style.backgroundColor = "rgb(255, 255, 255)";
            paySiteOnly.innerHTML = waterWorksObj.card[0] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (waterWorksObj.card[0]) + "$";
        }

        // cardVisible.style.display = "grid";
            // waterworks

    } else if (turn == 0 && carM == 29 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 29 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 29 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 29 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = PiccStreetObj.name;
        payName.style.backgroundColor = "rgb(240, 236, 16)";
        paySiteOnly.innerHTML = PiccStreetObj.card[0] + "$";
        payHouse.innerHTML = PiccStreetObj.card[1] + "$";
        payHotel.innerHTML = PiccStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (PiccStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 30 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 30 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 30 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 30 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // gotojail

    } else if (turn == 0 && carM == 31 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 31 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 31 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 31 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = regentStreetObj.name;
        payName.style.backgroundColor = "rgb(11, 165, 70)";
        paySiteOnly.innerHTML = regentStreetObj.card[0] + "$";
        payHouse.innerHTML = regentStreetObj.card[1] + "$";
        payHotel.innerHTML = regentStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (regentStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 32 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 32 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 32 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 32 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = oxfordStreetObj.name;
        payName.style.backgroundColor = "rgb(11, 165, 70)";
        paySiteOnly.innerHTML = oxfordStreetObj.card[0] + "$";
        payHouse.innerHTML = oxfordStreetObj.card[1] + "$";
        payHotel.innerHTML = oxfordStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (oxfordStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 33 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 33 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 33 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 33 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // comchest3

    } else if (turn == 0 && carM == 34 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 34 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 34 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 34 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = bondStreetObj.name;
        payName.style.backgroundColor = "rgb(11, 165, 70)";
        paySiteOnly.innerHTML = bondStreetObj.card[0] + "$";
        payHouse.innerHTML = bondStreetObj.card[1] + "$";
        payHotel.innerHTML = bondStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (bondStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 35 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 35 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 35 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 35 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
            // st4
        if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st4Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st4Obj.card[3] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st4Obj.card[3] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[25].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" && field[35].innerHTML == "Car"||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe"||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat"||

            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog"){

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st4Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st4Obj.card[2] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st4Obj.card[2] + "$";
        } else if (
            field[5].innerHTML == "Car" && field[15].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[5].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[25].innerHTML == "Car" ||
            field[15].innerHTML == "Car" && field[35].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[5].innerHTML == "Car" ||
            field[25].innerHTML == "Car" && field[35].innerHTML == "Car" ||

            field[5].innerHTML == "Shoe" && field[15].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[5].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[25].innerHTML == "Shoe" ||
            field[15].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[5].innerHTML == "Shoe" ||
            field[25].innerHTML == "Shoe" && field[35].innerHTML == "Shoe" ||

            field[5].innerHTML == "Hat" && field[15].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[5].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[25].innerHTML == "Hat" ||
            field[15].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[5].innerHTML == "Hat" ||
            field[25].innerHTML == "Hat" && field[35].innerHTML == "Hat" ||
        
            field[5].innerHTML == "Dog" && field[15].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[5].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[25].innerHTML == "Dog" ||
            field[15].innerHTML == "Dog" && field[35].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[5].innerHTML == "Dog" ||
            field[25].innerHTML == "Dog" && field[35].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st4Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st4Obj.card[1] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st4Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st4Obj.name;
            payName.style.backgroundColor = "rgb(148, 148, 148)";
            paySiteOnly.innerHTML = st4Obj.card[0] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st4Obj.card[0] + "$";
        }

    } else if (turn == 0 && carM == 36 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 36 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 36 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 36 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // chanse3

    } else if (turn == 0 && carM == 37 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 37 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 37 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 37 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = parkLaneObj.name;
        payName.style.backgroundColor = "rgb(116, 86, 172)";
        paySiteOnly.innerHTML = parkLaneObj.card[0] + "$";
        payHouse.innerHTML = parkLaneObj.card[1] + "$";
        payHotel.innerHTML = parkLaneObj.card[5] + "$";
        payText.innerHTML = "Pay " + (parkLaneObj.card[0]) + "$";

    } else if (turn == 0 && carM == 38 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 38 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 38 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 38 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        // cardVisible.style.display = "grid";
        // cardVisible.style.display = "none";
            // supertax

    } else if (turn == 0 && carM == 39 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 39 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 39 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 39 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = mayFairObj.name;
        payName.style.backgroundColor = "rgb(116, 86, 172)";
        paySiteOnly.innerHTML = mayFairObj.card[0] + "$";
        payHouse.innerHTML = mayFairObj.card[1] + "$";
        payHotel.innerHTML = mayFairObj.card[5] + "$";
        payText.innerHTML = "Pay " + (mayFairObj.card[0]) + "$";
    }
}

function getTurn() {
    turn +=1;
    if (turn === 4) {
        turn = 0;
    }
}

function tec() {
    if (diceNumber1[5] === diceNumber2[5]) {
        // turn -=1;
        return true;
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
        
        if (turn === 0) {
            
                if (two) {
                    
                    console.log(fieldObj[carM]);
                    car.style.position = "absolute";
                    carM += 2;
                    if(carM === 40) {
                        carM = 0;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 49) {
                        carM = 9;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 49) {
                        carM = 9;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 50) {
                        carM = 10;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 41) {
                        carM = 1;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 42) {
                        carM = 2;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 43) {
                        carM = 3;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 44) {
                        carM = 4;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 45) {
                        carM = 5;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 46) {
                        carM = 6;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 47) {
                        carM = 7;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 48) {
                        carM = 8;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 49) {
                        carM = 9;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 50) {
                        carM = 10;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
                        car.style.left = fieldObj[carM].cords[0];
                        car.style.top = fieldObj[carM].cords[1];
                    } else if (carM === 51) {
                        carM = 11;
                        carBallance.innerHTML = 2000 + carObj.cash;
                        carObj.cash = 2000 + carObj.cash;
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
            
        } else if (turn === 1) {
            
                if (two) {
                        
                    console.log(fieldObj[shoeM]);
                    shoe.style.position = "absolute";
                    shoeM += 2;
                    if(shoeM === 40) {
                        shoeM = 0;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 49) {
                        shoeM = 9;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 49) {
                        shoeM = 9;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 50) {
                        shoeM = 10;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 41) {
                        shoeM = 1;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 42) {
                        shoeM = 2;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 43) {
                        shoeM = 3;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 44) {
                        shoeM = 4;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 45) {
                        shoeM = 5;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 46) {
                        shoeM = 6;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 47) {
                        shoeM = 7;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 48) {
                        shoeM = 8;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 49) {
                        shoeM = 9;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 50) {
                        shoeM = 10;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
                        shoe.style.left = fieldObj[shoeM].cords[2];
                        shoe.style.top = fieldObj[shoeM].cords[3];
                    } else if (shoeM === 51) {
                        shoeM = 11;
                        shoeBallance.innerHTML = 2000 + shoeObj.cash;
                        shoeObj.cash = 2000 + shoeObj.cash;
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
            
        } else if (turn === 2) {
            
                if (two) {
                        
                    console.log(fieldObj[hatM]);
                    hat.style.position = "absolute";
                    hatM += 2;
                    if(hatM === 40) {
                        hatM = 0;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 49) {
                        hatM = 9;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 49) {
                        hatM = 9;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 50) {
                        hatM = 10;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 41) {
                        hatM = 1;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 42) {
                        hatM = 2;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 43) {
                        hatM = 3;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 44) {
                        hatM = 4;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 45) {
                        hatM = 5;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 46) {
                        hatM = 6;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 47) {
                        hatM = 7;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 48) {
                        hatM = 8;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 49) {
                        hatM = 9;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 50) {
                        hatM = 10;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
                        hat.style.left = fieldObj[hatM].cords[4];
                        hat.style.top = fieldObj[hatM].cords[5];
                    } else if (hatM === 51) {
                        hatM = 11;
                        hatBallance.innerHTML = 2000 + hatObj.cash;
                        hatObj.cash = 2000 + hatObj.cash;
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
            
        } else if (turn === 3) {
            
                if (two) {
                        
                    console.log(fieldObj[dogM]);
                    dog.style.position = "absolute";
                    dogM += 2;
                    if(dogM === 40) {
                        dogM = 0;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 49) {
                        dogM = 9;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 49) {
                        dogM = 9;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 50) {
                        dogM = 10;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 41) {
                        dogM = 1;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 42) {
                        dogM = 2;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 43) {
                        dogM = 3;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 44) {
                        dogM = 4;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 45) {
                        dogM = 5;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 46) {
                        dogM = 6;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 47) {
                        dogM = 7;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 48) {
                        dogM = 8;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 49) {
                        dogM = 9;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 50) {
                        dogM = 10;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
                        dog.style.left = fieldObj[dogM].cords[6];
                        dog.style.top = fieldObj[dogM].cords[7];
                    } else if (dogM === 51) {
                        dogM = 11;
                        dogBallance.innerHTML = 2000 + dogObj.cash;
                        dogObj.cash = 2000 + dogObj.cash;
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