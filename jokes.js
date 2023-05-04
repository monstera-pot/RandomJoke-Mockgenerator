const qs = (q) => document.querySelector(q);

const chickenBtn = document.querySelector("#chicken");
const dogBtn = qs("#dog");
const cowBtn = qs("#cow");
const jokeDisplay = qs("#jokeDisplay");
const mimimiBtn = qs("#mButton");
const sBtn = qs("#sButton");
const userInput = qs("#input");

const chickenJoke = () => {
  let randomJoke = jokes.chicken[Math.floor(Math.random() * 7)];
  jokeDisplay.innerText = randomJoke;
  console.log("Button pressed");
};

const dogJoke = () => {
  let randomJoke = jokes.dog[Math.floor(Math.random() * 7)];
  jokeDisplay.innerText = randomJoke;
};

const cowJoke = () => {
  let randomJoke = jokes.cow[Math.floor(Math.random() * 7)];
  jokeDisplay.innerText = randomJoke;
};

const mimimize = () => {
  let getValue = userInput.value;
  if (getValue === "") {
    alert("Try writing something first :)");
  } else {
    const regex = /[aeiou]/gi;
    const mimiString = getValue.replace(regex, "i");
    alert(mimiString);
    userInput.value = "";
  }
};

const isLetter = (c) => c.match(/[a-zA-Z]/);
const randomUpperCase = (c) => {
  if (!isLetter(c)) return c;
  return Math.random() < Math.random() ? c.toUpperCase() : c;
};

mock = () => {
  let getValue = userInput.value;
  if (getValue === "") {
    alert("Try writing something first :)");
  } else {
    const charArr = getValue.split("");
    const mockArr = charArr.map(randomUpperCase);
    const mockString = mockArr.join("");
    alert(mockString);
    userInput.value = "";
  }
};

chickenBtn.addEventListener("click", chickenJoke);
dogBtn.addEventListener("click", dogJoke);
cowBtn.addEventListener("click", cowJoke);
mimimiBtn.addEventListener("click", mimimize);
sBtn.addEventListener("click", mock);

const jokes = {
  chicken: [
    "What do chickens dance to?\nHenhouse music.",
    "Why did the chickens try and escape?\nThey felt cooped up.",
    "What do you call a bird that’s afraid to fly?\nChicken.",
    "What do chickens grow on?\nEggplants.",
    "What do sick chickens get?\nHuman-pox.",
    "What do you get if you cross an elephant and a chicken?\nA peckyderm.",
    "What do poetic chickens enjoy?\nSpoken word poultry.",
  ],
  dog: [
    "What do you get when you cross a dog and a calculator?\nA friend you can count on.",
    "Why are Dalmatians not considered good at playing hide and seek?\nBecause they are always spotted.",
    "What breed of dog can jump higher than a building?\nAll breeds can, since buildings can’t jump.",
    "What do you call a dog that saves someone from drowning?\nA good buoy.",
    "Why did the dog go to the electronics store?\nTo buy a subwoofer.",
    "What do you call a futuristic dog?\nA howlogram.",
    "Why did the dog stop walking?\nHe had to paws for thought!",
  ],
  cow: [
    "Where do cows go out for a date?\nTo the moo-vies",
    "What do cows play in the band?\nMoo-sical instruments",
    "What did the cow say to the angry farmer?\nPlease calm down or else we’re going to have beef!",
    "Why do bulls wear bells around their neck?\nBecause their horns don’t work",
    "What do cows eat for breakfast?\nGrass",
    "What do you call a cow on a bouncing castle?\nA milkshake",
    "Why are cows so competitive?\nBecause the steaks are high",
  ],
};
