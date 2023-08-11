document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    const detailsHtml = `
    <div>
      <h4>Greeting:</h4>
      <h4>School:</h4>
      <h4>Study Book:</h4>
    </div>`;
  }
});

export const TypeList = (archetypes) => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;

  headerHtml += `<ul class="type-list">`;

  for (const archetype of archetypes) {
    headerHtml += `<li>${archetype.name}`;
  };


  headerHtml += `</div>`;
  return headerHtml;
};
