
let Controller = () => {

    let module = Module();
    
    let DOMLinks = {
        count : document.querySelector("#count_modules"), 
        add : document.querySelector("#add_modules"),
        list : document.querySelector(".list_modules")
    }
    

    function _handlerAddModule() {
        DOMLinks.add.addEventListener("click", (event) => {
            let count = +DOMLinks.count.value;
            DOMLinks.list.innerHTML = "";
            for( let i = 1; i <= count; i++) {
                let item = document.createElement("div");
                item.className ="item";

                item.innerHTML += module.getModulesDom(i);
                DOMLinks.list.appendChild(item);
            }
        })
    }

    return {
        init() {
            _handlerAddModule();
        }
    }
}

Controller().init();