
let Module = () => {
    function Modul(number, name, description, photo = undefined) {
        this.number = number
        this.name = name;
        this.description = description;
        this.photo = photo;
    }

    function getModulesDom(number) {
        return `
            <span>${number}</span>
            <div class="body">
                <div class="form-group">
                    <input type="text" placeholder="Термин">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Определение">
                </div>
            </div>

            <div class="form-group">
                <input type="file">
            </div>
        `
    }

    return {
        Module : Modul,
        getModulesDom : getModulesDom
    }
}

