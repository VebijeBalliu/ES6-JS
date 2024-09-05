
const person = {
    emri: 'vebije',
    mbiemri: 'balliu',
    balanca: 5000,
}

const { emri, mbiemri } = person;

console.log('hello', person.emri, person.mbiemri);

const withdrow = (person, balanca1) => {
    balanca1 > person.balanca
        ? console.log('nuk mund te terheqes para')
        :
        (person.balanca = person.balanca - balanca1, console.log('balanca juaj', person.balanca))
}







withdrow(person, 50000);




