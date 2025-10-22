import { loadUsersByPage } from "../use-cases/load-users-by-page";

let previousID;

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if ( users[users.length-1].id === previousID ) return;
    if ( users.length === 0 ) return;
    state.currentPage += 1;
    state.users = users;
    previousID = users[users.length-1].id;
}

const loadPreviousPage = async() => {
    if ( state.currentPage === 1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1 );
    state.currentPage -=1;
    state.users = users;
}

const onUserChanged = ( updatedUser ) => {

    let wasFound = false;
    
    state.users = state.users.map( user => {
        if ( user.id === updatedUser.id ) {
            wasFound = true;
            return updatedUser;
        }
        
        if ( state.users.length < 10 && !wasFound ) {
            state.users.push( updatedUser );
        }
        return user;
    });

}

const reloadPage = async() => {
    const users = await loadUsersByPage( state.currentPage );
    if ( users.length === 0 ){
        await loadPreviousPage();
        return;
    } 
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}