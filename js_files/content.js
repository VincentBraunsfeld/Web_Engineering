document.querySelectorAll("aside ul li").forEach(li => {
    li.addEventListener("click", () => {
        displayContent(li.id);
    });
});

function displayContent(id){
    const main = document.querySelector('main');
    console.log(id);
    switch (id){
        case 'js_content':
            main.innerHTML =  `<div id="JS">
            <div id="4.1">
                <h2>4.1 Funktionen</h2>
                <div id="4.1.1">
                    <h3>4.1.1 identity()</h3>
                    <p>identity() ist ein Funktion, die ein Argument als Parameter entgegen nimmt und diesen als Ergebnis zurück
                        gibt.</p>
                    <input type="text" id="identity" placeholder="try it out">
                        <button id="btn1">Ergebnis</button>
                        <p id="p1"> identity( )</p>
                </div>
                <div id="4.1.2">
                    <h3>4.1.2 identity_function()</h3>
                    <p>identity_function() ist ein Funktion, die ein Argument als Parameter entgegen nimmt und eine Funktion
                        zurück gibt, die dieses Argument zurück gibt.</p>
                    <span id="id_span">
                 <input type="text" id="id_function_input" placeholder="try it out">
                 <button id="id_function_btn">ausführen</button>
             </span>
                </div>
                <div id="4.1.3">
                    <h3>4.1.3 add() mul()</h3>
                    <p>add() ist die Additions-Funktion</p>
                    <span id="add">
                 add(
                 <input id="add_input1" type="number">
                 )
                 (
                 <input id="add_input2" type="number">
                 )
                 <button id="addBtn">Ergebnis</button>
                 <span id="add_span"></span>
             </span>
                    <p>mul() ist die Multiplikations-Funktion</p>
                    <span id="mul">
                 mul(
                 <input id="mul_input1" type="number">
                 )
                 (
                 <input id="mul_input2" type="number">
                 )
                 <button id="mulBtn">Ergebnis</button>
                 <span id="mul_span"></span>
             </span>
                </div>
                <div id="4.1.4">
                    <h3>4.1.4 addf()</h3>
                    <span id="addf_span">
                 <input type="text" id="addf_function_input" placeholder="try it out">
                 <button id="addf_function_btn">ausführen</button>
             </span>
                </div>
                <div id="4.1.5">
                    <h3>applyf()</h3>
                    <span id="span_applyf">
                 applyf(
                 <select id="select_applyf">
                     <option value="add">add</option>
                     <option value="mul">mul</option>
                 </select>
                 )
                 (<input type="number" id="input1_applyf">)
                 (<input type="number" id="input2_applyf">)
                 <button id="btn_applyf">Ergebnis</button>
             </span>
                </div>
            </div>
            <div id="4.2">
                <h2>4.2. Objekte</h2>
            </div>
            <div id="4.3">
                <h2>4.3. Fibonacci</h2>
                <span id="fib_span">
                 <input type="number" id="fib_input">
                 <button id="fib_button">Ergebnis</button>
             </span>
                <table id="fib_table">
                    <tr>
                        <td>number</td>
                        <td>fib</td>
                    </tr>
                    <td>0</td>
                    <td>0</td>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </table>

            </div>
            <div id="4.4">
                <h2>4.4. Topsort</h2>
                <span>
                 <input id="input" placeholder="(x,y)">
                 <button id="add_btn">hinzufügen</button>
                 <button id="delete_btn">löschen</button>
             </span>
                <br>
                    <br>
                        <div id="list">{leer}</div>
                        <br>
                            <button id="create_btn">sortieren</button>
                            <br>
                                <br>
                                    <div id="result"></div>
            </div>
        </div>`;
            break;
        case 'dom_content':
            main.innerHTML = `<div id="DOM">
            <div id="5.1">
                <h2>5.1. Performanz-Messungen von DOM-Operationen</h2>
                <div>
                    <input id="performance_input">
                    <button id="performance_button">Add</button>
                </div>
                <br>
                <table>
                    <tr>
                        <th>innerHTML</th>
                        <td id="innerHTMLResult"></td>
                    </tr>
                    <tr>
                        <th>innerText</th>
                        <td id="innerTextResult"></td>
                    </tr>
                    <tr>
                        <th>textContent</th>
                        <td id="textContentResult"></td>
                    </tr>
                    <tr>
                        <th>outerHTML</th>
                        <td id="outerHTMLResult"></td>
                    </tr>
                </table>
            </div>
            <div id="5.2">
                <h2>5.2. Rednerliste mit Zeitmessung</h2>
                <span>Neuer Redner:
                    <input type="text" id="speaker_input">
                    <button id="speaker_button">Hinzufügen</button>
                </span>
                <ul id="speaker_list">

                </ul>
            </div>
        </div>`;
            break;
        case 'ecma_content':
            main.innerHTML = `<div id="ECMAScript">
            <div id="6.1">
                <h2>6.1. Klammerpaare</h2>
                <p>
                    Schreiben Sie eine Webseite, in die man eine Zeichenkette mit beliebigen Buchstaben,
                    Zahlen und Sonderzeichen eingeben kann, die beliebig geschachtelte Klammern [...], (...) und {...}
                    enthält,
                    sodass sofort geprüft wird, ob alle Klammerpaare korrekt geschachtelt sind.
                    Das Eingabefeld der Zeichenkette soll rot gefärbt werden, wenn es ein Klammerpaar gibt,
                    das falsch geschachtelt ist. Verwenden Sie für Ihre Tests die Funktion console.assert.
                </p>
                <input type="text" id="brackets_input">
                <button onclick="toggleDiv(this)">code</button>
                <div class="toggleDiv" style="display: none;">
                        <pre>
                            const brackets_input = document.getElementById("brackets_input");
                            brackets_input.addEventListener('keyup', () => {brackets_input.style.background = check(brackets_input.value) ? 'green' : 'red'});

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

                            console.assert(true, '()');
                            console.assert(true,'{[()]}');
                            console.assert(true, '[((){[{}]})[]]')
                            console.assert(false, '([)]')
                        </pre>
                </div>
            </div>
            <div id="6.2">
            <h3>6.2. Topologische Iterierbarkeit </h3>
                <span>
                    <input type="text" id="iterator_input">
                    <button id="iterator_button"></button>
                </span>

            </div>
        </div> `;
            break;
        case 'functional_content':
            main.innerHTML = `<div id="functional">
            <div id="7.1">
                <h2>7.1. Funktionen in JavaScript</h2>

            </div>
        </div>`;
        default:
            main.innerHTML = `<div id="JS">
            <div id="4.1">
                <h2>4.1 Funktionen</h2>
                <div id="4.1.1">
                    <h3>4.1.1 identity()</h3>
                    <p>identity() ist ein Funktion, die ein Argument als Parameter entgegen nimmt und diesen als Ergebnis zurück
                        gibt.</p>
                    <input type="text" id="identity" placeholder="try it out">
                        <button id="btn1">Ergebnis</button>
                        <p id="p1"> identity( )</p>
                </div>
                <div id="4.1.2">
                    <h3>4.1.2 identity_function()</h3>
                    <p>identity_function() ist ein Funktion, die ein Argument als Parameter entgegen nimmt und eine Funktion
                        zurück gibt, die dieses Argument zurück gibt.</p>
                    <span id="id_span">
                 <input type="text" id="id_function_input" placeholder="try it out">
                 <button id="id_function_btn">ausführen</button>
             </span>
                </div>
                <div id="4.1.3">
                    <h3>4.1.3 add() mul()</h3>
                    <p>add() ist die Additions-Funktion</p>
                    <span id="add">
                 add(
                 <input id="add_input1" type="number">
                 )
                 (
                 <input id="add_input2" type="number">
                 )
                 <button id="addBtn">Ergebnis</button>
                 <span id="add_span"></span>
             </span>
                    <p>mul() ist die Multiplikations-Funktion</p>
                    <span id="mul">
                 mul(
                 <input id="mul_input1" type="number">
                 )
                 (
                 <input id="mul_input2" type="number">
                 )
                 <button id="mulBtn">Ergebnis</button>
                 <span id="mul_span"></span>
             </span>
                </div>
                <div id="4.1.4">
                    <h3>4.1.4 addf()</h3>
                    <span id="addf_span">
                 <input type="text" id="addf_function_input" placeholder="try it out">
                 <button id="addf_function_btn">ausführen</button>
             </span>
                </div>
                <div id="4.1.5">
                    <h3>applyf()</h3>
                    <span id="span_applyf">
                 applyf(
                 <select id="select_applyf">
                     <option value="add">add</option>
                     <option value="mul">mul</option>
                 </select>
                 )
                 (<input type="number" id="input1_applyf">)
                 (<input type="number" id="input2_applyf">)
                 <button id="btn_applyf">Ergebnis</button>
             </span>
                </div>
            </div>
            <div id="4.2">
                <h2>4.2. Objekte</h2>
            </div>
            <div id="4.3">
                <h2>4.3. Fibonacci</h2>
                <span id="fib_span">
                 <input type="number" id="fib_input">
                 <button id="fib_button">Ergebnis</button>
             </span>
                <table id="fib_table">
                    <tr>
                        <td>number</td>
                        <td>fib</td>
                    </tr>
                    <td>0</td>
                    <td>0</td>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </table>

            </div>
            <div id="4.4">
                <h2>4.4. Topsort</h2>
                <span>
                 <input id="input" placeholder="(x,y)">
                 <button id="add_btn">hinzufügen</button>
                 <button id="delete_btn">löschen</button>
             </span>
                <br>
                    <br>
                        <div id="list">{leer}</div>
                        <br>
                            <button id="create_btn">sortieren</button>
                            <br>
                                <br>
                                    <div id="result"></div>
            </div>
        </div>`;
    }
}