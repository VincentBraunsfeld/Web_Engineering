const speaker_button = document.getElementById("speaker_button");
const speaker_input = document.getElementById("speaker_input");
const speaker_list = document.getElementById("speaker_list");


speaker_button.addEventListener("click", ()=> {
    addRedner(speaker_input.value);
    speaker_input.value = '';
})

function addRedner(speaker_name) {

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    speaker_list.querySelectorAll('li').forEach(li => {
        li.setAttribute('data-running', '0')
        li.querySelectorAll('button').forEach((btn) => btn.innerHTML = 'Start!')
    });

    const listItem = document.createElement('li');
    listItem.setAttribute('data-running', '1');

    const btn = document.createElement('button');
    btn.innerHTML = 'Stop!';

    btn.addEventListener('click', ()=> {
        if (listItem.getAttribute('data-running') == '0') {
            speaker_list.querySelectorAll('li').forEach(li => li.setAttribute('data-running', '0'));
            listItem.setAttribute('data-running', '1');
            speaker_list.querySelectorAll('button').forEach((btn) => btn.innerHTML = 'Start!');
            btn.innerHTML = 'Stop!';
        } else {
            listItem.setAttribute('data-running', '0');
            btn.innerHTML = 'Start!';
        }
    })



    speaker_list.appendChild(listItem);

    let content = speaker_name + " 0" + hours + ":0" + minutes + ":0" + seconds + "  ";

    listItem.innerHTML = content;
    listItem.appendChild(btn);



    const timerInterval = setInterval(()=> {

        if (listItem.getAttribute('data-running') == '1') {

            seconds = parseInt(seconds) + 1;
            minutes = parseInt(minutes);
            hours = parseInt(hours);

            if (seconds == 60) {
                seconds = 0;
                minutes = parseInt(minutes) + 1;
            }

            if (minutes == 60) {
                minutes = 0;
                hours = parseInt(hours) + 1;
            }

            if (seconds < 10 || seconds == 0) {
                seconds = '0' + seconds;
            }

            if (minutes < 10 || minutes == 0) {
                minutes = '0' + minutes;
            }

            if (hours < 10 || hours == 0) {
                hours = '0' + hours;
            }

            content = speaker_name + " " + hours + ":" + minutes + ":" + seconds + "   ";

            listItem.innerHTML = content;
            listItem.appendChild(btn);
        }


    }, 1000)
}