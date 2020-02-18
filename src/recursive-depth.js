module.exports = class DepthCalculator {
    calculateDepth(arr, sar) {
        if (sar == undefined) { sar = 1; }
        var sae = sar;
        for (let i = 0;i < arr.length; i++){
            if (Array.isArray(arr[i])){
                var saq = this.calculateDepth(arr[i], sar + 1);
                sae = saq > sae ? saq : sae;
            }
        }
        return sae;
    }
};