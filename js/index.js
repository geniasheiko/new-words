const translate1 = document.getElementById("translate1");
const translate2 = document.getElementById("translate2");
const translate3 = document.getElementById("translate3");
const learnWord1 = document.getElementById("words-rus1");
const learnWord2 = document.getElementById("words-rus2");
const learnWord3 = document.getElementById("words-rus3");
const wrapper = document.getElementById("wrapper");

//---------Create object
function addElementToObject() {
   var words = {};
   var word1 = document.getElementById("word1");
   var subscribe1 = word1.value;
   var subscribe2 = translate1.value;

   var word2 = document.getElementById("word2");
   var subscribe3 = word2.value;
   var subscribe4 = translate2.value;

   var word3 = document.getElementById("word3");
   var subscribe5 = word3.value;
   var subscribe6 = translate3.value;

   //---------Add new element to object

   words[subscribe1] = subscribe2;
   words[subscribe3] = subscribe4;
   words[subscribe5] = subscribe6;
   return words;
};

//--------- Add EventListener

const buttonClick = document.getElementById('click-me');
const buttonCheck = document.getElementById('button-check');
var allWords, wordsKeys, wordsValues;
buttonClick.addEventListener('click', () => {
   allWords = addElementToObject();
   wordsKeys = Object.keys(allWords);
   wordsValues = Object.values(allWords);
   //--------- Change element
   learnWord1.innerHTML = "<p>" + wordsKeys[0] + "</p>";
   learnWord2.innerHTML = "<p>" + wordsKeys[1] + "</p>";
   learnWord3.innerHTML = "<p>" + wordsKeys[2] + "</p>";

   translate1.value = "";
   translate2.value = "";
   translate3.value = "";

   var outputWord1 = document.getElementById("words-deutsch1");
   var outputWord2 = document.getElementById("words-deutsch2");
   var outputWord3 = document.getElementById("words-deutsch3");

   buttonClick.style.display = "none";
   buttonCheck.style.display = "block";

});

buttonCheck.addEventListener('click', () => {

   var result = 0;
   if (wordsValues[0] === translate1.value) {
      result++;
   }
   if (wordsValues[1] === translate2.value) {
      result++;
   }
   if (wordsValues[2] === translate3.value) {
      result++;
   }

   if (result == 0) {
      wrapper.innerHTML = "<p>Ужас! Надо хорошо учиться. Вы неугадали ни одного слова:(.</p>";
   };

   if (result == 1) {
      wrapper.innerHTML = "<p>Плохо:( Вы угадали <span>" + result + "</span> словo.</p>";
   };
   if (result == 2) {
      wrapper.innerHTML = "<p>Не плохо! Вы угадали <span>" + result + "</span> слова.</p>";
   };
   if (result == 3) {
      wrapper.innerHTML = "<p>Отлично! Молодец!!!Вы угадали <span>" + result + "</span> слова.</p>";
   }
});


