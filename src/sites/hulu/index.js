/* global findPlexMedia, parseOptions, modifyPlexButton */
function isReady() {
    return $$('#content [class$="__meta"]');
}

function isMovie() {
	return window.location.pathname.startsWith('/movie/'); // /movies/ is STRICTLY for a collection of movies (e.g. the line-up)
}

function isShow() {
	return window.location.pathname.startsWith('/series/'); // /tv/ is STRICTLY for a collection of movies (e.g. the line-up)
}

let $$ = selector => document.querySelector(selector);

function renderPlexButton($parent) {
	if (!$parent) return;

	let existingButton = $$('a.web-to-plex-button');
	if (existingButton)
		existingButton.remove();

	let el = document.createElement('a');

    el.classList.add('Nav__item', 'web-to-plex-button');

    el.innerHTML = `<img src="${ chrome.extension.getURL('img/o48.png') }"/>`;
    el.title = 'Loading...';

	$parent.insertBefore(el, $parent.lastChild);
	return el;
}

async function initPlexThingy(type) {
	let $button = renderPlexButton($$('#content .Nav .Nav__container'));

	if (!$button)
		return;

	let $title = $$('#content [class$="__name"]'),
        $year = $$('#content [class$="__meta"] [class$="segment"]:last-child'),
        title = $title.innerText.replace(/^\s+|\s+$/g, '').toCaps(),
        year = +$year.textContent.replace(/.*\((\d{4})\).*/, '$1'),
        Db = await getIDs({ title, year, type }),
        IMDbID = Db.imdb,
        TMDbID = Db.tmdb,
        TVDbID = Db.tvdb;

    title = Db.title;
    year = Db.year;

	findPlexMedia({ type, title, year, button: $button, IMDbID, TMDbID, TVDbID, txt: 'title', hov: 'null' });
}

(window.onlocationchange = () =>
    wait(isReady, () => parseOptions().then(async() => await initPlexThingy(isMovie()? 'movie': 'tv')))
)();