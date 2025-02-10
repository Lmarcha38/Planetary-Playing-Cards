
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("card", function(name, description, color) {
    return `<div class="card">
      <span class="card_planet" style="background-color:${color}"></span>
      <div class="card_name">${name}</div>
      <div class="card_desc">${description}</div>
    </div>`
  })
};