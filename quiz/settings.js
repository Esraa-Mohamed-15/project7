//https://opentdb.com/api.php?amount=10&category=9&difficulty=medium
import Quiz from "./quiz.js";
class Settings {
  constructor() {

    this.quizDom = document.querySelector(".quiz");
    this.settingDom = document.querySelector(".settings");
    this.categoryDom = document.querySelector("#category");
    this.numberOfQuestions = document.querySelector("#nQuestions");
    this.start = document.querySelector("#start");
    this.difficulty =[
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#difficult"), 
      
    ]; 
      this.quiz= {};
     this.start.addEventListener("click", this.startQuiz);
  }
  startQuiz = async  () => {
    try {
    const amount = this.getAmount();
    const category =this.categoryDom.value;
    const difficulty=this.getDifficulty();
    
    const url =`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    let { results } = await this.fetchData(url); //الحل الاول 
    this.elemnt();//الحل الاول

    this.quiz = new Quiz(this.quizDom , amount , results);


     
//الحل التاني
    //fetch(url) 
    //.then((response) => response.json())
    //.then((data)=> 
    //{ this.quizDom.style.display = "block";
      //this.settingDom.style.display = "none";
    //});
  }

  catch(err){
    alert(err);
  }

    };
    //الحل الاول
  elemnt=() =>{
  this.quizDom.style.display = "block";
  this.settingDom.style.display = "none";
  };
//الحل الاول
  fetchData = async (url) =>{
    const response = await fetch(url)
    const result = await response.json();
    return result;
  };
    //بعت طلب لل api بالداتا ال حطتها دي وبعدها قولتله هاته من ال json وطلعلي الداتا
    // هتلاقيه طبعلك الداتا بالاسئله من لينك ال api وهو دا ال opp
  

  getAmount = () => {
     const amount = this.numberOfQuestions.value;
     if(amount>0 && amount<15 ){
     return amount;
     }else{
       alert("enter questions");
     }
  };

  getDifficulty =() => {
    const difficulty = this.difficulty.filter((el) => el.checked);
    if(difficulty.length===1){
      return difficulty[0].id; //الفلتر بتعامل مع array ف هنا الصفر عايده ع العنصر ال هتختاريه ال هو 1
    }else{
      alert("select difficulty");
    }
  } ;
}
export default Settings;
