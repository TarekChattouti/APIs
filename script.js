var advice_url = 'https://api.adviceslip.com/advice';
var jokes_url = 'http://api.icndb.com/jokes/random';
var daddy_url = 'https://icanhazdadjoke.com/';
var advice_data = '';
var jokes_data = '';
var daddy_data = '';


function advice(){
    fetch(advice_url)
    .then(res => res.json())
    .then(data =>advice_data = data);
    var advice = advice_data.slip.advice;
    document.getElementById('api_1z').value = advice;
}
function joke(){
    fetch(jokes_url)
    .then(res => res.json())
    .then(data =>jokes_data = data);
    var joke = jokes_data.value.joke;
    document.getElementById('api_2z').value = joke;
}
function daddy(){
    fetch(daddy_url, {headers: {'Accept' : 'application/json'}})
    .then(res => res.json())
    .then(data =>daddy_data = data);
    var daddy = daddy_data.joke;
    document.getElementById('api_3z').value = daddy;
}