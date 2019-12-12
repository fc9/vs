Object.assign(vs, (function () {
    'use strict'

    /**
     * @constructor
     * @name vs.Vector4d
     * @classdesc A 4-dimensional vector.
     * @description Creates a new Vector4d object.
     * @param {Number|Number[]} [x] The x value. If x is an array of length 4, the array will be used to populate all components.
     * @param {Number} [y] The y value.
     * @param {Number} [z] The z value.
     * @param {Number} [w] The w value.
     * @example
     * var v = new vs.Vector4d(1, 2, 3, 4)
     */
    var Vector4d = function (x, y, z, w) {
        if (x && x.length === 4) {
            this.x = x[0]
            this.y = x[1]
            this.z = x[2]
            this.w = x[3]
        } else {
            this.x = x || 0
            this.y = y || 0
            this.z = z || 0
            this.w = w || 0
        }
    }

    Object.assign(Vector4d.prototype, {
        /**
         * @function
         * @name vs.Vector4d#add
         * @description Adds a 4-dimensional vector to another in place.
         * @param {vs.Vector4d} rhs The vector to add to the specified vector.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(10, 10, 10, 10)
         * var b = new vs.Vector4d(20, 20, 20, 20)
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
            this.w += rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#add2
         * @description Adds two 4-dimensional vectors together and returns the result.
         * @param {vs.Vector4d} lhs The first vector operand for the addition.
         * @param {vs.Vector4d} rhs The second vector operand for the addition.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(10, 10, 10, 10)
         * var b = new vs.Vector4d(20, 20, 20, 20)
         * var r = new vs.Vector4d()
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
            this.w = lhs.w + rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#clone
         * @description Returns an identical copy of the specified 4-dimensional vector.
         * @returns {vs.Vector4d} A 4-dimensional vector containing the result of the cloning.
         * @example
         * var v = new vs.Vector4d(10, 20, 30, 40)
         * var vclone = v.clone()
         * console.log("The result of the cloning is: " + vclone.toString())
         */
        clone: function () {
            return new Vector4d().copy(this)
        },

        /**
         * @function
         * @name vs.Vector4d#copy
         * @description Copied the contents of a source 4-dimensional vector to a destination 4-dimensional vector.
         * @param {vs.Vector4d} rhs A vector to copy to the specified vector.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var src = new vs.Vector4d(10, 20, 30, 40)
         * var dst = new vs.Vector4d()
         *
         * dst.copy(src)
         *
         * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"))
         */
        copy: function (rhs) {
            this.x = rhs.x
            this.y = rhs.y
            this.z = rhs.z
            this.w = rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#dot
         * @description Returns the result of a dot product operation performed on the two specified 4-dimensional vectors.
         * @param {vs.Vector4d} rhs The second 4-dimensional vector operand of the dot product.
         * @returns {Number} The result of the dot product operation.
         * @example
         * var v1 = new vs.Vector4d(5, 10, 20, 40)
         * var v2 = new vs.Vector4d(10, 20, 40, 80)
         * var v1dotv2 = v1.dot(v2)
         * console.log("The result of the dot product is: " + v1dotv2)
         */
        dot: function (rhs) {
            return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z + this.w * rhs.w
        },

        /**
         * @function
         * @name vs.Vector4d#equals
         * @description Reports whether two vectors are equal.
         * @param {vs.Vector4d} rhs The vector to compare to the specified vector.
         * @returns {Boolean} true if the vectors are equal and false otherwise.
         * @example
         * var a = new vs.Vector4d(1, 2, 3, 4)
         * var b = new vs.Vector4d(5, 6, 7, 8)
         * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"))
         */
        equals: function (rhs) {
            return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z && this.w === rhs.w
        },

        /**
         * @function
         * @name vs.Vector4d#length
         * @description Returns the magnitude of the specified 4-dimensional vector.
         * @returns {Number} The magnitude of the specified 4-dimensional vector.
         * @example
         * var vec = new vs.Vector4d(3, 4, 0, 0)
         * var len = vec.length()
         * // Should output 5
         * console.log("The length of the vector is: " + len)
         */
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },

        /**
         * @function
         * @name vs.Vector4d#lengthSq
         * @description Returns the magnitude squared of the specified 4-dimensional vector.
         * @returns {Number} The magnitude of the specified 4-dimensional vector.
         * @example
         * var vec = new vs.Vector4d(3, 4, 0)
         * var len = vec.lengthSq()
         * // Should output 25
         * console.log("The length squared of the vector is: " + len)
         */
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },

        /**
         * @function
         * @name vs.Vector4d#lerp
         * @description Returns the result of a linear interpolation between two specified 4-dimensional vectors.
         * @param {vs.Vector4d} lhs The 4-dimensional to interpolate from.
         * @param {vs.Vector4d} rhs The 4-dimensional to interpolate to.
         * @param {Number} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
         * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
         * a ray extrapolated from this line.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(0, 0, 0, 0)
         * var b = new vs.Vector4d(10, 10, 10, 10)
         * var r = new vs.Vector4d()
         *
         * r.lerp(a, b, 0);   // r is equal to a
         * r.lerp(a, b, 0.5); // r is 5, 5, 5, 5
         * r.lerp(a, b, 1);   // r is equal to b
         */
        lerp: function (lhs, rhs, alpha) {
            this.x = lhs.x + alpha * (rhs.x - lhs.x)
            this.y = lhs.y + alpha * (rhs.y - lhs.y)
            this.z = lhs.z + alpha * (rhs.z - lhs.z)
            this.w = lhs.w + alpha * (rhs.w - lhs.w)

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#mul
         * @description Multiplies a 4-dimensional vector to another in place.
         * @param {vs.Vector4d} rhs The 4-dimensional vector used as the second multiplicand of the operation.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(2, 3, 4, 5)
         * var b = new vs.Vector4d(4, 5, 6, 7)
         *
         * a.mul(b)
         *
         * // Should output 8, 15, 24, 35
         * console.log("The result of the multiplication is: " + a.toString())
         */
        mul: function (rhs) {
            this.x *= rhs.x
            this.y *= rhs.y
            this.z *= rhs.z
            this.w *= rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#mul2
         * @description Returns the result of multiplying the specified 4-dimensional vectors together.
         * @param {vs.Vector4d} lhs The 4-dimensional vector used as the first multiplicand of the operation.
         * @param {vs.Vector4d} rhs The 4-dimensional vector used as the second multiplicand of the operation.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(2, 3, 4, 5)
         * var b = new vs.Vector4d(4, 5, 6, 7)
         * var r = new vs.Vector4d()
         *
         * r.mul2(a, b)
         *
         * // Should output 8, 15, 24, 35
         * console.log("The result of the multiplication is: " + r.toString())
         */
        mul2: function (lhs, rhs) {
            this.x = lhs.x * rhs.x
            this.y = lhs.y * rhs.y
            this.z = lhs.z * rhs.z
            this.w = lhs.w * rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#normalize
         * @description Returns the specified 4-dimensional vector copied and converted to a unit vector.
         * If the vector has a length of zero, the vector's elements will be set to zero.
         * @returns {vs.Vector4d} The result of the normalization.
         * @example
         * var v = new vs.Vector4d(25, 0, 0, 0)
         *
         * v.normalize()
         *
         * // Should output 1, 0, 0, 0
         * console.log("The result of the vector normalization is: " + v.toString())
         */
        normalize: function () {
            var lengthSq = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            if (lengthSq > 0) {
                var invLength = 1 / Math.sqrt(lengthSq)
                this.x *= invLength
                this.y *= invLength
                this.z *= invLength
                this.w *= invLength
            }

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#scale
         * @description Scales each dimension of the specified 4-dimensional vector by the supplied
         * scalar value.
         * @param {Number} scalar The value by which each vector component is multiplied.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var v = new vs.Vector4d(2, 4, 8, 16)
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
            this.w *= scalar

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#set
         * @description Sets the specified 4-dimensional vector to the supplied numerical values.
         * @param {Number} x The value to set on the first component of the vector.
         * @param {Number} y The value to set on the second component of the vector.
         * @param {Number} z The value to set on the third component of the vector.
         * @param {Number} w The value to set on the fourth component of the vector.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var v = new vs.Vector4d()
         * v.set(5, 10, 20, 40)
         *
         * // Should output 5, 10, 20, 40
         * console.log("The result of the vector set is: " + v.toString())
         */
        set: function (x, y, z, w) {
            this.x = x
            this.y = y
            this.z = z
            this.w = w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#sub
         * @description Subtracts a 4-dimensional vector from another in place.
         * @param {vs.Vector4d} rhs The vector to add to the specified vector.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(10, 10, 10, 10)
         * var b = new vs.Vector4d(20, 20, 20, 20)
         *
         * a.sub(b)
         *
         * // Should output [-10, -10, -10, -10]
         * console.log("The result of the subtraction is: " + a.toString())
         */
        sub: function (rhs) {
            this.x -= rhs.x
            this.y -= rhs.y
            this.z -= rhs.z
            this.w -= rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#sub2
         * @description Subtracts two 4-dimensional vectors from one another and returns the result.
         * @param {vs.Vector4d} lhs The first vector operand for the subtraction.
         * @param {vs.Vector4d} rhs The second vector operand for the subtraction.
         * @returns {vs.Vector4d} Self for chaining.
         * @example
         * var a = new vs.Vector4d(10, 10, 10, 10)
         * var b = new vs.Vector4d(20, 20, 20, 20)
         * var r = new vs.Vector4d()
         *
         * r.sub2(a, b)
         *
         * // Should output [-10, -10, -10, -10]
         * console.log("The result of the subtraction is: " + r.toString())
         */
        sub2: function (lhs, rhs) {
            this.x = lhs.x - rhs.x
            this.y = lhs.y - rhs.y
            this.z = lhs.z - rhs.z
            this.w = lhs.w - rhs.w

            return this
        },

        /**
         * @function
         * @name vs.Vector4d#toString
         * @description Converts the vector to string form.
         * @returns {String} The vector in string form.
         * @example
         * var v = new vs.Vector4d(20, 10, 5, 0)
         * // Should output '[20, 10, 5, 0]'
         * console.log(v.toString())
         */
        toString: function () {
            return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']'
        }
    })

    /**
     * @field
     * @type Number
     * @name vs.Vector4d#x
     * @description The first component of the vector.
     * @example
     * var vec = new vs.Vector4d(10, 20, 30, 40)
     *
     * // Get x
     * var x = vec.x
     *
     * // Set x
     * vec.x = 0
     */
    /**
     * @field
     * @type Number
     * @name vs.Vector4d#y
     * @description The second component of the vector.
     * @example
     * var vec = new vs.Vector4d(10, 20, 30, 40)
     *
     * // Get y
     * var y = vec.y
     *
     * // Set y
     * vec.y = 0
     */
    /**
     * @field
     * @type Number
     * @name vs.Vector4d#z
     * @description The third component of the vector.
     * @example
     * var vec = new vs.Vector4d(10, 20, 30, 40)
     *
     * // Get z
     * var z = vec.z
     *
     * // Set z
     * vec.z = 0
     */
    /**
     * @field
     * @type Number
     * @name vs.Vector4d#w
     * @description The fourth component of the vector.
     * @example
     * var vec = new vs.Vector4d(10, 20, 30, 40)
     *
     * // Get w
     * var w = vec.w
     *
     * // Set w
     * vec.w = 0
     */

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector4d
     * @name vs.Vector4d.ONE
     * @description A constant vector set to [1, 1, 1, 1].
     */
    Object.defineProperty(Vector4d, 'ONE', {
        get: (function () {
            var one = new Vector4d(1, 1, 1, 1)
            return function () {
                return one
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Vector4d
     * @name vs.Vector4d.ZERO
     * @description A constant vector set to [0, 0, 0, 0].
     */
    Object.defineProperty(Vector4d, 'ZERO', {
        get: (function () {
            var zero = new Vector4d(0, 0, 0, 0)
            return function () {
                return zero
            }
        }())
    })

    return {
        Vector4d: Vector4d
    }
}()))
