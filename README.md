# rorr-item-descriptions
A primitive text mod that replaces the pickup text with the detailed description from the logbook.

## How to install
- download the mod by clicking the green "<> Code" button
- hit the "Download Zip" button
- browse Risk of Rain Returns' local files
- open the `language` folder   (folder directory: `Steam\steamapps\common\Risk of Rain Returns\language`)
- simply add the `descriptions` folder with all the other languages

## How to use for other languages
- install Node.js
- install the `json5` package (`npm i json5`)
- drag and drop the desired `lang.json` file into the `lang_to_convert` folder
- run `node main.js`
- assuming no errors, it should be done!

## How to use in-game
- click the language icon in the top-right to switch to item descriptions
