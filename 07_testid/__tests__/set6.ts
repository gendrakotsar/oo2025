import { Calculator } from "../class3";

let calcobj: Calculator=null;

beforeEach(()=> {
    calcobj=new Calculator();

});

test('empty int', ()=>{
    expect(calcobj.getPanelContents()).toBe("");
});

test('simple input', ()=>{
    calcobj.pressButton('8');
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe('87');
});