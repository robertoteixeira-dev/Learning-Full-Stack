const user = {
    firstName: 'Roberto',
    age: 25,
    skills: ['PHP', 'JS'],
    active: false,
}

//Spread Operator - Expalhar
// Nos ajuda a nao quebrar o principio da imutabilidade

const updatedUser = {
    ...user,
    active: true,
    skills: [...user.skills, 'Go'],
}

