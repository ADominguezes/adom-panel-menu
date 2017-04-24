(function () {
  'use strict';
  Polymer({

    is: 'adom-panel-menu',

    properties: {
      menu: {
        type: Array,
        value: function() {
          return [];
        }
      }
    },
    attached: function() {
      for (var i = 0; i < this.menu.length; i++) {
        if((this.menu[i].src) && (!this.menu[i].size)) {
          this.menu[i].size = 200;
        }
      }
    },

    _link: function() {
      this.fire('click-link')
    }

  });
}());
