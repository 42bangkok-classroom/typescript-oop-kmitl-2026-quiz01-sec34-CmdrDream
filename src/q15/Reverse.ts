const text = process.argv[2];
let reversed = "";

for (let i = 0; i < text.length; i++) {    
    reversed = text[i] + reversed;
}

console.log(reversed);