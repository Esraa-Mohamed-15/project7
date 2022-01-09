class Question{
    constructor(question){ //ال موجوده ف ال api (الكامل بكل حاجه مش السؤال نفسه)
     this.questionElement = document.querySelector("#question");
     this.answerElemnt = [
         document.querySelector("#a1"),
         document.querySelector("#a2"),
         document.querySelector("#a3"),
         document.querySelector("#a4"),
     ];
     this.correctAnswer = question.correct_answer;
     this.question = question.question; // السؤال بكل محتواياته هاتلي منه السؤال بس
     this.isCorrect = false;
     this.answers = [question.correctAnswer, ...question.incorrect_answers];
    }

    //for answer
  answer(checkElement){
    this.isCorrect = checkElement[0].textContent === this.correctAnswer ? true : false;
  }

  //for question
render(){
    this.questionElement.innerHTML = this.question;
    this.answerElemnt.forEach((el , index) => { //el هو الlabel ال هحط فيه الاجابات
        el.innerHTML = 
        `<input type="radio" name="radio"><span class="checkmark"></span>` + this.answers[index]; // two child 
    });

}
}
export default Question;