//Example: The quick brown fox jumps over the lazy dog

function checkPhrase() {
    let input = document.getElementById('phrase').value.toLowerCase().replace(/[^a-z]+/g, "");

    console.log(input)

    //String into array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    let letterCount = 0
        //loop through alphabet array
    for (let x = 0; x < alphabet.length; x++) {
        let letter = alphabet[x];
        input.indexOf(letter) > -1 ? letterCount++ : letterCount = 0
    };

    //change displayed message
    let message = document.getElementById('outcome')

    if (letterCount == 26) {
        message.innerHTML = "<b>JACKPOT</b><br>You've entered text that is a panngrammatic window"
            // alert("Jackpot! You've entered text that is a panngrammatic window");
    } else {
        message.innerHTML = "Try harder! That is not a panngrammatic window..."
            // alert("Try harder! That is not a panngrammatic window...");
    };
}