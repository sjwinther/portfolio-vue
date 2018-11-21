class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.vue"],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["vue"]
        }
      ]
    }),
    require("autoprefixer"),
    require("cssnano")
  ]
};
