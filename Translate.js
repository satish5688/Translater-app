var btntranslate=document.querySelector("#btn_translate");
var textinput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/sindarin.json"




function getTranslationURl(serverURL) {
    return serverURL +"?"+"text=" + textinput.value;
}


function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong ,with server")
}

function clickEventHandler(){
    fetch(getTranslationURl(serverURL))
        .then(response => response.json())
        .then(json=>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText
        })

    .catch(errorHandler)   
};

    

btntranslate.addEventListener("click", clickEventHandler)