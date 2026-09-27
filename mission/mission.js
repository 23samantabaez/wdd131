
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.style.backgroundColor = '#222222';
        document.querySelector('.card').style.backgroundColor = '#333333';
        document.querySelector('.statement-header h1').style.color = '#ffffff';
        document.querySelector('.content').style.color = '#ffffff';
        document.querySelector('.statement-header h2').style.color = '#8cc8ff';
        logo.src = 'images/darkBYUI-logo.png';

    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.querySelector('.card').style.backgroundColor = '#ffffff';
        document.querySelector('.statement-header h1').style.color = '#111111';
        document.querySelector('.content').style.color = '#222222';
        document.querySelector('.statement-header h2').style.color = '#0066b2';
    }
}         
                    