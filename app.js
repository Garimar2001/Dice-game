var player1 = Math.ceil(Math.random()*6);
var player2 = Math.ceil(Math.random()*6);

console.log(player1);
console.log(player2);
if(player1 > player2){
    console.log("player1 wins");
}
else if(player2 >player1){
    console.log("player2 wins");
}
else{
    console.log("draw");
}