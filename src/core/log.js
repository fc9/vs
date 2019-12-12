Object.assign(vs, function () {
    var log = {
        /**
         * @private
         * @function
         * @name vs.log.write
         * @description Write text to the console
         * @param {String} text The text to log.
         */
        write: function (text) {
            console.log(text)
        },

        /**
         * @private
         * @function
         * @name vs.log.open
         * @description Starting logging to the console
         */
        open: function () {
            vs.log.write("Powered by PlayCanvas " + vs.version + " " + vs.revision)
        },

        /**
         * @private
         * @function
         * @name vs.log.info
         * @description Write text to the log preceded by 'INFO:'
         * @param {String} text The text to log.
         */
        info: function (text) {
            console.info("INFO:    " + text)
        },

        /**
         * @private
         * @function
         * @name vs.log.debug
         * @description Write text to the log preceded by 'DEBUG:'
         * @param {String} text The text to log.
         */
        debug: function (text) {
            console.debug("DEBUG:   " + text)
        },

        /**
         * @private
         * @function
         * @name vs.log.error
         * @description Write text to the log preceded by 'ERROR:'
         * @param {String} text The text to log.
         */
        error: function (text) {
            console.error("ERROR:   " + text)
        },

        /**
         * @private
         * @function
         * @name vs.log.warning
         * @description Write text to the log preceded by 'WARNING:'
         * @param {String} text The text to log.
         */
        warning: function (text) {
            console.warn("WARNING: " + text)
        },

        /**
         * @private
         * @function
         * @name vs.log.alert
         * @description Write text to the log preceded by 'ALERT:' and pop up an alert dialog box with the text
         * @param {String} text The text to show in the alert.
         */
        alert: function (text) {
            vs.log.write("ALERT:   " + text)
            alert(text); // eslint-disable-line no-alert
        },

        /**
         * @private
         * @function
         * @name vs.log.assert
         * @description If condition is false, then write text to the log preceded by 'ASSERT:'.
         * @param {Boolean} condition The condition to test.
         * @param {String} text The text to show if the condition is false.
         */
        assert: function (condition, text) {
            if (condition === false) {
                vs.log.write("ASSERT:  " + text)
            }
        }
    }

    return {
        log: log
    }
}())

// Shortcuts to logging functions
// ESLint disabled here because these vars may be accessed from other files
// once all sources have been concatenated together and wrapped by the closure.
/* eslint-disable no-unused-vars */
var logINFO = vs.log.info
var logDEBUG = vs.log.debug
var logWARNING = vs.log.warning
var logERROR = vs.log.error

var logALERT = vs.log.alert
var logASSERT = vs.log.assert
/* eslint-enable no-unused-vars */
