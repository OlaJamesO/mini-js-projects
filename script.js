const RANDOM_IMG_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

let BREEDS = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "shepherd australian",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "norwegian buhund",
  "boston bulldog",
  "english bulldog",
  "french bulldog",
  "staffordshire bullterrier",
  "australian cattledog",
  "chihuahua",
  "chow",
  "clumber",
  "cockapoo",
  "border collie",
  "coonhound",
  "cardigan corgi",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "great dane",
  "scottish deerhound",
  "dhole",
  "dingo",
  "doberman",
  "norwegian elkhound",
  "entlebucher",
  "eskimo",
  "lapphund finnish",
  "bichon frise",
  "germanshepherd",
  "italian greyhound",
  "groenendael",
  "havanese",
  "afghan hound",
  "basset hound",
  "blood hound",
  "english hound",
  "ibizan hound",
  "plott hound",
  "walker hound",
  "husky",
  "keeshond",
  "kelpie",
  "komondor",
  "kuvasz",
  "labradoodle",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "bull mastiff",
  "english mastiff",
  "tibetan mastiff",
  "mexicanhairless",
  "mix",
  "bernese mountain",
  "swiss mountain",
  "newfoundland",
  "otterhound",
  "caucasian ovcharka",
  "papillon",
  "pekinese",
  "pembroke",
  "miniature pinscher",
  "pitbull",
  "german pointer",
  "germanlonghair pointer",
  "pomeranian",
  "medium poodle",
  "miniature poodle",
  "standard poodle",
  "toy poodle",
  "pug",
  "puggle",
  "pyrenees",
  "redbone",
  "chesapeake retriever",
  "curly retriever",
  "flatcoated retriever",
  "golden retriever",
  "rhodesian ridgeback",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "giant schnauzer",
  "miniature schnauzer",
  "english setter",
  "gordon setter",
  "irish setter",
  "sharpei",
  "english sheepdog",
  "shetland sheepdog",
  "shiba",
  "shihtzu",
  "blenheim spaniel",
  "brittany spaniel",
  "cocker spaniel",
  "irish spaniel",
  "japanese spaniel",
  "sussex spaniel",
  "welsh spaniel",
  "english springer",
  "stbernard",
  "american terrier",
  "australian terrier",
  "bedlington terrier",
  "border terrier",
  "cairn terrier",
  "dandie terrier",
  "fox terrier",
  "irish terrier",
  "kerryblue terrier",
  "lakeland terrier",
  "norfolk terrier",
  "norwich terrier",
  "patterdale terrier",
  "russell terrier",
  "scottish terrier",
  "sealyham terrier",
  "silky terrier",
  "tibetan terrier",
  "toy terrier",
  "welsh terrier",
  "westhighland terrier",
  "wheaten terrier",
  "yorkshire terrier",
  "tervuren",
  "vizsla",
  "spanish waterdog",
  "weimaraner",
  "whippet",
  "irish wolfhound",
];

BREEDS = BREEDS.map(breed => {
  return breed
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});

// Utility function to get a randomly selected item from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]; // Return a random element from the array
}

// Utility function to shuffle the order of items in an array in-place

// Fisher-Yates shuffle algorithm from https://javascript.info/task/shuffle 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;

}


// TODO 1
// Given an array of possible answers, a correct answer value, and a number of choices to get,
// return a list of that many choices, including the correct answer and others from the array
function getMultipleChoices(n, correctAnswer, possibleChoices) {
  // Use a while loop and the getRandomElement() function
  // Make sure there are no duplicates in the array

  const choices = [correctAnswer];
  while (choices.length < n) {
    const choice = getRandomElement(possibleChoices);
    if (!choices.includes(choice)) {
      choices.push(choice);
    }
  }
  return shuffleArray(choices);
}

// TODO 2
// Given a URL such as "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"
// return the breed name string as formatted in the breed list, e.g. "standard poodle" or  just signle name like "shepherd"
function getBreedFromURL(url) {
  // The string method .split(char) may come in handy
  // Try to use destructuring as much as you can

  let breed = url.split("/")[4];
  breed = breed.split("-").reverse().join(" ");
  return breed;
}

