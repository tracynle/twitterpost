function showRemainingCharacters() {
    //get the length of the comments. document.getElementById
    //find the characters left by subtracting 255 - length
    //condition if we go over 255
    //disable the field or just make the value equal to the first 255 characters.

    let textarea = document.getElementById('comments');
    document.getElementById('numleft').innerHTML = 255 - textarea.value.length;

    if (textarea.value.length >= 255) {
        textarea.disabled = true;
    }

}

function sendTweet() {
    let textarea = document.getElementById('comments');
    let tweets = document.getElementById('tweets');
    let fullname = document.getElementById('fullname');

    tweets.innerHTML += fullname.value + ": " + textarea.value + '<br>';
    document.form.reset(); 
}   
