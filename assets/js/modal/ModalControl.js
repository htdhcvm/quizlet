const ModalCont = () => {

    function ModalControl() {

        this.state = false;

        this.DOMLinks = {
            wrapper_modal : document.querySelector("#wrapper-modal")
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


