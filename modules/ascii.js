var art = require('ascii-art');
art.Figlet.fontPath = './modules/assets/fonts/';

module.exports.render = renderAscii;

function renderAscii (string, font, color) {
    art.font(string, font, color, function(rendered) {
        console.log(rendered);
        return true;
    });
}