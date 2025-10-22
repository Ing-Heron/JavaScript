const heroes = ['batman', 'superman', 'flash', 'aquaman'];
const heroesCopy = heroes;

// heroes.sort();
console.table(heroes.toSorted());

// heroes.reverse();
console.table(heroes.toReversed());


// const deleteHero = heroes.splice(0, 2, 'Green Lanter');
console.table(heroes.toSpliced(0, 2, 'Green Lanter'));

console.table(heroesCopy);