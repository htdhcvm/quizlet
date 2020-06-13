
const Reg = (title) => {
    function Registration() {

        ModalCont().call(this);

        this.name = "registration_modal";

        this.DOMLayout = `
            <div class="modalRegistration">
                <div class="modal-head"> 
                    <h2 class="title">${title}</h2>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Логин</label>
                        <input type="text" placeholder="Логин" id="login">
                    </div>
                    <div class="form-group">
                        <label>Пароль</label>
                        <input type="password" placeholder="Пароль" id="password">
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="manipulation">
                        <a id="closeBtn" class="close" data-type="close"> Закрыть </a>
                        <button data-type="registration" class="btnEnter">Зарегестрироваться</button> 
                    </div>
                </div>
            </div>
        `;


        this.message = () => {
            console.log("mess")
        }



        this.DOMCollectionValues = {
            ["#wrapper-modal .modalRegistration .modal-body #login"] : undefined,
            ["#wrapper-modal .modalRegistration .modal-body #password"] : undefined
        }
    
        this.fillDOM = () => {
            for( let DOMItem in this.DOMCollectionValues ) {
                this.DOMCollectionValues[DOMItem] = document.querySelector(DOMItem).value;
            }
        }
    
        this.registration = () => {
            this.fillDOM();
            console.log(this.DOMCollectionValues);
    
            if( this.DOMCollectionValues["#wrapper-modal .modalRegistration .modal-body #login"] !== "" && this.DOMCollectionValues["#wrapper-modal .modalRegistration .modal-body #password"] !== "") {
                fetch("/registration", {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    }, 
                    body : JSON.stringify({
                        values : {
                            login : this.DOMCollectionValues["#wrapper-modal .modalRegistration .modal-body #login"],
                            password : this.DOMCollectionValues["#wrapper-modal .modalRegistration .modal-body #password"]
                        }
                    })
                }).then( response => {
                    return response.json();
                }).then( data => {
                    
                })
            } else {
                this.showMessage(false, "Заполните поля");
            }
        }
    }

    return Registration;
}

