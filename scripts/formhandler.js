(function(window) {
    'use strict';
    var App = window.App || {};

    var $ = window.jQuery;

    function FormHandler(selector) {

        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        // More code will go here
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);

            fn(data);

            this.reset(); //Resets the form
            this.elements[0].focus();

            if(data.size == "Coffee-zilla" && data.strength >= 66){
                $('#myModal').modal('show');
            }
        });
    };

    FormHandler.prototype.rangeSlide = function() {

        //To display when it loads up
        document.getElementById('displayme').value = 30;

        var mouse = document.getElementById('strengthLevel');
        var color;
        mouse.addEventListener('mousemove', function() {
            var visual = document.getElementById('displayme');

            if (mouse.value > 75) {
                //Weak Caffine
                color = 'red';
            } else if (mouse.value < 75 && mouse.value > 36) {
                //Regular Caffine
                color = 'yellow';
            } else if (mouse.value < 35) {
                //Strong Caffine
                color = 'green';
            }

            visual.value = mouse.value;
            visual.style.color = color;
        });

    };

    FormHandler.prototype.addPowerUpOptions = function(checkBoxSelector) {
        console.log('Adding power up options in form');
        this.$formElement.on('click', function(event) {
            this.$powerUpOptions = $(checkBoxSelector);
            this.$powerUpOptions.removeClass('hide');
        });
    };
    App.FormHandler = FormHandler;
    window.App = App;
})(window);
