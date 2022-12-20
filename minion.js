let buttonTranslate = document.querySelector("#btn-translate");

let inputValue = document.querySelector("#text-input");

let outputValue = document.querySelector("#output-area");

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

buttonTranslate.addEventListener("click", eventHandler)

function translationUrl(input) {
    return (serverUrl + "?" + "text=" + input)
}

function errorHandler(error){
    console.log("Error: ", error);
    alert("An error occured. Please try after sometime");
}

function eventHandler() {
    console.log("Clicked");
    console.log(inputValue.value);
    // outputValue.innerHTML = "ASDERDS" + inputValue.value;
    console.log(translationUrl(inputValue.value));

    fetch(translationUrl(inputValue.value))
        .then(response => response.json()
        )
        .then(json => {
            let outputText = json.contents.translated;
            outputValue.innerHTML = outputText;
        }).catch(errorHandler)

}





