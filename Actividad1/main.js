

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