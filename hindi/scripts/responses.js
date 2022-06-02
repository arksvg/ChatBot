function getBotResponse(input) {
    if (input == "नमस्ते") {
        return "नमस्ते!";
    } else if (input == "अलविदा") {
        return "धन्यवाद..!";
    } 
	else if (input == "धन्यवाद") {
        return "धन्यवाद फिर से आओ";
    }else {
        return "कुछ और पूछने की कोशिश करो!";
    }
}