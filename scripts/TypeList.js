document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    const detailsContainer = document.querySelector("#details_container");
    const detailsHTML = `
    <div>
      <h4>Greeting:</h4>
      <p>${typeClicked.dataset.greeting}</p>
      <h4>School:</h4>
      <p>${typeClicked.dataset.schoolId}</p>
      <h4>Study Book:</h4>
      <p>${typeClicked.dataset.bookId}</p>
    </div>`;
    detailsContainer.innerHTML = detailsHTML;
  }
});

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;

  headerHtml += `</div>`;
  return headerHtml;
};
