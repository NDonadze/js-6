const persons = [
    {
        name: 'nikusha',
        lastName:'donadze',
        age: 19,
        profession:"developer"
    },
    {
        name: 'barbare',
        lastName:'kurtanidze',
        age: 13,
        profession:"developer"
    },
    {
        name: 'soso',
        lastName:'falavandishvili',
        age: 16,
        profession:"developer"
    },
    {
        name: 'mariam',
        lastName:'kopadze',
        age: 19,
        profession:"developer"
    },
    {
        name: 'elene',
        lastName:'samkurashvili',
        age: 21,
        profession:"developer"
    },
];

const filteredArray =[];

for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    if (element.age > 18) {
        filteredArray.push(element)

    }
}
console.log(filteredArray)
