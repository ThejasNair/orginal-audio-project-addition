
var x = new Audio("award.mp3")

var y =  new Audio("Jeopardy.mp3");


function stopSound() {
x.pause();
    document.getElementById("BIG_ONE").innerHTML = "ok...Can you please reset the page or move to a different tab? This is getting really awkward";
y.play();
}
function addUser() {
player_1 = document.getElementById("inputtiest_1").value;
player_2 = document.getElementById("inputtiest_2").value;

localStorage.setItem("playur_1", player_1);
localStorage.setItem("playur_2", player_2);

window.location = "game_screen.html";
}


function youWin() {
   
document.getElementById("Player1_score").innerHTML = "5";

document.getElementById("BIG_ONE").innerHTML = "PLAYER ONE HAS....ONE!*get it? one? won?";
x.play();
setTimeout(stopSound, 5000);
}

function send() {
get_word = document.getElementById("mr_input").value;
word = get_word.toLowerCase();

charAt1 = word.charAt(1);
console.log(charAt1);

length_divided_2 = Math.floor(word.length/2);
charAt2 = word.charAt(length_divided_2);
console.log(charAt2);

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = charAt1.replace(charAt2, "_");
remove_charAt3 = charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='question_word_thingy'>Q." + remove_charAt3 +" </h4>";
guess_text = "<br> Answer: <input type='text' id='input_master'>";
check_button="<button id='check_it' onclick='check();'>Check</button>";
row = question_word + guess_text + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("mr_input").innerHTML= " ";


}

function check() {
}

