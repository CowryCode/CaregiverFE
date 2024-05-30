document.getElementById('dementiaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    let jsonString = JSON.stringify(formObject);
    console.log(jsonString);
    alert('Form data prepared as JSON:\n' + jsonString);

    // API post request
    /*
    fetch('https://api.demo.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonString
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
    */
});
