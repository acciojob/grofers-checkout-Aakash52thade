const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach((priceCell) => {
    // If editable, text may be dynamic
    const value = Number(priceCell.textContent.trim());
    if (!isNaN(value)) total += value;
  });

  // Remove existing #ans if already present
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.remove();
  }

  const ansDiv = document.createElement("div");
  ansDiv.id = "ans";
  ansDiv.textContent = total;

  document.body.appendChild(ansDiv);
});
