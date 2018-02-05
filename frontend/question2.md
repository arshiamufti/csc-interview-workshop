## Question 2

Write a javascript function
```
function replaceText(text, symbol, replaceWord) 
```
that takes in two parameters:

- `text` is an html `<p>` element
- `symbol` is a string prefixed with `%`
- `replaceWord` is a string

the function returns text with all instances of symbol replaced with replaceWord

###### Example
```
replaceText("<p>Hello, my name is %name</p>", "%name", "Iris") 
```
will return `"<p>Hello, my name is Iris</p>"`

#### More

The parameters of function replaceText(text, replaceWord) have now changed

- `text` is an html <p> element
- `replaceWord` is a dictionary with strings for keys and values
  - Key: all words in text parameter to be replaced that start with `%Key`
  - Value: words that that start with `%Key` in text should be replaced with `Value`
