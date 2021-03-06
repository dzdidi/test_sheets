var stack = [];

module.exports = {
    push: function(el, cb){
        return setTimeout(function(){
            stack.push(el);
            return cb(null, {});
        }, 10);
    },

    pop: function(cb){
        return setTimeout(function(){
            return cb(null, stack.splice(-1)[0]);
        }, 10)
    },

    top: function(cb){
        return setTimeout(function(){
            return cb(null, stack.slice(-1)[0]);
        }, 10)
    },

    size: function(cb){
        return setTimeout(function(){
            return cb(null, {size: stack.length});
        }, 10)
    },
}
