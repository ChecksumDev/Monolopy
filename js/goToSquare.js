
    // MOVING TO SQUARE FUNCTIONALITY
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