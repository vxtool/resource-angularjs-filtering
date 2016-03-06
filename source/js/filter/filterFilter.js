(function() {
  'use strict';

  angular
  .module('filter')
  .filter('filterCount', filterCount);

  filterCount.$inject = [];

  function filterCount() {
    var vm = this;

    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
        //console.log(collection[i].Price);
        //var out = myApp.filter('filter')(collection[i].Price, "42", true);
      }
      return out;
    }
  };

})();
