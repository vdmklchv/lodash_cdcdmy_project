const _ = {
    // clamps number within a bound
    clamp(num, minBound, maxBound) {
        if (num >= minBound && num <= maxBound) {
            return num;
        } else if (num < minBound) {
            return minBound;
        } else {
            return maxBound;
        }
    },

    inRange(num, start, end) {
        if (!end) {
            end = start;
            start = 0;
        } else if (start > end) {
            const tempVar = start;
            start = end;
            end = tempVar;
        }
        if (num === end) {
            return false;
        }
        return num >= start && num <= end;
    },

    words(str) {
        const wordArr = str.split(' ');
        return wordArr;
    },
    
    pad(str, length) {
        if (str.length >= length) {
            return str;
        }
        
        const remainingLength = length - str.length;
        const padRight = remainingLength % 2 === 0 ? remainingLength / 2 : remainingLength / 2 + 1;
        const padLeft = Math.floor(remainingLength / 2);

        const firstTimePadded = str.padStart(str.length + padLeft, ' ');
        const secondTimePadded = firstTimePadded.padEnd(firstTimePadded.length + padRight, ' ');
        return secondTimePadded;
    },

    has(obj, key) {
        return Boolean(obj[key]);
    },

    invert(obj) {
        const newObj = {};
        for (let item of Object.entries(obj)) {
            [key, value] = item;
            newObj[value] = key;
        }
        return newObj;
    },

    findKey(obj, fn) {
        for (let key of Object.keys(obj)) {
            const result = fn(obj[key]);
            if (result) {
                return key;
            }
        }
        return undefined;
    },

    drop(arr, dropNum) {
        if (!dropNum) {
            return arr.slice(1,);
        }
        return arr.slice(dropNum,);
    },

    dropWhile(arr, fn) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (!fn(arr[i], i , arr)) {
                break;
            }
            counter++;
        }
        return arr.slice(counter,);
    },

    chunk(arr, len) {
        const resultArr = [];
        let chunkArr = [];

        for (let i = 0; i < arr.length; i++) {
            chunkArr.push(arr[i]);
            if (chunkArr.length === len) {
                resultArr.push(chunkArr);
                chunkArr = [];
            };
        }

        if (arr.length % len !== 0) {
            resultArr.push(chunkArr);
        };

        return resultArr;
    }
}

console.log(_.chunk([1, 2, 3, 4], 2));

// Do not write or modify code below this line.
module.exports = _;