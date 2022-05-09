// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { tools } from '../tools.js';
import { renderTools } from '../utils.js';
const test = QUnit.test;

test('test tool render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="tool"><img src="./assets/shovel.jpg" alt=""><h1>Spades</h1><p>The Spade has a digging factor of 7 and a durability factor of 9</p><h2>Perks</h2><ul><li>Easy to use</li><li>Versatile</li><li>Decent at killing zombies</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTools(tools[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
