// SNACK 3
console.log('Snack 3');
console.log('');
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammifer

const animal = [
    //obj
    {
        nome : 'Albatro Urlatore',
        famiglia : 'Grandi Albatri',
        classe : 'Uccelli',
    },

    {
        nome: 'Cammello',
        famiglia: 'Camelidi',
        classe: 'Mammifer',
    },

    {
        nome: 'Marmotta',
        famiglia: 'Sciuridae',
        classe: 'Mammiferi',
    },

    {
        nome: 'Martin Pescatore Comune',
        famiglia: 'Alcedinidi',
        classe: 'Uccelli',
    },

    {
        nome: 'Puzzola',
        famiglia: 'Mustela',
        classe: 'Mammiferi',
    },

    {
        nome: 'Leone',
        famiglia: 'Felini',
        classe: 'Mammiferi',
    },

    {
        nome: 'Organetto',
        famiglia: 'Fringilidi',
        classe: 'Ucceli',
    }

] ;

console.log(animal);

const mammiferi = [''];

for (let i = 0; i < animal.length; i++) {
    const elAnimale = animal[i];

    console.log(elAnimale);

    if (elAnimale.classe == 'Mammiferi') {
        mammiferi.push(elAnimale);
        
    }
    
}

console.log('');
console.log('Mammiferi :');
console.log(mammiferi);
console.log('')


// SNACK 4

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

console.log('Snack 4');
console.log('');

const people = [
     {
        name : 'Raff',
        lastName : 'Val',
        age : 28,
     },

    {
        name: 'Eli',
        lastName: 'Sugar',
        age: 18,
    },

    {
        name: 'Fabio',
        lastName: 'Dal',
        age: 15,
    },

    {
        name: 'Gianfraschio',
        lastName: 'Rossi',
        age: 96,
    },

    {
        name: 'Bernalda',
        lastName: 'Esposito',
        age: 6,
    },

]

console.log(people);
console.log('');

for (let i = 0; i < people.length; i++) {
    const driver = people[i];

    if(driver.age >= 18) {
        console.log(driver.name , driver.lastName , ' può guidare');
    } else {
        console.log(driver.name, driver.lastName, ' non può guidare');
    }
    
}