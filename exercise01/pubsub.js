doresh('pubsub.js',
    [],
    function (){
        var storedEvents = {};
        function publish(eventName, data){
            if(storedEvents[eventName]){
                storedEvents[eventName].subscribers.forEach(function(callback){
                    callback(data);
                })
            }
        }
        function subscribe(eventName, callback){
            if(!storedEvents[eventName]){
                storedEvents[eventName] = {
                    subscribers: []
                }
            }
            if(storedEvents[eventName].subscribers.indexOf(callback) !== -1){
                throw "attemped to re-subscribe listener to event "+ eventName;
            }
            storedEvents[eventName].subscribers.push(callback);


        }
        function unsubscribe(eventName, callback){
            var stored = storedEvents[eventName];
            if(stored) {
                var callbackIndex = stored.subscribers.indexOf(callback);
                if(callbackIndex==-1){
                    return;
                }
                stored.subscribe.splice(callbackIndex);
                if(!stored.subscribers.length){
                    delete storedEvents[eventName];
                }
            }
        }
        return{
            publish: publish,
            subscribe: subscribe,
            unsubscribe: unsubscribe
        }
    }
);