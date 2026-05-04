# Active Context

## Current Work

The current focus is project orientation and maintainability:

- Created `AGENTS.md` as the root instruction document for future agents.
- Moved HUD asset usage from `assets/images/hud2/` into `assets/images/hud/`.
- Removed the `assets/images/hud2/` directory after replacing the existing `hud` contents.
- Updated `src/game/AssetUrls.ts` to reference `assets/images/hud/...`.
- Added this `memory-bank/` directory so future chats can reload project context quickly.
- Created a global Codex skill at `C:\Users\madwi\.codex\skills\startpjt` for scaffolding new projects with `AGENTS.md` and memory-bank documents.
- Captured the user's screen layout direction for intro, preparation, main FPS gameplay, and stage clear screens.
- User added four screen reference images under `assets/images/screen-design/`: `intro.PNG`, `main-screen.PNG`, `preparation.PNG`, and `stage-clear.PNG`.
- Implemented the intro screen using `assets/images/Intro/intro-background.jpeg`, `shelter-defence-logo.png`, and `intro-buttons1.png`.
- Added a temporary preparation placeholder so the intro `Preparation` button has a working flow before the full preparation screen is implemented.
- Mobile portrait orientation is intentionally unsupported; portrait mobile view shows a landscape-only rotation notice.
- Adjusted intro logo and button sizing so both respond to viewport height changes, especially short landscape screens.
- User added five companion character images under `assets/images/chars/`; filenames are the character names.
- User added weapon images under `assets/images/weapon/`; filenames are weapon names.
- User added `assets/images/weapon/weapon-summary.md` with weapon traits/descriptions.
- User added six cropped item images under `assets/images/items/`.
- Implemented the real Preparation screen using character, weapon, and item assets.
- Preparation now supports soldier cycling, weapon cycling/assignment, hiring, item purchases, and start/back actions.
- Refined the Preparation screen based on the latest visual feedback:
  - Removed the Back action from the preparation header and moved Start Game to the left header position.
  - Added large digital-style Gold/Rubi readouts and wired `assets/fonts/DS-DIGIB.TTF`.
  - Changed item counts to three-digit formatting and enforced max stock rules.
  - Updated item prices and shortened item descriptions.
  - Changed Intelligence Potion to increase critical hit chance.
  - Changed weapon selection so arrow buttons preview weapons and clicking the weapon equips it to the selected soldier.
  - Added the selected soldier's equipped weapon beside the character inventory strip.
- Further refined the Preparation screen toward the second reference screenshot:
  - Removed the `Preparation` title block.
  - Added top-bar currency with `assets/images/gold.png` and `assets/images/rubi.png`.
  - Replaced text arrows with `assets/images/left-arrow.png` and `assets/images/right-arrow.png`.
  - Replaced the Start Game text button with `assets/images/start.png` plus `assets/images/start-game2.png`.
  - Moved the selected soldier item strip to the character side and rotated the equipped weapon image upward.
  - Removed the shop-side Gold text near the Items heading.
- Latest Preparation UI tweak:
  - Swapped the Start Game image mapping so the red start icon and Start Game label render in the intended order.
  - Set Soldiers, WEAPON, ITEMS, and the hired-count fraction to the same digital font and size treatment.
  - Adjusted the character-side weapon image so height stays fixed while width can vary for long guns.
  - Reduced item price text to about 70% of the previous size.
  - Connected the Preparation background to `assets/images/prep-background.jpeg` because no `prep-background.png` exists in the current assets folder.
- Latest Preparation layout polish:
  - Removed the translucent white background from the top header area.
  - Doubled the Rubi icon display size in the currency bar.
  - Moved the character-side item/weapon strip closer to the character and positioned the equipped weapon above the item list.
  - Adjusted shop item card images to sit lower/near vertical center and shifted them left so right-side whitespace is larger.
- Latest Preparation alignment tweak:
  - Changed the character-side item/weapon strip from top-based positioning to bottom-based positioning so the item list bottom aligns closer to the Hired button bottom.
  - The equipped weapon moves down with the item list because it is positioned above that strip.
- Latest ITEMS card polish:
  - Wrapped each item image/title/description in a shared content group so they move together.
  - Increased item card height by about 20%.
  - Adjusted the right-side loadout grid rows/padding to fit the larger item cards.
- Latest Preparation fix:
  - Reworked the character-side strip structure so the equipped weapon has its own reserved layout slot above the item list, preventing overlap caused by rotated weapon images.
  - Gave the item grid an explicit height and two equal rows so item cards visibly grow.
  - Moved item image/title/description as a centered content group inside each card.
  - Changed SOLDIERS, WEAPON, and ITEMS headings from blue to yellow for contrast.
  - Improved WEAPON name/description contrast with light text and shadow.
