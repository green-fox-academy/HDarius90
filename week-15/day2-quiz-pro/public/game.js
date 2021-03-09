const backendUrl = "http://localhost:3000";

const searchEndpoint = backendUrl + "/api/game";
const startBtn = document.getElementById('start');


startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const body = document.querySelector('.container');
    startBtn.classList.add('d-none');
    body.classList.remove('d-none');
    const ScoreTable = document.getElementById('h1');
    let score = document.getElementById('score');
    let counter = 0;
    score.textContent = counter;
    ScoreTable.appendChild(score)
    render()

    function render() {

        fetch(searchEndpoint)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()

                } else {
                    throw new Error(response.statusText);
                }
            })
            .then((data) => {

                const mainContent = document.querySelector('.main-content');
                const randomQ = document.createElement('h3');
                randomQ.textContent = data.question;
                mainContent.appendChild(randomQ);

                const answers = data.answers;

                answers.forEach((a) => {

                    const btn = document.createElement('button');
                    btn.textContent = a.answer;
                    btn.classList.add('answer-btn')
                    btn.setAttribute('is_correct', a.is_correct);
                    mainContent.appendChild(btn);


                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const trueBtn = document.querySelector('[is_correct = true]');


                        if (a.is_correct === true) {
                            btn.style.backgroundColor = "#4dff4d";
                            counter = counter + 1;
                            score.textContent = counter;

                        } else if (a.is_correct === false) {
                            btn.style.backgroundColor = "#ff3300";

                            trueBtn.style.backgroundColor = "#4dff4d";

                        }

                        setTimeout(() => {
                            mainContent.innerHTML = '';
                            render();
                        }, 2000);

                    })

                })

            })
    }
})