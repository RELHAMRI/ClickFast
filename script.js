let count = 0;

document.getElementById('button-clicker')
        .addEventListener('click', () =>{
    count++;
    document.getElementById('counter').innerHTML = count;
    if(count >= 0) {
        document.getElementById('counter').style.backgroundColor = 'olivedrab';
        document.getElementById('counter').style.color = 'white';
    } else {
        document.getElementById('counter').style.backgroundColor = 'red';
        document.getElementById('counter').style.color = 'white';
    }
    
});

document.getElementById('button').addEventListener('click', () => {
    count--;
    document.getElementById('counter').innerHTML = count;
if(count < 0) {
    document.getElementById('counter').style.backgroundColor = 'red';
    document.getElementById('counter').style.color = 'white';
} else {
    document.getElementById('counter').style.backgroundColor = 'olivedrab';
    document.getElementById('counter').style.color = 'white';
}
})
