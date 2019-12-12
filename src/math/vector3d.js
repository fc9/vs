Object.assign(pc, (function () {
    'use strict'

    /**
     * @constructor
     * @name vs.Vector3d
     * @classdesc A 3-dimensional vector.
     * @description Creates a new Vector3d object.
     * @param {Number|Number[]} [x] The x value. If x is an array of length 3, the array will be used to populate all components.
     * @param {Number} [y] The y value.
     * @param {Number} [z] The z value.
     * @example
     * var v = new vs.Vector3d(1, 2, 3)
     */
    var Vector3d = function (x, y, z) {
        if (x && x.length === 3) {
            this.x = x[0]
            this.y = x[1]
            this.z = x[2]
        } else {
            this.x = x || 0
            this.y = y || 0
            this.z = z || 0
        }
    }

    Object.assign(Vector3d.prototype, {
        /**
         * @function
         * @name vs.Vector3d#add
         * @description Adds a 3-dimensional vector to another in place.
         * @param {vs.Vector3d} rhs The vector to add to the specified vector.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(10, 10, 10)
         * var b = new vs.Vector3d(20, 20, 20)
         *
         * a.add(b)
         *
         * // Should output [30, 30, 30]
         * console.log("The result of the addition is: " + a.toString())
         */
        add: function (rhs) {
            this.x += rhs.x
            this.y += rhs.y
            this.z += rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#add2
         * @description Adds two 3-dimensional vectors together and returns the result.
         * @param {vs.Vector3d} lhs The first vector operand for the addition.
         * @param {vs.Vector3d} rhs The second vector operand for the addition.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(10, 10, 10)
         * var b = new vs.Vector3d(20, 20, 20)
         * var r = new vs.Vector3d()
         *
         * r.add2(a, b)
         * // Should output [30, 30, 30]
         *
         * console.log("The result of the addition is: " + r.toString())
         */
        add2: function (lhs, rhs) {
            this.x = lhs.x + rhs.x
            this.y = lhs.y + rhs.y
            this.z = lhs.z + rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#clone
         * @description Returns an identical copy of the specified 3-dimensional vector.
         * @returns {vs.Vector3d} A 3-dimensional vector containing the result of the cloning.
         * @example
         * var v = new vs.Vector3d(10, 20, 30)
         * var vclone = v.clone()
         * console.log("The result of the cloning is: " + vclone.toString())
         */
        clone: function () {
            return new Vector3d().copy(this)
        },

        /**
         * @function
         * @name vs.Vector3d#copy
         * @description Copied the contents of a source 3-dimensional vector to a destination 3-dimensional vector.
         * @param {vs.Vector3d} rhs A vector to copy to the specified vector.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var src = new vs.Vector3d(10, 20, 30)
         * var dst = new vs.Vector3d()
         *
         * dst.copy(src)
         *
         * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"))
         */
        copy: function (rhs) {
            this.x = rhs.x
            this.y = rhs.y
            this.z = rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#cross
         * @description Returns the result of a cross product operation performed on the two specified 3-dimensional vectors.
         * @param {vs.Vector3d} lhs The first 3-dimensional vector operand of the cross product.
         * @param {vs.Vector3d} rhs The second 3-dimensional vector operand of the cross product.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var back = new vs.Vector3d().cross(pc.Vector3d.RIGHT, vs.Vector3d.UP)
         *
         * // Should print the Z axis (i.e. [0, 0, 1])
         * console.log("The result of the cross product is: " + back.toString())
         */
        cross: function (lhs, rhs) {
            // Create temporary variables in case lhs or rhs are 'this'
            var lx = lhs.x
            var ly = lhs.y
            var lz = lhs.z
            var rx = rhs.x
            var ry = rhs.y
            var rz = rhs.z

            this.x = ly * rz - ry * lz
            this.y = lz * rx - rz * lx
            this.z = lx * ry - rx * ly

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#distance
         * @description Returns the distance between the two specified 3-dimensional vectors.
         * @param {vs.Vector3d} rhs The second 3-dimensional vector to test.
         * @returns {Number} The distance between the two vectors.
         * @example
         * var v1 = new vs.Vector3d(5, 10, 20)
         * var v2 = new vs.Vector3d(10, 20, 40)
         * var d = v1.distance(v2)
         * console.log("The between v1 and v2 is: " + d)
         */
        distance: function (rhs) {
            var x = this.x - rhs.x
            var y = this.y - rhs.y
            var z = this.z - rhs.z
            return Math.sqrt(x * x + y * y + z * z)
        },

        /**
         * @function
         * @name vs.Vector3d#dot
         * @description Returns the result of a dot product operation performed on the two specified 3-dimensional vectors.
         * @param {vs.Vector3d} rhs The second 3-dimensional vector operand of the dot product.
         * @returns {Number} The result of the dot product operation.
         * @example
         * var v1 = new vs.Vector3d(5, 10, 20)
         * var v2 = new vs.Vector3d(10, 20, 40)
         * var v1dotv2 = v1.dot(v2)
         * console.log("The result of the dot product is: " + v1dotv2)
         */
        dot: function (rhs) {
            return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z
        },

        /**
         * @function
         * @name vs.Vector3d#equals
         * @description Reports whether two vectors are equal.
         * @param {vs.Vector3d} rhs The vector to compare to the specified vector.
         * @returns {Boolean} true if the vectors are equal and false otherwise.
         * @example
         * var a = new vs.Vector3d(1, 2, 3)
         * var b = new vs.Vector3d(4, 5, 6)
         * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"))
         */
        equals: function (rhs) {
            return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z
        },

        /**
         * @function
         * @name vs.Vector3d#length
         * @description Returns the magnitude of the specified 3-dimensional vector.
         * @returns {Number} The magnitude of the specified 3-dimensional vector.
         * @example
         * var vec = new vs.Vector3d(3, 4, 0)
         * var len = vec.length()
         * // Should output 5
         * console.log("The length of the vector is: " + len)
         */
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },

        /**
         * @function
         * @name vs.Vector3d#lengthSq
         * @description Returns the magnitude squared of the specified 3-dimensional vector.
         * @returns {Number} The magnitude of the specified 3-dimensional vector.
         * @example
         * var vec = new vs.Vector3d(3, 4, 0)
         * var len = vec.lengthSq()
         * // Should output 25
         * console.log("The length squared of the vector is: " + len)
         */
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },

        /**
         * @function
         * @name vs.Vector3d#lerp
         * @description Returns the result of a linear interpolation between two specified 3-dimensional vectors.
         * @param {vs.Vector3d} lhs The 3-dimensional to interpolate from.
         * @param {vs.Vector3d} rhs The 3-dimensional to interpolate to.
         * @param {Number} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
         * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
         * a ray extrapolated from this line.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(0, 0, 0)
         * var b = new vs.Vector3d(10, 10, 10)
         * var r = new vs.Vector3d()
         *
         * r.lerp(a, b, 0);   // r is equal to a
         * r.lerp(a, b, 0.5); // r is 5, 5, 5
         * r.lerp(a, b, 1);   // r is equal to b
         */
        lerp: function (lhs, rhs, alpha) {
            this.x = lhs.x + alpha * (rhs.x - lhs.x)
            this.y = lhs.y + alpha * (rhs.y - lhs.y)
            this.z = lhs.z + alpha * (rhs.z - lhs.z)

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#mul
         * @description Multiplies a 3-dimensional vector to another in place.
         * @param {vs.Vector3d} rhs The 3-dimensional vector used as the second multiplicand of the operation.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(2, 3, 4)
         * var b = new vs.Vector3d(4, 5, 6)
         *
         * a.mul(b)
         *
         * // Should output 8, 15, 24
         * console.log("The result of the multiplication is: " + a.toString())
         */
        mul: function (rhs) {
            this.x *= rhs.x
            this.y *= rhs.y
            this.z *= rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#mul2
         * @description Returns the result of multiplying the specified 3-dimensional vectors together.
         * @param {vs.Vector3d} lhs The 3-dimensional vector used as the first multiplicand of the operation.
         * @param {vs.Vector3d} rhs The 3-dimensional vector used as the second multiplicand of the operation.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(2, 3, 4)
         * var b = new vs.Vector3d(4, 5, 6)
         * var r = new vs.Vector3d()
         *
         * r.mul2(a, b)
         *
         * // Should output 8, 15, 24
         * console.log("The result of the multiplication is: " + r.toString())
         */
        mul2: function (lhs, rhs) {
            this.x = lhs.x * rhs.x
            this.y = lhs.y * rhs.y
            this.z = lhs.z * rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#normalize
         * @description Returns the specified 3-dimensional vector copied and converted to a unit vector.
         * If the vector has a length of zero, the vector's elements will be set to zero.
         * @returns {vs.Vector3d} The result of the normalization.
         * @example
         * var v = new vs.Vector3d(25, 0, 0)
         *
         * v.normalize()
         *
         * // Should output 1, 0, 0, 0
         * console.log("The result of the vector normalization is: " + v.toString())
         */
        normalize: function () {
            var lengthSq = this.x * this.x + this.y * this.y + this.z * this.z
            if (lengthSq > 0) {
                var invLength = 1 / Math.sqrt(lengthSq)
                this.x *= invLength
                this.y *= invLength
                this.z *= invLength
            }

            return this
        },

        /**
         * @function
         * @name  vs.Vector3d#project
         * @description Projects this 3-dimensional vector onto the specified vector.
         * @param {vs.Vector3d} rhs The vector onto which the original vector will be projected on.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var v = new vs.Vector3d(5, 5, 5)
         * var normal = new vs.Vector3d(1, 0, 0)
         *
         * v.project(normal)
         *
         * // Should output 5, 0, 0
         * console.log("The result of the vector projection is: " + v.toString())
         */
        project: function (rhs) {
            var a_dot_b = this.x * rhs.x + this.y * rhs.y + this.z * rhs.z
            var b_dot_b = rhs.x * rhs.x + rhs.y * rhs.y + rhs.z * rhs.z
            var s = a_dot_b / b_dot_b
            this.x = rhs.x * s
            this.y = rhs.y * s
            this.z = rhs.z * s
            return this
        },

        /**
         * @function
         * @name vs.Vector3d#scale
         * @description Scales each dimension of the specified 3-dimensional vector by the supplied
         * scalar value.
         * @param {Number} scalar The value by which each vector component is multiplied.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var v = new vs.Vector3d(2, 4, 8)
         *
         * // Multiply by 2
         * v.scale(2)
         *
         * // Negate
         * v.scale(-1)
         *
         * // Divide by 2
         * v.scale(0.5)
         */
        scale: function (scalar) {
            this.x *= scalar
            this.y *= scalar
            this.z *= scalar

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#set
         * @description Sets the specified 3-dimensional vector to the supplied numerical values.
         * @param {Number} x The value to set on the first component of the vector.
         * @param {Number} y The value to set on the second component of the vector.
         * @param {Number} z The value to set on the third component of the vector.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var v = new vs.Vector3d()
         * v.set(5, 10, 20)
         *
         * // Should output 5, 10, 20
         * console.log("The result of the vector set is: " + v.toString())
         */
        set: function (x, y, z) {
            this.x = x
            this.y = y
            this.z = z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#sub
         * @description Subtracts a 3-dimensional vector from another in place.
         * @param {vs.Vector3d} rhs The vector to add to the specified vector.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(10, 10, 10)
         * var b = new vs.Vector3d(20, 20, 20)
         *
         * a.sub(b)
         *
         * // Should output [-10, -10, -10]
         * console.log("The result of the addition is: " + a.toString())
         */
        sub: function (rhs) {
            this.x -= rhs.x
            this.y -= rhs.y
            this.z -= rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#sub2
         * @description Subtracts two 3-dimensional vectors from one another and returns the result.
         * @param {vs.Vector3d} lhs The first vector operand for the addition.
         * @param {vs.Vector3d} rhs The second vector operand for the addition.
         * @returns {vs.Vector3d} Self for chaining.
         * @example
         * var a = new vs.Vector3d(10, 10, 10)
         * var b = new vs.Vector3d(20, 20, 20)
         * var r = new vs.Vector3d()
         *
         * r.sub2(a, b)
         *
         * // Should output [-10, -10, -10]
         * console.log("The result of the addition is: " + r.toString())
         */
        sub2: function (lhs, rhs) {
            this.x = lhs.x - rhs.x
            this.y = lhs.y - rhs.y
            this.z = lhs.z - rhs.z

            return this
        },

        /**
         * @function
         * @name vs.Vector3d#toString
         * @description Converts the vector to string form.
         * @returns {String} The vector in string form.
         * @example
         * var v = new vs.Vector3d(20, 10, 5)
         * // Should output '[20, 10, 5]'
         * console.log(v.toString())
         */
        toString: function () {
            return '[' + this.x + ', ' + this.y + ', ' + this.z + ']'
        }
    })

    /**
     * @name vs.Vector3d#x
     * @type Number
     * @description The first component of the vector.
     * @example
     * var vec = new vs.Vector3d(10, 20, 30)
     *
     * // Get x
     * var x = vec.x
     *
     * // Set x
     * vec.x = 0
     */
    /**
     * @name vs.Vector3d#y
     * @type Number
     * @description The second component of the vector.
     * @example
     * var vec = new vs.Vector3d(10, 20, 30)
     *
     * // Get y
     * var y = vec.y
     *
     * // Set y
     * vec.y = 0
     */
    /**
     * @name vs.Vector3d#z
     * @type Number
     * @description The third component of the vector.
     * @example
     * var vec = new vs.Vector3d(10, 20, 30)
     *
     * // Get z
     * var z = vec.z
     *
     * // Set z
     * vec.z = 0
     */

    /**
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.BACK
     * @description A constant vector set to [0, 0, 1].
     */
    Object.defineProperty(Vector3d, 'BACK', {
        get: (function () {
            var back = new Vector3d(0, 0, 1)
            return function () {
                return back
            }
        }())
    })

    /**
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.DOWN
     * @description A constant vector set to [0, -1, 0].
     */
    Object.defineProperty(Vector3d, 'DOWN', {
        get: (function () {
            var down = new Vector3d(0, -1, 0)
            return function () {
                return down
            }
        }())
    })

    /**
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.FORWARD
     * @description A constant vector set to [0, 0, -1].
     */
    Object.defineProperty(Vector3d, 'FORWARD', {
        get: (function () {
            var forward = new Vector3d(0, 0, -1)
            return function () {
                return forward
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.LEFT
     * @description A constant vector set to [-1, 0, 0].
     */
    Object.defineProperty(Vector3d, 'LEFT', {
        get: (function () {
            var left = new Vector3d(-1, 0, 0)
            return function () {
                return left
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.ONE
     * @description A constant vector set to [1, 1, 1].
     */
    Object.defineProperty(Vector3d, 'ONE', {
        get: (function () {
            var one = new Vector3d(1, 1, 1)
            return function () {
                return one
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.RIGHT
     * @description A constant vector set to [1, 0, 0].
     */
    Object.defineProperty(Vector3d, 'RIGHT', {
        get: (function () {
            var right = new Vector3d(1, 0, 0)
            return function () {
                return right
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.UP
     * @description A constant vector set to [0, 1, 0].
     */
    Object.defineProperty(Vector3d, 'UP', {
        get: (function () {
            var down = new Vector3d(0, 1, 0)
            return function () {
                return down
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector3d
     * @name vs.Vector3d.ZERO
     * @description A constant vector set to [0, 0, 0].
     */
    Object.defineProperty(Vector3d, 'ZERO', {
        get: (function () {
            var zero = new Vector3d(0, 0, 0)
            return function () {
                return zero
            }
        }())
    })

    return {
        Vector3d: Vector3d
    }
}()))
