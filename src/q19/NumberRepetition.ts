const x = Number(process.argv[2]);

for(let i = 0; i < x; i++){
  let str = "";
  for (let j = 0; j < x; j++) {
    str += String(i+1);
  }
  console.log(str);

}