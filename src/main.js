import { render } from './render.js';
import FiltersView from './view/filters-view.js';
import SortingView from './view/sorting-view.js';
import WaypointListPresenter from './presenter/list-presenter.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const listPresenter = new WaypointListPresenter({listContainer: tripEventsContainer});

render(new FiltersView(), filtersContainer);
render(new SortingView(), tripEventsContainer);

listPresenter.init();
