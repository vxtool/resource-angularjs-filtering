(function() {
  'use strict';

  angular
  .module('filter')
  .service('filterService', filterService);

  filterService.$inject = ['$rootScope'];

  function filterService($rootScope) {
    var vm = this;

    var service = {};

    var products = [{
      "Category": ["g122", "Refrigerators"],
      "Brand": "brand1",
      "ModelNo": "GC-P197DPSL",
      "Sku": "1223456",
      "Heading": "Title 1",
      "ShortDesc": "Description 1",
      "Labels": ["New", "Aderdsss"],
      "Callout": ["Bonus Offer", "Sale"],
      "Price": 1399,
      "WasPrice": 1650,
      "DeliveryTier": "4",
      "Image": "50001129_62296"
    }, {
      "Category": ["g186", "LED TVs"],
      "Brand": "brand1",
      "ModelNo": "55LA6620",
      "Sku": "3232434",
      "Heading": "Title 2",
      "ShortDesc": "Description 2",
      "Labels": ["New", "Aeee"],
      "Callout": ["Bonus Offer", "Sale"],
      "Price": 1389,
      "WasPrice": 1599,
      "DeliveryTier": "4",
      "Image": "50017349_87400"
    }, {
      "Category": ["g186", "LED TVs"],
      "Brand": "brand2",
      "ModelNo": "UA50F6400AM",
      "Sku": "232435432",
      "Heading": "Title 3",
      "Labels": ["As Advertised"],
      "Callout": ["Cashback Offer"],
      "Price": 1249,
      "WasPrice": 1299,
      "DeliveryTier": "4",
      "Image": "50017426_82802"
    }];

    service.uniqueItems = function (data, key) {
      var result = [];
      for (var i = 0; i < data.length; i++) {
          var value = data[i][key];
          if (result.indexOf(value) === -1) {
              result.push(value);
          }
      }
      return result;
    };

    service.getSampleData = function() {
      return products;
    };

    return service;
  };

})();
