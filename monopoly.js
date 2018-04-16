
    // DICES FUNCTIONALITY
roll.addEventListener('click', function() {
    audio.play();
    audio.volume = 0.4;
    rollDice1();
    rollDice2();
    console.log(turn);
    setTimeout(function(){ goToSquare(); }, 2900);
    setTimeout(function(){ showCard(); }, 3200);
    setTimeout(function(){ showPay(); }, 3200);
    setTimeout(function(){ showCh(); }, 3200);
    setTimeout(function(){ showCom(); }, 3200);
    setTimeout(function(){ jpsShow(); }, 3200);
}, false);

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

    // Chanse Cards Functionality
function chCards(){
    let chText = document.getElementById('chText');
    chanseCards.sort(function(a, b){return 0.5 - Math.random()});
        chText.innerHTML = chanseCards[0].text;
}

function showCh() {
    let chOptions = document.getElementById('chOptions');
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
chButton.addEventListener('click', function(){
    if (turn == 0) {
        chOptions.style.display = "none";
        chCardsEvents();
        
    } else if (turn == 1) {
        chOptions.style.display = "none";
        chCardsEvents();
        
    } else if (turn == 2) {
        chOptions.style.display = "none";
        chCardsEvents();
        
    } else if (turn == 3) {
        chOptions.style.display = "none";
        chCardsEvents();
    }
}, false);

    // Chanse Card Events
function chCardsEvents(){
    let chText = document.getElementById('chText');
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
            jpsShow();
    
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
            showCom();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            carM == 10;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            jpsShow();
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            carBallance.innerHTML = (carObj.cash - 300) + " $";
            carObj.cash = carObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "You have been elected Chairman of the Board ! Each player pays you 500$") {
            
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
            jpsShow();
    
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
            showCom();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            shoeM == 10;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            jpsShow();
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"

        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            shoeBallance.innerHTML = (shoeObj.cash - 300) + " $";
            shoeObj.cash = shoeObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (chText.innerHTML == "You have been elected Chairman of the Board ! Each player pays you 500$") {
            
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
            jpsShow();
    
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
            showCom();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            hatM == 10;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            jpsShow();
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            hatBallance.innerHTML = (hatObj.cash - 300) + " $";
            hatObj.cash = hatObj.cash - 300;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
    
        } else if (chText.innerHTML == "You have been elected Chairman of the Board ! Each player pays you 500$") {
            
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
            turn = 0;
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
            jpsShow();
    
        } else if (chText.innerHTML == "Advance 4 Spaces.") {
            dogM += 4;
            if(dogM === 40) {
                dogM = 0;
                dogBallance.innerHTML = (2000 + +dogObj.cash) + " $";
                dogObj.cash = 2000 + +dogObj.cash;
                dog.style.left = fieldObj[dogM].cords[6];
                dog.style.top = fieldObj[dogM].cords[7];
                turn = 0;
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
                turn = 0;
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
            turn = 0;
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
            showCom();
        } else if (chText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            dogM == 10;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            jpsShow();
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "Make general repairs on all your property. For each house pay 25$. For each hotel 100$") {
            // repairs. Need to add them
        } else if (chText.innerHTML == "Pay poor tax of 300$") {
            dogBallance.innerHTML = (dogObj.cash - 300) + " $";
            dogObj.cash = dogObj.cash - 300;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "You have been elected Chairman of the Board ! Each player pays you 500$") {
            
            carBallance.innerHTML = (carObj.cash - 500) + " $";
            carObj.cash = +carObj.cash - 500;
            
            shoeBallance.innerHTML = (shoeObj.cash - 500) + " $";
            shoeObj.cash = +shoeObj.cash - 500;
            
            hatBallance.innerHTML = (hatObj.cash - 500) + " $";
            hatObj.cash = +hatObj.cash - 500;
            
            dogBallance.innerHTML = (1500 + +dogObj.cash) + " $";
            dogObj.cash = 1500 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "Your building and loan matures. Collect 1500$") {
            dogBallance.innerHTML = (1500 + +dogObj.cash) + " $";
            dogObj.cash = 1500 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
    
        } else if (chText.innerHTML == "You have won in a Cassino. Collect 4000$") {
            dogBallance.innerHTML = (4000 + +dogObj.cash) + " $";
            dogObj.cash = 4000 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        }
    }
}

    // COMUNITY CHEST FUNCTIONALITY
function comCard() {
    let comText = document.getElementById('comText');
    comCards.sort(function(a, b){return 0.5 - Math.random()});
    comText.innerHTML = comCards[0].text;
}

function showCom() {
    let comOptions = document.getElementById('comOptions');
    comCard();
    if (turn == 0 && (carM == 2 || carM == 17 || carM == 33)) {
        comOptions.style.display = "grid";
    } else if (turn == 1 && (shoeM == 2 || shoeM == 17 || shoeM == 33)){
        comOptions.style.display = "grid";
    } else if (turn == 2 && (hatM == 2 || hatM == 17 || hatM == 33)){
        comOptions.style.display = "grid";
    } else if (turn == 3 && (dogM == 2 || dogM == 17 || dogM == 33)){
        comOptions.style.display = "grid";
    }
}

    // COMUNITY BUTTON FUNCTIONALITY
comButton.addEventListener('click', function(){
    if (turn == 0) {
        comOptions.style.display = "none";
        comCardsEvents();
       
    } else if (turn == 1) {
        comOptions.style.display = "none";
        comCardsEvents();
      
    } else if (turn == 2) {
        comOptions.style.display = "none";
        comCardsEvents();
        
    } else if (turn == 3) {
        comOptions.style.display = "none";
        comCardsEvents();
        
    }
}, false);

function comCardsEvents() {
    let comText = document.getElementById('comText');
    if (turn == 0) {
        if (comText.innerHTML == "Advance to Go and Collect 2000$") {
            carM = 0;
            carBallance.innerHTML = (2000 + +carObj.cash) + " $";
            carObj.cash = 2000 + +carObj.cash;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        } else if (comText.innerHTML == "Bank error in your favor. Collect 1500$") {
            carBallance.innerHTML = (1500 + +carObj.cash) + " $";
            carObj.cash = 1500 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Doctor's fee. Pay 500$") {
            carBallance.innerHTML = (carObj.cash - 500) + " $";
            carObj.cash = carObj.cash - 500;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "From sale of stock you get 500$") {
            carBallance.innerHTML = (500 + +carObj.cash) + " $";
            carObj.cash = 500 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Get Out of Jail Free") {
            // need to add
            turn +=1;

        }  else if (comText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            carM == 10;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            jpsShow();
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Grand cinema night! Collect 500$ from each player for opening night seats") {
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

        }  else if (comText.innerHTML == "Holiday Fund matures. You receive 1000$") {
            carBallance.innerHTML = (1000 + +carObj.cash) + " $";
            carObj.cash = 1000 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Income tax refund. Collect 200$") {
            carBallance.innerHTML = (200 + +carObj.cash) + " $";
            carObj.cash = 200 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "It is your birthday. Collect 3000$") {
            carBallance.innerHTML = (3000 + +carObj.cash) + " $";
            carObj.cash = 3000 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Life insurance matures. Collect 2000$") {
            carBallance.innerHTML = (2000 + +carObj.cash) + " $";
            carObj.cash = 2000 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Pay hospital fees of 1000$") {
            carBallance.innerHTML = (carObj.cash - 1000) + " $";
            carObj.cash = carObj.cash - 1000;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Pay college fees of 1500$") {
            carBallance.innerHTML = (carObj.cash - 1500) + " $";
            carObj.cash = carObj.cash - 1500;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "Receive 250$ consultancy fee") {
            carBallance.innerHTML = (250 + +carObj.cash) + " $";
            carObj.cash = 250 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "You have won second prize in a beauty contest. Collect 100$") {
            carBallance.innerHTML = (100 + +carObj.cash) + " $";
            carObj.cash = 100 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"

        }  else if (comText.innerHTML == "You inherit 4000$") {
            carBallance.innerHTML = (4000 + +carObj.cash) + " $";
            carObj.cash = 4000 + +carObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Shoe Turn !"
        } 
    } else if (turn == 1) {
        if (comText.innerHTML == "Advance to Go and Collect 2000$") {
            shoeM = 0;
            shoeBallance.innerHTML = (2000 + +shoeObj.cash) + " $";
            shoeObj.cash = 2000 + +shoeObj.cash;
            shoe.style.left = fieldObj[shoeM].cords[0];
            shoe.style.top = fieldObj[shoeM].cords[1];
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        } else if (comText.innerHTML == "Bank error in your favor. Collect 1500$") {
            shoeBallance.innerHTML = (1500 + +shoeObj.cash) + " $";
            shoeObj.cash = 1500 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Doctor's fee. Pay 500$") {
            shoeBallance.innerHTML = (shoeObj.cash - 500) + " $";
            shoeObj.cash = shoeObj.cash - 500;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "From sale of stock you get 500$") {
            shoeBallance.innerHTML = (500 + +shoeObj.cash) + " $";
            shoeObj.cash = 500 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Get Out of Jail Free") {
            // need to add
            turn +=1;
        
        }  else if (comText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            shoeM == 10;
            shoe.style.left = fieldObj[shoeM].cords[0];
            shoe.style.top = fieldObj[shoeM].cords[1];
            jpsShow();
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Grand cinema night! Collect 500$ from each player for opening night seats") {
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
        
        }  else if (comText.innerHTML == "Holiday Fund matures. You receive 1000$") {
            shoeBallance.innerHTML = (1000 + +shoeObj.cash) + " $";
            shoeObj.cash = 1000 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Income tax refund. Collect 200$") {
            shoeBallance.innerHTML = (200 + +shoeObj.cash) + " $";
            shoeObj.cash = 200 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "It is your birthday. Collect 3000$") {
            shoeBallance.innerHTML = (3000 + +shoeObj.cash) + " $";
            shoeObj.cash = 3000 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Life insurance matures. Collect 2000$") {
            shoeBallance.innerHTML = (2000 + +shoeObj.cash) + " $";
            shoeObj.cash = 2000 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Pay hospital fees of 1000$") {
            shoeBallance.innerHTML = (shoeObj.cash - 1000) + " $";
            shoeObj.cash = shoeObj.cash - 1000;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Pay college fees of 1500$") {
            shoeBallance.innerHTML = (shoeObj.cash - 1500) + " $";
            shoeObj.cash = shoeObj.cash - 1500;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "Receive 250$ consultancy fee") {
            shoeBallance.innerHTML = (250 + +shoeObj.cash) + " $";
            shoeObj.cash = 250 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "You have won second prize in a beauty contest. Collect 100$") {
            shoeBallance.innerHTML = (100 + +shoeObj.cash) + " $";
            shoeObj.cash = 100 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        
        }  else if (comText.innerHTML == "You inherit 4000$") {
            shoeBallance.innerHTML = (4000 + +shoeObj.cash) + " $";
            shoeObj.cash = 4000 + +shoeObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Hat Turn !"
        } 
    } else if (turn == 2) {
        if (comText.innerHTML == "Advance to Go and Collect 2000$") {
            hatM = 0;
            hatBallance.innerHTML = (2000 + +hatObj.cash) + " $";
            hatObj.cash = 2000 + +hatObj.cash;
            hat.style.left = fieldObj[hatM].cords[0];
            hat.style.top = fieldObj[hatM].cords[1];
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        } else if (comText.innerHTML == "Bank error in your favor. Collect 1500$") {
            hatBallance.innerHTML = (1500 + +hatObj.cash) + " $";
            hatObj.cash = 1500 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Doctor's fee. Pay 500$") {
            hatBallance.innerHTML = (hatObj.cash - 500) + " $";
            hatObj.cash = hatObj.cash - 500;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "From sale of stock you get 500$") {
            hatBallance.innerHTML = (500 + +hatObj.cash) + " $";
            hatObj.cash = 500 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Get Out of Jail Free") {
            // need to add
            turn +=1;
        
        }  else if (comText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            hatM == 10;
            hat.style.left = fieldObj[hatM].cords[0];
            hat.style.top = fieldObj[hatM].cords[1];
            jpsShow();
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Grand cinema night! Collect 500$ from each player for opening night seats") {
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
        
        }  else if (comText.innerHTML == "Holiday Fund matures. You receive 1000$") {
            hatBallance.innerHTML = (1000 + +hatObj.cash) + " $";
            hatObj.cash = 1000 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Income tax refund. Collect 200$") {
            hatBallance.innerHTML = (200 + +hatObj.cash) + " $";
            hatObj.cash = 200 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "It is your birthday. Collect 3000$") {
            hatBallance.innerHTML = (3000 + +hatObj.cash) + " $";
            hatObj.cash = 3000 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Life insurance matures. Collect 2000$") {
            hatBallance.innerHTML = (2000 + +hatObj.cash) + " $";
            hatObj.cash = 2000 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Pay hospital fees of 1000$") {
            hatBallance.innerHTML = (hatObj.cash - 1000) + " $";
            hatObj.cash = hatObj.cash - 1000;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Pay college fees of 1500$") {
            hatBallance.innerHTML = (hatObj.cash - 1500) + " $";
            hatObj.cash = hatObj.cash - 1500;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "Receive 250$ consultancy fee") {
            hatBallance.innerHTML = (250 + +hatObj.cash) + " $";
            hatObj.cash = 250 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "You have won second prize in a beauty contest. Collect 100$") {
            hatBallance.innerHTML = (100 + +hatObj.cash) + " $";
            hatObj.cash = 100 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        
        }  else if (comText.innerHTML == "You inherit 4000$") {
            hatBallance.innerHTML = (4000 + +hatObj.cash) + " $";
            hatObj.cash = 4000 + +hatObj.cash;
            turn +=1;
            turnText.innerHTML = "It's Dog Turn !"
        } 
    } else if (turn == 3) {
        if (comText.innerHTML == "Advance to Go and Collect 2000$") {
            dogM = 0;
            dogBallance.innerHTML = (2000 + +dogObj.cash) + " $";
            dogObj.cash = 2000 + +dogObj.cash;
            dog.style.left = fieldObj[dogM].cords[0];
            dog.style.top = fieldObj[dogM].cords[1];
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        } else if (comText.innerHTML == "Bank error in your favor. Collect 1500$") {
            dogBallance.innerHTML = (1500 + +dogObj.cash) + " $";
            dogObj.cash = 1500 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Doctor's fee. Pay 500$") {
            dogBallance.innerHTML = (dogObj.cash - 500) + " $";
            dogObj.cash = dogObj.cash - 500;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "From sale of stock you get 500$") {
            dogBallance.innerHTML = (500 + +dogObj.cash) + " $";
            dogObj.cash = 500 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Get Out of Jail Free") {
            // need to add
            turn = 0;
        
        }  else if (comText.innerHTML == "Go to Jail. Go directly to Jail. Do not pass Go. Do not collect 2000$") {
            dogM == 10;
            dog.style.left = fieldObj[dogM].cords[0];
            dog.style.top = fieldObj[dogM].cords[1];
            jpsShow();
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Grand cinema night! Collect 500$ from each player for opening night seats") {
            carBallance.innerHTML = (carObj.cash - 500) + " $";
            carObj.cash = +carObj.cash - 500;
            
            shoeBallance.innerHTML = (shoeObj.cash - 500) + " $";
            shoeObj.cash = +shoeObj.cash - 500;
            
            hatBallance.innerHTML = (hatObj.cash - 500) + " $";
            hatObj.cash = +hatObj.cash - 500;
            
            dogBallance.innerHTML = (1500 + +dogObj.cash) + " $";
            dogObj.cash = 1500 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Holiday Fund matures. You receive 1000$") {
            dogBallance.innerHTML = (1000 + +dogObj.cash) + " $";
            dogObj.cash = 1000 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Income tax refund. Collect 200$") {
            dogBallance.innerHTML = (200 + +dogObj.cash) + " $";
            dogObj.cash = 200 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "It is your birthday. Collect 3000$") {
            dogBallance.innerHTML = (3000 + +dogObj.cash) + " $";
            dogObj.cash = 3000 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Life insurance matures. Collect 2000$") {
            dogBallance.innerHTML = (2000 + +dogObj.cash) + " $";
            dogObj.cash = 2000 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Pay hospital fees of 1000$") {
            dogBallance.innerHTML = (dogObj.cash - 1000) + " $";
            dogObj.cash = dogObj.cash - 1000;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Pay college fees of 1500$") {
            dogBallance.innerHTML = (dogObj.cash - 1500) + " $";
            dogObj.cash = dogObj.cash - 1500;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "Receive 250$ consultancy fee") {
            dogBallance.innerHTML = (250 + +dogObj.cash) + " $";
            dogObj.cash = 250 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "You have won second prize in a beauty contest. Collect 100$") {
            dogBallance.innerHTML = (100 + +dogObj.cash) + " $";
            dogObj.cash = 100 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        
        }  else if (comText.innerHTML == "You inherit 4000$") {
            dogBallance.innerHTML = (4000 + +dogObj.cash) + " $";
            dogObj.cash = 4000 + +dogObj.cash;
            turn = 0;
            turnText.innerHTML = "It's Car Turn !"
        } 
    }
}

    // Players AddEvent Functionality
function AddEventPl(pl , cord1, cord2, position, ballance, cash){
    pl.addEventListener('click', function() {
        pl.style.position = "absolute";
        pl.style.left = startObj.cords[cord1];
        pl.style.top = startObj.cords[cord2];
        document.getElementById(position).style.display = "grid";
        document.getElementById(ballance).innerHTML = cash + " $";
    }, false)
}

AddEventPl(car, 0, 1, 'topLeft', 'carBallance', carObj.cash);
AddEventPl(shoe, 2, 3, 'topRight', 'shoeBallance', shoeObj.cash);
AddEventPl(hat, 4, 5, 'bottomLeft', 'hatBallance', hatObj.cash);
AddEventPl(dog, 6, 7, 'bottomRight', 'dogBallance', dogObj.cash);


    // Pass Button Functionality
function AddEventPass(turner, current, next) {
    pass.addEventListener('click', function() {
        if (turn == turner) {
            cardVisible.style.display = "none";
            setTimeout(function(){ getTurn(); }, 200);
            setTimeout(function(){ tec(); }, 100);

            if ( tec() ) {
                turn -= 1;
                turnText.innerHTML = `It's ${current} Turn !`;
            } else {
                turnText.innerHTML = `It's ${next} Turn !`;
            } 
        }
    }, false);
}

AddEventPass(0, "Car", "Shoe");
AddEventPass(1, "Shoe", "Hat");
AddEventPass(2, "Hat", "Dog");
AddEventPass(3, "Dog", "Car");


    // Buy Button Functionality
buy.addEventListener('click', function(){
    if (turn == 0 && field[carM].innerHTML == "Not owned") {
        carStreets.innerHTML++;
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
        shoeStreets.innerHTML++;
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
        hatStreets.innerHTML++;
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
        dogStreets.innerHTML++;
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