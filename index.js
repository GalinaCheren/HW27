const form = document.querySelector(".myForm");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  const table = document.querySelector("table");
  table.classList.remove("hide");
  event.preventDefault();
  form.classList.add("hide");

  const fullName = document.querySelector("input[name='fullName']");

  const birthDay = document.querySelector("input[name='birthDay']");

  const gender = document.querySelectorAll('input[name="sex"]:checked');

  const city = document.querySelector("select");

  const address = document.querySelector("textarea");

  const checkBoxes = document.querySelectorAll(
    'input[name="languages"]:checked'
  );
  let values = [];
  checkBoxes.forEach((checkBox) => {
    values.push(checkBox.value);
  });

  const formResult = {
    fullName: fullName.value,
    birthDay: birthDay.value,
    gender: gender[0].value,
    city: city.value,
    address: address.value,
    checkBoxes: values.join(", "),
  };

  function render() {
    Object.entries(formResult).forEach(([name, value]) => {
      const row = document.querySelector(`tr.table_${name}`);
      const cell = document.createElement("td");
      cell.innerHTML = value;
      row.append(cell);
    });
  }

  render(formResult);
}
//   const fields = ["firstName", "lastName", "birthDay", "address"];
//   const checkBoxes = ["sex", "languages"];

//   fields.forEach((field) => console.log(field, event.target[field].value));

//   checkBoxes.forEach((name) => {
//     let value = [];
//     event.target[name].forEach((box) => {
//       if (box.checked) {
//         value.push(box.value);
//       }
//     });
//     console.log(name, value.join(", "));
//   });
// }
