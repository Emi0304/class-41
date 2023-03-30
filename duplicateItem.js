const names = ["abul" , "kabul" , "babul" , "kobul" , "kabul"] ;
let unique = [];
for (let name of names){
    if(unique.indexOf(name) == -1){
        unique.push(name);
    }
}
console.log(unique);