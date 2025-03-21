(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}})();const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function L(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}let y;const S=new Uint8Array(16);function C(){if(!y){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");y=crypto.getRandomValues.bind(crypto)}return y(S)}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),w={randomUUID:E};function A(e,t,d){var o;if(w.randomUUID&&!e)return w.randomUUID();e=e||{};const i=e.random??((o=e.rng)==null?void 0:o.call(e))??C();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,L(i)}class b{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new b("piedra del alma"),new b("piedra del infinito")],filter:a.All},P=()=>{T(),console.log("InitStore 🥑")},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},h=()=>{localStorage.setItem("state",JSON.stringify(l))},I=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`option ${e} is not valid.`)}},k=e=>{if(!e)throw new Error("Description is required");l.todos.push(new b(e)),h()},x=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),h()},U=e=>{l.todos=l.todos.filter(t=>t.id!==e),h()},q=()=>{l.todos=l.todos.filter(e=>!e.done),h()},F=(e=a.All)=>{l.filter=e,h()},D=()=>l.filter,c={initStore:P,loadStore:T,addTodo:k,toggleTodo:x,deleteTodo:U,getTodos:I,deleteCompleted:q,setFilter:F,getCurrentFilter:D},M=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
`,N=e=>{if(!e)throw new Error("A Todo is required");const t=`
        <div class="view">
            <input class="toggle" type="checkbox" ${e.done?"checked":""}>
            <label>${e.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,d=document.createElement("li");return d.innerHTML=t,d.setAttribute("id",e.id),e.done&&d.classList.add("completed"),d};let g;const O=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(d=>{g.append(N(d))})};let f;const H=e=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Element ${e} not found`);f.innerHTML=c.getTodos(a.Pending).length},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",clearCompleted:".clear-completed",TodoFilter:".filtro",PendingCountLabel:"#pending-count"},R=e=>{const t=()=>{const r=c.getTodos(c.getCurrentFilter());O(m.TodoList,r),d()},d=()=>{H(m.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=M,document.querySelector(e).append(r),t()})();const i=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),s=document.querySelector(m.clearCompleted),p=document.querySelectorAll(m.TodoFilter);i.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(c.addTodo(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const u=r.target.closest("[id]");c.toggleTodo(u.getAttribute("id")),t()}),o.addEventListener("click",r=>{const u=r.target;u.className==="destroy"&&(c.deleteTodo(u.closest("[id]").getAttribute("id")),t())}),s.addEventListener("click",()=>{c.deleteCompleted(),t()}),p.forEach(r=>{r.addEventListener("click",u=>{switch(p.forEach(v=>v.classList.remove("selected")),u.target.classList.add("selected"),console.log(u.target.text),u.target.text){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Completed);break}t()})})};c.initStore();R("#app");
