 
const messages = [
    {
        fixPart: 'Your sing is ',
        randomPart: ['Sun', 'Moon', 'Stars', 'Leo', 'Aries', 'Gemini', 'Capricorn'], 
    },
    {
        fixPart: 'You are ',
        randomPart: ['having good luck', 'going to face challenges', 'about to discover a secret', 'destined to succeed', 'meeting someone important', 'going to find unexpected money'], 
    },
    {
        fixPart: 'You should: ',
        randomPart: ['"trust no one"', '"take a chance today"', '"stay home and rest"', '"buy a lottery ticket"', '"call your mom"', '"keep your plans secret"'], 
    },
];

// Random number genrating helper funtion. "max" is the length of the array
const genrateRandom = max => {
    return Math.floor(Math.random() * max);
}

// Mixed message generator. Takes in the "messages" array and generates a random message with a fixed part and a corresponding random part.
const mixedMessages = messages => {
    let random = genrateRandom(messages.length);
    const fisrtPart = messages[random].fixPart; // Getting the fixed part for the message
    const secondPart = messages[random].randomPart[genrateRandom(messages[random].randomPart.length)];

    return fisrtPart + secondPart;
}

console.log(mixedMessages(messages));