const Combined = () => {
    let DOMLinks = {
        modal : document.querySelector("#wrapper-modal"),
        signInRegistration : document.querySelector(".header #linkEnterReg"),
        wrapper_modal : document.querySelector("#wrapper-modal")
    }

    const createModal = CreateModal();

    function _handlerEnterReg(){
        DOMLinks.signInRegistration.addEventListener("click", (event)=> {
            let authorization = createModal.createAuth("Авторизация");
            authorization.open(event);
        });
    }

    function _handlerModalWrapper() {
        DOMLinks.wrapper_modal.addEventListener("click", event => {
            switch(event.target.dataset.type) {
                case "registrationModal":
                    let registration = createModal.createReg("Регистрация");
                    registration.open(event);
                    break;
                case "enter":
                    createModal.ModalController.callMethod("authorization_modal", "authorization");
                    break;
                case "registration":
                    createModal.ModalController.callMethod("registration_modal", "registration");
                    break;
                case "close":
                    createModal.ModalController.closePersonality();
                    break;
            }
        });
    }

    return {
        initModal() {
            if(DOMLinks.signInRegistration) _handlerEnterReg();
            _handlerModalWrapper();
        }
    }
}

const comdined = Combined();
comdined.initModal();
