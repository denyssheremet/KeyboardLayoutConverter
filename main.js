const layouts = {
    "qwerty":       '`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?',
    "dvorak":       '`1234567890[]\',.pyfgcrl/\\=aoeuidhtns-;qjkxbmwvz~!@#$%^&*(){}"<>PYFGCRL?+|AOEUIDHTNS_:QJKXBMWVZ',
    "colemak":      '`1234567890-=qwfpgjluy;[]\\arstdhneio\'zxcvbkm,./~!@#$%^&*()_+QWFPGJLUY:{}|ARSTDHNEIO"ZXCVBKM<>?',
    "colemak-dh":   '`1234567890-=qwfpbjluy;[]\\arstgkneio\'xcdvzmh,./~!@#$%^&*()_+QWFPBJLUY:{}|ARSTGKNEIO"XCDVZMH<>?',
    "workman":      '`1234567890-=qdrwbjfup;[]\\ashtgyneoi\'zxmcvkl,./~!@#$%^&*()_+QDRWBJFUP:{}|ASHTGYNEOI"ZXMCVKL<>?',
    "azerty FR":    '²&é"\'(-è_çà)=azertyuiop^$*qsdfghjklmùwxcvbn,;:! 1234567890°+AZERTYUIOP¨£µQSDFGHJKLM%WXCVBN?./§',
    "azerty BEFR":  '²&é"\'(§è!çà)-azertyuiop^$µqsdfghjklmùwxcvbn,;:=³1234567890°_AZERTYUIOP¨*£QSDFGHJKLM%WXCVBN?./+',
    "azerty BEDU":  '²&é"\'(§è!çà)-azertyuiop^$µqsdfghjklmùwxcvbn,;:=³1234567890°_AZERTYUIOP¨*£QSDFGHJKLM%WXCVBN?./+',
}
var from = layouts["qwerty"], to = layouts["qwerty"];

window.addEventListener('load', function() {
    let selectFrom = this.document.getElementById("selectFrom");
    let selectTo   = this.document.getElementById("selectTo");

    for (const [key, value] of Object.entries(layouts)) {
        selectFrom.add(new Option(key, value), undefined);
        selectTo.add(new Option(key, value), undefined);
      }
});

function convert() {
    let text = document.getElementById("input-field").value;
    let converted = '';
    for (var i = 0; i < text.length; i++) {
      converted += to.charAt(from.indexOf(text.charAt(i))) || text.charAt(i);
    }
    document.getElementById("output-field").innerHTML = converted;
}

function changeFromTo() {
    from = document.getElementById("selectFrom").value;
    to   = document.getElementById("selectTo").value;
    convert();
}
