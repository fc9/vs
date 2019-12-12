export { healthbar as default }

// effect FRONZE : Ignora todos os efeitos ativos ou ativados
// effect ACTIVE : Aplica todos os efeitos ativos ou ativados
// effect PAUSED : Pausa todos os efeitos ativos e cancela ativações

const HealthBarCash = {}

class HealthBar {

    constructor(team, player, elementID = false, hpTotal = 0) {
        //constructor(total, bar, team, player =vs.CONTAINER_HEALTHBAR_PLAYER1, reduction = 0) {
        this.cssClassPrefix = 'vs-stage-healthbar-';
        this.timers = []
        this.renderings = 0
        this.status = vs.CONTAINER_HEALTHBAR_STATUSACTIVE
        this.hpTotal = hpTotal * vs.CONTAINER_HEALTHBAR_SCALE
        this.hp = this.hpTotal
        this.reduction = 0

        this.bar = vs.container.dom.element(elementID)
        this.bar.classList.add(this.cssClassPrefix + 'container', `team${team}`)
        this.barArmor = vs.container.dom.element(document.createElement('div'))
        this.barHealth = vs.container.dom.element(document.createElement('div'))
        this.barCure = vs.container.dom.element(document.createElement('div'))
        this.barDamage = vs.container.dom.element(document.createElement('div'))
        this.label = vs.container.dom.element(document.createElement('div'))

        this.barArmor.classList.add("bar", "armor")
        this.barHealth.classList.add("bar", "health")
        this.barCure.classList.add("bar", "cure")
        this.barDamage.classList.add("bar", "damage")
        this.label.classList.add("bar", "label")
        this.label.innerHTML = Math.floor(this.hp / vs.CONTAINER_HEALTHBAR_SCALE)
        this.bar.appendChild(this.barArmor.node)
        this.bar.appendChild(this.barHealth.node)
        this.bar.appendChild(this.barCure.node)
        this.bar.appendChild(this.barDamage.node)
        this.bar.appendChild(this.label.node)
        setInterval(this._renderUpdate, 1000, this)
    }

