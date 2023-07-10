function insertEmoji() {
    var sentenceInput = document.getElementById("sentenceInput");
    var emojiInput = document.getElementById("emojiInput");
    var result = document.getElementById("result");

    var sentence = sentenceInput.value;
    var emoji = emojiInput.value;

    playMusic()

    if (sentence === "") {
        result.innerHTML = "Oopps mag-type ka muna girl";
        return;
    } else if (emoji === "") {
        result.innerHTML = "Oopps type mo muna emoji na gusto mo";
        return;
    } else if (!isEmoji(emoji)) {
        result.innerHTML = "Oopps hindi valid ang emoji.";
        return;
    }

    var words = sentence.match(/\S+/g);
    var finalSentence = "";

    for (var i = 0; i < words.length; i++) {
        finalSentence += words[i] + " ";
        finalSentence += "<span class='emoji'>" + emoji + "</span> ";
    }

    result.innerHTML = finalSentence;
}

function isEmoji(str) {
    // Regular expression to check if the string contains at least one emoji
    var emojiRegex = /[\uD800-\uDFFF]./;
    return emojiRegex.test(str);
}

function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
  
