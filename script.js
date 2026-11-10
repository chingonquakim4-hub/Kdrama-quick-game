/* =========================================================
   K-DRAMA UNIVERSE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. DATA
========================================================= */

const quizQuestions = [

    {
        genre: "romance",
        difficulty: "easy",
        question: "Trong 'Queen of Tears', Hong Hae-in là ai?",
        answers: [
            "Một bác sĩ",
            "Một nữ thừa kế tập đoàn",
            "Một giáo viên",
            "Một diễn viên"
        ],
        correct: 1
    },

    {
        genre: "romance",
        difficulty: "easy",
        question: "Tên nam chính của 'Business Proposal' là gì?",
        answers: [
            "Kang Tae-moo",
            "Lee Young-joon",
            "Baek Hyun-woo",
            "Jang Uk"
        ],
        correct: 0
    },

    {
        genre: "school",
        difficulty: "easy",
        question: "Cha Eun-woo đóng vai Lee Su-ho trong bộ phim nào?",
        answers: [
            "The Glory",
            "True Beauty",
            "Weak Hero",
            "Lovely Runner"
        ],
        correct: 1
    },

    {
        genre: "school",
        difficulty: "medium",
        question: "Trong 'Twenty-Five Twenty-One', Na Hee-do có niềm đam mê với môn thể thao nào?",
        answers: [
            "Bơi lội",
            "Cầu lông",
            "Đấu kiếm",
            "Bóng chuyền"
        ],
        correct: 2
    },

    {
        genre: "school",
        difficulty: "medium",
        question: "Nam chính của 'Weak Hero Class 1' là ai?",
        answers: [
            "Yeon Si-eun",
            "Park Hu-min",
            "Ahn Su-ho",
            "Jeon Seok-dae"
        ],
        correct: 0
    },

    {
        genre: "fantasy",
        difficulty: "medium",
        question: "'Alchemy of Souls' lấy bối cảnh ở vùng đất hư cấu nào?",
        answers: [
            "Daeho",
            "Joseon",
            "Goryeo",
            "Silla"
        ],
        correct: 0
    },

    {
        genre: "fantasy",
        difficulty: "easy",
        question: "Jang Man-wol là nhân vật chính trong bộ phim nào?",
        answers: [
            "Hotel Del Luna",
            "The Glory",
            "True Beauty",
            "Queen of Tears"
        ],
        correct: 0
    },

    {
        genre: "romance",
        difficulty: "medium",
        question: "Trong 'Lovely Runner', Im Sol quay về quá khứ để thay đổi điều gì?",
        answers: [
            "Gia đình",
            "Sự nghiệp",
            "Số phận của Ryu Sun-jae",
            "Việc học"
        ],
        correct: 2
    },

    {
        genre: "school",
        difficulty: "medium",
        question: "Tên nam chính của 'Twinkling Watermelon' là gì?",
        answers: [
            "Ha Eun-gyeol",
            "Choi Han-gyeol",
            "Lee Chan",
            "Yoon Cheong-ah"
        ],
        correct: 0
    },

    {
        genre: "romance",
        difficulty: "medium",
        question: "Trong 'Business Proposal', Shin Ha-ri đi xem mắt thay cho ai?",
        answers: [
            "Bạn thân",
            "Chị gái",
            "Em gái",
            "Đồng nghiệp"
        ],
        correct: 0
    },

    {
        genre: "school",
        difficulty: "easy",
        question: "'True Beauty' xoay quanh chủ đề nào?",
        answers: [
            "Âm nhạc",
            "Trang điểm và ngoại hình",
            "Thể thao",
            "Du lịch"
        ],
        correct: 1
    },

    {
        genre: "romance",
        difficulty: "hard",
        question: "Trong 'Queen of Tears', Baek Hyun-woo xuất thân từ đâu?",
        answers: [
            "Seoul",
            "Yongduri",
            "Busan",
            "Jeju"
        ],
        correct: 1
    },

    {
        genre: "fantasy",
        difficulty: "hard",
        question: "Trong 'Hotel Del Luna', khách sạn chủ yếu phục vụ đối tượng nào?",
        answers: [
            "Người giàu",
            "Người nổi tiếng",
            "Những linh hồn",
            "Khách du lịch"
        ],
        correct: 2
    },

    {
        genre: "fantasy",
        difficulty: "hard",
        question: "Ai là người đóng vai Jang Uk trong 'Alchemy of Souls'?",
        answers: [
            "Lee Jae-wook",
            "Hwang Min-hyun",
            "Song Kang",
            "Park Hyung-sik"
        ],
        correct: 0
    },

    {
        genre: "school",
        difficulty: "hard",
        question: "Trong 'The Glory', Moon Dong-eun lên kế hoạch trả thù những người đã làm tổn thương cô thời học sinh.",
        answers: [
            "Đúng",
            "Sai"
        ],
        correct: 0
    },

    {
        genre: "romance",
        difficulty: "easy",
        question: "'Lovely Runner' thuộc nhóm thể loại nào nổi bật nhất?",
        answers: [
            "Romance và fantasy",
            "Horror",
            "Crime",
            "Historical"
        ],
        correct: 0
    },

    {
        genre: "school",
        difficulty: "easy",
        question: "Na Hee-do và Baek Yi-jin là hai nhân vật trung tâm của bộ phim nào?",
        answers: [
            "Twenty-Five Twenty-One",
            "The Glory",
            "Weak Hero",
            "True Beauty"
        ],
        correct: 0
    },

    {
        genre: "fantasy",
        difficulty: "medium",
        question: "Điểm đặc biệt nổi bật của 'Hotel Del Luna' là gì?",
        answers: [
            "Khách sạn dành cho linh hồn",
            "Trường học phép thuật",
            "Một bệnh viện",
            "Một công ty giải trí"
        ],
        correct: 0
    },

    {
        genre: "school",
        difficulty: "hard",
        question: "'Weak Hero Class 1' tập trung mạnh vào chủ đề nào?",
        answers: [
            "Bắt nạt học đường",
            "Ẩm thực",
            "Thời trang",
            "Du lịch"
        ],
        correct: 0
    },

    {
        genre: "romance",
        difficulty: "medium",
        question: "Bộ phim nào có cặp đôi Baek Hyun-woo và Hong Hae-in?",
        answers: [
            "Lovely Runner",
            "Queen of Tears",
            "Business Proposal",
            "True Beauty"
        ],
        correct: 1
    }

];


