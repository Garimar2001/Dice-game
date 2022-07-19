var ranumber1 = Math.floor((Math.random()*6)+1);
var randiceimage = `/images/dice${ranumber1}.png`;
console.log(randiceimage);
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randiceimage);

var ranumber2 = Math.floor((Math.random()*6)+1);
var randiceimage2 = `/images/dice${ranumber2}.png`;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randiceimage2);

var result = document.querySelector('h1');
if(ranumber1>ranumber2)
{
    result.textContent="Player 1 wins";
}
else if(ranumber1<ranumber2)
{
    result.textContent="Player 2 wins";
}
else{
    result.textContent="Draw";
}