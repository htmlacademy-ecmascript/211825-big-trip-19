import { render } from '../render.js';
import WaypointListView from '../view/waypoint-list-view.js';
import WaypointView from '../view/waypoint-view.js';
// import WaypointCreationView from '../view/creation-form-view.js';
import WaypointEditView from '../view/edit-form-view.js';

export default class WaypointListPresenter {
  waypointListComponent = new WaypointListView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.waypointListComponent, this.listContainer);

    render(new WaypointEditView(), this.waypointListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.waypointListComponent.getElement());
    }
  }
}
