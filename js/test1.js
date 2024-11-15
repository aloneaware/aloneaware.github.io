const questions = [
    { question: "Seberapa sering kamu merasa cocok dengan orang-orang disekitar anda?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa kekurangan teman?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa tidak ada seorang pun yang dapat kamu andalkan?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa sendirian?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa menjadi bagian dari sekelompok teman?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa memiliki banyak kesamaan dengan orang-orang disekitar kamu?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa tidak lagi dekat dengan siapapun?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa minat dan ide kamu tidak disetujui oleh orang-orang disekitar kamu?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa ramah dan pandai bergaul?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa dekat dengan orang lain?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa ditinggalkan?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu bahwa hubungan kamu dengan orang lain tidak bermakna?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa tidak ada seorangpun yang bener-bener mengenal kamu dengan baik?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa terisolasi dari orang lain?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu dapat menemukan persahabatan saat kamu menginginkannya?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa bahwa ada orang-orang yang bener-bener memahami kamu?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa malu?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa orang-orang yang ada disekitar kamu tetapi tidak 'Bersama' kamu?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa ada orang yang dapat kamu ajak bicara?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },
    { question: "Seberapa sering kamu merasa ada orang yang dapat kamu minta bantuan?", options: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"], scores: [1, 2, 3, 4] },

];

let currentQuestionIndex = 0;
let totalScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    document.getElementById("result").innerText = '';
    document.getElementById("next-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = ["low", "medium-low", "medium-high", "high"][index];
        button.onclick = () => selectOption(currentQuestion.scores[index]);
        optionsElement.appendChild(button);
    });
}

function selectOption(score) {
    totalScore += score;
    document.getElementById("next-button").style.display = "block"; // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
    document.getElementById("next-button").style.display = "none";
}

function showResult() {
    const resultElement = document.getElementById("result");
    document.getElementById("question-container").style.display = 'none';

    let resultText;
    if (totalScore <= 35) {
        resultText = `Skor: ${totalScore}. wah.. sepertinya hari-harimu penuh dengan kebahagian yaa...Kamu telah menunjukkan bahwa kehadiran sosial yang kuat bisa membawa kebahagiaan. Teruslah terhubung dan berbagi momen indah! rangkul lah  orang disekitarmu dengan kebahagian yang kamu miliki.`;
    } else if (totalScore <= 50) {
        resultText = `Skor: ${totalScore}. hhmm seperti nya kamu sedang di fase kesepian yaaa …
Ini adalah perasaan yang wajar ko dan penting untuk diakui. Terkadang merasa sendirian adalah bagian dari perjalanan hidup, tapi itu bukan berarti kamu harus melaluinya sendiri. Setiap hari adalah kesempatan baru untuk terhubung. Cobalah membuka diri dan menjalin hubungan dengan orang-orang di sekitarmu. Kamu berharga, bahkan di saat kamu merasa sebaliknya. Pertimbangkan untuk berbagi perasaan kamu dengan seseorang yang kamu percayai, sepeerti keluarga, teman atau orang di sekitarmu, jika kamu belum juga menemukan solusi dari rasa kesepian yang sedang kamu alami, kamu bisa berkonsultasi kepada orang yang professional dibidangnya seperti psikolog atau psikiater. semangat ya! jangan biarkan kesepian mendefinisikan siapa diri mu..`;
    } else if (totalScore <= 65) {
        resultText = `Skor: ${totalScore}. hhmm seperti nya kamu sedang di fase kesepian yaaa …
Ini adalah perasaan yang wajar ko dan penting untuk diakui. Terkadang merasa sendirian adalah bagian dari perjalanan hidup, tapi itu bukan berarti kamu harus melaluinya sendiri. Setiap hari adalah kesempatan baru untuk terhubung. Cobalah membuka diri dan menjalin hubungan dengan orang-orang di sekitarmu. Kamu berharga, bahkan di saat kamu merasa sebaliknya. Pertimbangkan untuk berbagi perasaan kamu dengan seseorang yang kamu percayai, sepeerti keluarga, teman atau orang di sekitarmu, jika kamu belum juga menemukan solusi dari rasa kesepian yang sedang kamu alami, kamu bisa berkonsultasi kepada orang yang professional dibidangnya seperti psikolog atau psikiater. semangat ya! jangan biarkan kesepian mendefinisikan siapa diri mu..`;
    } else {
        resultText = `Skor: ${totalScore}. hhmm seperti nya kamu sedang di fase kesepian yaaa …
Ini adalah perasaan yang wajar ko dan penting untuk diakui. Terkadang merasa sendirian adalah bagian dari perjalanan hidup, tapi itu bukan berarti kamu harus melaluinya sendiri. Setiap hari adalah kesempatan baru untuk terhubung. Cobalah membuka diri dan menjalin hubungan dengan orang-orang di sekitarmu. Kamu berharga, bahkan di saat kamu merasa sebaliknya. Pertimbangkan untuk berbagi perasaan kamu dengan seseorang yang kamu percayai, sepeerti keluarga, teman atau orang di sekitarmu, jika kamu belum juga menemukan solusi dari rasa kesepian yang sedang kamu alami, kamu bisa berkonsultasi kepada orang yang professional dibidangnya seperti psikolog atau psikiater. semangat ya! jangan biarkan kesepian mendefinisikan siapa diri mu..`;
    }

    resultElement.innerText = resultText;
}

// Start the quiz when the page loads
startQuiz();