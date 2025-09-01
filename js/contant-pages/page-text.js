const textareaText = document.getElementById("textarea-text");
const charCounter = document.getElementById("charCount");
const lineCounter = document.getElementById("lineCount");
const letterCounter = document.getElementById("letterCount");
const wordCounter = document.getElementById("wordCount");

textareaText.addEventListener("input", (event) => {
    var text = textareaText.value;
    charCounter.textContent = text.length;
    lineCounter.textContent = text.split(/\r?\n/).length;
    wordCounter.textContent = (text.split(/\s+/)).filter(w=>w.length > 0).length;

    const tmp_letter_count = text.match(/\p{L}/gu)
    letterCounter.textContent = tmp_letter_count ? tmp_letter_count.length : 0;
});
