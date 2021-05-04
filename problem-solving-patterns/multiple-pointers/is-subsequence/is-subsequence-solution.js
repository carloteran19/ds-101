// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.


// Your solution MUST have AT LEAST the following complexities
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2){
    let left = 0;
    let right = 0;
    let newStr = '';
    while (left < str1.length || right < str2.length){
        if(str1[left] == str2[right]){
            newStr = newStr + str2[right];
            left++;
            right++;
        } else {
            right++;
        }
    }
    return str1 == newStr;
}


// Example: 
isSubsequence('hello', 'hello world'); //true
//isSubsequence('sing', 'sting'); //true
//isSubsequence('abc', 'abracadabra'); //true
//isSubsequence('abc', 'acb') //false (order matters)