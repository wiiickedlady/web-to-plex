# Web to Plex ![Icon](src/img/48.png)

![Logo](src/img/256.png)

This browser extension searches your [Plex Media Server (PMS)](https://www.plex.tv/downloads/) for matching media on sites like [IMDb](https://imdb.com), letting you immediately open the movie or TV show in Plex, if it is available. If the item isn't found on your PMS, then a download button is added instead.

Optionally, you can configure [Sonarr](https://sonarr.tv/) (TV Shows), [Radarr](https://radarr.video/) (Movies), [Watcher 3](https://nosmokingbandit.github.io/) (Movies), and/or [CouchPotato](https://couchpota.to/) (Both) in the extension's options. After that, you can immediately add a TV show or movie to CouchPotato/Sonarr/Radarr with one click, right from your favorite site.

![Examples](example.png)

----

## Status: 426 (UPGR-RQ)

Getting the repo ready for a pull request.

----

## Features:

- Can save media directly from noted sites (file downloads/magnet URLs)
  - Right-click | Web to Plex | Save as "Show/Movie (Year)"
- Can push requests to your chosen NZB manager
  - [Radarr](https://radarr.video/)
  - [Sonarr](https://sonarr.tv/)
  - [CouchPotato](https://couchpota.to/)
  - [Watcher 3](https://nosmokingbandit.github.io/) ("Watcher, version 3")
- Offers search options via right-click (context menu)
  - Right-click | Web to Plex | Find "Show/Movie (Year)"
- Offers a Plex-like GUI
  - Settings page
  - Pop-up page
- Offers a status via the browser badge
  - Orange: item is available/found
  - Grey: item is unavailable/not found
- Offers an easy login feature
  - Offers an API login feature
- Offers a "Direct Plex URL" feature
  - i.e. you can specify `localhost:32400` as your Plex URL to avoid bandwidth usage for Plex requests

## Supported sites: *Site (button location)*

*Given in order of completion*

1.  [Movieo](http://movieo.me/) ([button location](button-locations/movieo.png))
2.  [IMDb](http://imdb.com/) ([button location](button-locations/imdb.png))
3.  [Trakt.tv](https://trakt.tv/) ([button location](button-locations/trakt.png))
4.  [Letterboxd](https://letterboxd.com/) ([button location](button-locations/letterboxd.png))
5.  [Flenix](https://flenix.co/)<sup>1/5</sup> ([button locations](button-locations/flenix.png))
6.  [TV Maze](http://www.tvmaze.com/) ([button location](button-locations/tvmaze.png))
7.  [The TVDb](https://www.thetvdb.com/) ([button location](button-locations/tvdb.png))
8.  [The MovieDb](https://www.themoviedb.org/) ([button location](button-locations/tmdb.png))
9.  [VRV](https://vrv.co/)<sup>2</sup> ([button location](button-locations/vrv.png))
10. [Hulu](https://hulu.com/)<sup>2/3/4</sup> ([button location](button-locations/hulu.png))
11. [Google Play Store](https://play.google.com/store/movies/) ([button location](button-locations/google.png))
12. [iTunes](https://itunes.apple.com/)<sup>3/5</sup> ([button location](button-locations/itunes.png))
13. [Metacritic](http://www.metacritic.com/)<sup>4</sup> ([button location](button-locations/metacritic.png))
14. [Fandango](https://www.fandango.com/) ([button location](button-locations/fandango.png))
15. [Amazon](https://www.amazon.com/)<sup>5</sup> ([button location](button-locations/amazon.png))
16. [Vudu](https://www.vudu.com/) ([button location](button-locations/vudu.png))
17. [Verizon](https://www.tv.verizon.com/) ([button location](button-locations/verizon.png))
18. [CouchPotato](http://couchpotato.life/) ([button location](button-locations/couch-potato.png))
19. [Rotten Tomatoes](https://www.rottentomatoes.com/) ([button location](button-locations/rotten-tomatoes.png))
20. [ShowRSS](https://showrss.info/)<sup>1</sup> (no button location)
21. [Netflix](https://netflix.com/)<sup>3</sup> ([button location](button-locations/netflix.png))

*Notes*

- `1` *This site uses the `Right click | Web to Plex | Save as...` feature (file download), or a direct link (usually magnet URL).*
- `2` *This site has a loading issue, simply refresh the page if the button doesn't appear.*
- `3` *This site doesn't allow media browsing, or requires a subscription beforehand.*
- `4` *This site is network intensive (loads slowly). Be patient.*
- `5` *This site is known to update frequently, support may change without notice.*

## In Progress sites (adding support):

- Nothing here... for now

## En Progress sites (may add support):

- Nothing here... for now

## Installing Web to Plex

- **Download the [CRX](https://github.com/Ephellon/web-to-plex/raw/master/src.crx)**

- **Download the [ZIP](https://github.com/Ephellon/web-to-plex/raw/master/src.zip)**

- **Download the [SRC](https://github.com/Ephellon/web-to-plex/archive/master.zip)**

## Requirements

+ [**Plex Media Server v1.4.3.0**](https://www.plex.tv/downloads/#getdownload) or higher

+ Before using the [extension](chrome://extensions), you must configure the settings

## Issues & Contributions

If you have any problem with the extension, please don't hesitate to [submit an issue](https://github.com/Ephellon/web-to-plex/issues/new).

All contributions are welcome.
