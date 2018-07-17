({
    handleMessage: function (component, event, helper) {
        var message = event.getParams();
        component.set('v.message', message.payload.value);
    },

    handleError: function (component, event, helper) {
        var error = event.getParams();
        console.log(error);
    }
})
