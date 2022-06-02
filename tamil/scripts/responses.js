function getBotResponse(input) {
    if (input == "வணக்கம்") {
        return "வணக்கம்!";
    } else if (input == "விடைபெறுகிறேன்") {
        return "நன்றி";
    } 
	else if (input == "நன்றி") {
        return "நன்றி மீண்டும் வருக";
    }else {
        return "வேறு ஏதாவது கேட்க முயற்சிக்கவும்!";
    }
}