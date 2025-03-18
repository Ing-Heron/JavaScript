import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-cases';

const elementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    clearCompleted: '.clear-completed',
    TodoFilter: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIDs.TodoList, todos );
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending( elementIDs.PendingCountLabel );
    }

    // cuando la funcion App se llama
    (() => {
        const app = document.createElement( 'div' );
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( elementIDs.NewTodoInput );
    const todoListUl = document.querySelector( elementIDs.TodoList );
    const clearCompletedButton = document.querySelector( elementIDs.clearCompleted );
    const filterIl = document.querySelectorAll( elementIDs.TodoFilter );

    // Listeners
    newDescriptionInput.addEventListener( 'keyup', ( event ) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[id]');
        todoStore.toggleTodo( element.getAttribute( 'id' ) );
        displayTodos();
    });

    todoListUl.addEventListener('click', (event) => {
        const element = event.target
        if ( element.className === 'destroy') {
            todoStore.deleteTodo( element.closest('[id]').getAttribute( 'id' ) );
            displayTodos();
        }
    });

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filterIl.forEach( element => {
        
        element.addEventListener('click', element => {
            filterIl.forEach( el => el.classList.remove( 'selected' )); 
            element.target.classList.add('selected');
            console.log( element.target.text );

            switch( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
    
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break;
            }

            displayTodos();
        });

    });

}