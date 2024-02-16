# Roman Numerals

## Closing thoughts
1. Firstly, the solution is wrong... You can see there is one test failing. Furtheremore, having excessive if conditions is generally a suggestion of a suboptimal solution. 
2. How did I get here? Breaking down my thought process. My mistake was to not treat the numerals as a sequence to generate starting from the highest symbol. Instead I focused on discovering how many units of thousands, hundreds, tens and ones were in the number.

## Alternative solution
3. If the solution treated the numerals as a sequence to generate: 
   1. You can work backwards from the highest single unit and append to the string.
   2. Looping from the highest unit in the number, appending the current symbol until all numerals are accounted for. E.g. 3001, loops through M **3 times**, **D 0 times**, **C 0 times**, **L 0 times**, **X 0 times**,  **V 0 times** and finally I **1 time**.
   