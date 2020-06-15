
const CreateModal = () => {

    let MC = ModalCont();

    let modalController = new MC();

    let reg, auth;


    return {
        createReg(title){
            if(!reg) {
                let Registr = Reg(title);
                reg = new Registr();
                modalController.pushCollection(reg)
                return reg;

            }
            return reg;
        },

        createAuth(title) {
            if(!auth) {
                let Autho = Auth(title);
                auth = new Autho();
                modalController.pushCollection(auth)
                return auth;

            }
            return auth;
        },

        ModalController : modalController
    }
}