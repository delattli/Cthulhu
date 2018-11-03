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
        
        return this;
    }
    active() {
        this.name.addEventListener("blur", this.valueChange.bind(this, this.name),false);
        this.player.addEventListener("blur", this.valueChange.bind(this, this.player),false);
        this.residence.addEventListener("blur", this.valueChange.bind(this, this.residence),false);
        this.birthplace.addEventListener("blur", this.valueChange.bind(this, this.birthplace),false);
        this.age.addEventListener("change", this.valueChange.bind(this, this.age),false);
        this.sex.addEventListener("change", this.valueChange.bind(this, this.sex),false);
        this.occupation.addEventListener("change", this.valueChange.bind(this, this.occupation),false);
        
        return this;
    }
    valueChange(id) {
        this.addDetailsEvent.notify({key:id.id, value:id.value});
        /*console.log(id.id + " " + id.value);*/
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