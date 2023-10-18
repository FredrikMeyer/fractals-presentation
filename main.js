import "reveal.js/dist/reveal.css";
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import "reveal.js/dist/theme/solarized.css";
import Math from "reveal.js/plugin/math/math.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/plugin/highlight/monokai.css";
import Reveal from "reveal.js";
import "./style.css";

const deck = new Reveal();

deck.initialize({
  hash: true,
  slideNumber: true,
  plugins: [Math.KaTeX, Highlight],
});
