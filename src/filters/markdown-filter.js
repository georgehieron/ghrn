const markdownIt = require("markdown-it")({
    html: false,
    breaks: true,
    linkify: false,
});

module.exports = function markdown(value) {
    return markdownIt.render(value);
};
