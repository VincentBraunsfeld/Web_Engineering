const input = document.getElementById("input");
input.addEventListener('keyup', () => {input.style.background = check(input.value) ? 'green' : 'red'});

function check(value) {
    let openBrackets = [];
    for (let char of value) {
        if (['(', '[', '{'].includes(char)) openBrackets.push(char);
        if (['}', ']', ')'].includes(char)) {
            if(openBrackets.length === 0) return false;
            let temp = openBrackets.pop();
            if(temp === '(' && char===')' ) continue;
            if(temp === '[' && char===']' ) continue;
            if(temp === '{' && char==='}' ) continue;
            return false;
        }
    }
    return openBrackets.length === 0 ? true : false;
}

//console.log('([)]');
// console.assert(true, '()');
// console.assert(true,'{[()]}');
// console.assert(true, '[((){[{}]})[]]')
// console.assert(false, '([)]')