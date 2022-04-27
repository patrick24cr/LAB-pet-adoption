import insertModalHTML from "./insertModalHTML.js";
import updateDom from "./updateDom.js";
import eventListeners from "./eventListeners.js";

const startApp = () => {
  insertModalHTML();
  updateDom();
  eventListeners();
}

startApp()
