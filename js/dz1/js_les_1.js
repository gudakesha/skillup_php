var textInput=document.querySelector('#textInput');
var butomOutputText=document.querySelector('#textOutput');


butomOutputText.onclick = function (e) {
e.preventDefault();
    alert('Hello!');
}
textInput.oninput = function() {
    console.log(textInput.value);
};