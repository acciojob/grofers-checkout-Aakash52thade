const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  const priceElements = document.querySelectorAll(".price"); // Corrected class name
  let total = 0;

  priceElements.forEach((priceCell) => {
    total += Number(priceCell.textContent);
  });

  const table = document.querySelector("table");

  // Prevent adding multiple total rows if button is clicked again
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});
