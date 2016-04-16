define(function (require) {
    'use strict';

    var Component = require('../../src/Component');


    function TodoComponent (element, expression) {
        Component.call(this, element, expression);
    }
    TodoComponent.prototype = Object.create(Component.prototype);
    TodoComponent.prototype.constructor = TodoComponent;


    TodoComponent.defaults = {
        todo: null,
        onRemoveClick: Function.prototype,
        onCheckboxChange: Function.prototype
    };


    TodoComponent.prototype.componentWillMount = function () {
        console.log('componentWillMount');
    };


    TodoComponent.prototype.componentDidMount = function () {
        console.log('componentDidMount');
    };


    return TodoComponent;
});
