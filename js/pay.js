
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
}, false);