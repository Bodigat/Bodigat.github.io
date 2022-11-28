let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {

};
let ran_key;

function addExercise() {
    dictionary[Frage.value] = input2.value;

    Frage.value = "";
    input2.value = "";

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    Übungsliste.innerHTML = '';
    for (let key in dictionary) {
        Übungsliste.innerHTML += `<li> <b id="Abtrennung">F r a g e :</b> &nbsp ${dictionary[key]} &nbsp <b id="Abtrennung">L ö s u n g 💡:</b> &nbsp ${key}</li>`;
    }
}

function remove() {
    localStorage.clear();
}

function nextExercise() {
    let obj_keys = Object.keys(dictionary);
    ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    diefrage.innerHTML = `${dictionary[ran_key]}?`;

    Antwort.value = "";
}

function checkAnswer() {
    if (Antwort.value === ran_key) {
        überprüfungstext.innerHTML = `Richtig (;`;
    } else {
        überprüfungstext.innerHTML = `Das ist leider falsch ;(`;
    }
    nächstübung();
}