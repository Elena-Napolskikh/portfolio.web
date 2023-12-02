document.getElementById("year").innerHTML = new Date().getFullYear()
// The current year as part of the displayed text in footer

document.getElementById("btn-alert").addEventListener("click", function() {
    alert("Hello world!");
});
// Alert Button

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Click me';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Hello world!';
};
// Hover Button

let count = 1;
document.getElementById('txt-counter').innerHTML = count;
document.getElementById('btn-counter').onclick = () => {
     
    count = count + 1;
    document.getElementById('txt-counter').innerHTML = count;
    
    if (count % 2 == 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
}
// Incrementing Button + If-Else

window.onload = function(){
    for(var i = 1; i < 100; i++){
        var num  = document.getElementById('numbers');
        var order = document.createElement('li');
        if (i % 2 == 0){
            var evenodd = document.createTextNode('Even');
        }
        else if (i % 2 == 1){
            var evenodd = document.createTextNode('Odd');
        }
        order.appendChild(evenodd);
        num.appendChild(order);
    }
}
