Riotstrap
=========

Riot.js + Bootstrap


Status: Prototyping (pre-alpha)


### Goal for v0.0.1a

* Have a sidebar template for bootstrap where all components are configurable at
mount time.
* Behavior of a component should be easily extensible
* Styles should be easily extensible
* Documentation for above, especially the extensibility


### Installing Dependencies

Install riot - I use the `npm` version which is installed
globally:

`npm install -g riot`


### Running the project

I run the project with:

`make run &`

This
* serves the HTML
* has the riot compiler watch for file changes.
* pushes it to a background process so that I can reuse shell isntance

If you only want to run the riot compiler:

`make riot` should do the trick.

**Note**: I log stdout and stderr to `/tmp/*.log`


### License
MIT License - subject to change before first release
