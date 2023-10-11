function verify() {
    const elementA = document.getElementById('a');
    const elementB = document.getElementById('b');
    const elementC = document.getElementById('c');
    const resultElement = document.getElementById("result");

    if ('a' < 'b' && 'b' < 'c') {
        resultElement.textContent = "A < B < C";
    } else if ('a' > 'b' && 'b' > 'c') {
        resultElement.textContent = "A > B > C";
    } else {
        resultElement.textContent = "Ни одно из неравенств не выполняется";
    }
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
