//STRING Assignment
// Question 1-
// You are given a string S and task is to return an array B (having a size of 2),where B[0] contains the count of character A(uppercase)in string S and B[1]contains the count of character D (uppercase) in string S.
//note - you have to complete countCharacters function .
//solution 
// function countCharacters(){
//     let S = "AbaDd";
//     let B = [];
//     for(let i = 0; i < S.length; i++){
//        if((S[i] === "A") || (S[i] === "D")){
//                 B += S[i];
//        }
//     }
//     console.log(B.length);
//     }
//     countCharacters();
// Question 2-
// Tina is given a string S which contains the letter of all the student names in her class .she got a curiosity to check how many people have their names starting from the same alphabet .so given a string S ,she decided to write a code that finds out the count of characters that occur more than once in the string.
//solution -
function countHead(S) {
//     let charCount = {};
//     let repeatedCount = 0;

//     for (let char of S) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     for (let char in charCount) {
//         if (charCount[char] > 1) {
//             repeatedCount++;
//         }
//     }

//     return repeatedCount;
// }
// var S = "AABCCDD";
// console.log(countHead(S)); 

//Question 3 -
//count the vowels 
//you are given a atring S containing both uppercase and lowercase letters .you need to find out the number of vowels in the given string.
//solution -
// function count_Vowelsfunction(){
//     let str = "Prepbytes";
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//        for (let j = 0; j < vowels.length; j++){
//        if(str[i] === vowels[j]){
//           count++;
//           }
//        }
//     }
//     console.log(count);
//     }
//     count_Vowelsfunction();
//Question 4 -
//Concatenate the stringth 
//you are given two strings S1 and S2 (containing both uppercase and lowercase letters).you need to return a string which is the concatenation of both the given strings.
//solution -
// function Concatenate_strings() {
//    let S1 = "Prep";
//    let S2 = "Bytes";
//    let S3 = S1.concat(S2);
//    console.log(S3);
   
   
// }
// Concatenate_strings();
//Question 5 -
//You are given a String S and your task is to return the length of the string S.
//note - you have to solve it without using length method .you have to complete findLength function .

//    function findLength() {
//       let str = "CeDqe";
//      let count = 0;
//       // Iterate through the string and count each character
//       for (let i = 0; str[i] !== undefined; i++) {
//           count++;
//       }
//       return count;
//       console.log(count++);
      
//   }
// //   let result = findLength("Hello World");
// // console.log(result);  // Output: 11
// findLength();

//Question 6 - 
// Find the Winner
// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
// player wins the maximum number of games or there is a draw between them.
// Note: You have to complete Game_Winner function. No need to take any input.
//solution -
// function Game_Winner(s) {
//     let Adityawins = 0;
//     let Danishwins = 0 ;
//     for (let char of s) {
//         if (char === 'A') {
//             Adityawins++;
            
//         } else if(char ==='D'){
//             Danishwins++;
            
//         }
//     }

// }
    
// if ( Adityawins >Danishwins) {
//     return "Aditya"; 
    
// } elseif (Danishwins > Adityawins){
//     return "Danish";
    
// }else {
//     return "Draw";
// } 

// console.log(Game_Winner("AAADAD"));

//Question 7 - 
// You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
// Note: You have to complete joinStrings function. No need to take any input.
//solution -
// function joinStrings() {
//     let s = "prepbtyes";
//     let p = "technologies"
//     let concat = s.concat(p);
//     console.log(concat);
    
    
// }
// joinStrings();

//Question 8 -
// Plaindrome Check
// You are given a string S, Your task is to check wether the given string is a Palindrome or not.
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
// both upppercase lowercase letters.
// Note: You have to complete Plain_Check function. No need to take any input.
//solution -
// function Plain_Check (S) {
//     S = S.toLowerCase();
//     let reversed = S.split('').reverse().join('');
    
    
//     return S === reversed;
// }
//     console.log(Plain_Check("naman"));   
//     console.log(Plain_Check("Naman"));     
//     console.log(Plain_Check("Hello"));    
    
//Question 9 -
//Reverse the String
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to 
// complete Reverse_String function. No need to take any input.
//solution -
// function Reverse_String() {
//     let S = "I am Utkarsh Raj";
//     let reversed = S.split('').reverse().join('');
//     console.log(reversed);
    
    
// }
// Reverse_String();

//Question 10 -
// Match the Strings
// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.
// Note: You have to complete String_Match function. No need to take any input.
//solution -
// function String_Match() {
//     let S1 = "Apple";
//     let S2 = "Orange";
//     if (S1 === S2) {
//        console.log("Yes");
        
        
//     } else { console.log("No");
    
        
//     }
// }
// String_Match();

//Question 11 -
//String Replace
// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
// Note: You have to complete Replace function. No need to take any input.
//solution -
// function Replace(S,pattern,text) {
//     return S.split(pattern).join(text);
    
// }
// console.log(Replace("Hello, world!", "world", "JavaScript")); 

//Question 12 -
// Split the String
// You are given a string S, Your task is to split the string with respect to spaces.
// Note: You have to complete Split_the_String function. No need to take any input.
//solution -
// function Split_the_String() {
//     let str = "I am Utkarsh Raj";
//     return str.split(' ');
    
// }
// console.log(Split_the_String());

//Question 13 -
// Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
// consonants in the given string.
// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.

function Count_Vowels(S) {
    let vowels = "aioueAIOUE";
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (vowels.indexOf(S[i]) !== -1) { //check if S[i] is vowel.
            
            count++; //Increase vowel count if it is a vowel.
            
        }
        
    }
    return count;

    
}
function Count_Consonants(S){
    let consonantsCount = 0;
    for (let i = 0; i < S.length; i++) {
        let char  = S[i].toLowerCase();
        if (char >= 'a' && char <= 'z'  && "aieou".indexOf(char)!== -1  ) {
            consonantsCount++;
            
        }
    }
    return consonantsCount;
}
let inputstring = "I am a web developer";
console.log("Number of vowels:",Count_Vowels(inputstring));
console.log("Number of consonants:",Count_Consonants(inputstring));




    

    




   


