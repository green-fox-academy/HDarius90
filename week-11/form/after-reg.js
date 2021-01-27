const afterRegForm = document.getElementById('after-reg-form');


afterRegForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedPreferredGender = document.querySelector('[name=preferred-gender]:checked');

    console.dir(selectedPreferredGender);
});