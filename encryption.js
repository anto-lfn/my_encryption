function calculateMatrixValue(key) {
  const A = parseInt(key[0]);
  const B = parseInt(key[1]);
  const C = parseInt(key[2]);
  const D = parseInt(key[3]);

  return Math.round((A * B - C) / Math.pow(2, D));
}

function transform(action) {
  const key = document.getElementById("key").value;
  if (key.length !== 4) {
    alert("Key must be 4 digits");
    return;
  }

  const matrixValue = calculateMatrixValue(key);
  const inputText = document.getElementById("inputText").value;
  let outputText = "";

  // Implement your encryption or decryption logic here based on the matrixValue and action
  // ...

  document.getElementById("outputText").value = outputText;
}

function saveAsPDF() {
  const key = document.getElementById("key").value;
  const outputText = document.getElementById("outputText").value;

  // Implement your logic to save outputText as a PDF, and place the key in greyed-out text at the bottom-right
  // You may use libraries like jsPDF for this.
}