/* =========================================================
   POSTER DATA
========================================================= */

const posterQuestions = [

    {
        title: "Lovely Runner",
        image: "images/lovely-runner.jpg"
    },

    {
        title: "Queen of Tears",
        image: "images/queen-of-tears.jpg"
    },

    {
        title: "Business Proposal",
        image: "images/business-proposal.jpg"
    },

    {
        title: "True Beauty",
        image: "images/true-beauty.jpg"
    },

    {
        title: "Twenty-Five Twenty-One",
        image: "images/twenty-five-twenty-one.jpg"
    },

    {
        title: "Twinkling Watermelon",
        image: "images/twinkling-watermelon.jpg"
    },

    {
        title: "Weak Hero Class 1",
        image: "images/weak-hero.jpg"
    },

    {
        title: "The Glory",
        image: "images/the-glory.jpg"
    },

    {
        title: "Alchemy of Souls",
        image: "images/alchemy-of-souls.jpg"
    },

    {
        title: "Hotel Del Luna",
        image: "images/hotel-del-luna.jpg"
    }

];


/* =========================================================
   2. GAME VARIABLES
========================================================= */

let currentMode = "quiz";

let currentGenre = "all";

let currentQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let combo = 0;

let bestCombo = 0;

let timer = 15;

let timerInterval = null;

let fiftyUsed = false;


/* =========================================================
   3. PAGE SYSTEM
========================================================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageName);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageName === "ranking") {
        renderRanking();
    }
}


/* =========================================================
   4. CHOOSE MODE
========================================================= */

