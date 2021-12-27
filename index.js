const FirstContainer = document.getElementById('FirstContainer');
const SecondContainer = document.getElementById('SecondContainer');
const PlusResultContainer = document.getElementById('PlusResultContainer');
const GreaterResultContainer = document.getElementById('GreaterResultContainer');
const GreaterResultContainer2 = document.getElementById('GreaterResultContainer2');
const DivisibleResultContainer = document.getElementById('DivisibleResultContainer');
const DivisibleContainer = document.getElementById('DivisibleContainer');
const CountAContainer = document.getElementById('CountAContainer');
const VowelsContainer = document.getElementById('VowelsContainer');
const DivisorsContainer = document.getElementById('DivisorsContainer');
const DriverContainer = document.getElementById('DriverContainer');
const ExamResultContainer = document.getElementById('ExamResultContainer');

// let Name = prompt('¿Cual es su nombre?');
FirstContainer.innerHTML = `<h1 class="display-1">Hello World</h1> <br> <p class="lead">La suma de 3 + 5 es = ${3+5}</p>`;
SecondContainer.innerHTML = `<p class="lead">Hola ${Name}</p>`;

function plus() {
    let number1 = parseInt(document.getElementById('InputNum1').value);
    let number2 = parseInt(document.getElementById('InputNum2').value);
    let plusResult = (number1+number2);
    PlusResultContainer.innerHTML = `<p class="lead">El resultado es: ${plusResult}</p>`;
};

function greater() {
    let number3 = parseInt(document.getElementById('InputNum3').value);
    let number4 = parseInt(document.getElementById('InputNum4').value);
    let greaterResult=(number3>number4)
    if (greaterResult==false) {
        GreaterResultContainer.innerHTML = `<p class="lead">El resultado es: ${number4}</p>`;}   
    if (greaterResult==true) {
        GreaterResultContainer.innerHTML = `<p class="lead">El resultado es: ${number3}</p>`;}
};

function greater2() {
    let number5 = parseInt(document.getElementById('InputNum5').value);
    let number6 = parseInt(document.getElementById('InputNum6').value);
    let number7 = parseInt(document.getElementById('InputNum7').value);
    let GreaterResult2 = Math.max(number5, number6, number7);
    GreaterResultContainer2.innerHTML = `<p class="lead">El resultado es: ${GreaterResult2}</p>`;
};

function divisibleByTwo() {
    let number8 = parseInt(document.getElementById('InputNum8').value);
    if (number8%2==0) {
        DivisibleResultContainer.innerHTML = `<p class="lead">Es divisible por 2</p>`;
    }
    else {
        DivisibleResultContainer.innerHTML = `<p class="lead">No es divisible por 2</p>`;
    }
};

function countA() {
    let textA = document.getElementById('TextA').value;
    let countA = [];

    for(let i = 0; i < textA.length; i++) {
	if (textA[i].toLowerCase() === "a") countA.push(i);}

    CountAContainer.innerHTML = `<p class="lead">Se contaron ${countA.length} letras A</p>`
};

function countVowel() {
    let textVowels = document.getElementById('TextVowels').value;
    let result = textVowels.match(/[aeiou]/gi).length;
    let countA = [];
    let countE = [];
    let countI = [];
    let countO = [];
    let countU = [];

    for(let i = 0; i < textVowels.length; i++) {
        if (textVowels[i].toLowerCase() === "a") countA.push(i);
        if (textVowels[i].toLowerCase() === "e") countE.push(i);
        if (textVowels[i].toLowerCase() === "i") countI.push(i);
        if (textVowels[i].toLowerCase() === "o") countO.push(i);
        if (textVowels[i].toLowerCase() === "u") countU.push(i);
    }
    VowelsContainer.innerHTML = `<p class="lead">Hay ${result} vocales, de las cuales:</p><br><p class="lead">${countA.length} son A, ${countE.length} son E, ${countI.length} son I, ${countO.length} son O y ${countU.length} son U.</p>`
};

function divisible() {
    let number9 = parseInt(document.getElementById('InputNum9').value);
    if (number9%2==0) {
        DivisibleContainer.innerHTML = `<p class="lead">Sí, es divisible por 2</p>`;
    }
    if (number9%3==0) {
        DivisibleContainer.innerHTML = `<p class="lead">Sí, es divisible por 3</p>`;
    }
    if (number9%5==0) {
        DivisibleContainer.innerHTML = `<p class="lead">Sí, es divisible por 5</p>`;
    }
    if (number9%7==0) {
        DivisibleContainer.innerHTML = `<p class="lead">Sí, es divisible por 7</p>`;
    }
};

function divisors(){
    let n = parseInt(document.getElementById('InputNum10').value);
    let numDivisors = 1;
    let factor = 2;
    while (factor * factor <= n) {
        if (n % factor === 0) {
            let exponent = 0;
            do {
                n /= factor;
                exponent++;
            } 
            while (n % factor === 0)
            numDivisors *= exponent + 1;
        }
        factor = factor == 2 ? 3 : factor + 2
    }
    if (n > 1) {
        numDivisors *= 2;
    }
    DivisorsContainer.innerHTML = `<p class="lead">Sus divisores son: ${numDivisors}</p>`;
};

function driverAge() {
    let number11 = parseInt(document.getElementById('InputNum11').value);
    if (number11 >= 18) {
        DriverContainer.innerHTML = `<p class="lead">Puede conducir.</p>`;
    }
    if (number11 < 18) {
        DriverContainer.innerHTML = `<p class="lead">No puede conducir, es menor.</p>`;
    }
};

function examResult() {
    let number12 = parseInt(document.getElementById('InputNum12').value);

    if (number12>=0 && number12<=3) {
        var result = "muy deficiente"
    };
    if (number12>3 && number12<=5) {
        var result = "insuficiente"
    };
    if (number12>5 && number12<=6) {
        var result = "suficiente"
    };
    if (number12>6 && number12<=7) {
        var result = "bien"
    };
    if (number12>7 && number12<=9) {
        var result = "notable"
    };
    if (number12> 9 && number12<=10) {
        var result = "sobresaliente"
    };
    ExamResultContainer.innerHTML = `<p class="lead">Su calificación es ${result}.</p>`;
};

