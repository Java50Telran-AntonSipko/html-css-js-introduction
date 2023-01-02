function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min + 1))

}
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(0, 2));
}
function getRandomMatrix(rows, columns, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max))
        }
    }
    return matrix;
}
const matrix = getRandomMatrix(3, 4, 0, 1);
const ar10 = [1, 2, 3, 4, 5];
const str = ar10.join('_');

function getHtmlUI(array) {
    const HTML = [];
    HTML.push('<ul class="list_class">');
    for (let i = 0; i < array.length; i++) {
        HTML.push('<li class="item_class>');
        let Str = array[i] === 0 ? HTML.push('<div class="white">') : HTML.push('<div class="black">')

    }
    HTML.push('</div></li</ul>')
    let res = HTML.join("")
    return res;
}
const arrr = [1, 0, 1, 0, 1];
getHtmlUI(arrr);
let resTask1 = getHtmlUI(arrr);
console.log(resTask1);

function transpMatrix(matrix) {
    const ar = [];
    let rows = matrix[0].length;
    let colums = matrix.length;
    for (let i = 0; i < rows; i++) {
        ar.push([]);
        for (let j = 0; i < colums; i++) {
            ar[i].push(matrix[j][i]);
        }

    }
    return ar;
}
let resTask2 = transpMatrix(matrix);
console.log(resTask2);
