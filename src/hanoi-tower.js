module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turns = 2**disksNumber - 1;
    var seconds = Math.floor(turns / (turnsSpeed / 3600));
    return {  turns, seconds };
}