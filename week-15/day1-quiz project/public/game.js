const firebaseConfig = {
    apiKey: "AIzaSyCi1pou4gHGfWauc805awZZJz___uQHr2Y",
    authDomain: "quiz-a86fe.firebaseapp.com",
    projectId: "quiz-a86fe",
    storageBucket: "quiz-a86fe.appspot.com",
    messagingSenderId: "670005691063",
    appId: "1:670005691063:web:c18a733eb77a420cdb8332",
    measurementId: "G-2VHCZQXFE3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


db.collection('questions')
    .onSnapshot(processData);

function processData(data) {
    const body = document.querySelector('.container');
    const groupOfQues = [];

    data.forEach((doc) => {

        const questions = doc.data();

        groupOfQues.push(questions);


    });

    let random = groupOfQues[Math.floor(Math.random() * groupOfQues.length)];
    console.log(random)

    const mainContent = document.querySelector('.main-content');
    const randomQ = document.createElement('h3');
    randomQ.textContent = random.question;
    mainContent.appendChild(randomQ);

    const answers = random.answers;

    answers.forEach((a) => {
        const btn = document.createElement('button');
        btn.textContent = a.answer;
        btn.classList.add('answer-btn')
        btn.setAttribute('set_attribute', a.is_correct);
        mainContent.appendChild(btn);

        let correctAnswer = getTrue(answers);
        console.log(correctAnswer)

        function getTrue(arr) {
            let result;
            for (let i = 0; i < arr.length; i++) {
                let attribute = btn.getAttribute('set_attribute');
                if (attribute == 'true') {
                    result = arr[i];
                }
            }
            return result;
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();


            let attribute = btn.getAttribute('set_attribute');

            if (attribute == 'true') {

                btn.style.backgroundColor = "#4dff4d";
            } else if (attribute == 'false') {
                btn.style.backgroundColor = "#ff3300";
                console.log(correctAnswer)
                    //correctAnswer.style.backgroundColor = "#4dff4d";

            }
        })
    })
}

const start = document.getElementById('start');

function startTheGame() {

    start.classList.add('d-none');
    const body = document.querySelector('.container');
    body.classList.remove('d-none')
}


function startTheGame() {

    start.classList.add('d-none');
    const body = document.querySelector('.container');
    body.classList.remove('d-none')
}