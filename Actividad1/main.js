

const getGif = async  () => {
    let api_key = document.getElementById("apikey").value;
    let tag = document.getElementById("tag").value;
    const URL = "https://api.giphy.com/v1/gifs/random?tag=" + tag +"&api_key="+ api_key;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response);
    console.log(data.data);
}