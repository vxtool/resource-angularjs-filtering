(function() {
  'use strict';

  angular
  .module('filter')
  .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'filterService'];

  function IndexController($scope, filterService) {
    var vm = this;

    $scope.useBrands = {};
    $scope.filters = {};
    $scope.filters.Label = {};

    $scope.maxBrands = 5;
    $scope.maxLabels = 5;

    $scope.layout = 'grid';
    $scope.products = filterService.getSampleData();

    $scope.sorting = {
      id: "1",
      order: "Name",
      direction: "false"
    };

    $scope.setOrder = function (id, order, reverse) {
      $scope.sorting.id = id;
      $scope.sorting.order = order;
      $scope.sorting.direction = reverse;
    };

    // Watch the Price that are selected
    $scope.$watch(function () {
      return {
        products: $scope.products,
        useBrands: $scope.useBrands,
      }
    }, function (value) {
      var selected;

      $scope.count = function (prop, value) {
        return function (el) {
          return el[prop] == value;
        };
      };

      $scope.brandsGroup = filterService.uniqueItems($scope.products, 'Brand');
      var filterAfterBrands = [];
      selected = false;
      for (var j in $scope.products) {
        var p = $scope.products[j];
        for (var i in $scope.useBrands) {
          if ($scope.useBrands[i]) {
            selected = true;
            if (i === p.Brand) {
              filterAfterBrands.push(p);
              break;
            }
          }
        }
      }
      if (!selected) {
        filterAfterBrands = $scope.products;
      }

      $scope.filteredProducts = filterAfterBrands;
    }, true);

    $scope.$watch('filtered', function (newValue) {
      if (angular.isArray(newValue)) {
        console.log(newValue.length);
      }
    }, true);
  }
})();
