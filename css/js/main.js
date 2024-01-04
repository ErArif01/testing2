const questions = [
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correctAnswer: 'Paris' },
    { question: 'Which programming language is this tutorial written in?', options: ['Java', 'JavaScript', 'Python', 'C++'], correctAnswer: 'JavaScript' },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
        const optionsHTML = currentQuestion.options.map(option => `<label><input type="radio" name="answer" value="${option}">${option}</label>`).join('');
        questionContainer.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;
    } else {
        questionContainer.innerHTML = '<p>Quiz completed! Well done!</p>';
    }
}

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="answer"]:checked');

    if (userAnswer) {
        const answer = userAnswer.value;
        const currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.correctAnswer) {
            alert('Correct!');
        } else {
            alert(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
        }

        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Please select an answer.');
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        checkAnswer();
    } else {
        alert('Quiz completed! Well done!');
    }
}

// Initial display
displayQuestion();
