QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Passed!");

    (function(window) {
        'use strict';
        var App = window.App;
        var Truck = App.Truck;
        var DataStore = App.DataStore;
        var myTruck = new Truck('ncc-1701', new DataStore());
        window.myTruck = myTruck;
    })(window);
});
