function greetingResponse(req,res) {
    
    const id = parseInt(req.params.id, 10);

    let responseBody;

    switch(id) {
        case 1: {
            responseBody = ("As one door closes, another one opens.");
            break;
        }
        case 2: {
            responseBody = ("Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.");
            break;
        }
        case 3: {
            responseBody = ("To fear love is to fear life, and those who fear life are already three parts dead.");
            break;
        }
        default: {
            responseBody = ("Oops, no matching id found.")
            break;
        }
    }

    res.send(responseBody);
}

module.exports.greetingResponse = greetingResponse; 