function chooseMode(mode) {

    currentMode = mode;

    const genreSection =
        document.getElementById("genre-selection");

    genreSection.classList.add("show");

    let modeText = "";

    if (mode === "quiz") {

        modeText =
            "Chọn thể loại câu hỏi mà m muốn thử.";

    } else if (mode === "poster") {

        modeText =
            "Poster mode sẽ sử dụng các bộ phim trong thư viện poster.";

    } else if (mode === "expert") {

        modeText =
            "Expert mode chỉ tập trung vào những câu hỏi khó hơn.";

    }

    document.getElementById("mode-text").textContent =
        modeText;

    genreSection.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================================================
   5. SHUFFLE
========================================================= */

function shuffleArray(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [newArray[i], newArray[j]] =
            [newArray[j], newArray[i]];
    }

    return newArray;
}


/* =========================================================
   6. START GAME
========================================================= */

function startGame(genre = "all") {

    currentGenre = genre;

    clearInterval(timerInterval);

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    combo = 0;

    bestCombo = 0;

    currentQuestionIndex = 0;

    fiftyUsed = false;


    /* =========================
       POSTER
    ========================= */

    if (currentMode === "poster") {

        currentQuestions =
            shuffleArray(posterQuestions);

    }


    /* =========================
       QUIZ / EXPERT
    ========================= */

    else {

        let pool = [...quizQuestions];


        if (currentGenre !== "all") {

            pool =
                pool.filter(
                    question =>
                        question.genre === currentGenre
                );
        }


        if (currentMode === "expert") {

            pool =
                pool.filter(
                    question =>
                        question.difficulty === "hard"
                );

            /*
             Nếu thể loại được chọn không có đủ
             câu hard thì lấy thêm medium.
            */

            if (pool.length < 5) {

                let extra =
                    quizQuestions.filter(
                        question =>
                            (
                                currentGenre === "all" ||
                                question.genre === currentGenre
                            ) &&
                            question.difficulty === "medium"
                    );

                pool =
                    [...pool, ...extra];
            }

        }


        currentQuestions =
            shuffleArray(pool);
    }


    /* =========================
       CHỈ LẤY TỐI ĐA 10 CÂU
    ========================= */

    currentQuestions =
        currentQuestions.slice(0, 10);


    if (currentQuestions.length === 0) {

        alert(
            "Không có câu hỏi phù hợp với lựa chọn này!"
        );

        return;
    }


    showPage("game");

    updateScore();

    renderQuestion();

}


/* =========================================================
   7. RENDER QUESTION
========================================================= */

function renderQuestion() {

    clearInterval(timerInterval);

    timer = 15;

    updateTimer();

    const question =
        currentQuestions[currentQuestionIndex];


    document.getElementById("question-number")
        .textContent =
        currentQuestionIndex + 1;


    document.getElementById("total-question")
        .textContent =
        currentQuestions.length;


    const progress =
        (
            currentQuestionIndex /
            currentQuestions.length
        ) * 100;


    document.getElementById("progress-bar")
        .style.width =
        `${progress}%`;


    const area =
        document.getElementById("question-area");


    if (currentMode === "poster") {

        renderPosterQuestion(question);

    } else {

        renderQuizQuestion(question);

    }


    startTimer();
}


/* =========================================================
   8. QUIZ QUESTION
========================================================= */

