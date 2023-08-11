import { getSchools } from "./database.js";
import { getBooks } from "./database.js";

const schools = getSchools();
const books = getBooks();

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;
  if (typeClicked.dataset.type === "type") {
    for (const book of books) {
      if (book.id === parseInt(typeClicked.dataset.study_book)) {
        for (const school of schools) {
          if (school.id === parseInt(typeClicked.dataset.school)) {
            let schoolName = school.name;
            let studyBook = book.name;
            const detailsContainer =
              document.querySelector("#details_container");
            const detailsHTML = `
            <div>
            <h4>Greeting:</h4>
            <p>${typeClicked.dataset.greeting}</p>
            <h4>School:</h4>
            <p>${schoolName}</p>
            <h4>Study Book:</h4>
            <p>${studyBook}</p>
            </div>`;
            detailsContainer.innerHTML = detailsHTML;
          }
        }
      }
    }
  }
});

export const TypeList = (archetypes) => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;

  headerHtml += `<ul class="type-list">`;

  for (const archetype of archetypes) {
    headerHtml += `<li data-type="type"
    data-greeting="${archetype.greeting}" 
    data-school="${archetype.schoolId}" 
    data-study_book="${archetype.bookId}">${archetype.name}`;
  }

  headerHtml += `</div>`;
  return headerHtml;
};
