Object.assign(vs, (function () {
    'use strict'

    /**
     * @constructor
     * @name vs.Quaternion
     * @classdesc A quaternion.
     * @description Create a new Quat object.
     * @param {Number|Number[]} [x] The quaternion's x component. Default value 0. If x is an array of length 4, the array will be used to populate all components.
     * @param {Number} [y] The quaternion's y component. Default value 0.
     * @param {Number} [z] The quaternion's z component. Default value 0.
     * @param {Number} [w] The quaternion's w component. Default value 1.
     */
    var Quaternion = function (x, y, z, w) {
        if (x && x.length === 4) {
            this.x = x[0]
            this.y = x[1]
            this.z = x[2]
            this.w = x[3]
        } else {
            this.x = (x === undefined) ? 0 : x
            this.y = (y === undefined) ? 0 : y
            this.z = (z === undefined) ? 0 : z
            this.w = (w === undefined) ? 1 : w
        }
    }

    /**
     * @field
     * @type Number
     * @name vs.Quaternion#x
     * @description The x component of the quaternion.
     * @example
     * var quat = new vs.Quaternion()
     *
     * // Get x
     * var x = quat.x
     *
     * // Set x
     * quat.x = 0
     */
    /**
     * @field
     * @type Number
     * @name vs.Quaternion#y
     * @description The y component of the quaternion.
     * @example
     * var quat = new vs.Quaternion()
     *
     * // Get y
     * var y = quat.y
     *
     * // Set y
     * quat.y = 0
     */
    /**
     * @field
     * @type Number
     * @name vs.Quaternion#z
     * @description The z component of the quaternion.
     * @example
     * var quat = new vs.Quaternion()
     *
     * // Get z
     * var z = quat.z
     *
     * // Set z
     * quat.z = 0
     */
    /**
     * @field
     * @type Number
     * @name vs.Quaternion#w
     * @description The w component of the quaternion.
     * @example
     * var quat = new vs.Quaternion()
     *
     * // Get w
     * var w = quat.w
     *
     * // Set w
     * quat.w = 0
     */

    Object.assign(Quaternion.prototype, {
        /**
         * @function
         * @name vs.Quaternion#clone
         * @description Returns an identical copy of the specified quaternion.
         * @returns {vs.Quaternion} A quaternion containing the result of the cloning.
         * @example
         * var q = new vs.Quaternion(-0.11, -0.15, -0.46, 0.87)
         * var qclone = q.clone()
         *
         * console.log("The result of the cloning is: " + q.toString())
         */
        clone: function () {
            return new vs.Quaternion(this.x, this.y, this.z, this.w)
        },

        conjugate: function () {
            this.x *= -1
            this.y *= -1
            this.z *= -1

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#copy
         * @description Copies the contents of a source quaternion to a destination quaternion.
         * @param {vs.Quaternion} rhs The quaternion to be copied.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var src = new vs.Quaternion()
         * var dst = new vs.Quaternion()
         * dst.copy(src, src)
         * console.log("The two quaternions are " + (src.equals(dst) ? "equal" : "different"))
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
         * @name vs.Quaternion#equals
         * @description Reports whether two quaternions are equal.
         * @param {vs.Quaternion} rhs The quaternion to be compared against.
         * @returns {Boolean} true if the quaternions are equal and false otherwise.
         * @example
         * var a = new vs.Quaternion()
         * var b = new vs.Quaternion()
         * console.log("The two quaternions are " + (a.equals(b) ? "equal" : "different"))
         */
        equals: function (rhs) {
            return ((this.x === rhs.x) && (this.y === rhs.y) && (this.z === rhs.z) && (this.w === rhs.w))
        },

        /**
         * @function
         * @name vs.Quaternion#getAxisAngle
         * @description Gets the rotation axis and angle for a given
         *  quaternion. If a quaternion is created with
         *  setFromAxisAngle, this method will return the same
         *  values as provided in the original parameter list
         *  OR functionally equivalent values.
         * @param {vs.Vector3d} axis The 3-dimensional vector to receive the axis of rotation.
         * @returns {Number} Angle, in degrees, of the rotation
         * @example
         * var q = new vs.Quaternion()
         * q.setFromAxisAngle(new vs.Vector3d(0, 1, 0), 90)
         * var v = new vs.Vector3d()
         * var angle = q.getAxisAngle(v)
         * // Should output 90
         * console.log(angle)
         * // Should output [0, 1, 0]
         * console.log(v.toString())
         */
        getAxisAngle: function (axis) {
            var rad = Math.acos(this.w) * 2
            var s = Math.sin(rad / 2)
            if (s !== 0) {
                axis.x = this.x / s
                axis.y = this.y / s
                axis.z = this.z / s
                if (axis.x < 0 || axis.y < 0 || axis.z < 0) {
                    // Flip the sign
                    axis.x *= -1
                    axis.y *= -1
                    axis.z *= -1
                    rad *= -1
                }
            } else {
                // If s is zero, return any axis (no rotation - axis does not matter)
                axis.x = 1
                axis.y = 0
                axis.z = 0
            }
            return rad * vs.math.RAD_TO_DEG
        },

        /**
         * @function
         * @name vs.Quaternion#getEulerAngles
         * @description Converts the supplied quaternion to Euler angles.
         * @param {vs.Vector3d} [eulers] The 3-dimensional vector to receive the Euler angles.
         * @returns {vs.Vector3d} The 3-dimensional vector holding the Euler angles that
         * correspond to the supplied quaternion.
         */
        getEulerAngles: function (eulers) {
            var x, y, z, qx, qy, qz, qw, a2

            eulers = (eulers === undefined) ? new vs.Vector3d() : eulers

            qx = this.x
            qy = this.y
            qz = this.z
            qw = this.w

            a2 = 2 * (qw * qy - qx * qz)
            if (a2 <= -0.99999) {
                x = 2 * Math.atan2(qx, qw)
                y = -Math.PI / 2
                z = 0
            } else if (a2 >= 0.99999) {
                x = 2 * Math.atan2(qx, qw)
                y = Math.PI / 2
                z = 0
            } else {
                x = Math.atan2(2 * (qw * qx + qy * qz), 1 - 2 * (qx * qx + qy * qy))
                y = Math.asin(a2)
                z = Math.atan2(2 * (qw * qz + qx * qy), 1 - 2 * (qy * qy + qz * qz))
            }

            return eulers.set(x, y, z).scale(pc.math.RAD_TO_DEG)
        },

        /**
         * @function
         * @name vs.Quaternion#invert
         * @description Generates the inverse of the specified quaternion.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * // Create a quaternion rotated 180 degrees around the y-axis
         * var rot = new vs.Quaternion().setFromEulerAngles(0, 180, 0)
         *
         * // Invert in place
         * rot.invert()
         */
        invert: function () {
            return this.conjugate().normalize()
        },

        /**
         * @function
         * @name vs.Quaternion#length
         * @description Returns the magnitude of the specified quaternion.
         * @returns {Number} The magnitude of the specified quaternion.
         * @example
         * var q = new vs.Quaternion(0, 0, 0, 5)
         * var len = q.length()
         * // Should output 5
         * console.log("The length of the quaternion is: " + len)
         */
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },

        /**
         * @function
         * @name vs.Quaternion#lengthSq
         * @description Returns the magnitude squared of the specified quaternion.
         * @returns {Number} The magnitude of the specified quaternion.
         * @example
         * var q = new vs.Quaternion(3, 4, 0)
         * var lenSq = q.lengthSq()
         * // Should output 25
         * console.log("The length squared of the quaternion is: " + lenSq)
         */
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },

        /**
         * @function
         * @name vs.Quaternion#mul
         * @description Returns the result of multiplying the specified quaternions together.
         * @param {vs.Quaternion} rhs The quaternion used as the second multiplicand of the operation.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var a = new vs.Quaternion().setFromEulerAngles(0, 30, 0)
         * var b = new vs.Quaternion().setFromEulerAngles(0, 60, 0)
         *
         * // a becomes a 90 degree rotation around the Y axis
         * // In other words, a = a * b
         * a.mul(b)
         *
         * console.log("The result of the multiplication is: " a.toString())
         */
        mul: function (rhs) {
            var q1x, q1y, q1z, q1w, q2x, q2y, q2z, q2w

            q1x = this.x
            q1y = this.y
            q1z = this.z
            q1w = this.w

            q2x = rhs.x
            q2y = rhs.y
            q2z = rhs.z
            q2w = rhs.w

            this.x = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y
            this.y = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z
            this.z = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x
            this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#mul2
         * @description Returns the result of multiplying the specified quaternions together.
         * @param {vs.Quaternion} lhs The quaternion used as the first multiplicand of the operation.
         * @param {vs.Quaternion} rhs The quaternion used as the second multiplicand of the operation.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var a = new vs.Quaternion().setFromEulerAngles(0, 30, 0)
         * var b = new vs.Quaternion().setFromEulerAngles(0, 60, 0)
         * var r = new vs.Quaternion()
         *
         * // r is set to a 90 degree rotation around the Y axis
         * // In other words, r = a * b
         * r.mul2(a, b)
         *
         * console.log("The result of the multiplication is: " r.toString())
         */
        mul2: function (lhs, rhs) {
            var q1x, q1y, q1z, q1w, q2x, q2y, q2z, q2w

            q1x = lhs.x
            q1y = lhs.y
            q1z = lhs.z
            q1w = lhs.w

            q2x = rhs.x
            q2y = rhs.y
            q2z = rhs.z
            q2w = rhs.w

            this.x = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y
            this.y = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z
            this.z = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x
            this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#normalize
         * @description Returns the specified quaternion converted in place to a unit quaternion.
         * @returns {vs.Quaternion} The result of the normalization.
         * @example
         * var v = new vs.Quaternion(0, 0, 0, 5)
         *
         * v.normalize()
         *
         * // Should output 0, 0, 0, 1
         * console.log("The result of the vector normalization is: " + v.toString())
         */
        normalize: function () {
            var len = this.length()
            if (len === 0) {
                this.x = this.y = this.z = 0
                this.w = 1
            } else {
                len = 1 / len
                this.x *= len
                this.y *= len
                this.z *= len
                this.w *= len
            }

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#set
         * @description Sets the specified quaternion to the supplied numerical values.
         * @param {Number} x The x component of the quaternion.
         * @param {Number} y The y component of the quaternion.
         * @param {Number} z The z component of the quaternion.
         * @param {Number} w The w component of the quaternion.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var q = new vs.Quaternion()
         * q.set(1, 0, 0, 0)
         *
         * // Should output 1, 0, 0, 0
         * console.log("The result of the vector set is: " + q.toString())
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
         * @name vs.Quaternion#setFromAxisAngle
         * @description Sets a quaternion from an angular rotation around an axis.
         * @param {vs.Vector3d} axis World space axis around which to rotate.
         * @param {Number} angle Angle to rotate around the given axis in degrees.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var q = new vs.Quaternion()
         * q.setFromAxisAngle(pc.Vector3d.UP, 90)
         */
        setFromAxisAngle: function (axis, angle) {
            var sa, ca

            angle *= 0.5 * vs.math.DEG_TO_RAD

            sa = Math.sin(angle)
            ca = Math.cos(angle)

            this.x = sa * axis.x
            this.y = sa * axis.y
            this.z = sa * axis.z
            this.w = ca

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#setFromEulerAngles
         * @description Sets a quaternion from Euler angles specified in XYZ order.
         * @param {Number} ex Angle to rotate around X axis in degrees.
         * @param {Number} ey Angle to rotate around Y axis in degrees.
         * @param {Number} ez Angle to rotate around Z axis in degrees.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var q = new vs.Quaternion()
         * q.setFromEulerAngles(45, 90, 180)
         */
        setFromEulerAngles: function (ex, ey, ez) {
            var sx, cx, sy, cy, sz, cz, halfToRad

            halfToRad = 0.5 * vs.math.DEG_TO_RAD
            ex *= halfToRad
            ey *= halfToRad
            ez *= halfToRad

            sx = Math.sin(ex)
            cx = Math.cos(ex)
            sy = Math.sin(ey)
            cy = Math.cos(ey)
            sz = Math.sin(ez)
            cz = Math.cos(ez)

            this.x = sx * cy * cz - cx * sy * sz
            this.y = cx * sy * cz + sx * cy * sz
            this.z = cx * cy * sz - sx * sy * cz
            this.w = cx * cy * cz + sx * sy * sz

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#setFromMat4
         * @description Converts the specified 4x4 matrix to a quaternion. Note that since
         * a quaternion is purely a representation for orientation, only the translational part
         * of the matrix is lost.
         * @param {vs.Mat4} m The 4x4 matrix to convert.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
         * var rot = new vs.Mat4().setFromAxisAngle(pc.Vector3d.UP, 180)
         *
         * // Convert to a quaternion
         * var q = new vs.Quaternion().setFromMat4(rot)
         */
        setFromMat4: function (m) {
            var m00, m01, m02, m10, m11, m12, m20, m21, m22,
                tr, s, rs, lx, ly, lz

            m = m.data

            // Cache matrix values for super-speed
            m00 = m[0]
            m01 = m[1]
            m02 = m[2]
            m10 = m[4]
            m11 = m[5]
            m12 = m[6]
            m20 = m[8]
            m21 = m[9]
            m22 = m[10]

            // Remove the scale from the matrix
            lx = m00 * m00 + m01 * m01 + m02 * m02
            if (lx === 0)
                return this
            lx = 1 / Math.sqrt(lx)
            ly = m10 * m10 + m11 * m11 + m12 * m12
            if (ly === 0)
                return this
            ly = 1 / Math.sqrt(ly)
            lz = m20 * m20 + m21 * m21 + m22 * m22
            if (lz === 0)
                return this
            lz = 1 / Math.sqrt(lz)

            m00 *= lx
            m01 *= lx
            m02 *= lx
            m10 *= ly
            m11 *= ly
            m12 *= ly
            m20 *= lz
            m21 *= lz
            m22 *= lz

            // http://www.cs.ucr.edu/~vbz/resources/quatut.pdf

            tr = m00 + m11 + m22
            if (tr >= 0) {
                s = Math.sqrt(tr + 1)
                this.w = s * 0.5
                s = 0.5 / s
                this.x = (m12 - m21) * s
                this.y = (m20 - m02) * s
                this.z = (m01 - m10) * s
            } else {
                if (m00 > m11) {
                    if (m00 > m22) {
                        // XDiagDomMatrix
                        rs = (m00 - (m11 + m22)) + 1
                        rs = Math.sqrt(rs)

                        this.x = rs * 0.5
                        rs = 0.5 / rs
                        this.w = (m12 - m21) * rs
                        this.y = (m01 + m10) * rs
                        this.z = (m02 + m20) * rs
                    } else {
                        // ZDiagDomMatrix
                        rs = (m22 - (m00 + m11)) + 1
                        rs = Math.sqrt(rs)

                        this.z = rs * 0.5
                        rs = 0.5 / rs
                        this.w = (m01 - m10) * rs
                        this.x = (m20 + m02) * rs
                        this.y = (m21 + m12) * rs
                    }
                } else if (m11 > m22) {
                    // YDiagDomMatrix
                    rs = (m11 - (m22 + m00)) + 1
                    rs = Math.sqrt(rs)

                    this.y = rs * 0.5
                    rs = 0.5 / rs
                    this.w = (m20 - m02) * rs
                    this.z = (m12 + m21) * rs
                    this.x = (m10 + m01) * rs
                } else {
                    // ZDiagDomMatrix
                    rs = (m22 - (m00 + m11)) + 1
                    rs = Math.sqrt(rs)

                    this.z = rs * 0.5
                    rs = 0.5 / rs
                    this.w = (m01 - m10) * rs
                    this.x = (m20 + m02) * rs
                    this.y = (m21 + m12) * rs
                }
            }

            return this
        },

        /**
         * @function
         * @name vs.Quaternion#slerp
         * @description Performs a spherical interpolation between two quaternions. The result of
         * the interpolation is written to the quaternion calling the function.
         * @param {vs.Quaternion} lhs The quaternion to interpolate from.
         * @param {vs.Quaternion} rhs The quaternion to interpolate to.
         * @param {Number} alpha The value controlling the interpolation in relation to the two input
         * quaternions. The value is in the range 0 to 1, 0 generating q1, 1 generating q2 and anything
         * in between generating a spherical interpolation between the two.
         * @returns {vs.Quaternion} Self for chaining.
         * @example
         * var q1 = new vs.Quaternion(-0.11,-0.15,-0.46,0.87)
         * var q2 = new vs.Quaternion(-0.21,-0.21,-0.67,0.68)
         *
         * var result
         * result = new vs.Quaternion().slerp(q1, q2, 0);   // Return q1
         * result = new vs.Quaternion().slerp(q1, q2, 0.5); // Return the midpoint interpolant
         * result = new vs.Quaternion().slerp(q1, q2, 1);   // Return q2
         */
        slerp: function (lhs, rhs, alpha) {
            // Algorithm sourced from:
            // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/
            var lx, ly, lz, lw, rx, ry, rz, rw
            lx = lhs.x
            ly = lhs.y
            lz = lhs.z
            lw = lhs.w
            rx = rhs.x
            ry = rhs.y
            rz = rhs.z
            rw = rhs.w

            // Calculate angle between them.
            var cosHalfTheta = lw * rw + lx * rx + ly * ry + lz * rz

            if (cosHalfTheta < 0) {
                rw = -rw
                rx = -rx
                ry = -ry
                rz = -rz
                cosHalfTheta = -cosHalfTheta
            }

            // If lhs == rhs or lhs == -rhs then theta == 0 and we can return lhs
            if (Math.abs(cosHalfTheta) >= 1) {
                this.w = lw
                this.x = lx
                this.y = ly
                this.z = lz
                return this
            }

            // Calculate temporary values.
            var halfTheta = Math.acos(cosHalfTheta)
            var sinHalfTheta = Math.sqrt(1 - cosHalfTheta * cosHalfTheta)

            // If theta = 180 degrees then result is not fully defined
            // we could rotate around any axis normal to qa or qb
            if (Math.abs(sinHalfTheta) < 0.001) {
                this.w = (lw * 0.5 + rw * 0.5)
                this.x = (lx * 0.5 + rx * 0.5)
                this.y = (ly * 0.5 + ry * 0.5)
                this.z = (lz * 0.5 + rz * 0.5)
                return this
            }

            var ratioA = Math.sin((1 - alpha) * halfTheta) / sinHalfTheta
            var ratioB = Math.sin(alpha * halfTheta) / sinHalfTheta

            // Calculate Quaternion.
            this.w = (lw * ratioA + rw * ratioB)
            this.x = (lx * ratioA + rx * ratioB)
            this.y = (ly * ratioA + ry * ratioB)
            this.z = (lz * ratioA + rz * ratioB)
            return this
        },

        /**
         * @function
         * @name vs.Quaternion#transformVector
         * @description Transforms a 3-dimensional vector by the specified quaternion.
         * @param {vs.Vector3d} vec The 3-dimensional vector to be transformed.
         * @param {vs.Vector3d} [res] An optional 3-dimensional vector to receive the result of the transformation.
         * @returns {vs.Vector3d} The input vector v transformed by the current instance.
         * @example
         * // Create a 3-dimensional vector
         * var v = new vs.Vector3d(1, 2, 3)
         *
         * // Create a 4x4 rotation matrix
         * var q = new vs.Quaternion().setFromEulerAngles(10, 20, 30)
         *
         * var tv = q.transformVector(v)
         */
        transformVector: function (vec, res) {
            if (res === undefined) {
                res = new vs.Vector3d()
            }

            var x = vec.x, y = vec.y, z = vec.z
            var qx = this.x, qy = this.y, qz = this.z, qw = this.w

            // calculate quat * vec
            var ix = qw * x + qy * z - qz * y
            var iy = qw * y + qz * x - qx * z
            var iz = qw * z + qx * y - qy * x
            var iw = -qx * x - qy * y - qz * z

            // calculate result * inverse quat
            res.x = ix * qw + iw * -qx + iy * -qz - iz * -qy
            res.y = iy * qw + iw * -qy + iz * -qx - ix * -qz
            res.z = iz * qw + iw * -qz + ix * -qy - iy * -qx

            return res
        },

        /**
         * @function
         * @name vs.Quaternion#toString
         * @description Converts the quaternion to string form.
         * @returns {String} The quaternion in string form.
         * @example
         * var v = new vs.Quaternion(0, 0, 0, 1)
         * // Should output '[0, 0, 0, 1]'
         * console.log(v.toString())
         */
        toString: function () {
            return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']'
        }
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Quaternion
     * @name vs.Quaternion.IDENTITY
     * @description A constant quaternion set to [0, 0, 0, 1] (the identity).
     */
    Object.defineProperty(Quat, 'IDENTITY', {
        get: (function () {
            var identity = new Quat()
            return function () {
                return identity
            }
        }())
    })

    /**
     * @field
     * @static
     * @readonly
     * @type vs.Quaternion
     * @name vs.Quaternion.ZERO
     * @description A constant quaternion set to [0, 0, 0, 0].
     */
    Object.defineProperty(Quaternion, 'ZERO', {
        get: (function () {
            var zero = new Quaternion(0, 0, 0, 0)
            return function () {
                return zero
            }
        }())
    })

    return {
        Quaternion: Quaternion
    }
}()))
