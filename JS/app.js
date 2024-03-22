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

