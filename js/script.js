var lista = document.getElementById('numbList');
var fizz = 'Fizz!';
var buzz = "Buzz";

for (var number = 0; number<100; number++){
    if (number%3 == 0 && number%5==0){
        lista.innerHTML += '<li>'+fizz+buzz+'</li>';
    } else if (number%3 == 0){
        lista.innerHTML += '<li>'+buzz+'</li>';
    } else if (number%5 == 0){
        lista.innerHTML += '<li>'+fizz+'</li>';
    } else {
        lista.innerHTML += '<li>' + number + '</li>';
    }
}