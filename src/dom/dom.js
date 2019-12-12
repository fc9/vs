export { dom as default }

class DOM {

    constructor(query, node) { // used
        this.query = query
        this.node = node
        this.utc = Date.now()
        return this
    }

    /* getChild(index) {
        return _(this.object.childNodes[index])
    } */

    /* hasClass(className) {
        return !!(this.object.className.split(" ").indexOf(className) + 1)
    } */

    width(value = null, seconds = "0") { // used
        if (value === null) return this.node.offsetWidth
        this.node.style.transition = `width ${seconds}`
        this.node.style.width = value
    }

    height(value = null, seconds = "0") { // not used
        if (value === null) return this.node.offsetHeight
        this.node.style.transition = `height ${seconds}`
        this.node.style.height = value
    }
}

const dom = {
    element: (q, d = document) =>
        new (Proxy.bind(d))(
            // object
            new DOM(q, (typeof q === 'object') ? q : /#\S+$/.test(q) ? d.querySelector(q) : [...d.querySelectorAll(q)][0]),
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
    }