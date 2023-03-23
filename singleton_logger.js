let Logger = (function() {
    let instance;

    function createInstance() {
        function log(message){
            console.log(message);
        }

        return {
            log: log
        };

    }

    return {
        getInstance: function(){
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})