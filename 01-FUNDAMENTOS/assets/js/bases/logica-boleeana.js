

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy false';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy false de nuevo' || true;
const a5 = soyFalso || soyUndefined || true || 'Ya no soy false de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });
