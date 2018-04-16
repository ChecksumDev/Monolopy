// Showing buy card options
function showCard() {

    if (turn == 0 && carM == 1 || turn == 1 && shoeM == 1 || turn == 2 && hatM == 1 || turn == 3 && dogM == 1) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = oldKentObj.name;
        cardName.style.background = "linear-gradient(#b98e66, #7a4e25)";
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
        
            // comchest1

    } else if (turn == 0 && carM == 3 || turn == 1 && shoeM == 3 || turn == 2 && hatM == 3 || turn == 3 && dogM == 3) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = whiteHallObj.name;
        cardName.style.background = "linear-gradient(#b98e66, #7a4e25)";
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
        cardName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        cardName.style.background = "linear-gradient(#75d6f3, #44bce0)";
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
        cardName.style.background = "linear-gradient(#75d6f3, #44bce0)";
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
        cardName.style.background = "linear-gradient(#75d6f3, #44bce0)";
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
        
            // jail

    } else if (turn == 0 && carM == 11 || turn == 1 && shoeM == 11 || turn == 2 && hatM == 11 || turn == 3 && dogM == 11) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = palMalObj.name;
        cardName.style.background = "linear-gradient(#df86d7, #e044d3)";
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
        cardName.style.background = "linear-gradient(#ffffff, #c0c0c0)";
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
        cardName.style.background = "linear-gradient(#df86d7, #e044d3)";
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
        cardName.style.background = "linear-gradient(#df86d7, #e044d3)";
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
        cardName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        cardName.style.background = "linear-gradient(#e4bc73, #cc8707)";
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
        
            // comchest2

    } else if (turn == 0 && carM == 18 || turn == 1 && shoeM == 18 || turn == 2 && hatM == 18 || turn == 3 && dogM == 18) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = malborStreetObj.name;
        cardName.style.background = "linear-gradient(#e4bc73, #cc8707)";
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
        cardName.style.background = "linear-gradient(#e4bc73, #cc8707)";
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
        
            // parking

    } else if (turn == 0 && carM == 21 || turn == 1 && shoeM == 21 || turn == 2 && hatM == 21 || turn == 3 && dogM == 21) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = strandStreetObj.name;
        cardName.style.background = "linear-gradient(#f76262, #c00101)";
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
        cardName.style.background = "linear-gradient(#f76262, #c00101)";
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
        cardName.style.background = "linear-gradient(#f76262, #c00101)";
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
        cardName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        cardName.style.background = "linear-gradient(#dddf70, #bcbe29)";
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
        cardName.style.background = "linear-gradient(#dddf70, #bcbe29)";
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
        cardName.style.background = "linear-gradient(#ffffff, #c0c0c0)";
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
        cardName.style.background = "linear-gradient(#dddf70, #bcbe29)";
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
        
            // gotojail

    } else if (turn == 0 && carM == 31 || turn == 1 && shoeM == 31 || turn == 2 && hatM == 31 || turn == 3 && dogM == 31) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = regentStreetObj.name;
        cardName.style.background = "linear-gradient(#94e4b3, #22b95c)";
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
        cardName.style.background = "linear-gradient(#94e4b3, #22b95c)";
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
        
            // comchest3

    } else if (turn == 0 && carM == 34 || turn == 1 && shoeM == 34 || turn == 2 && hatM == 34 || turn == 3 && dogM == 34) {
        cardVisible.style.display = "grid";
        cardName.innerHTML = bondStreetObj.name;
        cardName.style.background = "linear-gradient(#94e4b3, #22b95c)";
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
        cardName.style.background = "linear-gradient(#b4b3b3, #8a8a8a)";
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
        cardName.style.background = "linear-gradient(#9f93b6, #7d63ad)";
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
        cardName.style.background = "linear-gradient(#9f93b6, #7d63ad)";
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