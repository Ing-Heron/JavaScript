const dia = 0; 

switch( dia ) { // dia === dia
    case 0:
        console.log('Domingo');
        break;                  // salir del switch
    case 1:
        console.log('Lunes');
        break; 
    case 2:
        console.log('Martes');
        break; 
    default:
        console.log('No es lunes, martes ni domingo');
        break;
}