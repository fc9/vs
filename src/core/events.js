vs.events = {
    /**
     * @private
     * @function
     * @name vs.events.attach
     * @description Attach event methods 'on', 'off', 'fire', 'once' and 'hasEvent' to the
     * target object.
     * @param {Object} target The object to add events to.
     * @returns {Object} The target object
     * @example
     * var obj = { }
     * vs.events.attach(obj)
     */
    attach: function (target) {
        var ev = vs.events
        target.on = ev.on
        target.off = ev.off
        target.fire = ev.fire
        target.once = ev.once
        target.hasEvent = ev.hasEvent
        target._callbacks = { }
        target._callbackActive = { }
        return target
    },

    on: vs.EventHandler.prototype.on,
    off: vs.EventHandler.prototype.off,
    fire: vs.EventHandler.prototype.fire,
    once: vs.EventHandler.prototype.once,
    hasEvent: vs.EventHandler.prototype.hasEvent
}
