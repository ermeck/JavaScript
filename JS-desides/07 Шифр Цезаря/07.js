// Шифр Цезаря

// Шифруем
document.getElementById('in').oninput = function () {
    const offset = 3;
    let help = document.getElementById('help');
    let str = this.value;
    let out = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}

document.getElementById('out2').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code - offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out3cd').innerHTML = out;
}