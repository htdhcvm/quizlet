
const Auth = (title) => {
    
    function Authorization() {

        ModalCont().call(this);

        this.name = "authorization_modal";


        this.DOMLayout = `
            <div class="modalEnter">
                <div class="modal-head"> 
                    <h2 class="title">${title}</h2>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Логин</label>
                        <input type="text" placeholder="Логин">
                    </div>
                    <div class="form-group">
                        <label>Пароль</label>
                        <input type="password" placeholder="Пароль">
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
    }


    Authorization.prototype.authorization = () => {
        console.log("authorization");
    }


    return Authorization;
}






