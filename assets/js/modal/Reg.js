
const Reg = (title) => {
    function Registration() {

        ModalCont().call(this);

        this.name = "registration_modal";

        this.wrapper = "#wrapper-modal .modalRegistration";

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

    
        this.registration = () => {
            this.fillDOM(this.DOMLinks.reg);

            if( this.DOMLinks.reg["#wrapper-modal .modalRegistration .modal-body #login"] !== "" && this.DOMLinks.reg["#wrapper-modal .modalRegistration .modal-body #password"] !== "") {
                fetch("/registration", {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    }, 
                    body : JSON.stringify({
                        values : {
                            login : this.DOMLinks.reg["#wrapper-modal .modalRegistration .modal-body #login"],
                            password : this.DOMLinks.reg["#wrapper-modal .modalRegistration .modal-body #password"]
                        }
                    })
                }).then( response => {
                    return response.json();
                }).then( data => {
                    this.showMessage(data.status, data.text);
                })
            } else {
                this.showMessage(false, "Заполните поля");
            }
        }
    }

    return Registration;
}

