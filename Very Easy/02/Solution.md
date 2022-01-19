


1. Minutes to seconds
```js
const minutes = 2;

const seconds = minutes * 60;
//* is sign for multiplying. In math is used x or •  
console.log(seconds + " seconds")
//OUTPUT: 120 seconds
```

2. Seconds to minutes:
## Without remainding
We only use this script if the dividing left no decimals.

For example: `120 seconds ➞ 2 minutes`, and not `121 seconds ➞ 2,01666667 minutes`

```js
const seconds = 240;

const minutes = seconds / 60;
// / is sign for dividing. In math is used ÷ or :
console.log(minutes + " minutes")
//OUTPUT: 4 minutes
```

## With remainding
This script is more complex, but it's more right to use for seconds to minutes conversion.

```js

const seconds = 121;

const minutes = seconds / 60;
if (minutes % 1 === 0) {
    console.log(minutes + " minutes")
}
else {
    const roundminutes = parseInt(minutes);
    //parseInt() gets the whole number. For example: parseInt(3.14) ➞ 3

    const tosubtract = roundminutes * 60;
    const remainingseconds = seconds - tosubtract;
    console.log(`${roundminutes} minutes ${remainingseconds} seconds`)
    //This is the same as if we would do console.log(roundminutes + " minutes" + remainingseconds + " seconds")
}

```
