//import core, * as vs from '/vs/bootstrap.js'
import vs, * as _ from '/vs/bootstrap.js'

//console.log(vs.container)
//console.log(vs.container.dom.element('#hb1'))
//vs.container.dom.element('#hb1').style.border = '1px solid #fff'

console.log(_.PLAYING_Team1)
//console.log(Team1)

vs.stage.healthbar(_.PLAYING_Team1, _.PLAYER1, "#hb1", 340)
//vs.stage.healthbar(_.PLAYING_Team2, vs.PLAYER1, "#hb2", 585)

/*
_stage.healthbar(_.PLAYING_Team1, vs.PLAYER1, "#hb1", 340)
_stage.healthbar(_.PLAYING_Team2, vs.PLAYER1, "#hb2", 585)

//var _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1) = new HealthBar(340, _dom.get("#_stage.healthbar(_.PLAYING_Team1, vs.PLAYER1)"), HB_PLAYER_1),
//    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1) = new HealthBar(585, _dom.get("#_stage.healthbar(_.PLAYING_Team2, vs.PLAYER1)"), HB_PLAYER_2)

_dom.get('#btn-hit1').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).hit(50, vs.HB_EFFECTTYPE_POINTS, 'shake')
    //_stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).hit(Math.floor(Math.random() * (70 - 5) + 5), vs.HB_EFFECTTYPE_POINTS, 'shake')
}, false)
_dom.get('#btn-hurt1').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).hurt(10, vs.HB_EFFECTTYPE_POINTS, 1500, 3)
}, false)
_dom.get('#btn-burn1').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).burn(30, vs.HB_EFFECTTYPE_POINTS, 1000)
}, false)
_dom.get('#btn-burnD1').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).burnD(60, vs.HB_EFFECTTYPE_POINTS, 2500)
}, false)
_dom.get('#btn-cure1').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).cure(5, vs.HB_EFFECTTYPE_PERCENTOFHPTOTAL, 2500, 5)
}, false)
_dom.get('#btn-armor1').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).armor(50)
}, false)
_dom.get('#btn-active1').addEventListener("click", function (e) { _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).active() }, false)
_dom.get('#btn-pause1').addEventListener("click", function (e) { _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).pause() }, false)
_dom.get('#btn-fronze1').addEventListener("click", function (e) { _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).fronze(5000) }, false)

_dom.get('#btn-clear').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).stop()
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).stop()
}, false)
_dom.get('#btn-free').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).free(5000)
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).free(5000)
}, false)

_dom.get('#btn-hit2').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).hit(50, vs.HB_EFFECTTYPE_POINTS, 'shake')
    //_stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).hit(Math.floor(Math.random() * (70 - 5) + 5), vs.HB_EFFECTTYPE_POINTS, 'shake')
}, false)
_dom.get('#btn-hurt2').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).hurt(10, vs.HB_EFFECTTYPE_POINTS, 1500, 3)
}, false)
_dom.get('#btn-burn2').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).burn(30, vs.HB_EFFECTTYPE_POINTS, 1000)
}, false)
_dom.get('#btn-burnD2').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).burnD(60, vs.HB_EFFECTTYPE_POINTS, 2500)
}, false)
_dom.get('#btn-cure2').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).cure(5, vs.HB_EFFECTTYPE_PERCENTOFHPTOTAL, 2500, 5)
}, false)
_dom.get('#btn-armor2').addEventListener("click", function (e) {
    _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).armor(50)
}, false)
_dom.get('#btn-active2').addEventListener("click", function (e) { _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).active() }, false)
_dom.get('#btn-pause2').addEventListener("click", function (e) { _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).pause() }, false)
_dom.get('#btn-fronze2').addEventListener("click", function (e) { _stage.healthbar(_.PLAYING_Team2, vs.PLAYER1).fronze(5000) }, false)

_stage.healthbar(_.PLAYING_Team1, vs.PLAYER1).heal(.5, vs.HB_EFFECTTYPE_POINTS, Infinity, 3)
*/