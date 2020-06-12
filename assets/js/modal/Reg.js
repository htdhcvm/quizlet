

const Reg = (title) => {
    function Registration() {

        ModalCont().call(this);

        this.name = "registration_modal";

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
                        <button data-type="registration" class="btnEnter">Зарегестрироваться</button> 
                    </div>
                </div>
            </div>
        `;
    }


    Registration.prototype.registration = () => {
        console.log("registration")
    }


    return Registration;
}











