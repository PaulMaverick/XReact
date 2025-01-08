if(typeof global.requestIdleCallback === "undefined") {
    global.requestIdleCallback = function(callback, options) {
        const timeout = options?.timeout || 50;
        const start = Date.now();
        return setTimeout(() => {
            callback({
                timeRemaining: () => Math.max(0, timeout - (Date.now() - start)),
                didTimeout: false
            });
        }, 1);
    };
}

if(typeof global.cancelIdleCallback === "undefined") {
    global.cancelIdleCallback = function(id) {
        clearTimeout(id);
    }
}