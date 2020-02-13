import { events } from "./events.js"
import { render } from "./dom.js";

// Display all POIs on page on page load
render();

// POST new event to DB
events.submitEvent();

events.editEvent();