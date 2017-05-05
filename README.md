# KulrSpottr

## Description
KulrSpottr is a game where the player has to spot the tile which has a different colour in a matrix of coloured tiles. If the player clicks the right tile, the game continues and the player moves on to the next level of difficulty. The game ends when the player chooses the wrong tile.

## Prerequisites
Any modern Web browser with JavaScript enabled. Used https://crossbrowsertesting.com and also real devices to test cross-platform compatibilities. Fully compatible with the following popular Web browsers:
* Windows: (Chrome, Firefox, IE Edge)
* Linux: Chrome, Firefox
* Android: Chrome, Firefox
* iOS (iPhone): Chrome, Safari

## Usage
1. Clone the repository to a local folder by running `git clone https://github.com/cywhiz/Kulrspottr.git`
2. Swtich to the project folder
3. Click on `index.html` to run the game

A live demo of the app can be accessed through https://kulrspottr.herokuapp.com

## Tools/Frameworks Used
This app was created with a goal to make it as simple as possible, without using unnecessary frameworks to clutter the app. It uses mostly pure JavaScript, CSS, and HTML. Only jQuery and Bootstrap are used to simplify tasks.

### jQuery 3
jQuery was used for its ability to quickly and easily edit the DOM.

### Bootstrap 3
Bootstrap is a popular framework used to make the game work and look similar on all common browsers and systems, including mobile devices. The framework provides responsiveness across all devices and has auto spacing and indentation adjustment.

## Improvements/bugs
- Error handling and validation in player name input, specifying a min/max length
- More animations and GUI/font improvements
- Add timing in additional to score
- Game is currently not optimized for mobile phones in landscape mode
- Add game options like difficulty level (colour contrast)
- High scores info is lost when page is refreshed. Perhaps `sessionStorage` or `localStorage` can be used to keep the scores longer
