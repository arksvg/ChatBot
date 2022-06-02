function getBotResponse(input) {
	input = input.toLowerCase();
    if (input == "hi") {
        return "Hello there!";
    }   else if (input == "bye") {
        return "Thank You";
    } 
	else if (input == "Thank You..!") {
        return "Thank You";
    }
	else if (input == "saranathan website") {
        return "www.saranathan.ac.in";
    }
	else if (input == "how many departments in sce") {
        return "9 Departments";
    }
	else if (input == "college timing") {
        return "Morning : 9.00 to Evening : 5.00";
    }

	else if (input == "contact") {
        return "+91 9445177941";
    }


	else {
        return "Try asking something else!";
    }
}