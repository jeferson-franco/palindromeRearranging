# palindromeRearranging

Given a string, find out if its characters can be rearranged to form a palindrome.

A string that doesn't changed when reversed (it reads the same backward and forward).

Examples:

- `"eye"` is a palindrome
- `"noon"` is a palindrome
- `"decaf faced"` is a palindrome
- `"taco cat"` is not a palindrome (backwards it spells `"tac ocat"`)
- `"racecars"` is not a palindrome (backwards it spells `"sracecar"`)

## Example

For `inputString = "aabb"`, the output should be
`solution(inputString) = true`.

We can rearrange `"aabb"` to make `"abba"`, which is a palindrome.

## Input/Output

- [execution-time-limit] 4 seconds (js)

- [input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
`1 ≤ inputString.length ≤ 50`.

- [output] boolean

`true` if the characters of the `inputString` can be rearranged to form a palindrome, `false` otherwise.
