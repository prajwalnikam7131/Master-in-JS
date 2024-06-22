/*
    # What is an API ?
        -> Application Programming Interface that is a set of protocols that enables different software componants to communicates and transfer data.
*/

// accessing some api :

async function getFact() {

    let response = await fetch("https://catfact.ninja/fact");
    // console.log(response);

    let data = await response.json();
    // console.log(data);

    console.log(data.fact);
    console.log(data.length);
}

// getFact();


/*
    # What is an Axios ?
        -> Axios is a popular JavaScript library used for making HTTP requests from browsers or Node.js. It provides a simple and elegant API to interact with XMLHttpRequests or the HTTP client interface in Node.js.
*/
let url = "https://catfact.ninja/fact";

async function getFact() {

    let response = await axios(url);
    console.log(response.data.fact);
}

getFact();