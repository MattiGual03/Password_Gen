class RandomPassword{

    constructor(length, includeUpper, includeLower, numbers, symbols){
        this.length = length;
        this.includeUpper = includeUpper;
        this.includeLower = includeLower;
        this.numbers = numbers;
        this.symbols = symbols;
    }

    pwd(){
        const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alpha = "abcdefghijklmnopqrstuvwxyz";
        const num = "123456789";
        const sym = "@#$%&_.£";

        let builder = "";
        let result = []; 
        let requiredTypes = 0; 

        if(this.length < 8 || this.length > 16){
            window.alert("You have to insert a length between 8 and 16");
            document.getElementById('length').value = "8";
            return;
        }

        if (this.includeUpper) {
            builder += ALPHA;
            requiredTypes++;
        }

        if (this.includeLower) {
            builder += alpha;
            requiredTypes++;
        }

        if (this.numbers) {
            builder += num;
            requiredTypes++;
        }

        if (this.symbols) {
            builder += sym;
            requiredTypes++;
        }


        if (requiredTypes === 0) {
            window.alert("You have to choose at least one option!");
            return;
        }


        if (this.includeUpper) {
            result.push(ALPHA[Math.floor(Math.random() * ALPHA.length)]);
        }

        if (this.includeLower) {
            result.push(alpha[Math.floor(Math.random() * alpha.length)]);
        }

        if (this.numbers) {
            result.push(num[Math.floor(Math.random() * num.length)]);
        }

        if (this.symbols) {
            result.push(sym[Math.floor(Math.random() * sym.length)]);
        }


        for (let i = result.length; i < this.length; i++) {
            const index = Math.floor(Math.random() * builder.length);
            result.push(builder[index]);
        }

        const shuffledResult = result.sort(() => Math.random() - 0.5);


        document.getElementById('output').value = shuffledResult.join('');
    }

}



//forza della password
function updateStrengthBar(password) { 
    const strengthBar = document.getElementById('strength-bar');
    strengthBar.innerHTML = '';

    const strengthBarFill = document.createElement('div');
    strengthBarFill.classList.add('strength-bar-fill');
     
    strengthBar.appendChild(strengthBarFill);
    let strength = 0;
 

    if (/[a-z]/.test(password)){
        strength += 1; 
    } 

    if (/[A-Z]/.test(password)){
        strength += 1; 
    } 

    if (/[0-9]/.test(password)){
        strength += 1;
    } 

    if (/[@#$%&_.£]/.test(password)){
        strength += 1;
    } 

    strengthBarFill.classList.remove('medium','strong');

    switch (strength) {
        case 1:
            strengthBarFill.style.width = '25%';
            break;

        case 2:
            strengthBarFill.style.width = '50%';
            strengthBarFill.classList.add('medium'); 
            break;

        case 3:
            strengthBarFill.style.width = '75%';
            strengthBarFill.classList.add('strong');
            break;

        case 4:
            strengthBarFill.style.width = '100%';
            strengthBarFill.classList.add('strong');
            break;
    }
}


//onclick 
function generatePassword(){

    let len = document.getElementById('length').value;
    let up = document.getElementById('uppercase').checked;
    let low = document.getElementById('lowercase').checked;
    let n = document.getElementById('numbers').checked;
    let s = document.getElementById('symbols').checked;

    var password = new RandomPassword(len, up, low, n, s);
    password.pwd();
    updateStrengthBar(document.getElementById('output').value);
}


{ //bottone notte-giorno
    const body = document.body;
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = document.getElementById('theme-icon');

    themeSwitch.addEventListener('click', function () {
        
        body.classList.toggle('night-mode');

        if (body.classList.contains('night-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

