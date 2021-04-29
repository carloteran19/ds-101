// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable of number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern. 

function areThereDuplicates() {
    let args = Array.prototype.slice.call(arguments);
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            console.log(true);
            return true;
        }
        start++;
        next++;
    }
    console.log(false);
    return false;
}

// Examples:
areThereDuplicates(1, 2, 3) //false
areThereDuplicates(1, 2, 2) //true
areThereDuplicates('a', 'b', 'c', 'a') //true

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus
// Time - O(n log n)
// Space - O(1)