function verify() {
    a = parseInt(document.getElementsByTagName("input")[1].value);
    b = parseInt(document.getElementsByTagName("input")[2].value);
    c = parseInt(document.getElementsByTagName("input")[3].value);
    var resultElement = document.getElementById("result");

    if (a < b && b < c) {
        resultElement.textContent = "A < B < C";
    } else if (a > b && b > c) {
        resultElement.textContent = "A > B > C";
    } else {
        resultElement.textContent = "Ни одно из неравенств не выполняется";
    }
}
function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[1].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else { alert("есть недостатки, повторите ввод")}
}

function verify_send(){
    verify();
    send();
}

var messageText = document.getElementById("result").innerText
var result;
var check = true;
const constVerify = document.getElementById("verify");
constVerify.onclick = verify;
const constSend = document.getElementById("send");
constSend.onclick =send;
