/**
 * @private
 * @function
 * @name _typeLookup
 * @description Create look up table for types
 */
var _typeLookup = function () {
    var result = { }
    var names = ["Array", "Object", "Function", "Date", "RegExp", "Float32Array"]

    for (var i = 0; i < names.length; i++)
        result["[object " + names[i] + "]"] = names[i].toLowerCase()

    return result
}()

/**
 * @name vs
 * @namespace
 * @description Root namespace for the VS Engine
 */
var vs = {
    version: "__CURRENT_SDK_VERSION__",
    revision: "__REVISION__",
    config: { },
    common: { },
    apps: { }, // Storage for the applications using the PlayCanvas Engine
    data: { }, // Storage for exported entity data

    /**
     * @private
     * @function
     * @name vs.unpack
     * @description Copy a set of common PlayCanvas functions/classes/namespaces into the global namespace
     */
    unpack: function () {
        console.warn("vs.unpack has been deprecated and will be removed shortly. Please update your code.")
    },

    /**
     * @private
     * @function
     * @name vs.makeArray
     * @description Convert an array-like object into a normal array.
     * For example, this is useful for converting the arguments object into an array.
     * @param {Object} arr The array to convert
     * @returns {Array} An array
     */
    makeArray: function (arr) {
        var i,
            ret = [],
            length = arr.length

        for (i = 0; i < length; ++i) {
            ret.push(arr[i])
        }

        return ret
    },

    /**
     * @private
     * @function
     * @name vs.type
     * @description Extended typeof() function, returns the type of the object.
     * @param {Object} obj The object to get the type of
     * @returns {String} The type string: "null", "undefined", "number", "string", "boolean", "array", "object", "function", "date", "regexp" or "float32array"
     */
    type: function (obj) {
        if (obj === null) {
            return "null"
        }

        var type = typeof obj

        if (type === "undefined" || type === "number" || type === "string" || type === "boolean") {
            return type
        }

        return _typeLookup[Object.prototype.toString.call(obj)]
    },

    /**
     * @private
     * @function
     * @name vs.extend
     * @description Merge the contents of two objects into a single object
     * @param {Object} target The target object of the merge
     * @param {Object} ex The object that is merged with target
     * @returns {Object} The target object
     * @example
     * var A = {a: function() {console.log(this.a}}
     * var B = {b: function() {console.log(this.b}}
     *
     * vs.extend(A,B)
     * A.a()
     * // logs "a"
     * A.b()
     * // logs "b"
     */
    extend: function (target, ex) {
        var prop,
            copy

        for (prop in ex) {
            copy = ex[prop]
            if (pc.type(copy) == "object") {
                target[prop] = vs.extend({}, copy)
            } else if (pc.type(copy) == "array") {
                target[prop] = vs.extend([], copy)
            } else {
                target[prop] = copy
            }
        }

        return target
    },


    /**
     * @private
     * @function
     * @name vs.isDefined
     * @description Return true if the Object is not undefined
     * @param {Object} o The Object to test
     * @returns {Boolean} True if the Object is not undefined
     */
    isDefined: function (o) {
        var a
        return (o !== a)
    }
}

if (typeof exports !== 'undefined')
    exports.vs = vs

/*
export { core as default }

class Core {

    constructor(body) { // used
        this.utc = Date.now()
        this.body = body
        this.running = false
        return this
    }

    static start() { // used
        this.running = true
    }
}

const core = (q, d = document) =>
    new (Proxy.bind(d))(
        // object
        new Core(q, (typeof q === 'object') ? q : /#\S+$/.test(q) ? d.querySelector(q) : [...d.querySelectorAll(q)][0]),
        // handler
        {
            set: function (target, property, value) {
                //console.log('SET', property)
                target.node[property.toString()] = value
                return true
            },
            get: function (target, property, receiver) {
                //console.log('GET', property, `(${typeof property})`)
                let native = target.node[property.toString()]
                //console.log('native', native, `(${typeof native})`)
                let pseudo = Reflect.get(target, property, receiver)
                //console.log('pseudo', pseudo, `(${typeof pseudo})`)
                //if(property in target) console.log ('property in target')
                return (typeof native !== 'undefined')
                    ? (typeof native === 'function')
                        ? function (...args) {
                            //console.log('CALL', property, args)
                            return native.apply(this.node, args)
                        }
                        : native
                    : (typeof pseudo === 'function') ? pseudo : pseudo
            }
        }
    )

//_start = Core.start.bind(document) // used
*/