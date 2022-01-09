import Final from "./final.js";
import Question from "./questions.js";

class Quiz{
    constructor(quizElement , amount , questions){ // بستقبلهم من ال quiz ال ف ال setting
this.quizElement = quizElement;
this.currentElemnt = document.querySelector(".current");
this.totalElemnt = document.querySelector(".total");
this.finalElemnt = document.querySelector(".final"); // الهو بعد ماخلص الاسئله هيظهر صفحه الفاينل
this.next = document.querySelector("#next");  // زرار دا ف ال question div

this.totalAmount = amount; //عدد الاسئله ال اشتغلتيها
this.answerdAmount = 0; //بتجاوب ف السؤال رقم كام

this.questions = this.setQuestion(questions); 
//هنا هخلي الكويز يعدي علي كل سؤال وياخده من api ويطبق عليه الداتا ال ف questions.js
this.next.addEventListener("click", this.nextQuestion);
this.renderQuestion();
    }
    setQuestion(questions){
      return questions.map(question => new Question(question));
    }

    //currentquestion fun
    renderQuestion =() =>{
      this.questions[this.answerdAmount].render();  //دا كدا اول نسخه من class Question وكل مره هيزيد
      this.currentElemnt.innerHTML=this.answerdAmount;
      this.totalElemnt.innerHTML = this.totalAmount;
    }

    //nextquestion fun
    nextQuestion = () =>{
        //الاول عشوف السؤال ال فات حليته صح ولا غلط //answerElemnt من ال question.js
      const checkElement = 
      this.questions[this.answerdAmount].answerElemnt.filter((ele) => ele.firstChild.checked);
      if(checkElement.lenght == 0){
        alert("check elemnt")
      }else{
        this.questions[this.answerdAmount].answer(checkElement);
        this.answerdAmount++;
        this.answerdAmount < this.totalAmount 
        ? this.renderQuestion()
        : this.endQuestion();
      }
    };

    //endquestion fun
    endQuestion =() =>{
     this.quizElement.style.display = "none";
     this.finalElemnt.style.display = "block";
     const correct = this.countCorrectAnswers();
     new Final( correct , this.totalAmount); //كام واحده صح م اصل الكل

    };

    //correctanswers fun
    countCorrectAnswers = () =>{
      let count = 0;
      this.questions.forEach((ele) => {
          if(ele.isCorrect){
              count++;
          }
      });
     return count;
    }
}
export default Quiz;