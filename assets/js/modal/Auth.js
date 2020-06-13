
const Auth = (title) => {
    
    function Authorization() {

        ModalCont().call(this);

        this.name = "authorization_modal";

        this.wrapper = "#wrapper-modal .modalEnter";

        this.DOMLayout = `
            <div class="modalEnter">
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
                        <button data-type="enter" class="btnEnter">Войти</button> 
                    </div>
                    <a id="reg" data-type="registrationModal" class="registration">Регистрация</a>
                </div>
            </div>
        `;


       

        this.authorization = () => {
            this.fillDOM(this.DOMLinks.auth);

            console.log(this.DOMLinks.auth);

            fetch("/authorization", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },

                body : JSON.stringify({
                    values : {
                        login : this.DOMLinks.auth["#wrapper-modal .modalEnter .modal-body #login"],
                        password : this.DOMLinks.auth["#wrapper-modal .modalEnter .modal-body #password"]
                    }
                })
            }).then( response => {
                return response.json();
            }).then( data => {
                this.showMessage(data.status, data.text);
            })

        }
    }


    return Authorization;
}






