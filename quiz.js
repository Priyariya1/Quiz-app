var container = document.getElementById('container');
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var result = document.getElementById('result');

var currQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

function loadQuestion(index) {
        var data = questions[index];
        question.textContent = (index + 1) + '.' + data.question;
        option1.textContent = data.option1;
        option2.textContent = data.option2;
        option3.textContent = data.option3;
        option4.textContent = data.option4;


        var selectedOption = document.querySelector('#container input[type=radio]:checked');
        if (selectedOption) selectedOption.checked = false;
};

function loadNextQuestion() {
        var selectedOption = document.querySelector('#container input[type=radio]:checked');
        if (!selectedOption) {
                alert('Please selected some option !!');
                return;
        }


        if (questions[currQuestion].answer == selectedOption.value) {
                score += 10;
        }
        selectedOption.checked = false;

        currQuestion++;
        if (currQuestion == totalQuestions - 1) {
                document.getElementById('nextQuestion').textContent = 'finish';

        }

        if (currQuestion == totalQuestions) {
                container.style.display = 'none';
                result.style.display = '';
                document.getElementById('score').textContent = 'Your Score:' + score;
                return;
        }
        loadQuestion(currQuestion);
};

function restartGame() {
        score = 0;
        currQuestion = 0;
        container.style.display = '';
        result.style.display = 'none';
        loadQuestion(currQuestion);
};

loadQuestion(currQuestion);


