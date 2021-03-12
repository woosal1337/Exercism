//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// DNA -> RNA Conversion
var dna_code = "GCCGCGCATATATAAGCGCAT";
              //CGGCGCGUAUAUAUUCGCGUA

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

for (let i = 0; i < dna_code.length; i++) {
    if (dna_code[i] === "G") {
        dna_code = setCharAt(dna_code, i, "C");
    } else if (dna_code[i] === "C") {
        dna_code = setCharAt(dna_code, i, "G");
    } else if (dna_code[i] === "T") {
        dna_code = setCharAt(dna_code, i, "A");
    } else if (dna_code[i] === "A") {
        dna_code = setCharAt(dna_code, i, "U");
    }
}

console.log(dna_code);