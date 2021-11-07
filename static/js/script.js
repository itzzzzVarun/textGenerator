const textArea = document.querySelector('#textarea');

function generateText() {
    let getText = prompt("What do you want to print?");
    let getNumber = parseInt(prompt("And how many times?"));

    for (let i=0; i<getNumber; i++) {
        textArea.textContent += getText +'\n';
        console.log(getNumber);
    }
}

function reset() {
    textArea.textContent = '';
}

function printPdf() {
        let text = document.getElementById('textarea').innerHTML ;
        if (!(text == "")) {
            let win = window.open('','','height=700,width=700');
            win.document.write(text);
            win.document.close();
            win.print();
        }
}