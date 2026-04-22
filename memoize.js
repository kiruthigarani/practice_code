

function fibonacci(n)
 {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

function memoize(func) {
    let cache ={}
    return function(n){
        console.log("cache:", cache);
        if(cache[n]){
            console.log("return answer from cache");
            return cache[n];
        }else{
             console.log("return answer from original function");
             const result = func(n);
             cache[n] = result;
             return result;
        }
    }

}


const calculate = memoize(fibonacci);

console.log("calculate result:", calculate(10));

console.log("calculate result:", calculate(10));

console.log("calculate result:", calculate(5));

console.log("calculate result:", calculate(5));


//memoization - add 4 numbers and store the result in cache
function add(...numbers){
    return numbers.reduce((total, currentVal)=> total+currentVal);
}

const addMemo = (func)=> {
    const cache_val ={};
    return function(...nums){
        console.log("Cache value:", cache_val[nums]);
        if(cache_val[nums]){
            console.log("return response from cache");
            return cache_val[nums];
        }else{
            console.log("return response from actual function");
            const res = func(...nums);
            cache_val[nums] = res;
            return cache_val;
        }
    }
}

const calc = addMemo(add);
console.log("Calc:", calc(10,20,30));

console.log("Calc:", calc(10,20,30));
