export { physical as default }

class Physical {

    static recurringTimer(callback, delay, duration, reseiver) { // used
        let timer = function (callback, delay, duration) {
            var timerId, start, remaining = delay
            this.pause = function () {
                window.clearTimeout(timerId)
                remaining -= new Date() - start
            }
            var resume = function () {
                if (duration > 0) {
                    start = new Date()
                    timerId = window.setTimeout(function () {
                        duration -= delay
                        remaining = delay
                        resume()
                        callback()
                    }, remaining)
                } else {
                    reseiver()
                }
            }
            this.destroe = function () {
                this.pause()
                duration = 0
                this.resume()
            }
            this.resume = resume
            this.resume()
            return this
        }
        return new timer(callback, _render.animation.adjustDelay(delay), duration)
    }

    static timer(callback, delay) { // used
        let timer = function (callback, delay) {
            var timerId, start, remaining = delay
            this.pause = function () {
                window.clearTimeout(timerId)
                remaining -= new Date() - start
            }
            this.resume = function () {
                start = new Date()
                window.clearTimeout(timerId)
                timerId = window.setTimeout(callback, remaining)
            }
            this.resume()
        }
        return new timer(callback, _render.animation.Render.adjustDelay(delay))
    }

}

const physical = Physical