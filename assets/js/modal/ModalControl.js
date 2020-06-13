const ModalCont = () => {

    function ModalControl() {

        this.state = false;

        this.DOMLinks = {
            wrapper_modal : document.querySelector("#wrapper-modal"),
            auth : {
                ["#wrapper-modal .modalEnter .modal-body #login"] : undefined,
                ["#wrapper-modal .modalEnter .modal-body #password"] : undefined
            },

            reg : {
                ["#wrapper-modal .modalRegistration .modal-body #login"] : undefined,
                ["#wrapper-modal .modalRegistration .modal-body #password"] : undefined
            }
        }


        this.fillDOM = ( iterableObj ) => {
            for( let DOMItem in iterableObj ) {
                iterableObj[DOMItem] = document.querySelector(DOMItem).value;
            }
        }



        this.getLayout = () => {
            return this.DOMLayout;
        }

        this.addLayout = () => {
            this.darken();
            this.DOMLinks.wrapper_modal.innerHTML += this.getLayout();
        }

        this.darken = () => {
            $darkenDiv = document.createElement("div");
            $darkenDiv.className = "darken";

            this.DOMLinks.wrapper_modal.appendChild($darkenDiv);
        }

        this.open = (event) => {
            this.close();
            this.addLayout();
            this.state = true;
        }

        this.close = () => {
            while(this.DOMLinks.wrapper_modal.firstChild) {
                this.DOMLinks.wrapper_modal.removeChild(this.DOMLinks.wrapper_modal.firstChild);
            }

            for( let modal of ModalControl.prototype.collectionModal ) {
                modal.state = false;
            }
        }

        this.addMessageDom = (markup) => {
            document.querySelector(this.wrapper).innerHTML += markup;
        }

        this.showMessage = (status, text) => {
            if(status) {
                this.addMessageDom(`
                    <div class="wrapper-message">
                        <div class="success">
                            ${text}
                        </div>
                    </div>
                `);
                setTimeout( ()=> {
                    document.querySelector("#wrapper-modal .wrapper-message").style.display = "none";
                    this.close();
                }, 2000);
            } else {
                this.addMessageDom(`
                    <div class="wrapper-message">
                        <div class="error">
                            ${text}
                        </div>
                    </div>
                `);
                setTimeout( ()=> {
                    document.querySelector("#wrapper-modal .wrapper-message").style.display = "none";
                }, 2000);
            }
            
        }
    }

    ModalControl.prototype.collectionModal = new Set();

    ModalControl.prototype.pushCollection = ( value ) => {
        ModalControl.prototype.collectionModal.add( value ) ;
    }

    ModalControl.prototype.closePersonality = () => {
        for( let modal of ModalControl.prototype.collectionModal ) {
            if( modal.state ) {
                modal.close();
                break;
            }
        }
    }

    ModalControl.prototype.callMethod = ( nameObject, method ) => {
        for( let modal of ModalControl.prototype.collectionModal ) {
            if( modal.name === nameObject ) {
                modal[method]();
            }
        }
    }

    return ModalControl;
}


