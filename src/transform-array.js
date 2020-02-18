module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error();
    let retValue = [];
    for (let  i = 0;i < arr.length; i++) {
        if (arr[i] == '--discard-next') ++i;
        else if (arr[i] == '--discard-prev'){
            if (retValue.length > 0) retValue = retValue.slice(0, retValue.length - 1);
        }
        else if (arr[i] == '--double-next'){
            if (++i < arr.length) {
                retValue.push(arr[i]);
                retValue.push(arr[i]);
            }
        }
        else if (arr[i] == '--double-prev'){
            if (i > 0) retValue.push(arr[i-1]);
        }
        else retValue.push(arr[i]);
    }
    return retValue;
};