- Latest Preparation item/reset update:
  - Changed all initial preparation item counts to zero, so the character-side item strip starts at `000`.
  - Added an ITEMS Reset button that clears item counts and refunds only gold spent on item purchases.
  - Separated the character-side equipped weapon into a fixed-width/fixed-height visual slot so long rotated weapons no longer move or overlap the item count list.
  - Enlarged the shop item grid by another 20% and kept each item image/title/description grouped beneath the image.
  - Center-aligned the top Gold/Rubi icons and numbers vertically.
  - Changed weapon detail text to a brighter cyan/white treatment for readability.
- Latest Preparation alignment update:
  - Raised the soldier character art and reduced its height so the lower information, stats, and Hired button remain visible.
  - Bottom-aligned the character-side item count list with the soldier information/action area.
  - Reworked the WEAPON picker so arrows align to the combined weapon image and description block instead of the image alone.
  - Pulled the ITEMS shop section upward and let the grid fill the available lower-right space instead of forcing a too-tall minimum height.
  - Moved the Reset action beside the ITEMS heading and rendered it with `assets/images/reset.png`.
  - Changed the top Gold/Rubi currency values to white with shadow for readability.
  - Made the preparation background and game shell explicitly center-aligned.
- Latest Preparation follow-up tweak:
  - Reduced the ITEMS Reset image button to match the heading font-size scale.
  - Shifted the right-side WEAPON/ITEMS content left by increasing right padding and reducing left padding, balancing the outer arrow spacing.
- Latest Preparation horizontal balance follow-up:
  - Pulled the right-side WEAPON/ITEMS content further left by changing the loadout padding to `0 14% 0 1%`.

## Important Current State

- The app is a Vite + TypeScript + Three.js browser game.
- Main source lives under `src/`.
- Game assets live under `assets/`.
- Screen layout references live under `assets/images/screen-design/`.
- Companion images live under `assets/images/chars/`: `anais.png`, `henry.png`, `kim.png`, `kino.png`, `tomas.png`.
- Item images live under `assets/images/items/`: `jacket.png`, `magazine.png`, `potion-dex.png`, `potion-health.png`, `potion-int.png`, `repair-kit.png`.
- Weapon images and `weapon-summary.md` live under `assets/images/weapon/`.
- Generated output and dependencies live under `dist/` and `node_modules/`; avoid editing them directly.
- `code_review.json` was removed by the user and should not be referenced as a current project file.
- There is no Docker setup in the repository.
- This folder is not currently detected as a git repository in the active workspace.

## Verification Notes

- `npm run build` succeeded after the HUD asset path update.
- `npm run build` succeeded after the intro screen implementation.
- `npm run build` succeeded after adding the mobile portrait orientation notice.
- `npm run build` succeeded after responsive intro sizing adjustments.
- The first build attempt failed in the sandbox with Windows `spawn EPERM`; rerunning with elevated permissions succeeded.
- No browser visual QA has been performed after the latest documentation-only changes.
- `startpjt` skill validation via `quick_validate.py` could not run because the current Python environment is missing `PyYAML`; the required files were manually checked.
- Screen mockups now exist as files in `assets/images/screen-design/`.
- `Preparation` currently opens a placeholder; the real hire/loadout/shop screen remains to be implemented.
- Preparation implementation can now use real character, weapon, and item assets instead of placeholders.
- The old preparation placeholder has been replaced by the first functional preparation/loadout/shop UI.
- `npm run build` succeeds, with a Vite chunk-size warning because newly imported image assets increased the bundle size.
- `npm run build` succeeded after the latest Preparation UI refinement; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest asset-based Preparation layout update; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest Start/background/heading/weapon-size Preparation tweak; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest transparent-header/Rubi/strip/item-card polish; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest character-side item strip bottom-alignment tweak; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest ITEMS card grouping/size update; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest item-card sizing, weapon-strip overlap, and heading contrast fixes; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after adding item reset, zero initial item counts, currency alignment, and the fixed character-side weapon slot; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after the latest Preparation alignment/reset-image pass; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after reducing the Reset image size and re-centering the right loadout content; Vite still reports the same chunk-size warning.
- `npm run build` succeeded after pulling the right loadout content further left; Vite still reports the same chunk-size warning.
- A Vite dev server is responding at `http://127.0.0.1:5173/`.

## Next Agent Startup Checklist

When a new chat starts, read these files first:

1. `memory-bank/design-document.md`
2. `memory-bank/active-context.md`
3. `memory-bank/implementation-plan.md`
4. `memory-bank/progress.md`
5. `memory-bank/trouble-shooting.md`
6. `AGENTS.md`

After meaningful code changes, dependency changes, asset moves, builds, or commits, update the relevant memory-bank files.
