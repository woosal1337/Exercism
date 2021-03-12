//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


function pangram_check(sentence) {
    var sentence = sentence.toLowerCase();

    var alphabet = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0
    };


    // Adding the letters of the given sentence
    for (let i = 0; i < sentence.length; i++) {
        alphabet[sentence[i]] += 1;
    }

    // Checking whether the sentence is pangram, or not
    for (let i = 0; i < alphabet.length; i++) {

    }

    for (const [key, value] of Object.entries(alphabet)) {


        if (value === 0) {
            console.log(value);
            return false;
        }
    }

    return true;
}


console.log(pangram_check("The quick brown fox jumps over the lazy dog."))
