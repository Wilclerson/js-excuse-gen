const generateExcuse = () => {

    const who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    const action = ['ate', 'peed', 'crushed', 'broke'];
    const what = ['my homework', 'the keys', 'the car'];
    const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
    
    const whoIndex = Math.floor(Math.random() * who.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const whatIndex = Math.floor(Math.random() * what.length);
    const whenIndex = Math.floor(Math.random() * when.length);

    const text = (`Hello ${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`);
    
    document.getElementById("excuse").innerHTML = text;

}

  