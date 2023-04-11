const options = [
  "Hey {name}, how are you?",
  "Hi {name}, nice to see you!",
  "Hello {name}, I'm Shrek",
  "Hi {name}, do you want to meet my friends",
  "Hey {name}, lets go the the swamp",
  "{name} Well it’s no wonder you don’t have any friends.",
  "{name}, do you know ogres are like onions.",
  "Someday, I Will Repay You {name}. Unless, Of Course, I Can’t Find You Or If I Forget."
];

function generate() {
  const name = document.getElementById("name").value;
  const randomIndex = Math.floor(Math.random() * options.length);
  const message = options[randomIndex].replace("{name}", name);
  document.getElementById("output").innerHTML = message;

  document.querySelector(".centered").textContent = name;

  restyle();
}

function restyle() {
  const output = document.getElementById("output");
  output.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}