function renderQuizQuestion(question) {

    const area =
        document.getElementById("question-area");


    area.innerHTML = `

        <div class="question-card">

            <h2>
                ${question.question}
            </h2>

            <div class="answer-list">

                ${question.answers.map(
                    (answer, index) => `

                    <button
                        class="answer-btn"
                        onclick="checkAnswer(${index})">

                        ${String.fromCharCode(65 + index)}.
                        ${answer}

                    </button>

                `
                ).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   9. POSTER QUESTION
========================================================= */

function renderPosterQuestion(question) {

    const allTitles =
        posterQuestions
            .map(item => item.title);


    let choices =
        shuffleArray(allTitles)
            .slice(0, 4);


    if (!choices.includes(question.title)) {

        choices[0] =
            question.title;

    }


    choices =
        shuffleArray(choices);


    const area =
        document.getElementById("question-area");


    area.innerHTML = `

        <div class="question-card poster-question">

            <img
                class="poster-image"
                src="${question.image}"
                alt="${question.title}"
                onerror="this.style.display='none'"
            >

            <h2>
                Đây là bộ K-Drama nào?
            </h2>


            <div class="answer-list">

                ${choices.map(
                    (answer, index) => `

                    <button
                        class="answer-btn"
                        onclick="checkPosterAnswer(
                            '${escapeQuote(answer)}'
                        )">

                        ${String.fromCharCode(65 + index)}.
                        ${answer}

                    </button>

                `
                ).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   10. ESCAPE
========================================================= */

function escapeQuote(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}


/* =========================================================
   11. CHECK QUIZ ANSWER
========================================================= */

function checkAnswer(selectedIndex) {

    const question =
        currentQuestions[currentQuestionIndex];


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.classList.add("disabled");

    });


    buttons[question.correct]
        .classList.add("correct");


    if (selectedIndex === question.correct) {

        handleCorrect();

    } else {

        buttons[selectedIndex]
            .classList.add("wrong");

        handleWrong();
    }


    setTimeout(nextQuestion, 900);
}


/* =========================================================
   12. CHECK POSTER ANSWER
========================================================= */

function checkPosterAnswer(selectedTitle) {

    const question =
        currentQuestions[currentQuestionIndex];


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.classList.add("disabled");

        if (
            button.textContent
                .trim()
                .includes(question.title)
        ) {

            button.classList.add("correct");

        }

    });


    if (
        selectedTitle === question.title
    ) {

        handleCorrect();

    } else {

        buttons.forEach(button => {

            if (
                button.textContent
                    .trim()
                    .includes(selectedTitle)
            ) {

                button.classList.add("wrong");

            }

        });

        handleWrong();
    }


    setTimeout(nextQuestion, 900);
}


/* =========================================================
   13. CORRECT
========================================================= */

function handleCorrect() {

    correctAnswers++;

    combo++;

    if (combo > bestCombo) {

        bestCombo = combo;

    }


    let points = 100;


    if (combo >= 2) {

        points +=
            (combo - 1) * 20;

    }


    points +=
        timer * 2;


    score += points;

    updateScore();
}


/* =========================================================
   14. WRONG
========================================================= */

function handleWrong() {

    wrongAnswers++;

    combo = 0;

    updateScore();
}


/* =========================================================
   15. NEXT QUESTION
========================================================= */

function nextQuestion() {

    clearInterval(timerInterval);

    currentQuestionIndex++;

    if (
        currentQuestionIndex >=
        currentQuestions.length
    ) {

        finishGame();

        return;
    }


    renderQuestion();
}


/* =========================================================
   16. TIMER
========================================================= */

function startTimer() {

    timerInterval =
        setInterval(() => {

            timer--;

            updateTimer();

            if (timer <= 0) {

                clearInterval(timerInterval);

                wrongAnswers++;

                combo = 0;

                updateScore();

                disableAnswers();

                setTimeout(
                    nextQuestion,
                    700
                );
            }

        }, 1000);
}


/* =========================================================
   17. UPDATE TIMER
========================================================= */

function updateTimer() {

    const timerElement =
        document.getElementById("timer");


    timerElement.textContent =
        timer;


    if (timer <= 5) {

        timerElement.style.color =
            "#e85d75";

    } else {

        timerElement.style.color =
            "#f36f96";
    }
}


/* =========================================================
   18. DISABLE ANSWERS
========================================================= */

function disableAnswers() {

    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.classList.add("disabled");

    });
}


/* =========================================================
   19. 50:50
========================================================= */

