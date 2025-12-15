const text = process.argv[2];

console.log(text.includes('@') ? "Has @" : "No @");