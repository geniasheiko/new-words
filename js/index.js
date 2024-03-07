//---------Create object
function addElementToObject() {
   var words = {};
   var word1 = document.getElementById("word1");
   var translate1 = document.getElementById("translate1");
   var subscribe1 = word1.value;
   var subscribe2 = translate1.value;

   var word2 = document.getElementById("word2");
   var translate2 = document.getElementById("translate2");
   var subscribe3 = word2.value;
   var subscribe4 = translate2.value;

   var word3 = document.getElementById("word3");
   var translate3 = document.getElementById("translate3");
   var subscribe5 = word3.value;
   var subscribe6 = translate3.value;

   //---------Add new element to object

   words[subscribe1] = subscribe2;
   words[subscribe3] = subscribe4;
   words[subscribe5] = subscribe6;
   return words;
};

//--------- Add EventListener
var element = document.getElementById('click-me');
element.addEventListener('click', () => {
   var allWords = addElementToObject();
   //--------- Create array include all keys
   var wordsKeys = Object.keys(allWords);

   //--------- Change element
   var learnWord1 = document.getElementById("words-rus1");
   learnWord1.innerHTML = "<p>" + wordsKeys[0] + "</p>";
   var learnWord2 = document.getElementById("words-rus2");
   learnWord2.innerHTML = "<p>" + wordsKeys[1] + "</p>";
   var learnWord3 = document.getElementById("words-rus3");
   learnWord3.innerHTML = "<p>" + wordsKeys[2] + "</p>";

   var outputWord1 = document.getElementById("words-deutsch1");
   var outputWord2 = document.getElementById("words-deutsch2");
   var outputWord3 = document.getElementById("words-deutsch3");

});


