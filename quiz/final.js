class Final{

constructor( correctAnswers ,totalAmount ){
this.scoreElement = document.querySelector(".score");
this.again = document.querySelector("#again");

this.render( correctAnswers , totalAmount );
this.again.addEventListener ("click" , this.startAgain);
}

startAgain =() => {
    location.reload();
};

render (correctAnswer , totalAmount) {
    this.scoreElement.innerHTML = `you answard ${correctAnswer} out of ${totalAmount} correct`;
}
}
export default Final;