    active() {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSACTIVE) return
        Object.keys(this.timers).map(function (key) { this.timers[key].resume() }, this)
        this.status = vs.CONTAINER_HEALTHBAR_STATUSACTIVE
    }

    pause() {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        Object.keys(this.timers).map(function (key) { this.timers[key].pause() }, this)
        this.status = vs.CONTAINER_HEALTHBAR_STATUSPAUSED
    }

    stop() {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        Object.keys(this.timers).map(function (key) { this.timers[key].destroe() }, this)
    }

    fronze(duration = 1000) {
        if (this.status !== vs.CONTAINER_HEALTHBAR_STATUSACTIVE) return
        letvs.this = this
        setInterval(function () { vs.this.status = vs.CONTAINER_HEALTHBAR_STATUSACTIVE }, duration)
        this.status = vs.CONTAINER_HEALTHBAR_STATUSFRONZE
    }

    /*_setAnimation(object, name, timeout = 333) {
        if (name !== null) {
            object.classList.add(`hb-animate-${name}`)
            setTimeout(function () {
                object.classList.remove(`hb-animate-${name}`)
            }, (timeout < 16.7) ? 16.7 : timeout)
        }
    }*/

    _render(animationName, acquitted = 0) {
        letvs.this = this
        this.renderings += 1
        window.requestAnimationFrame(() => {
            let width = vs.this.bar.width() * (_this.hp / vs.this.hpTotal),
                widthArmor = width - vs.this.bar.width() * (acquitted / vs.this.hpTotal),
                classAnimation = `${_this.cssClassPrefix}animate-${animationName}`
            vs.this.label.innerHTML = vs.this.hp / vs.CONTAINER_HEALTHBAR_SCALE
            vs.this.barArmor.width(`${widthArmor}px`, '0')
            vs.this.barHealth.width(`${width}px`, '.05s')
            vs.this.barCure.width(`${width}px`, '.1s')
            vs.this.barDamage.width(`${width}px`, '2s')
            vs.render.animation.set(_this.bar, classAnimation, 333)
            setTimeout(function () { vs.this.renderings -= 1 }, 500)
        })
    }

    _renderUpdate(_this) {
        window.requestAnimationFrame(() => {
            //console.log('clear',vs.this.renderings)
            if (_this.renderings < 1)
                vs.this.barArmor.width((_this.bar.width() * (_this.hp / vs.this.hpTotal)) + 'px', '.2s')
        })
    }

    _getPoints(value, type) {
        return (type === vs.CONTAINER_HEALTHBAR_VALUETYPE_POINTS) ? value * vs.CONTAINER_HEALTHBAR_SCALE : (type === vs.CONTAINER_HEALTHBAR_EFFECTTYPEPERCENTOFHPTOTAL) ?
            this.hpTotal * value / 100 : this.hp * value / 100
    }

    _getReduction(value) {
        let reduction = 100 / (100 + this.reduction)
        return reduction
    }

    hit(value, valueType, animationName = null) {
        if (this.hp == 0 || this.status !== vs.CONTAINER_HEALTHBAR_STATUSACTIVE) return
        value = this._getPoints(value, valueType)
        let reduction = this._getReduction(value)
        this.hp -= value * reduction
        if (this.hp < 0) this.hp = 0
        this._render(animationName, value * (1 - reduction))
    }

    fit(value, valueType, animationName = null) {
        if (this.hp === this.hpTotal || this.status !== vs.CONTAINER_HEALTHBAR_STATUSACTIVE) return
        this.hp += this._getPoints(value, valueType)
        if (this.hp > this.hpTotal) this.hp = this.hpTotal;
        this._render(animationName)
    }

    hurt(value, valueType, duration = 1000, fps = VS_FPS) {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        letvs.this = this,
            id = Date.now().toString()
        this.timers[id] = vs.recurringTimer(
            function () {
                vs.this.hit(value, valueType)
            },
            1000 / fps,
            duration,
            function () {
                deletevs.this.timers[id]
            }
        )
    }

    heal(value, valueType, duration = 1000, fps = VS_FPS) {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        letvs.this = this,
            id = Date.now().toString()
        this.timers[id] = vs.recurringTimer(
            function () {
                vs.this.fit(value, valueType)
            },
            1000 / fps,
            duration,
            function () {
                deletevs.this.timers[id]
            }
        )
    }

    burn(valueTotal, valueType, duration = 1000, fps = VS_FPS) {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        let value = valueTotal / (duration * fps / 1000)
        if (value <= 1 / vs.CONTAINER_HEALTHBAR_SCALE) return
        this.hurt(value, valueType, duration, fps)
    }

    cure(valueTotal, valueType, duration = 1000, fps = VS_FPS) {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        let value = valueTotal / (duration * fps / 1000)
        if (value <= 1 / vs.CONTAINER_HEALTHBAR_SCALE) return
        this.heal(value, valueType, duration, fps)
    }

    burnD(valueTotal, valueType, duration = 1000) {
        if (this.status === vs.CONTAINER_HEALTHBAR_STATUSPAUSED) return
        let interval = 1,
            value = valueTotal
        for (; value / 4 >= 1; interval++)
            value -= value / 4
        value = valueTotal
        let timeout = Math.floor(duration / interval)
        letvs.this = this,
            id = Date.now().toString()
        this.timers[id] = vs.recurringTimer(
            function () {
                let damage = value / 4 >= 1 ? (value / 4).toFixed(2) : value
                value -= value - damage <= 0 ? 0 : damage
                vs.this.hit(damage, valueType)
            },
            timeout,
            duration + timeout,
            function () {
                deletevs.this.timers[id]
            }
        )
    }

    armor(value, timeout = Infinity) {
        this.reduction += value
        console.log('update armor:', this.reduction)
        if (timeout === Infinity) return
        letvs.this = this,
            id = Date.now().toString()
        this.timers[id] = vs.timer(function () {
            deletevs.this.timers[id]
            vs.this.armor(value * -1)
        }, timeout)
    }

    free(timeout = Infinity) {
        this.armor(this.reduction * -1, timeout);
    }

    static in5t4nc3(team, player, elementID = false, hpTotal = 0) {
        let key = `#${team}${player}`
        return (elementID !== false)
            ? HealthBarCash[key] = new HealthBar(team, player, elementID, hpTotal)
            : HealthBarCash.hasOwnProperty(key) ? HealthBarCash[key] : false
    }

}

const healthbar = HealthBar.in5t4nc3.bind(document)