// TODO 3
// Given a URL, fetch the resource at that URL,
// then parse the response as a JSON object,
// finally return the "message" property of its body
async function fetchMessage(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

// Function to add the multiple-choice buttons to the page
function renderButtons(choicesArray, correctAnswer) {
  // Event handler function to compare the clicked button's value to correctAnswer
  // and add "correct"/"incorrect" classes to the buttons as appropriate
  function buttonHandler(e) {
    if (e.target.value === correctAnswer) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");
      document.querySelector(`button[value="${correctAnswer}"]`).classList.add("correct");
    }
  }

  const options = document.getElementById("options"); // Container for the multiple-choice buttons

  // TODO 4
  // For each of the choices in choicesArray,
  // Create a button element whose name, value, and textContent properties are the value of that choice,
  // attach a "click" event listener with the buttonHandler function,
  // and append the button as a child of the options element

  for (let choice of choicesArray) {
    const button = document.createElement("button");
    button.textContent = choice;
    button.value = choice;
    button.name = choice;
    button.addEventListener("click", buttonHandler);
    options.appendChild(button);
  }

  // add next and reset button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next Doggy";
  nextButton.addEventListener("click", async () => {
    const [imgUrl, correctAnswer, choices] = await loadQuizData();
    renderQuiz(imgUrl, correctAnswer, choices);

    // auto reset page to new doggo after clecking next doggy
    options.replaceChildren();
  });
  options.appendChild(nextButton);

  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", () => {
    options.replaceChildren();
    loadQuizData().then(([imgUrl, correctAnswer, choices]) => {
      renderQuiz(imgUrl, correctAnswer, choices);
    });
  });
  options.appendChild(resetButton);

  // Add a div to display the explanation
  const explanationDiv = document.createElement("div");
  explanationDiv.id = "explanation";
  options.appendChild(explanationDiv);

  // create a text content for explanation div and add it to the page after the correct or worng answer is clicked
  const explanation = document.getElementById("explanation");
  explanation.textContent = "Click on the correct breed to see the explanation";
  explanation.classList.add("hidden");

  // Event handler function to show the explanation when the correct or wrong answer is clicked
  function showExplanation() {
    explanation.classList.remove("hidden");
    //add toUpperCase() to correctAnswer in bold text
    explanation.textContent = `The correct 🐶 breed is ${correctAnswer.toUpperCase()}!!. `;


  }

  // Add an event listener to the options div to show the explanation when the correct or wrong answer is clicked
  options.addEventListener("click", showExplanation);

}


// Function to add the quiz content to the page
function renderQuiz(imgUrl, correctAnswer, choices) {
  const image = document.createElement("img");
  image.setAttribute("src", imgUrl);
  const frame = document.getElementById("image-frame");

  image.addEventListener("load", () => {
    // Wait until the image has finished loading before trying to add elements to the page
    frame.replaceChildren(image);
    renderButtons(choices, correctAnswer);
  });
}

// Function to load the data needed to display the quiz
async function loadQuizData() {
  document.getElementById("image-frame").textContent =
    "Fetching doggo...";

  const doggoImgUrl = await fetchMessage(RANDOM_IMG_ENDPOINT);
  let correctBreed = getBreedFromURL(doggoImgUrl);
  correctBreed = correctBreed.charAt(0).toUpperCase() + correctBreed.slice(1); // Capitalize the first letter
  const breedChoices = getMultipleChoices(3, correctBreed, BREEDS);



  return [doggoImgUrl, correctBreed, breedChoices];
}

// TODO 5
// Asynchronously call the loadQuizData() function,
// Then call renderQuiz() with the returned imageUrl, correctAnswer, and choices

const [imgUrl, correctAnswer, choices] = await loadQuizData();
renderQuiz(imgUrl, correctAnswer, choices);




