
const CreateModal = () => {

    let MC = ModalCont();

    let modalController = new MC();


    return {
        createReg(title){
            let Registr = Reg(title);
            const registration = new Registr();

            modalController.pushCollection(registration)
            return registration;
        },

        createAuth(title) {
            let Autho = Auth(title);
            const authorization = new Autho();


            modalController.pushCollection(authorization)
            return authorization;
        },

        ModalController : modalController
    }
}