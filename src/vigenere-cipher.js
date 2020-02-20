class VigenereCipheringMachine {
    constructor(mode = true) {
        if (mode === undefined) throw new Error();
        this.mode = mode;
        this.alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    }

    encrypt(msg, key) {
        if (msg === undefined || key === undefined) throw new Error();
        var keyArray = key.toUpperCase().split('');
        var keyPosition = 0;
        var retValue = msg.toUpperCase().split('').map( x => {
            if (this.alphabetArray.indexOf(x) >= 0) {
                var shift = this.alphabetArray.indexOf(keyArray[keyPosition]);
                var newIdx = (shift + this.alphabetArray.indexOf(x)) % this.alphabetArray.length;
                keyPosition = ++keyPosition % keyArray.length;
                return this.alphabetArray[newIdx];
            }
            return x;
        } );
        return this.mode ? retValue.join('') : retValue.reverse().join('');
    }

    decrypt(msg, key) {
        if (msg === undefined || key === undefined) throw new Error();
        var keyArray = key.toUpperCase().split('');
        var keyPosition = 0;
        var retValue = msg.toUpperCase().split('').map( x => {
            if (this.alphabetArray.indexOf(x) >= 0) {
                var shift = this.alphabetArray.indexOf(keyArray[keyPosition]);
                var newIdx = (this.alphabetArray.indexOf(x) - shift);
                if (newIdx < 0) newIdx += this.alphabetArray.length
                keyPosition = ++keyPosition % keyArray.length;
                return this.alphabetArray[newIdx];
            }
            return x;
        } )
        return this.mode ? retValue.join('') : retValue.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
