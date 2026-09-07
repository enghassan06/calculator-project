const display = document.querySelector("input.display");
const buttons = document.querySelectorAll('.buttons input[type ="button"] ');

buttons.forEach(function (button) {
  button.addEventListener("click", function (btn) {
    let value = btn.target.value;
    if (value == "AC") {
      display.value = "";
    } else if (value == "DE") {
      display.value = display.value.toString().slice(0, -1);
    } else if (value === "=") {
      if (display.value == "0/0") {
        display.value = "العب بعيد يا شاطر";
      }
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});
