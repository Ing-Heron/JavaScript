import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHtml = ( todo ) => {

    if ( !todo ) throw new Error( 'A Todo is required' );

    /* destructuracion de clase
        const { done, description, id } = todo;
    */
    

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.done ? 'checked' : '' }>
            <label>${ todo.description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute( 'id', todo.id );
    if ( todo.done )
        liElement.classList.add('completed');

    return liElement;
}