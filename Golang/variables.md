# Variables

- Declare variables like you speak (unlike other strongly typed languages)
- Variables must be used to compile
- When initialized, has a 0 value
    - bool = false
1. `var age int`
    - `age = 30`
1. `var age int = 30`
1. `age := 30`
    - Since assigning right away, it can figure out the type
    - **Cannot use this syntax at package level**
1. Block of variables 
    - **Package level only**
    - ```go
        var (
            name string = "Hailee"
            age int = 30
        )
      ```
- Naming
    - Pascal or camelCase
    - **acronyms all uppercase**
    - lower case = scoped to that package
        - so anything that consumes the package can't use it
    - capital = exported and globally visible
    - single letter variables for things used immediately   
    - package level variables (especially exported ones) should be very clear
    
- Convert 1 variable type to another
    - `float32(i)` `int(i)` `string(i)`
    - If want to convert back and forth with string and number, need strconv package
 
---

 # Primitives
- When initialized, has a 0 value
    - bool = false
- uint = unsigned integer (aka 0 and positives)
- string = any utf8 character
    - array of characters
    - strings are immutable
    - same as a collection of bytes - []byte
        - use when sending to other places

---

# Constants
- name same way as variables
    - bc remember is capital, then export
- has to be assignable at compile time
    - can't do a calculation in the constant

---

# Arrays & Slices

- Arrays form the basis of slices
- fixed size
- `name := [<size>]<type>{<initial values>}`
    - `grades := [3]int{92,85,75}`
    - `grades := [...]int{92,85,75}`
- `var students [3]string`
    - `students[0] = "Hailee"`
- fast bc contiguous
- arrays are copied not reassigned

- Slices
    - `name := []<type>{<initial values>}`
    - slice is a projection of an array
    - can check `cap(grades)` capacity
    - are reference types so the refer to the same underlying data
- a[:]
- a[2:]
- a[:3]
- a[2:5]

---

# Maps & Structs

Maps
- 

Structs
