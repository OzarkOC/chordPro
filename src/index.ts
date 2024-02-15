import { parseChordPro } from '$utils/chorProPars';
import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Hey Friend!');
  const display = document.querySelector(`[chordPro="display"]`);
  const transpose = $('.transpose .transpose-level').data('transpose');
  const chordProData = document
    .querySelector(`[chordPro="song"]`)
    ?.innerHTML.replace(/<\/?p>/g, '\n');
  if (!display || !chordProData) return;
  console.log(chordProData);

  updateDisplay(chordProData, display, transpose);
  // const chordProData =
});

export function updateDisplay(chordProData, display, transpose) {
  const html = parseChordPro(chordProData, transpose);
  display.innerHTML = html;
}

// chordProLine - The div line
// lyric_block - each line
// chord = chord style
