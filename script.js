const d = document,
  $form = d.querySelector("#form-dom"),
  $ul = d.querySelector(".list");
d.addEventListener("submit", (e) => {
  e.preventDefault();
  $li = d.createElement("li");

  $li.textContent = $form.pi.value;

  $ul.appendChild($li);

  // let $value = `<li> ${$form.pi.value} </li>`;
  // $ul.insertAdjacentHTML("beforeend", $value);

  $form.pi.focus();
});
