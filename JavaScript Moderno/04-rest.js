const user = {
    firstName: 'Roberto',
    age: 25,
    skills: ['PHP', 'JS'],
}

//Rest operator - É o resto do que tem no meu objeto
const { firstName, age, ...resto } = user;
// Ele sempre deve ser a ultima varivável
console.log(resto);

// Em um Array

const [ primary, secondary ] = skills;
