const bijectiveBinary = {
    convertToInt: function(str){
        if (str === "") return 0;
        
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            const digit = parseInt(str[i]);
            const position = str.length - 1 - i;
            result += digit * Math.pow(2, position);
        }
        return result;
    },
    
    convertFromInt: function(int){
        if (int === 0) return "";
        
        let result = "";
        let n = int;
        
        while (n > 0) {
            if (n % 2 === 0) {
                result = "2" + result;
                n = n / 2 - 1;
            } else {
                result = "1" + result;
                n = (n - 1) / 2;
            }
        }
        
        return result;
    }
};