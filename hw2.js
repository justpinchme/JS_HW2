/* let a = 1;
let b = 2;

while(a < 11) {
    console.log(b ** a)
    a++
} */


/* const checkPow = function (n) {
    let c = 1;
    while(c <= n) {
        console.log(2 ** c)
        c++
    }
}

checkPow(3); */

/* let smile = ':)';
let s1 = 1;
while (s1 < 5) {
    console.log(smile.repeat(s1))
    s1++
}

const printSmile = function (stroka, numberOfRows) {
        let s2 = 1;
        while (s2 <= numberOfRows) {
            console.log(stroka.repeat(s2))
            s2++
        }

}

printSmile('@', 2) */

const getWordStructure = function (word) {
        const glas = 'aeoiuy'.split('')
        const soglas = 'bcdfghjklmnpqrstvwxyz'.split('')
        let glasCount = 0;
        let soglasCount = 0;
        for (simvol of word.toLowerCase()) {
        if (glas.includes(simvol)) {
            glasCount++
        }
        if (soglas.includes(simvol)) {
            soglasCount++
        }
    }
        console.log('Слово ' + word + ' состоит из ' + glasCount + ' гласных и ' + soglasCount + ' согласных букв')

}

getWordStructure('Malysh')


const isPalindrom = function (slovo) {
    if (slovo.toLowerCase() === slovo.toLowerCase().split('').reverse().join('')) {
        console.log(slovo + ' is a palindrom')
    } else {
        console.log(slovo + ' is not a palindrom')
    }
}

isPalindrom('мамам')