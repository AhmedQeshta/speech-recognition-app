const texts = document.querySelector('.texts');
const inputSearch = document.querySelector('#inputSearch');
const formSearch = document.querySelector('#formSearch');
// 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p);

    inputSearch.value = text;

    if (e.results[0].isFinal) {
        if (text.includes('hello') || text.includes('hi')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        if (text.includes('what is your name') || text.includes("what's your name") || text.includes('your name') || text.includes('name')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'my name is Ahmed Qeshta';
            texts.appendChild(p);
        }
        if (text.includes('how old are you') || text.includes("what's your age") || text.includes('your age') || text.includes('age')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = "I'm 22 years old";
            texts.appendChild(p);
        }
        // how are you
        if (text.includes('how are you') || text.includes("how're you")) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = "I'm fine";
            texts.appendChild(p);
        }

        if (text.includes('open Facebook account')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'is opening now';
            texts.appendChild(p);
            window.open('https://www.facebook.com/A7medQeshta/')
        }

        p = document.createElement('p');
    }

})

recognition.addEventListener('end', () => {
    // formSearch.submit();
    recognition.start();
})
recognition.start();
