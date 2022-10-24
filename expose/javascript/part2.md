1. **3**, because the last value of **i** is the size of the array, and **i** is declared globally with **var** keyword
2. **150**, the last value reassigned to **discountedPrices** is computed value of line **7**.
3. **150**, the last value reassigned to **finalPrice** is computed value of line **8**.  
4. The function will return an array of [50, 100, 150], because in line 9 we populated the the array with **finalPrice**.
5. Runtime error, because the **i** variable is out of scope, **let** keyword only declares variables locally within code block.
6. Runtime error, because the **discountedPrice** variable is out of scope, **let** keyword only declares variables locally within code block.
7. **150**, because **finalPrice** declaration is within the function scope, and with **let** keyword you can reassign values.
8. **[ 50, 100, 150 ]**, because we populated the array with finalPrice, and it is declared within the function scope.
9. Runtime error, because the **i** variable is out of scope, **let** keyword only declares variables locally within code block.
10. **3**, because **length** is declared within the scope of the function, never been reassigned.
11. **[ 50, 100, 150 ]**, because **discount** function is declared within the scope function, and it was populated with **discountedPrice**.
12. - A. student.name;
    - B. student['Grad Year'];
    - C. student.greeting();
    - D. student['Favorite Teacher'].name;
    - E. student.courseLoad[0];
13. - A. **32**, since integers map to their exact string representation.
    - B. **1**, since strings map to their exact integer representation.
    - C. **3**, since null map to their exact integer representation which is 0.
    - D. **3null**, since both are strings, they concatenate.
    - E. **4**, since true maps to 1.
    - F. **0**, since false maps to 0.
    - G. **3undefined**, since both are strings, they concatenate.
    - H. **NaN**, NaN is a property of the global object. The initial value of NaN is Not-A-Number.
14. - A. **true**, since strings map to their exact integer representation.
    - B. **false**, When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
    - C. **true**, since strings map to their exact integer representation.
    - D. **false**, they have equal value but not equal type.
    - E. **false**, since true maps to 1.
    - F. **true**, they have equal value and equal type.
15. **==** comparison for equal values, **===** comparison for equal values and equal type.
16. **21 45 5**, using mode 2 to extract odd numbers.
17. **[ 2, 4, 6 ]**, when the *doSomething* pass to modifyArray, it makes the call back parameter act as its function call, then the function computes *i* in *doSomething* function.
18. Refer **part2-question18.js**
19. **1 4 3 2**, because the setTimeout delayed for 1 second.