function compressJSON() {
    const textarea = document.getElementById("textarea-json");
    const text = textarea.value;

    if (text.trim()) {
        try {
            const obj = JSON.parse(text);
            const compressed = JSON.stringify(obj);
            textarea.value = compressed;
        } catch (e) {
            showMessage("error", "fa fa-times", "Opps... something went wrong");
        }
    } else {
        showMessage("warning", "fa fa-exclamation", "Is JSON a joke to you?");
    }
}


function prettifyJSON() {
    const textarea = document.getElementById("textarea-json");
    const text = textarea.value
    if (text.trim() !== "") {
        try {
            const obj = JSON.parse(text);
            const pretty = JSON.stringify(obj, null, 2);
            textarea.value = pretty;
        } catch (e) {
            showMessage("error", "fa fa-times", "Opps... something went wrong");
        }
    } else {
            showMessage("warning", "fa fa-exclamation", "Haven't you forgotten anything?");
    }
}


function copyJSON() {
    let text = document.getElementById("textarea-json").value;
    if (text.trim() !== "") {
    navigator.clipboard.writeText(text)
        .then(m => {
            showMessage("success", "fa fa-check", "Copied");
        })
        .catch(err => {
          console.error("Помилка копіювання: ", err);
        });
    } else {
        showMessage("warning", "fa fa-exclamation", "I need at least the text...");
    }
}


function validateJSON() {

    const textarea = document.getElementById("textarea-json");
    const text = textarea.value
    if (text.trim() !== "") {
        try {
            JSON.parse(text);
            showMessage("success", "fa fa-check", "JSON is valid")
        } catch (e) {
            showMessage("error", "fa fa-times", "JSON is invalid");
        }
    } else {
            showMessage("warning", "fa fa-exclamation", "There is nothing in the text area.");
    }
}
