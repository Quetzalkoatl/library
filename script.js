/* eslint-disable no-tabs */
const books = [
	{
		id: 1,
		title: '365 starry nights',
		author: 'Chet Raymo',
		url: './assets/img/covers/365_starry_nights_Chet_Raymo.png',
		rating: 4,
	},
	{
		id: 2,
		title: 'A brief history of time',
		author: 'Stephen Hawking',
		url: './assets/img/covers/a_brief_history_of_time_Stephen_Hawking.png',
		rating: 5,
	},
	{
		id: 3,
		title: 'Edge of the Universe',
		author: 'Paul Halpern',
		url: './assets/img/covers/edge_of_the_universe_Paul_Halpern.png',
		rating: 5,
	},
	{
		id: 4,
		title: 'Hyperspace',
		author: 'Michio Kaku',
		url: './assets/img/covers/hyperspace_Michio_Kaku.png',
		rating: 4,
	},
	{
		id: 5,
		title: 'Immune',
		author: 'Philipp Dettmer',
		url: './assets/img/covers/immune_Philipp_Dettmer.png',
		rating: 5,
	},
	{
		id: 6,
		title: 'In The Shadow of Man',
		author: 'Jane Goodall',
		url: './assets/img/covers/in_the_shadow_of_man_Jane_Goodall.png',
		rating: 5,
	},
	{
		id: 7,
		title: "Isaac's Storm",
		author: 'Erik Larson',
		url: './assets/img/covers/isaacs_storm_Erik_Larson.png',
		rating: 4,
	},
	{
		id: 8,
		title: 'Liespotting',
		author: 'Pamela Meyer',
		url: './assets/img/covers/liespotting_Pamela_Meyer.png',
		rating: 3,
	},
	{
		id: 9,
		title: 'Rationality',
		author: 'Steven Pinker',
		url: './assets/img/covers/rationality_Steven_Pinker.png',
		rating: 4,
	},
	{
		id: 10,
		title: 'Silent Spring',
		author: 'Rachel Carson',
		url: './assets/img/covers/silent_spring_Rachel_Carson.png',
		rating: 5,
	},
	{
		id: 11,
		title: 'The Botany of Desire',
		author: 'Michael Pollan',
		url: './assets/img/covers/the_botany_of_desire_Michael_Pollan.png',
		rating: 4,
	},
	{
		id: 12,
		title: 'The Magic Furnace',
		author: 'Marcus Chown',
		url: './assets/img/covers/the_magic_furnace_Marcus_Chown.png',
		rating: 5,
	},
	{
		id: 13,
		title: 'The Order of Time',
		author: 'Carlo Rovelli',
		url: './assets/img/covers/the_order_of_time_Carlo_Rovelli.png',
		rating: 3,
	},
	{
		id: 14,
		title: 'The Origin of Species',
		author: 'Charles Darwin',
		url: './assets/img/covers/the_origin_of_species_Charles_Darwin.png',
		rating: 4,
	},
	{
		id: 15,
		title: 'The Planets',
		author: 'Dava Sobel',
		url: './assets/img/covers/the_planets_Dava_Sobel.png',
		rating: 4,
	},
	{
		id: 16,
		title: 'The Selfish Gene',
		author: 'Richard Dawkins',
		url: './assets/img/covers/the_selfish_gene_Richard_Dawkins.png',
		rating: 5,
	},
	{
		id: 17,
		title: 'Unsettled',
		author: 'Steven E.Koonin',
		url: './assets/img/covers/unsettled_Steven_E_Koonin.png',
		rating: 5,
	},
	{
		id: 18,
		title: 'Voices of the Ocean',
		author: 'Susan Casey',
		url: './assets/img/covers/voices_of_the_ocean_Susan_Casey.png',
		rating: 4,
	},
];

const bookCell = document.getElementById('book-cell');
const cells = [];

bookCell.style.width = '85vw';
bookCell.style.maxWidth = '85vw';
bookCell.style.display = 'flex';
bookCell.style.flexWrap = 'wrap';
bookCell.style.overflowY = 'scroll';

