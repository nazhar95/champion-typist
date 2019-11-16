/*variables declaration*/
var temp = document.querySelector(".timer");
var button = document.querySelector("button");
var words = document.querySelector(".words");
var timerDiv = document.querySelector(".timer");
var scoreDiv = document.querySelector(".user_score");
var points = 0; //set the initial point to be 0
var spans;
var typed;
var seconds = 20; //set the initial time to be 20
var sound = new Audio("correct.mp3"); // point the audio to correct.mp3

let list = [];

(function() {
  button.addEventListener("click", function(e) 
  {
    bindWordsToList();
    time_count();
    random_words();
    button.disabled = true;
  });

  document.addEventListener("keydown", typing, false);
})();

function bindWordsToList() 
{
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "./word.txt", false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
    list = result.split(",");
  }
}

/*set the function for the timer*/
function time_count() 
{
  points = 0;
  var timer = setInterval(function() 
  {
    button.disabled = true;
    seconds--;
    temp.innerHTML = seconds;
    if (seconds === 0) {
      alert("Time's up! The score you received is " + points + ".");
      scoreDiv.innerHTML = "0";
      words.innerHTML = "";
      button.disabled = false;
      clearInterval(timer);
      seconds = 20;
      timerDiv.innerHTML = "20";
      button.disabled = false;
    }
  }, 1000);
}

function random_words() 
{
  words.innerHTML = "";
  var random_words = Math.floor(Math.random() * (1943 - 0 + 1)) + 0;
  var wordArray = list[random_words].split("");
  for (var i = 0; i < wordArray.length; i++) {
    //building the words with spans around the letters
    var span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = wordArray[i];
    words.appendChild(span);
  }
  spans = document.querySelectorAll(".span");
}

function typing(e) 
{
  typed = String.fromCharCode(e.which);
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML === typed) {
      // if typed letter is the one from the word
      if (spans[i].classList.contains("bg_color")) {
        // if it already has class with the bacground color then check the next one
        continue;
      } else if (
        (spans[i].classList.contains("bg_color") === false &&
          spans[i - 1] === undefined) ||
        spans[i - 1].classList.contains("bg_color") !== false
      ) {
        // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
        spans[i].classList.add("bg_color");
        break;
      }
    }
  }

  var checker = 0;
  for (var j = 0; j < spans.length; j++) 
  {
    //checking if all the letters are typed
    if (spans[j].className === "span bg_color") 
    {
      checker++;
    }

    if (checker === spans.length) 
    {
      sound.pause();
      sound.currentTime = 0;
      sound.play();
      words.classList.add("animated");
      words.classList.add("fadeOut");
      points++; // increment the points
      scoreDiv.innerHTML = points; //add points to the points div
      document.removeEventListener("keydown", typing, false);
      setTimeout(function() {
        words.className = "words"; // restart the classes
        random_words(); // give another word
        document.addEventListener("keydown", typing, false);
      }, 400);
    }
  }
}
