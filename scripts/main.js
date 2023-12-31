import { SchoolList } from "./SchoolList.js";
import { TypeList } from "./TypeList.js";
import { getArchetypes } from "./database.js";
import { getSchools } from "./database.js";

let archetypes = getArchetypes();
let schools = getSchools();

const mainContainer = document.querySelector("#container");

const applicationHTML = `
  <div id="header">
    <img src="./images/citadel1.png"/>
    <div class="text">
      <h1>The Citadel of Farolyn</h1>
      <h3>Office of Admissions & Placement</h3>
    </div>
  </div>
  <div id="body">
      <div id="lists_container">
      ${TypeList(archetypes)}
      ${SchoolList(schools)}
      </div>
      <div id="details_container" class="content_block">
        <div id="message">Please select a Magician Type or School of magic to show details.</div>
      </div>
  </div>
`;

mainContainer.innerHTML = applicationHTML;
