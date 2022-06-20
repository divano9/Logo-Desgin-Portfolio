//copy email to clipboard

const copyBtn = document.getElementById("copy-btn");

function copyToClip(event) {
  event.preventDefault()
  var copyText = document.getElementById("myEmail");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  copyBtn.innerHTML = "E-MAIL COPIED"
  setTimeout(revertTxt, 2000)
}

function revertTxt(){
  copyBtn.innerHTML = "COPY E-MAIL"
}