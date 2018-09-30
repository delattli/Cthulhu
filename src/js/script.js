var Sheet = function() {
    "use strict";
    var inputsList = ["name", "player", "residence", "birthplace"],
        selectsList = ["age", "occupation", "sex"],
        that = this,
        i, len, id;
    var listener = function(e) {
        var src = e.target || e.srcElement;
        that.getValue(src.id);
    };
    /* Génére la list des INPUTs et ajout du listener onblur */
    len = inputsList.length;
    for (i = 0; i < len; i += 1) {
        id = inputsList[i];
        this[id] = document.getElementById(id);
        this[id].addEventListener("blur", listener, false);
    }
    /* Génére la liste des SELECTs et ajout du listener onchange */
    len = selectsList.length;
    for (i = 0; i < len; i += 1) {
        id = selectsList[i];
        this[id] = document.getElementById(id);
        this[id].addEventListener("change", listener, false);
    }
};
Sheet.prototype = {
    getValue: function(id) {
        "use strict";
        if (this.hasOwnProperty(id)) {
            console.log(this[id].value);
        }
    }
};