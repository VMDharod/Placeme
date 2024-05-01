const askButton = document.getElementById('ask-question');
const questionsContainer = document.getElementById('questions-container');
let questionNumber = 1;

askButton.addEventListener('click', function() {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const numberSpan = document.createElement('span');
  numberSpan.classList.add('question-number');
  numberSpan.textContent = `Q${questionNumber}. `;
  questionDiv.appendChild(numberSpan);

  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = 'Enter your question';
  questionDiv.appendChild(questionInput);

  const answerArea = document.createElement('div');
  answerArea.classList.add('answer-area');

  const answerInput = document.createElement('textarea');
  answerInput.placeholder = 'Write your answer';
  answerArea.appendChild(answerInput);

  const answerButton = document.createElement('button');
  answerButton.classList.add('answer-button');
  answerButton.textContent = 'Write an Answer';
  answerArea.appendChild(answerButton);

  questionDiv.appendChild(answerArea);
  questionsContainer.appendChild(questionDiv);

  questionNumber++;

  questionInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const questionText = questionInput.value.trim();
      if (questionText) { // Check if question is not empty
        questionInput.value = ''; // Clear the question input after submitting
        numberSpan.textContent = `Q${questionNumber}. `; // Update question number
        answerArea.style.display = 'block'; // Show the answer area
      }
    }
  });

  answerButton.addEventListener('click', function() {
    const answerText = answerInput.value.trim();
    if (answerText) { // Check if answer is not empty
      const answerParagraph = document.createElement('p');
      answerParagraph.classList.add('answer-text');
      answerParagraph.textContent = answerText;
      answerArea.appendChild(answerParagraph);
      answerInput.value = ''; // Clear the answer input after submitting
      answerButton.disabled = true; // Disable the answer button to prevent multiple answers
    }
  });
});
