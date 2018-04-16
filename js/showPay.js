
    // Button functionality when PAY-Card is shown
function showPay() {

    if (turn == 0 && carM == 1 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 1 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 1 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 1 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = oldKentObj.name;
        payName.style.background = "linear-gradient(#b98e66, #7a4e25)";
        paySiteOnly.innerHTML = oldKentObj.card[0] + "$";
        payHouse.innerHTML = oldKentObj.card[1] + "$";
        payHotel.innerHTML = oldKentObj.card[5] + "$";
        payText.innerHTML = "Pay " + (oldKentObj.card[0]) + "$";
        
    } else if (turn == 0 && carM == 2 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 2 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 2 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 2 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            // comchest1
        
    } else if (turn == 0 && carM == 3 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 3 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 3 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 3 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = whiteRoadObj.name;
        payName.style.background = "linear-gradient(#b98e66, #7a4e25)";
        paySiteOnly.innerHTML = whiteRoadObj.card[0] + "$";
        payHouse.innerHTML = whiteRoadObj.card[1] + "$";
        payHotel.innerHTML = whiteRoadObj.card[5] + "$";
        payText.innerHTML = "Pay " + (whiteRoadObj.card[0]) + "$";
    } else if (turn == 0 && carM == 4 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 4 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 4 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 4 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
            paySiteOnly.innerHTML = st1Obj.card[1] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + st1Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st1Obj.name;
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        payName.style.background = "linear-gradient(#75d6f3, #44bce0)";
        paySiteOnly.innerHTML = theAngelObj.card[0] + "$";
        payHouse.innerHTML = theAngelObj.card[1] + "$";
        payHotel.innerHTML = theAngelObj.card[5] + "$";
        payText.innerHTML = "Pay " + (theAngelObj.card[0] + "$");

    }  else if (turn == 0 && carM == 7 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 7 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 7 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 7 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // chanse1
        
    } else if (turn == 0 && carM == 8 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 8 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 8 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 8 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = eustonRoadObj.name;
        payName.style.background = "linear-gradient(#75d6f3, #44bce0)";
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
        payName.style.background = "linear-gradient(#75d6f3, #44bce0)";
        paySiteOnly.innerHTML = pentonRoadObj.card[0] + "$";
        payHouse.innerHTML = pentonRoadObj.card[1] + "$";
        payHotel.innerHTML = pentonRoadObj.card[5] + "$";
        payText.innerHTML = "Pay " + (pentonRoadObj.card[0]) + "$";

    } else if (turn == 0 && carM == 10 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 10 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 10 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 10 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // jail

    } else if (turn == 0 && carM == 11 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 11 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 11 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 11 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = palMalObj.name;
        payName.style.background = "linear-gradient(#df86d7, #e044d3)";
        paySiteOnly.innerHTML = palMalObj.card[0] + "$";
        payHouse.innerHTML = palMalObj.card[1] + "$";
        payHotel.innerHTML = palMalObj.card[5] + "$";
        payText.innerHTML = "Pay " + (palMalObj.card[0]) + "$";

    } else if (turn == 0 && carM == 12 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 12 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 12 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 12 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
             // ecompany1
        if (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = eCompany1Obj.name;
            payName.style.background = "linear-gradient(#ffffff, #c0c0c0)";
            paySiteOnly.innerHTML = eCompany1Obj.card[1] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (eCompany1Obj.card[1]) + "$";
        } else {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = eCompany1Obj.name;
            payName.style.background = "linear-gradient(#ffffff, #c0c0c0)";
            paySiteOnly.innerHTML = eCompany1Obj.card[0] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (eCompany1Obj.card[0]) + "$";
        }

    } else if (turn == 0 && carM == 13 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 13 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 13 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 13 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = whiteHallObj.name;
        payName.style.background = "linear-gradient(#df86d7, #e044d3)";
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
        payName.style.background = "linear-gradient(#df86d7, #e044d3)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
            paySiteOnly.innerHTML = st2Obj.card[1] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st2Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st2Obj.name;
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        payName.style.background = "linear-gradient(#e4bc73, #cc8707)";
        paySiteOnly.innerHTML = bowStreetObj.card[0] + "$";
        payHouse.innerHTML = bowStreetObj.card[1] + "$";
        payHotel.innerHTML = bowStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (bowStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 17 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 17 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 17 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 17 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // comchest2

    } else if (turn == 0 && carM == 18 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 18 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 18 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 18 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = malborStreetObj.name;
        payName.style.background = "linear-gradient(#e4bc73, #cc8707)";
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
        payName.style.background = "linear-gradient(#e4bc73, #cc8707)";
        paySiteOnly.innerHTML = vineStreetObj.card[0] + "$";
        payHouse.innerHTML = vineStreetObj.card[1] + "$";
        payHotel.innerHTML = vineStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (vineStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 20 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 20 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 20 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 20 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // parking

    } else if (turn == 0 && carM == 21 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 21 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 21 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 21 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = strandStreetObj.name;
        payName.style.background = "linear-gradient(#f76262, #c00101)";
        paySiteOnly.innerHTML = strandStreetObj.card[0] + "$";
        payHouse.innerHTML = strandStreetObj.card[1] + "$";
        payHotel.innerHTML = strandStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (strandStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 22 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 22 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 22 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 22 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
   
        // chanse2

    } else if (turn == 0 && carM == 23 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 23 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 23 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 23 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = fleetStreetObj.name;
        payName.style.background = "linear-gradient(#f76262, #c00101)";
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
        payName.style.background = "linear-gradient(#f76262, #c00101)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
            paySiteOnly.innerHTML = st3Obj.card[1] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st3Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st3Obj.name;
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        payName.style.background = "linear-gradient(#dddf70, #bcbe29)";
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
        payName.style.background = "linear-gradient(#dddf70, #bcbe29)";
        paySiteOnly.innerHTML = CovStreetObj.card[0] + "$";
        payHouse.innerHTML = CovStreetObj.card[1] + "$";
        payHotel.innerHTML = CovStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (CovStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 28 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 28 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 28 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 28 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            
            // waterworks
        if (field[12].innerHTML == "Car" && field[28].innerHTML == "Car" ||
            field[12].innerHTML == "Shoe" && field[28].innerHTML == "Shoe" ||
            field[12].innerHTML == "Hat" && field[28].innerHTML == "Hat" ||
            field[12].innerHTML == "Dog" && field[28].innerHTML == "Dog") {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = waterWorksObj.name;
            payName.style.background = "linear-gradient(#ffffff, #c0c0c0)";
            paySiteOnly.innerHTML = waterWorksObj.card[1] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (waterWorksObj.card[1]) + "$";
        } else {

            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = waterWorksObj.name;
            payName.style.background = "linear-gradient(#ffffff, #c0c0c0)";
            paySiteOnly.innerHTML = waterWorksObj.card[0] + "$";
            payHouse.innerHTML = "not available";
            payHotel.innerHTML = "not available";
            payText.innerHTML = "Pay " + (waterWorksObj.card[0]) + "$";
        }

    } else if (turn == 0 && carM == 29 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 29 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 29 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 29 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = PiccStreetObj.name;
        payName.style.background = "linear-gradient(#dddf70, #bcbe29)";
        paySiteOnly.innerHTML = PiccStreetObj.card[0] + "$";
        payHouse.innerHTML = PiccStreetObj.card[1] + "$";
        payHotel.innerHTML = PiccStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (PiccStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 30 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 30 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 30 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 30 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {
            // gotojail

    } else if (turn == 0 && carM == 31 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 31 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 31 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 31 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = regentStreetObj.name;
        payName.style.background = "linear-gradient(#94e4b3, #22b95c)";
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
        payName.style.background = "linear-gradient(#94e4b3, #22b95c)";
        paySiteOnly.innerHTML = oxfordStreetObj.card[0] + "$";
        payHouse.innerHTML = oxfordStreetObj.card[1] + "$";
        payHotel.innerHTML = oxfordStreetObj.card[5] + "$";
        payText.innerHTML = "Pay " + (oxfordStreetObj.card[0]) + "$";

    } else if (turn == 0 && carM == 33 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 33 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 33 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 33 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // comchest3

    } else if (turn == 0 && carM == 34 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 34 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 34 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 34 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = bondStreetObj.name;
        payName.style.background = "linear-gradient(#94e4b3, #22b95c)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
            paySiteOnly.innerHTML = st4Obj.card[1] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st4Obj.card[1] + "$";

        } else {
            payVisible.style.display = "grid";
            cardVisible.style.display = "none";
            payName.innerHTML = st4Obj.name;
            payName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
            paySiteOnly.innerHTML = st4Obj.card[0] + "$";
            payHouse.innerHTML = " not available";
            payHotel.innerHTML = " not available";
            payText.innerHTML = "Pay " + st4Obj.card[0] + "$";
        }

    } else if (turn == 0 && carM == 36 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 36 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 36 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 36 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // chanse3

    } else if (turn == 0 && carM == 37 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 37 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 37 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 37 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = parkLaneObj.name;
        payName.style.background = "linear-gradient(#9f93b6, #7d63ad)";
        paySiteOnly.innerHTML = parkLaneObj.card[0] + "$";
        payHouse.innerHTML = parkLaneObj.card[1] + "$";
        payHotel.innerHTML = parkLaneObj.card[5] + "$";
        payText.innerHTML = "Pay " + (parkLaneObj.card[0]) + "$";

    } else if (turn == 0 && carM == 38 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 38 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 38 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 38 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

            // supertax

    } else if (turn == 0 && carM == 39 && (field[carM].innerHTML == "Shoe" || field[carM].innerHTML == "Hat" || field[carM].innerHTML == "Dog") ||
        turn == 1 && shoeM == 39 && (field[shoeM].innerHTML == "Car" || field[shoeM].innerHTML == "Hat" || field[shoeM].innerHTML == "Dog") ||
        turn == 2 && hatM == 39 && (field[hatM].innerHTML == "Car" || field[hatM].innerHTML == "Shoe" || field[hatM].innerHTML == "Dog") ||
        turn == 3 && dogM == 39 && (field[dogM].innerHTML == "Car" || field[dogM].innerHTML == "Shoe" || field[dogM].innerHTML == "Hat")) {

        payVisible.style.display = "grid";
        cardVisible.style.display = "none";
        payName.innerHTML = mayFairObj.name;
        payName.style.background = "linear-gradient(#9f93b6, #7d63ad)";
        paySiteOnly.innerHTML = mayFairObj.card[0] + "$";
        payHouse.innerHTML = mayFairObj.card[1] + "$";
        payHotel.innerHTML = mayFairObj.card[5] + "$";
        payText.innerHTML = "Pay " + (mayFairObj.card[0]) + "$";
    }
}