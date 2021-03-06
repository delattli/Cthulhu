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
        this.name.addEventListener("blur", this.valueChange.bind(this, this.name), false);
        this.player.addEventListener("blur", this.valueChange.bind(this, this.player), false);
        this.residence.addEventListener("blur", this.valueChange.bind(this, this.residence), false);
        this.birthplace.addEventListener("blur", this.valueChange.bind(this, this.birthplace), false);
        this.age.addEventListener("change", this.valueChange.bind(this, this.age), false);
        this.sex.addEventListener("change", this.valueChange.bind(this, this.sex), false);
        this.occupation.addEventListener("change", this.valueChange.bind(this, this.occupation), false);

        return this;
    }
    valueChange(id) {
        this.addDetailsEvent.notify({key:id.id, value:id.value});
    }
}
/* Modal Box */
class ModalWindow {
    constructor() {
        this.root = document.createElement("div");
        this.root.classList.add("modal");
        
        let block = document.createElement("div");
        block.classList.add("modal__block");
        
        let title = document.createElement("div");
        title.classList.add("modal__title");
        title.innerHTML = "Modificateur d'&acirc;ge";
        
        this.select = document.createElement("select");
        this.select.innerHTML = "<option value=\"50\">50</option><option value=\"49\">49</option><option value=\"48\">48</option>";
        this.select.innerHTML += "<option value=\"47\">47</option><option value=\"46\">46</option><option value=\"45\">45</option>";
        
        this.content = document.createElement("div");
        this.content.classList.add("modal__line");
        let content = "Caract&eacute;ristique : <span class=\"modal__info\">Force</span><br>";
        content += "Valeur actuelle : <span class=\"modal__info\">50</span><br>";
        content += "Nouvelle valeur : ";
        this.content.innerHTML = content;
        this.content.appendChild(this.select);
        
        let buttons = document.createElement("div");
        buttons.classList.add("modal__buttons");
        
        this.button_ok = document.createElement("button");
        this.button_ok.classList.add("modal__buttons_button-first");
        this.button_ok.innerHTML = "OK";
        
        let button_cancel = document.createElement("button");
        button_cancel.innerHTML = "ANNULER";
        
        buttons.appendChild(this.button_ok);
        buttons.appendChild(button_cancel);
        
        block.appendChild(title);
        block.appendChild(this.content);
        block.appendChild(buttons);
        this.root.appendChild(block);
        
        var objBody = document.getElementsByTagName("body").item(0);
        objBody.appendChild(this.root);
        
        let hide = this.hide.bind(this);
        var that = this;
        window.addEventListener("click", function(e) {
            if (e.target == that.root) {
                that.hide(e);
            }
        });
        button_cancel.addEventListener("click", hide);
        this.button_ok.addEventListener("click", function(e) {
            e.preventDefault();
            console.log("Ok");
        });
    }
    show() {
        this.root.classList.add("modal-active");
    }
    hide(e) {
        e.preventDefault();
        this.root.classList.remove("modal-active");
    }
    makeContent() {
        
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