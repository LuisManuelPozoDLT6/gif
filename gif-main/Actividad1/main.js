

const getGif = async  () => {
    let api_key = document.getElementById("apikey").value;
    let tag = document.getElementById("tag").value;
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response);
    console.log(data.data);
    document.getElementById("gif").innerHTML = 
    "<img src='"+data.data.images.original.url+"'>";
}

const searchGift = async  () => {
    let api_key = document.getElementById("apikey2").value;
    let q = document.getElementById("q").value;
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=2`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response);
    console.log(data.data);
    document.getElementById("gifSearch").innerHTML = 
    "<img src='"+data.data[0].images.original.url+"'>";
    document.getElementById("gifSearch2").innerHTML = 
    "<img src='"+data.data[1].images.original.url+"'>";
}