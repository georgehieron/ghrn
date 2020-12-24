// Plugins
const pluginNavigation = require("@11ty/eleventy-navigation");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Filters
const dateFilter = require("./src/filters/date-filter.js");

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

// Functions
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

module.exports = (config) => {
    // Add plugins
    config.addPlugin(pluginNavigation);
    config.addPlugin(rssPlugin);
    config.addPlugin(syntaxHighlight);

    // Add filters
    config.addFilter("dateFilter", dateFilter);

    // Only minify HTML if we are in production because it slows builds _right_ down
    if (isProduction) {
        config.addTransform('htmlmin', htmlMinTransform);
    }

    //// ENGLISH COLLECTIONS
    // Pages
    config.addCollection("pages_en", function (collection) {
        return collection.getFilteredByGlob("./src/en/pages/*.md");
    });

    // Work - Returns work items, sorted by display order
    config.addCollection("work_en", (collection) => {
        return sortByDisplayOrder(
            collection.getFilteredByGlob("./src/en/work/*.md")
        );
    });

    // Blog - Returns a collection of blog posts in reverse date order
    config.addCollection("blog", (collection) => {
        return [
            ...collection.getFilteredByGlob("./src/en/posts/*.md"),
        ].reverse();
    });

    //// FINNISH COLLECTIONS
    // Finnish pages
    config.addCollection("pages_fi", function (collection) {
        return collection.getFilteredByGlob("./src/fi/pages/*.md");
    });

    // Finnish work
    config.addCollection("work_fi", (collection) => {
        return sortByDisplayOrder(
            collection.getFilteredByGlob("./src/fi/work/*.md")
        );
    });

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
