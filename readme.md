# Doggo Fetch Quiz

## Introduction
This HTML file is a simple web-based quiz game called "Guess the Doggo." It fetches a random image of a dog from the Dog CEO API and prompts the user to guess the breed of the dog in the image.

## How It Works
### HTML Structure
The HTML structure consists of a header section with the game title and instructions, a main section to display the dog image and multiple-choice options, and a script section containing JavaScript code to handle the quiz logic.

### CSS Styling
The CSS styles define the layout and appearance of the quiz elements, including the header, image frame, options, and buttons. It ensures a visually appealing and user-friendly interface.

### JavaScript Logic
1. **Fetching Random Dog Image**: It uses the `fetchMessage()` function to fetch a random dog image URL from the Dog CEO API (`https://dog.ceo/api/breeds/image/random`).
2. **Parsing Breed from URL**: The `getBreedFromURL()` function extracts the breed name from the image URL.
3. **Generating Multiple Choice Options**: The `getMultipleChoices()` function generates multiple choice options, including the correct breed and other random breeds, ensuring no duplicates.
4. **Rendering Buttons**: The `renderButtons()` function dynamically creates buttons for each choice and attaches event listeners to handle user clicks. It also highlights the correct answer and provides a "Next Doggy" button to fetch a new image.
5. **Rendering Quiz Content**: The `renderQuiz()` function displays the dog image and multiple-choice buttons on the page.
6. **Loading Quiz Data**: The `loadQuizData()` function orchestrates the fetching of image URL, correct breed, and multiple-choice options asynchronously.
7. **Initializing the Quiz**: The code asynchronously loads quiz data on page load using `loadQuizData()` and renders the initial quiz content using `renderQuiz()`.

## Usage
1. Open the HTML file in a web browser.
2. The page will load a random dog image.
3. Select the breed you think matches the dog in the image.
4. Click "Next Doggy" to load a new image and continue the quiz.
5. Click "Reset" to start the quiz again from the beginning.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## Credits
- This project utilizes the [Dog CEO API](https://dog.ceo/dog-api/) for fetching random dog images.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

# Quiz.js

## Introduction
This HTML file contains a simple JavaScript quiz called "Quiz.js." It presents a statement and two options (true/false) for the user to guess.

## How It Works
### HTML Structure
The HTML structure consists of a header section with the quiz title and instructions, a main section to display the statement and options, and a script section containing JavaScript code to handle the quiz logic.

### CSS Styling
The CSS styles define the layout and appearance of the quiz elements, including the statement, options, and buttons. It ensures a visually appealing and user-friendly interface.

### JavaScript Logic
1. **Initializing Variables**: The script initializes variables pointing to HTML elements and an object containing the quiz fact.
2. **Displaying Statement**: The script sets the text of the statement element to the fact's statement.
3. **Button Disable/Enable Functions**: Functions to set or remove the "disabled" attribute from button elements.
4. **Checking Correct Answer**: Function to compare the user's guess to the correct answer.
5. **Event Listeners**: A loop to add click event listeners to option buttons. Within the event handler, the fact's explanation is displayed, all option buttons are disabled, and the user's guess is checked against the correct answer.

## Usage
1. Open the HTML file in a web browser.
2. Read the statement and select either "true" or "false" as your answer.
3. Click the chosen option to see the explanation and whether your answer was correct.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## Learning Resources

This project was created as part of my learning journey with [Frontend Masters](https://frontendmasters.com/). The concepts and skills gained from their courses were instrumental in the development of this quiz game.

## Acknowledgements

A big thank you to [Frontend Masters](https://frontendmasters.com/) for providing high-quality, in-depth learning materials that made this project possible.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
