/* =========================
   INVOICE CALCULATOR
========================= */

const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");
const taxRateInput = document.getElementById("taxRate");
const otherCostsInput = document.getElementById("otherCosts");
const addRowButton = document.getElementById("addRow");
const clearButton = document.getElementById("clearInvoice");
const printButton = document.getElementById("printInvoice");
const invoiceItems = document.getElementById("invoiceItems");

function calculateTotals() {
  const amountInputs = document.querySelectorAll(".amount");
  let subtotal = 0;

  amountInputs.forEach((input) => {
    subtotal += Number(input.value) || 0;
  });

  const taxRate = Number(taxRateInput.value) || 0;
  const otherCosts = Number(otherCostsInput.value) || 0;
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount + otherCosts;

  subtotalElement.textContent = subtotal.toFixed(2);
  totalElement.textContent = total.toFixed(2);
}

/* DEFAULT DATE */
document.getElementById("invoiceDate").valueAsDate = new Date();

/* CALCULATE ON ANY INPUT CHANGE */
document.addEventListener("input", (event) => {
  if (
    event.target.classList.contains("amount") ||
    event.target === taxRateInput ||
    event.target === otherCostsInput
  ) {
    calculateTotals();
  }
});

/* MEMBERSHIP AUTO PRICING */
document.addEventListener("change", (event) => {
  if (event.target.classList.contains("membershipSelect")) {
    const row = event.target.closest("tr");
    const amountInput = row.querySelector(".amount");
    amountInput.value = event.target.value;
    calculateTotals();
  }
});

/* ADD NEW ROW */
addRowButton.addEventListener("click", () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <input type="text" placeholder="New Item">
    </td>
    <td>
      <input type="number" class="amount" value="0">
    </td>
  `;
  invoiceItems.appendChild(row);
});

/* CLEAR */
clearButton.addEventListener("click", () => {
  location.reload();
});

/* PRINT */
printButton.addEventListener("click", () => {
  window.print();
});

/* INITIAL TOTAL */
calculateTotals();