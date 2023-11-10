import datos from './fotos';
const {fotos} = datos;
export default {
    categorias: [
        {id: 'ameria', nombre: 'America',numeroFotos: fotos['america'].length,imagenPortada: './imagenes/1.jpg'},
        {id: 'africa', nombre: 'africa',numeroFotos: fotos['africa'].length,imagenPortada: './imagenes/2.jpg'},
        {id: 'europa', nombre: 'europa',numeroFotos: fotos['europa'].length,imagenPortada: './imagenes/3.jpg'},
        {id: 'asia', nombre: 'asia',numeroFotos: fotos['asia'].length,imagenPortada: './imagenes/4.jpg'}
    ],
}