// Books view
function booksView() {
	for (let i = 0; i < books.length; i += 1) {
		cells.push(`<div style='margin: 10px 10px 10px 20px'>
                    <img style='width: 170px; border-radius: 5px; margin-top: 5px' 
                    src='${books[i].url}'>
                    <p style='font-family: Proxima; font-size: 16px; color: #24252e; margin: 8px 0 2px 0'>
                    ${books[i].title}
                    </p>
                    <p style='font-family: Proxima; font-size: 13px; color: #646f86; margin: 0 0 5px 0'>by 
                    ${books[i].author}
                    </p>
                      <div class="rating" data-total-value="${books[i].rating}">
                        <div class="rating__item" data-item-value="5">★</div>
                        <div class="rating__item" data-item-value="4">★</div>
                        <div class="rating__item" data-item-value="3">★</div>
                        <div class="rating__item" data-item-value="2">★</div>
                        <div class="rating__item" data-item-value="1">★</div>
                      </div>
                  </div>`);

		bookCell.innerHTML += cells[i];
	}
}

booksView();

// Stars rating
let ratingItemsList = document.querySelectorAll('.rating__item');

ratingItemsList.forEach((elem, id) => {
	elem.addEventListener('click', () => {
		const itemValue = elem.dataset.itemValue;
		elem.parentNode.dataset.totalValue = itemValue;
		books[Math.floor(id / 5)].rating = itemValue;
	});
});

// Search
const searchFilter = document.getElementById('search-bar-input');
const searchButton = document.getElementById('search-bar-button');
const cellsFilter = [];
const mostPopularFilter = [];

searchButton.addEventListener('click', () => {
	event.preventDefault();
	for (let i = 0; i < books.length; i += 1) {
		if (
			books[i].title.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
			books[i].author.toLowerCase().includes(searchFilter.value.toLowerCase())
		) {
			cellsFilter.push(`<div style='margin: 10px 10px 10px 20px'>
      <img style='width: 170px; border-radius: 5px; margin-top: 5px' 
      src='${books[i].url}'>
      <p style='font-family: Proxima; font-size: 16px; color: #24252e; margin: 8px 0 2px 0'>
      ${books[i].title}
      </p>
      <p style='font-family: Proxima; font-size: 13px; color: #646f86; margin: 0 0 5px 0'>by 
      ${books[i].author}
      </p>
        <div class="rating" data-total-value="${books[i].rating}">
          <div class="rating__item" data-item-value="5">★</div>
          <div class="rating__item" data-item-value="4">★</div>
          <div class="rating__item" data-item-value="3">★</div>
          <div class="rating__item" data-item-value="2">★</div>
          <div class="rating__item" data-item-value="1">★</div>
        </div>
      </div>`);
		}
	}
	bookCell.innerHTML = '';
	for (let i = 0; i < cellsFilter.length; i += 1) {
		bookCell.innerHTML += cellsFilter[i];
	}
	cellsFilter.length = 0;
});

// All books
const allBooks = document.getElementById('all-books');

allBooks.addEventListener('click', () => {
	cells.length = 0;
	bookCell.innerHTML = '';
	booksView();
});

// Most Popular books
const mostPopularBooks = document.getElementById('most-popular');

mostPopularBooks.addEventListener('click', () => {
	bookCell.innerHTML = '';
	books.forEach(elem => {
		if (elem.rating == 5) {
			mostPopularFilter.push(`<div style='margin: 10px 10px 10px 20px'>
      <img style='width: 170px; border-radius: 5px; margin-top: 5px' 
      src='${elem.url}'>
      <p style='font-family: Proxima; font-size: 16px; color: #24252e; margin: 8px 0 2px 0'>
      ${elem.title}
      </p>
      <p style='font-family: Proxima; font-size: 13px; color: #646f86; margin: 0 0 5px 0'>by 
      ${elem.author}
      </p>
        <div class="rating" data-total-value="${elem.rating}">
          <div class="rating__item" data-item-value="5">★</div>
          <div class="rating__item" data-item-value="4">★</div>
          <div class="rating__item" data-item-value="3">★</div>
          <div class="rating__item" data-item-value="2">★</div>
          <div class="rating__item" data-item-value="1">★</div>
        </div>
      </div>`);
		}
	});
	mostPopularFilter.forEach(elem => {
		bookCell.innerHTML += elem;
	});
});

// Add book
const addBook = document.getElementById('add-book-btn');
const popup = document.getElementById('popup');
const saveBook = document.getElementById('save-book-input');

addBook.addEventListener('click', () => {
	popup.style.display = 'block';
});

saveBook.addEventListener('click', () => {
	popup.style.display = 'none';
});
