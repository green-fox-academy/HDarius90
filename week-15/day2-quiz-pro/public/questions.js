const backendUrl = "http://localhost:3000";

const searchEndpointAdd = backendUrl + "/api/questions";

const searchEndpointDelete = backendUrl + "/api/questions";


const editBtn = document.getElementById('edit-button');
const Qdiv = document.getElementById('questions');


editBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(searchEndpointDelete)
        .then((response) => {
            if (response.status === 200) {
                return response.json()

            } else {
                throw new Error(response.statusText);
            }
        })
        .then((data) => {
            const result = data;
            const questions = [];
            result.forEach((q) => {
                const question = document.createElement('p');
                const deleteBtn = document.createElement('button');
                const hr = document.createElement('hr');
                deleteBtn.classList.add('delete-button')
                deleteBtn.textContent = 'törlés';
                question.textContent = q.question;
                question.appendChild(deleteBtn);
                question.appendChild(hr);

                questions.push(question);
                Qdiv.appendChild(question);
            })


            for (let i = 0; i < result.length; i++) {
                questions[i].id = result[i].id;
            }

            //------    EGY KÉRDÉS TÖRLÉSE ID ALAPJÁN + OLDAL ÚJRATÖLTÉS  -----\\

            const questionElement = document.querySelectorAll('p');

            questionElement.forEach((e) => {
                e.firstElementChild.addEventListener('click', (e) => {

                    const idTodelete = e.target.parentElement.id;

                    fetch(searchEndpointDelete + '/' + idTodelete, {
                            method: 'DELETE'
                        })
                        .then(location.reload());

                })

            })

        }).catch(err => {
            console.log(err.message)
        })

})

//---------ÚJ KÉRDÉS HOZZÁADÁSA---------\\

const form = document.getElementById('add');

form.onsubmit = function(event) {
    event.preventDefault();
    let question = document.getElementById('question').value;

    let answer1 = document.getElementById('answer1');
    answer1.setAttribute('is_correct', false);
    answer1.textContent = answer1.value;

    let answer2 = document.getElementById('answer2');
    answer2.setAttribute('is_correct', false);
    answer2.textContent = answer2.value;

    let answer3 = document.getElementById('answer3');
    answer3.setAttribute('is_correct', false);
    answer3.textContent = answer3.value;

    let answer4 = document.getElementById('answer4');
    answer4.setAttribute('is_correct', false);
    answer4.textContent = answer4.value;



    const chekedAnswer = document.querySelector('[name=true-or-false]:checked');
    chekedAnswer.setAttribute('is_correct', true);
    const checkedAnswerID = 'answer' + chekedAnswer.value;
    const checkedAnswerValue = document.getElementById(checkedAnswerID);

    checkedAnswerValue.setAttribute('is_correct', true)


    let result = {
        "question": `${question}`,
        "answers": [{
                "answer": `${answer1.value}`,
                "is_correct": `${answer1.getAttribute('is_correct')}` == 'true'
            },
            {
                "answer": `${answer2.value}`,
                "is_correct": `${answer2.getAttribute('is_correct')}` == 'true'
            },
            {
                "answer": `${answer3.value}`,
                "is_correct": `${answer3.getAttribute('is_correct')}` == 'true'
            },
            {
                "answer": `${answer4.value}`,
                "is_correct": `${answer4.getAttribute('is_correct')}` == 'true'
            }
        ]
    }

    fetch(searchEndpointAdd, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error))
    setTimeout(() => {
        form.reset();
    }, 1000);
};