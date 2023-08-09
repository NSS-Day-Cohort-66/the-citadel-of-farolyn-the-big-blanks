document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description:</h4>
        <h4>Disclaimer:</h4>
        <h4>Currently accepting the following Magician Types:</h4>
      </div>
    `;
    return detailsHtml;
  }
});

export const SchoolList = (schools) => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>`;

  let schoolHtml = `<ul class="school-list">`;

  for (const school of schools) {
    schoolHtml += `<li>${school.name}`;
  }
  headerHtml += `</div>`;
  return headerHtml;
};
