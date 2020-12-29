# Pot Media

This project is using [npm](https://www.npmjs.com/) and gulp [gulp](https://gulpjs.com/) task runner.

## Getting Started

Project consists out of `src/` directory with `js/`, `css/`, `img/` and `fonts/` folders. There is also `assets/` folder that containes two folders. First `scss/` folder where all SCSS files are, and `js/` with all javascript files are. Styling and script should be done in assets folder, which is tha compiled to one `src/css/main.css` file and one `src/jss/all.js` javascript file.

## Installation

```bash
npm install
```

## Developement

Default task compiles SCSS files and JS files, opens `http://localhost:3000` server and watches for all changes:

```bash
gulp
```

Copy HTML files to `dist/` folder:

```bash
gulp copyHTML
```

Copy CSS files to `dist/` folder:

```bash
gulp copyCSS
```

Copy Fonts files to `dist/` folder:

```bash
gulp copyFonts
```

Copy and optimize images to `dist/` folder:

```bash
gulp copyImages
```

Copy JS files to `dist/` folder:

```bash
gulp copyJS
```

Merge SASS files and copy to `src/css/main.css` folder:

```bash
gulp scssCompile
```

Merge JS files and copy to `src/js/all.js` folder:

```bash
gulp jsCompile
```

Watching SASS files and javascript files from assets folder, as well as html and images files:

```bash
gulp watchMe
```

## Deployment

Copies all required files from `src/` to `dist/`. Everything from `dist/` folder should be pushed to live website.

```bash
gulp build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
