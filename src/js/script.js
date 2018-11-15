/* Générique Tools Helper */
class Tools {
    static getID(id) {
        return document.getElementById(id);
    }
}
/* Gestion des événements */
class EventDeleg {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    notify(args) {
        var len = this.listeners.length, i;
        if (len > 0) {
            for (i = 0; i < len; i += 1) {
                this.listeners[i](args);
            }
        }
    }
}
/* Sheet Manipulation */
class Sheet {
    constructor() {
        this.addDetailsEvent = new EventDeleg();
        
        this.createLinksForms().active();
    }
    createLinksForms() {
        this.name = Tools.getID("name");
        this.player = Tools.getID("player");
        this.residence = Tools.getID("residence");
        this.birthplace = Tools.getID("birthplace");
        this.age = Tools.getID("age");
        this.occupation = Tools.getID("occupation");
        this.sex = Tools.getID("sex");
        
<<<<<<< HEAD
        this.chedit = {
            root : Tools.getID("Chedit"),
            close : Tools.getID("Chedit_close"),
            cancel : Tools.getID("Chedit_cancel")
        };
=======
        this.chedit = Tools.getID("Chedit");
        this.chedit_close = Tools.getID("Chedit_close");
        this.chedit_cancel = Tools.getID("Chedit_cancel");
>>>>>>> f0358f744e12006da506016c56a4c966407458b0
        
        return this;
    }
    active() {
        this.name.addEventListener("blur", this.valueChange.bind(this, this.name), false);
        this.player.addEventListener("blur", this.valueChange.bind(this, this.player), false);
        this.residence.addEventListener("blur", this.valueChange.bind(this, this.residence), false);
        this.birthplace.addEventListener("blur", this.valueChange.bind(this, this.birthplace), false);
        this.age.addEventListener("change", this.valueChange.bind(this, this.age), false);
        this.sex.addEventListener("change", this.valueChange.bind(this, this.sex), false);
        this.occupation.addEventListener("change", this.valueChange.bind(this, this.occupation), false);
        
        /* Fenêtre édition des charactéristiques */
        let chedit = this.chedit;
        chedit.close.addEventListener("click", this.hideEditCh.bind(this), false);
        chedit.cancel.addEventListener("click", this.hideEditCh.bind(this), false);
        
        return this;
    }
    showEditCh() {
<<<<<<< HEAD
        let root = this.chedit.root;
        root.classList.add("modal-active");
    }
    hideEditCh(e) {
        let root = this.chedit.root;
        e.preventDefault();
        root.classList.remove("modal-active");
=======
        this.chedit.classList.add("modal-active");
    }
    hideEditCh(e) {
        e.preventDefault();
        this.chedit.classList.remove("modal-active");
>>>>>>> f0358f744e12006da506016c56a4c966407458b0
    }
    valueChange(id) {
        this.addDetailsEvent.notify({key:id.id, value:id.value});
    }
}
/* Controleur */
class AddDetailsChange {
    constructor(view) {
        this.view = view;
    
        view.addDetailsEvent.addListener(this.updateValue.bind(this));
    }
    updateValue(args) {
        var value = args.value.trim();
        if (value !== "") {
            console.log(args.key + " : " + value);
        }
    }
}