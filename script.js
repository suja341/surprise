let currentQuestion = 0;
let score = 0;
 
const questions = [
    {
        question: "What is Arivu's daily routine? 😏",
        options: [
            "Wake up early and workout 💪",
            "Sleep → Eat → Phone → Repeat 📱",
            "Read books and improve skills 📚"
        ],
        correct: 1
    },
    {
        question: "What is his hidden talent? 😂",
        options: [
            "Finishing biriyani in 5 mins 🍗",
            "Replying late to messages ⏰",
            "Acting busy without doing anything 🤡"
        ],
        correct: 2
    },
    {
        question: "What will he achieve this year? 😎",
        options: [
            "Six pack body 💪",
            "Still saying 'From tomorrow I’ll change' 🤣",
            "Finally getting a girlfriend 👀"
        ],
        correct: 1
    }
];
 
function openScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
 
    document.getElementById(id).classList.add("active");
 
    if (id === "gift1") {
        startQuiz();
    }
}
 
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").innerHTML = "";
    showQuestion();
}
 
function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
 
    let options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.innerText = q.options[index];
    });
}
 
function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
 
    currentQuestion++;
 
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}
 
function showResult() {
    let message;
 
    if (score === 3) {
        message = "🔥 ROAST LEVEL: LEGENDARY LAZY KING 👑😂";
    } else if (score === 2) {
        message = "😎 Certified Drama Piece but Still Cute.";
    } else {
        message = "🤡 Bro… even your roast failed.";
    }
 
    document.getElementById("quizBox").innerHTML = "";
    document.getElementById("result").innerHTML = message;
}