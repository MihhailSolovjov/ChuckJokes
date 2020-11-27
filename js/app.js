const button = document.querySelector('.get-jokes');

button.addEventListener('click', (event) =>{
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);
    const url = 'http://api.icndb.com/jokes/random/';
    let output = '';

    fetch(`${url}${number}`)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        let output = ''
        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
        });

        document.querySelector('.jokes').innerHTML = output;

    })
    .catch(error =>{
        console.log(error);
    })

    event.preventDefault();
});