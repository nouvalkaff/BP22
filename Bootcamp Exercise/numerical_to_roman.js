function convertRomanToNumber(num) {
    const romanMap = ["I","IV","V","IX","X","XL","L","C","CD","D","CM","M"];
    const numeralMap = [1,4,5,9,10,40,50,100,400,500,900,1000];
 
 let length = romanMap.length;
 let result = "";

while (num > 0){
    let count = parseInt(num / numeralMap[length-1])

while (count > 0) {
        result += romanMap[length-1]
        count--;
    }
        num = num % numeralMap[length-1]
        length--;
    }
    return result;
}
console.log(convertRomanToNumber(995))