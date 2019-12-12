/*
class Animation {

    // Usage: core.postMessage(msg)
    constructor(core) {
        this.core = core
        this.isRunning = false
    }

    static handleMessage(message) {
        switch (message.id) {
            // Parar
            case VS_STOP:
                this.isRunning = false
                vs.render.healthBar.stop()
                break;
            // Rodar
            case VS_PLAY:
                this.isRunning = true
                break;
            // Pausar jogo
            case VS_PAUSE:
                this.isRunning = false
                break;
            default:
        }
    }

    static adjustDelay(delay) {
        return delay < (1000 / _RENDER_FPS) ? 1000 / _RENDER_FPS : delay
    }

    static set(_object, className, timeout = 333) { // used
        if (nameName !== null) {
            _object.classList.add(className)
            setTimeout(function () {
                _object.classList.remove(className)
            }, (timeout < 16.7) ? 16.7 : timeout)
        }
    }
}
*/

Object.assign(vs, function () {
    /**
     * @private
     * @constructor
     * @name vs.Key
     * @classdesc
     * @description
     * @param {*} time
     * @param {*} position
     * @param {*} rotation
     * @param {*} scale
     */
    var Key = function Key(time, position, rotation, scale) {
        this.time = time
        this.position = position
        this.rotation = rotation
        this.scale = scale
    };

    /**
     * @constructor
     * @name vs.Node
     * @classdesc A animation node has a name and contains an array of keyframes.
     * @description Create a new animation node.
     */
    var Node = function Node() {
        this._name = ""
        this._keys = []
    };

    /**
     * @constructor
     * @name vs.Animation
     * @classdesc An animation is a sequence of keyframe arrays which map to the nodes of a skeletal hierarchy.
     * It controls how the nodes of the hierarchy are transformed over time.
     * @property {String} name Human-readable name of the animation
     * @property {Number} duration Duration of the animation in seconds.
     */
    var Animation = function Animation() {
        this.name = ''
        this.duration = 0
        this._nodes = []
        this._nodeDict = {}
    };

    Object.assign(Animation.prototype, {
        /**
         * @private
         * @deprecated
         * @function
         * @name vs.Animation#getDuration
         * @description Returns the duration of the animation in seconds.
         * @returns {Number} The duration of the animation in seconds.
         */
        getDuration: function () {
            return this.duration
        },

        /**
         * @private
         * @deprecated
         * @function
         * @name vs.Animation#getName
         * @description Returns the human-readable name of the animation.
         * @returns {String} The name of the animation.
         */
        getName: function () {
            return this.name
        },

        /**
         * @function
         * @name vs.Animation#getNode
         * @description Gets a {@link vs.Node} by name
         * @param {String} name The name of the vs.Node
         * @returns {vs.Node} The vs.Node with the specified name
         */
        getNode: function (name) {
            return this._nodeDict[name]
        },

        /**
         * @private
         * @deprecated
         * @function
         * @name vs.Animation#getNodes
         * @description Gets the {@link vs.Node}s of this {@link vs.Animation}
         * @returns {vs.Node[]} An array of nodes.
         */
        getNodes: function () {
            return this._nodes
        },

        /**
         * @private
         * @deprecated
         * @function
         * @name vs.Animation#setDuration
         * @description Sets the duration of the specified animation in seconds.
         * @param {Number} duration The duration of the animation in seconds.
         */
        setDuration: function (duration) {
            this.duration = duration
        },

        /**
         * @private
         * @deprecated
         * @function
         * @name vs.Animation#setName
         * @description Sets the human-readable name of the specified animation.
         * @param {String} name The new name for the animation.
         */
        setName: function (name) {
            this.name = name
        },

        /**
         * @function
         * @name vs.Animation#addNode
         * @description Adds a node to the internal nodes array.
         * @param {vs.Node} node The node to add.
         */
        addNode: function (node) {
            this._nodes.push(node)
            this._nodeDict[node._name] = node
        }

    })

    /**
     * @readonly
     * @name vs.Animation#nodes
     * @type vs.Node[]
     * @description A read-only property to get array of animation nodes
     */
    Object.defineProperty(Animation.prototype, 'nodes', {
        get: function () {
            return this._nodes
        }
    });

    return {
        Animation: Animation,
        Key: Key,
        Node: Node
    };
}());