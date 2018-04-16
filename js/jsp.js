
    // jails parking and start suaqres
function jpsShow() {
    let jpsOptions = document.getElementById('jpsOptions'),
        jpsName = document.getElementById('jpsName'),
        jpsText = document.getElementById('jpsText');
        
    if (turn == 0) {
        if (carM == 10) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Jail";
            jpsText.innerHTML = "You need to pay 1000$ prison guarantee to get out";
            carBallance.innerHTML = (carObj.cash - 1000) + " $";
            carObj.cash = carObj.cash - 1000;
        } else if (carM == 20) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Free Parking";
            jpsText.innerHTML = "You used free parking";
        } else if (carM == 30) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Go To Jail";
            jpsText.innerHTML = "You have been arested. You are going to Jail";
        } else if (carM == 0) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "GO Field";
            jpsText.innerHTML = "You receive 2000 $ sallary";
        }
    } else if (turn == 1) {
        if (shoeM == 10) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Jail";
            jpsText.innerHTML = "You need to pay 1000$ prison guarantee to get out";
            shoeBallance.innerHTML = (shoeObj.cash - 1000) + " $";
            shoeObj.cash = shoeObj.cash - 1000;
        } else if (shoeM == 20) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Free Parking";
            jpsText.innerHTML = "You used free parking";
        } else if (shoeM == 30) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Go To Jail";
            jpsText.innerHTML = "You have been arested. You are going to Jail";
        } else if (shoeM == 0) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "GO Field";
            jpsText.innerHTML = "You receive 2000 $ sallary";
        }
    } else if (turn == 2) {
        if (hatM == 10) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Jail";
            jpsText.innerHTML = "You need to pay 1000$ prison guarantee to get out";
            hatBallance.innerHTML = (hatObj.cash - 1000) + " $";
            hatObj.cash = hatObj.cash - 1000;
        } else if (hatM == 20) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Free Parking";
            jpsText.innerHTML = "You used free parking";
        } else if (hatM == 30) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Go To Jail";
            jpsText.innerHTML = "You have been arested. You are going to Jail";
        } else if (hatM == 0) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "GO Field";
            jpsText.innerHTML = "You receive 2000 $ sallary";
        }
    } else if (turn == 3) {
        if (dogM == 10) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Jail";
            jpsText.innerHTML = "You need to pay 1000$ prison guarantee to get out";
            dogBallance.innerHTML = (dogObj.cash - 1000) + " $";
            dogObj.cash = dogObj.cash - 1000;
        } else if (dogM == 20) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Free Parking";
            jpsText.innerHTML = "You used free parking";
        } else if (dogM == 30) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "Go To Jail";
            jpsText.innerHTML = "You have been arested. You are going to Jail";
        } else if (dogM == 0) {
            jpsOptions.style.display = "grid";
            jpsName.innerHTML = "GO Field";
            jpsText.innerHTML = "You receive 2000 $ sallary";
        }
    }
}

    // jails parking and start button functionality

jpsButton.addEventListener('click', function() {
    if (turn == 0) {
        jpsOptions.style.display = "none";
        turn++;
        turnText.innerHTML = "It's Shoe Turn !"
        if(carM == 30) {
            turn--;
            carM = 10;
            car.style.left = fieldObj[carM].cords[0];
            car.style.top = fieldObj[carM].cords[1];
            jpsShow();
        }
    } else if (turn == 1) {
        jpsOptions.style.display = "none";
        turn++;
        turnText.innerHTML = "It's Hat Turn !"
        if(shoeM == 30) {
            turn--;
            shoeM = 10;
            shoe.style.left = fieldObj[shoeM].cords[2];
            shoe.style.top = fieldObj[shoeM].cords[3];
            jpsShow();
        }
    } else if (turn == 2) {
        jpsOptions.style.display = "none";
        turn++;
        turnText.innerHTML = "It's Dog Turn !"
        if(hatM == 30) {
            turn--;
            hatM = 10;
            hat.style.left = fieldObj[hatM].cords[4];
            hat.style.top = fieldObj[hatM].cords[5];
            jpsShow();
        }
    } else if (turn == 3) {
        jpsOptions.style.display = "none";
        turnText.innerHTML = "It's Car Turn !"
        turn = 0;
        if(dogM == 30) {
            turn = 3;
            dogM = 10;
            dog.style.left = fieldObj[dogM].cords[6];
            dog.style.top = fieldObj[dogM].cords[7];
            jpsShow();
        }
    }
}, false);