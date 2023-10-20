document.getElementById('post').addEventListener('click', async function() {
    const inputValue = document.getElementById('textinput').value;
    // console.log('Input Value: ', inputValue);

    let object = {
        tweet : inputValue
    }

    const response = await fetch("http://localhost:3500/post", {
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(object),

       
    })
    let data = await response.json();

    console.log(data);
  });