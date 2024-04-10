const texts = document.querySelector('.container .texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {

    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('').toLowerCase(); // Convert to lowercase

    console.log('Recognized text:', text); // Log recognized text for debugging

    p.innerText = text;
    texts.appendChild(p);

    if (e.results[0].isFinal) {
        if (text.includes('hello')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        p = document.createElement('p');

        if (text.includes('what is your name') || text.includes("what's your name")) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'My name is Daniel, yours?';
            texts.appendChild(p);
        }
        p = document.createElement('p');
    }

    console.log(e);
});

recognition.addEventListener('end', () => {
    recognition.start();
});

recognition.start();
