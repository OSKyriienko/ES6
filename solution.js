'use strict';
// Ця змінна `a` має бути доступною поза межами блоку.
var a = 5;

// Ця змінна `b` не повинна бути перепризначена.
const b = process.argv[2];

if (a === 5) {
    // Ця змінна `c` повинна бути доступною лише у цьому блоці.
    let c = 4;
    console.log(c);  // 4

    // Ця змінна `b` має бути доступною лише у цьому блоці, і вона не повинна бути перепризначена.
    const b = 8;
    console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
    // Спроба змінити значення `c`
    c = 1000;
} catch (e) {
    // але має відбутися помилка `c is not defined`.
    console.log(e);
}