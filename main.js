var qwerty = '-=qwertyuiop[]asdfghjkl;\'zxcvbnm,./_+QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?',
    colemak= '-=qwfpgjluy;[]arstdhneio\'zxcvbkm,./_+QWFPGJLUY:{}ARSTDHNEIO"ZXCVBKM<>?',
    dvorak = '[]\',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz{}"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ';

var from = qwerty, to = qwerty;
const layouts = [qwerty, colemak, dvorak];


function convert() {
    let text = document.getElementById("input-field").value;
    let converted = '';
    for (var i = 0; i < text.length; i++) {
      converted += to.charAt(from.indexOf(text.charAt(i))) || text.charAt(i);
    }

    document.getElementById("output-field").innerHTML = converted;
}

function changeFromTo() {
    from = layouts[document.getElementById("selectFrom").selectedIndex];
    to = layouts[document.getElementById("selectTo").selectedIndex];
    convert();
}

