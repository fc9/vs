/**
 * Defining global constants
 */

//export const
/* Basic controls */

const vs = {

    GAME: {
        Stopped: 0,
        Runnig: 1,
        Paused: 2,
        Frozen: 3,
        Closed: 4
    },

    GAMEPLAY: {
        Team1: 1,
        Team2: 2,
        Fighter1: 1,
        Fighter2: 2,
        Fighter3: 3
    },

    /* Module options */

    STAGE: {
        HealthBar: {
            Scale: 100,
            EffectType: {
                Points: 1,
                PercentOfHP: 2,
                PercentOfHPTotal: 3
            },
            Status: {
                Stopped: 0,
                Running: 1, // Aplica todos os efeitos ativos ou ativados
                Paused: 2, // Pausa todos os efeitos ativos e cancela ativações
                Frozen: 3 // Ignora todos os efeitos ativos ou ativados
            }
        }
    },

    RENDER: {
        FPS: 60
    },

    /*
    core: '',
    app: {
        chat: {},
        i18n: {},
        router: {}
    },
    container: {
        canvas: {},
        dom: {},
        input: {},
        networking: {},
        sound: {},
        webgl: {}
    },
    fightgame: {
        selectscreen: {},
        scene: {},
        stage: {
            healthbar: {},
            powerbar: {},
            shape: {
                action: {},
                fighter: {},
                player: {},
                notification: {}
            }
        },
        ranking: {}
    },
    logic: {
        ai: {},
        graphic: {},
        physical: {},
        mathematic: {}
    },
    render: {
        animation: {},
        draw: {},
        solids2d: {},
        sprite: {}
    }
    */
}

/*
import core from '/vs/src/core/src/Core.js'
import dom from '/vs/src/container/dom/src/DOM.js'
import mathematic from '/vs/src/logic/mathematic/src/Mathematic.js'
import physical from '/vs/src/logic/physical/src/Physical.js'
import animation from '/vs/src/render/animation/src/Animation.js'
import healthbar from '/vs/src/stage/health-bar/src/HealthBar.js'
*/

/* Modules structure * /
vs.core = core
vs.dom = dom
vs.logic.physical = physical
vs.logic.mathematic = mathematic
vs.render.animation = animation
vs.app.view.stage.healthbar = healthbar
*/

//export default vs