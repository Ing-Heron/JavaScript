// manera de crear un arreglo tradicional
// const arr = new Array(10);
// console.log(arr);

//manera comun de crear un arreglo
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

console.log( videoJuegos[0] );
// console.log( videoJuegos[1] );
// console.log( videoJuegos[2] );
// console.log( videoJuegos[3] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['x', 'Megaman', 'Zero', 'Dr.Light', [
        'Dr, Willy',
        'Woodman'
    ]]
];

// console.log({ arregloCosas });
console.log( arregloCosas[7][3] ); //Dr.Light
console.log( arregloCosas[7][4][1] ); // Woodman