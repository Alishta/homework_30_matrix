let n = 0;
let sum = 0;

while (isNaN(n) || n < 1) {
    n = +prompt("Введіть довжину масива:");
}

let num = 0;
while (isNaN(num) || num < 1) {
    num = +prompt('Вкажіть кутовий елемент квадрата верх праворуч:');
}

//Функція для створення матриці
function createMatrix(numb1, numb2) {
    let arr = [];

    for (let i = 0; i < numb1; i++) {
        arr[i] = [];
        for (let j = 0; j < numb1; j++) {
            arr[i][j] = i === 0 && j === numb1 - 1 ? numb2 : Math.round(Math.random() * 9);
        }
    }
    return arr;
}

//Створюємо функцію, що рахує суму основної діагоналі
function sumMainDiagonal(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return {sum, matrix};
}

//Знаходимо елементи для виводу тексту і матриці
let output = document.getElementById('output');
let container = document.getElementById('container');
let arr = createMatrix(n, num);

//Виводимо матрицю і результати
document.getElementById('mainDiagonal').addEventListener('click', function() {
    let result = sumMainDiagonal(arr);

    output.innerHTML = 'Сума головної діагоналі: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;
            //Виділяємо червоним діагональ
            if (rowIndex === cellIndex) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

//Створюємо функцію, що рахує суму побічної діагоналі
function sumSideDiagonal(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][matrix.length - 1 - i];
    }
    return {sum, matrix};
}

//Виводимо матрицю і результати
document.getElementById('sideDiagonal').addEventListener('click', function() {
    let result = sumSideDiagonal(arr);

    output.innerHTML = 'Сума побічної діагоналі: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;
    
            if (rowIndex + cellIndex === arr.length -1) {
                cellElement.classList.add('red-cell');
            }
    
            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці без головної діагоналі зверху зправа
function sumWithoutMainDiagonalTopRight(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (!(i === j || j < i)) {
                sum += matrix[i][j];
            }
        }
    }
    return { sum, matrix };
}

document.getElementById('withoutMainDiagonalTopRight').addEventListener('click', function () {
    let result = sumWithoutMainDiagonalTopRight(arr);

    output.innerHTML = 'Сума половини матриці без головної діагоналі зверху зправа: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (!(rowIndex === cellIndex || cellIndex < rowIndex)) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці з головною діагоналлю зверху зправа
function sumWithMainDiagonalTopRight(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j >= i) {
                sum +=matrix[i][j];
            }
        }
    }
    return {sum, matrix};
}

document.getElementById('withMainDiagonalTopRight').addEventListener('click', function() {
    let result = sumWithMainDiagonalTopRight(arr);

    output.innerHTML = 'Сума половини матриці з головною діагоналлю зверху зправа: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (cellIndex >= rowIndex) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці без головної діагоналі знизу зліва

function sumWithoutMainDiagonalBottomLeft(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (!(i === j || j > i)) {
                sum += matrix[i][j];
            }
        }
    }
    return {sum, matrix};
}

document.getElementById('withoutMainDiagonalBottomLeft').addEventListener('click', function() {
    let result = sumWithoutMainDiagonalBottomLeft(arr);

    output.innerHTML = 'Сума половини матриці без головної діагоналі знизу зліва: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (!(rowIndex === cellIndex || cellIndex > rowIndex)) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці з головною діагоналлю знизу зліва
function sumWithMainDiagonalBottomLeft(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j <= i) {
                sum += matrix[i][j];
            }
        }
    }
    return {sum, matrix};
}

document.getElementById('withMainDiagonalBottomLeft').addEventListener('click', function() {
    let result = sumWithMainDiagonalBottomLeft(arr);

    output.innerHTML = 'Сума половини матриці з головною діагоналлю знизу зліва: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (cellIndex <= rowIndex) {
                cellElement.classList.add('red-cell');
            }
            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці без побічної діагоналі зверху зліва
function sumWithoutSideDiagonalTopLeft(matrix) {
    sum = 0;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix.length; j++) {
            if (i + j < matrix.length - 1) {
                sum = sum + matrix[i][j];
            }
        }
    }
    return {sum, matrix};
}
document.getElementById('withoutSideDiagonalTopLeft').addEventListener('click', function() {
    let result = sumWithoutSideDiagonalTopLeft(arr);

    output.innerHTML = 'Сума половини матриці без побічної діагоналі зверху зліва: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (cellIndex < n - rowIndex - 1) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці з побічною діагоналюю зверху зліва
function sumWithSideDiagonalTopLeft(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if ((i + j) < matrix.length) {
                sum +=matrix[i][j];
            }
        }
    }
    return {sum, matrix};
}

document.getElementById('withSideDiagonalTopLeft').addEventListener('click', function() {
    let result = sumWithSideDiagonalTopLeft(arr);

    output.innerHTML = 'Сума половини матриці з побічною діагоналлю зверху зліва: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if ((rowIndex + cellIndex) < arr.length) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума половини матриці без побічної діагоналі внизу зправа
function sumWithoutSideDiagonalBottomRight(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if ((i + j) > matrix.length -1) {
                sum += matrix[i][j];
            }
        }
    }
    return {sum, matrix};
}

document.getElementById('withoutSideDiagonalBottomRight').addEventListener('click', function() {
    let result = sumWithoutSideDiagonalBottomRight(arr);

    output.innerHTML = 'Сума половини матриці без побічної діагоналі внизу зправа: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if ((rowIndex + cellIndex) >= arr.length) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сума строки с
let c = +prompt('Введіть номер рядка С (від 0 до ' + (n - 1) + '):');
while (isNaN(c) || c < 0 || c >= n) {
    c = +prompt('Введено некоректний номер рядка. Будь ласка, введіть коректне значення.');
}

function sumRowC(matrix) {
    sum = 0; 
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[c][i];
    }
    return {sum, matrix};
}

document.getElementById('rowC').addEventListener('click', function() {
    let result = sumRowC(arr);

    output.innerHTML = 'Сума рядка С: ' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) =>{
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (rowIndex === c) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});

// Сумма стовпця k
let k = +prompt('Введіть номер стовпця k (від 0 до ' + (n - 1) + '):');
while (isNaN(k) || k < 0 || k >= n) {
    k = +prompt('Введено некоректний номер рядка. Будь ласка, введіть коректне значення.');
}

function sumColumnK(matrix, k) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum +=matrix[i][k];
    }
    return {sum, matrix};
}

document.getElementById('columnK').addEventListener('click', function() {
    let result = sumColumnK(arr, k);

    output.innerHTML = 'Сума стовпця K :' + result.sum;
    container.innerHTML = '';

    result.matrix.forEach((row, rowIndex) => {
        let rowElement = document.createElement('div');
        rowElement.className = 'row';

        row.forEach((cell, cellIndex) => {
            let cellElement = document.createElement('span');
            cellElement.textContent = cell;

            if (cellIndex === k) {
                cellElement.classList.add('red-cell');
            }

            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
});