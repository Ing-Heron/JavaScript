
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {

    console.log( import.meta.env );

    const html = `
    dev: ${ import.meta.env.DEV } <br/>
    Prod: ${ import.meta.env.PROD } <br/>
    KEY: ${ import.meta.env.VITE_API_KEY } <br/>
    `;
    element.innerHTML = html;

}