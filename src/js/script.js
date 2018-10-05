var getID = function(id) {
    return document.getElementById(id);
};
var Sheet = function() {
    "use strict";
    this.createLinksForms().active();
};
Sheet.prototype = {
    createLinksForms: function() {
        this.name = getID("name");
        this.player = getID("player");
        this.residence = getID("residence");
        this.birthplace = getID("birthplace");
        this.age = getID("age");
        this.occupation = getID("occupation");
        this.sex = getID("sex");
        
        return this;
    },
    active: function() {
        this.name.addEventListener("blur", this.valueChange.bind(this, this.name),false);
        this.player.addEventListener("blur", this.valueChange.bind(this, this.player),false);
        
        return this;
    },
    valueChange: function(id) {
      console.log(id.value);
    },
};