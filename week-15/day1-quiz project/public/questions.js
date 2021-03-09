/*
form.addEventListener('submit', async(e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(data => {
            const name = nameField.value;
            const address = addressField.value;
            const base = baseField.value;
            const topping = toppingField.value;
            const datas = { name, address, base, topping };
            nameField.addEventListener('invalid', checkNameValidity);
            addressField.addEventListener('invalid', checkAddressValidity);
            if (data.status === 'ordered') {
                let alert = document.getElementById('alert');
                let span = document.createElement('span')
                span.textContent = `Sikeres megrendelés. A rendelés azonosítója ${data.id}`;
                alert.appendChild(span);
            }

            form.reset();
        })
        .catch(error => {
            console.error(error);
        })
});

*/