(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var POWER_UP_OPTION = '[class="form-group hide"]';
    var MODAL_YES_BUTTON = '[class="btn btn-primary"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTOR);
    /* to bind the method reference so that its owner is guaranteed to be myTruck */
    formHandler.rangeSlide();
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    var modalHandler = new FormHandler(MODAL_YES_BUTTON);
    modalHandler.addPowerUpOptions(POWER_UP_OPTION);

    console.log(formHandler);


})(window);
