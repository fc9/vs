Object.assign(vs, (function () {
    /**
     * @private
     * @constructor
     * @name vs.Timer
     * @description Create a new Timer instance.
     * @classdesc A Timer counts milliseconds from when start() is called until
     * when stop() is called.
     */
    var Timer = function Timer() {
        this._isRunning = false
        this._startTime = 0
        this._endTime = 0
    }

    Object.assign(Timer.prototype, {
        /**
         * @private
         * @function
         * @name vs.Timer#start
         * @description Start the timer
         */
        start: function () {
            this._isRunning = true
            this._startTime = vs.now()
        },

        /**
         * @private
         * @function
         * @name vs.Timer#stop
         * @description Stop the timer
         */
        stop: function () {
            this._isRunning = false
            this._endTime = vs.now()
        },

        /**
         * @private
         * @function
         * @name vs.Timer#getMilliseconds
         * @description Get the number of milliseconds that passed between
         * start() and stop() being called
         * @returns {Number} The elapsed milliseconds.
         */
        getMilliseconds: function () {
            return this._endTime - this._startTime
        }
    })

    return {
        Timer: Timer,

        /**
         * @private
         * @function
         * @name vs.now
         * @description Get current time in milliseconds. Use it to measure time
         * difference. Reference time may differ on different platforms.
         * @returns {Number} The time in milliseconds
         */
        now: (typeof window !== 'undefined') && window.performance && window.performance.now && window.performance.timing ? function () {
            return window.performance.now()
        } : Date.now
    }
}()))