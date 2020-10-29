module.exports = function transform(arr) {
    if(arr.length == 0) return [];
    if(!(Array.isArray(arr))) throw new Error(`${arr} is not array`);
    let array = [];
    for (let i = 0 ; i < arr.length; i++) {
     if(arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
        array.push(arr[i]);
      }
      if(arr[i-1] === '--discard-next') {
        array.pop();
        continue;
      }
      if (arr[i - 1] === "--double-next") array.push(arr[i]);
      if(arr[i+1] === '--discard-prev') {
        array.pop();
        continue;
      }
      if (arr[i + 1] === "--double-prev") array.push(arr[i]);
    }
    return array;
    };
