
function getReviewId() {
    return $('#review-id')[0].innerHTML;
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function getRadioValue() {
    var radios = $(".radio-options");

    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
    return null;
}

function prepJsonSubmission() {
    var data = {};

    data.value = getRadioValue();
    data.selectedText = getSelectionText();
    data.reviewId = getReviewId();
    return JSON.stringify(data);
}

function validateInputs() {
    if (getRadioValue() == null) {
        // Get the snackbar DIV
        var x = $("#snackbar")

        // Add the "show" class to DIV
        x.className = "";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = "invisible"; }, 3000);
        return false;
    }

    return true;
}

$( "#submit-button" ).click(function() {

    if (validateInputs()) {
        alert("POST /review/" + getReviewId() + "/truth " + prepJsonSubmission());
    }
});