function useFiftyFifty() {

    if (fiftyUsed) {

        return;
    }


    fiftyUsed = true;


    const button =
        document.getElementById("fifty-btn");

    button.disabled = true;

    button.style.opacity = "0.5";


    if (currentMode === "poster") {

        return;
    }


    const question =
        currentQuestions[currentQuestionIndex];


    const buttons =
        [...document.querySelectorAll(".answer-btn")];


    const wrongButtons =
        buttons.filter(
            (_, index) =>
                index !== question.correct
        );


    const removeCount =
        Math.min(
            2,
            wrongButtons.length
        );


    const selected =
        shuffleArray(wrongButtons)
            .slice(0, removeCount);


    selected.forEach(button => {

        button.style.visibility =
            "hidden";

    });
}


/* =========================================================
   20. SKIP
========================================================= */

function skipQuestion() {

    clearInterval(timerInterval);

    combo = 0;

    wrongAnswers++;

    updateScore();

    nextQuestion();
}


/* =========================================================
   21. UPDATE SCORE
========================================================= */

function updateScore() {

    document.getElementById("score")
        .textContent =
        score;


    document.getElementById("combo")
        .textContent =
        combo;
}


/* =========================================================
   22. FINISH GAME
========================================================= */

function finishGame() {

    clearInterval(timerInterval);


    document.getElementById("progress-bar")
        .style.width =
        "100%";


    document.getElementById("final-score")
        .textContent =
        score;


    document.getElementById("correct-count")
        .textContent =
        correctAnswers;


    document.getElementById("wrong-count")
        .textContent =
        wrongAnswers;


    document.getElementById("best-combo")
        .textContent =
        bestCombo;


    let message = "";


    const total =
        currentQuestions.length;


    const percentage =
        (correctAnswers / total) * 100;


    if (percentage >= 80) {

        message =
            "👑 Đỉnh quá! M đúng là K-Drama expert rồi.";

    } else if (percentage >= 60) {

        message =
            "✨ Khá ổn nha! Chỉ cần cày thêm vài bộ nữa.";

    } else if (percentage >= 40) {

        message =
            "🌸 Không tệ! Xem thêm K-Drama rồi quay lại phục thù.";

    } else {

        message =
            "😂 Hình như m cần một buổi cày phim cấp tốc rồi đó.";

    }


    document.getElementById("result-message")
        .textContent =
        message;


    saveScore();

    showPage("result");
}


/* =========================================================
   23. RESTART
========================================================= */

function restartGame() {

    startGame(currentGenre);
}


/* =========================================================
   24. RANKING
========================================================= */

function saveScore() {

    const ranking =
        JSON.parse(
            localStorage.getItem(
                "kDramaRanking"
            ) || "[]"
        );


    ranking.push({

        name: "Player",

        score: score,

        mode: currentMode,

        date:
            new Date()
                .toLocaleDateString("vi-VN")

    });


    ranking.sort(
        (a, b) =>
            b.score - a.score
    );


    const top10 =
        ranking.slice(0, 10);


    localStorage.setItem(
        "kDramaRanking",
        JSON.stringify(top10)
    );
}


/* =========================================================
   25. RENDER RANKING
========================================================= */

function renderRanking() {

    const ranking =
        JSON.parse(
            localStorage.getItem(
                "kDramaRanking"
            ) || "[]"
        );


    const list =
        document.getElementById(
            "ranking-list"
        );


    if (ranking.length === 0) {

        list.innerHTML = `

            <div class="ranking-row">

                <span>—</span>

                <span>
                    Chưa có thành tích nào.
                </span>

                <span class="rank-score">
                    0
                </span>

            </div>

        `;

        return;
    }


    list.innerHTML =
        ranking.map(
            (item, index) => `

            <div class="ranking-row">

                <span class="rank-number">
                    ${index + 1}
                </span>

                <span>
                    ${item.name}
                </span>

                <span class="rank-score">
                    ${item.score}
                </span>

            </div>

        `
        ).join("");
}


/* =========================================================
   26. INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showPage("home");

    }
);