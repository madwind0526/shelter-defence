# Progress

## Timeline

### Initial Project State

- Vite + TypeScript + Three.js browser game exists.
- Core gameplay modules are present under `src/game/`.
- DOM HUD exists under `src/ui/Hud.ts`.
- Static assets exist under `assets/`.

### AGENTS.md Created

- Added root `AGENTS.md`.
- Documented project structure, development commands, coding rules, module ownership, UI checks, and review guidance.

### HUD Asset Consolidation

- Replaced `assets/images/hud/` content with the active HUD assets from `assets/images/hud2/`.
- Removed `assets/images/hud2/`.
- Updated `src/game/AssetUrls.ts` to reference `assets/images/hud/...`.
- Verified with `npm run build`.

### Removed Stale Review Reference

- User removed `code_review.json`.
- Removed `code_review.json` reference from `AGENTS.md`.

### Memory Bank Added

- Created `memory-bank/`.
- Added design, active context, implementation plan, progress, and troubleshooting documents.
- Updated `AGENTS.md` to require reading and maintaining the memory bank.

### startpjt Skill Created

- Created global Codex skill `startpjt` under `C:\Users\madwi\.codex\skills\startpjt`.
- The skill bootstraps new projects from a project description.
- It requires asking for a project description before scaffolding if the user only says `startpjt`.
- It creates or updates `AGENTS.md` and the five required `memory-bank/` files for future chats.

### Screen Design Direction Captured

- User added screen reference images in `assets/images/screen-design/`.
- Documented intro, preparation, main FPS, and stage clear screen requirements.
- Added planned UI flow notes to `memory-bank/design-document.md` and `memory-bank/implementation-plan.md`.

### Intro Screen Implemented

- Added intro asset references in `src/game/AssetUrls.ts`.
- Replaced the old ready overlay with a full-screen intro in `src/ui/Hud.ts`.
- Used `intro-buttons1.png` for the `Preparation` and `Start Game` menu art.
- Added transparent click hotspots over the button art.
- Added a temporary preparation placeholder flow.
- Updated `src/game/Game.ts` to route intro actions.
- Verified with `npm run build`.

### Landscape-Only Mobile Policy Added

- Added a portrait mobile orientation notice in `src/styles.css`.
- Portrait mobile hides the game shell and asks the user to rotate the device.
- Verified with `npm run build`.

### Intro Responsive Sizing Adjusted

- Added height-based sizing constraints to the intro logo and button art.
- Added a short landscape media query so the intro menu scales better on mobile-like landscape screens.
- Verified with `npm run build`.

### Preparation Assets Added

- User added five companion character images under `assets/images/chars/`.
- User added weapon images under `assets/images/weapon/`.
- User added `assets/images/weapon/weapon-summary.md`.
- User added six cropped item images under `assets/images/items/`.

### Preparation Screen Implemented

- Added `src/game/PreparationState.ts`.
- Added character, item, and weapon asset registries in `src/game/AssetUrls.ts`.
- Added preparation-related types in `src/game/types.ts`.
- Replaced the temporary preparation placeholder with a functional preparation screen.
- Implemented soldier selection, weapon assignment, hiring, item purchasing, gold/rubi display, and start/back actions.
- Styled the screen against `assets/images/screen-design/preparation.PNG`.
- Verified with `npm run build`; build succeeds with a Vite chunk-size warning.

### Preparation Screen Refined

- Removed the preparation Back button and placed Start Game in the left header position.
- Added large digital-style Gold/Rubi readouts using `assets/fonts/DS-DIGIB.TTF`.
- Moved item counts into the character-side strip with three-digit formatting.
- Added the selected soldier's equipped weapon beside the character-side inventory strip.
- Changed weapon arrows to preview only; clicking the weapon image now equips it.
- Updated item prices: Vest 450G, Potions 100G, Repair Kit 250G, Magazine 100G.
- Updated Intelligence Potion to raise critical hit chance.
- Enforced item max stock: 999 for most items and hired squad count for Defense Vest.
- Removed the large weapon and item section background boxes.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.
- Confirmed a Vite dev server is responding at `http://127.0.0.1:5173/`.

### Preparation Screen Asset-Based Layout Update

- Removed the central `Preparation` title block from the preparation screen.
- Added top-bar Gold/Rubi display using `assets/images/gold.png` and `assets/images/rubi.png`.
- Replaced text arrows with `assets/images/left-arrow.png` and `assets/images/right-arrow.png`.
- Replaced the Start Game text button with `assets/images/start.png` and `assets/images/start-game2.png`.
- Moved the character-side item strip closer to the character and rotated the equipped weapon image upward.
- Removed the extra shop-side Gold label near Items.
- Kept Soldiers, WEAPON, and ITEMS headings visually aligned with the same font size and blue treatment.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Screen Polish

- Swapped Start Game image mapping so the red start icon and Start Game label render in the intended order.
- Changed Soldiers, WEAPON, ITEMS, and the hired-count fraction to use the same digital font and size treatment.
- Adjusted the character-side equipped weapon image to keep fixed height with variable width for long guns.
- Added more spacing between the equipped weapon and the item count list.
- Reduced item price text to about 70% of its previous size.
- Replaced the generated light background with `assets/images/prep-background.jpeg`; no `prep-background.png` exists in the current assets folder.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Layout Polish

- Removed the translucent white panel from the top header area.
- Doubled the Rubi icon size in the currency display.
- Moved the character-side item strip closer to the character.
- Positioned the equipped weapon above the item strip so it no longer overlaps item counts.
- Shifted item-card images downward toward vertical center and leftward to create more right-side whitespace.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Character Strip Alignment

- Changed the character-side item/weapon strip to use bottom-based positioning.
- Aligned the item strip bottom closer to the Hired button bottom.
- Let the equipped weapon move down together with the strip while remaining above the item list.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Item Card Refinement

- Grouped item image/title/description into a shared card content wrapper so they move together.
- Increased item card height by about 20%.
- Adjusted the right-side loadout area row ratio and padding to accommodate larger item cards.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Layout Fixes

- Added a dedicated character-side weapon slot above the item list to prevent overlap from rotated weapon images.
- Set an explicit item grid height and equal two-row layout so item cards visibly grow.
- Centered each item card content group while keeping image above item text.
- Changed SOLDIERS, WEAPON, and ITEMS headings to yellow for stronger contrast.
- Improved weapon name and description contrast with light text and shadow.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Item Reset And Strip Fix

- Changed initial preparation item counts to zero, so the side inventory starts as `000` for every item.
- Added an ITEMS Reset button.
- Reset clears item counts and refunds only item-purchase gold, leaving hiring state untouched.
- Reworked the character-side equipped weapon and item list into fixed visual regions so long rotated weapons do not change the item list position.
- Increased the shop item grid/card height by another 20%.
- Center-aligned the top currency icons and values.
- Changed weapon detail text to brighter cyan/white for readability.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Alignment And Reset Image Pass

- Raised and resized the SOLDIERS character art so the lower information/stats/Hired controls remain on screen.
- Bottom-aligned the character-side item count list with the soldier lower controls.
- Changed the WEAPON picker layout so arrow buttons align to the vertical center of the full weapon image plus description block.
- Moved the ITEMS shop section upward and removed the forced tall grid minimum that pushed cards below the visible area.
- Moved Reset beside the ITEMS heading and rendered it with `assets/images/reset.png`.
- Changed top Gold/Rubi numbers from dark text to white text with shadow.
- Explicitly centered the preparation background and game shell.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Reset Size And Horizontal Balance

- Reduced the Reset image button beside ITEMS to the same responsive scale as the section heading font.
- Shifted the right-side loadout content left by changing its horizontal padding, making the WEAPON right arrow spacing better match the SOLDIERS left arrow spacing.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Further Right-Side Shift

- Pulled the right-side WEAPON/ITEMS loadout content further left by changing `.prep-loadout-zone` padding to `0 14% 0 1%`.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

## Completed Features

- First-person camera and mouse look.
- Pointer lock on active run start.
- Weapon fire/reload/ammo loop.
- Enemy spawning, chasing, attacking, damage, and death cleanup.
- Wave progression and upgrade selection.
- DOM HUD with custom HUD image assets.
- Sound effects for weapons and reload.
- Centralized image/HUD asset references.
- Basic project documentation for future agents.

## Remaining Work

- Add automated tests if the project grows enough to justify them.
- Perform browser visual QA after UI or gameplay changes.
- Consider splitting some `Game.ts` responsibilities if world setup or game flow grows.
- Replace hardcoded placeholder HUD values for party, barricade, helpers, and controls with real game state if those systems are implemented.
- Implement the remaining new screen flow: main FPS HUD and stage clear.
- Refine preparation visual layout after browser/mobile-landscape QA.
- Connect selected soldiers, weapons, and items to the main FPS HUD/gameplay systems.
- Connect companion hiring, companion weapon assignment, item purchasing, turret state, score/gold/rubi, and circular profile health rings to gameplay systems.
- Review whether unused assets should remain documented, removed, or integrated.
- Decide how to handle `test-scraper.js`, since it is not aligned with the current Vite ESM game runtime.

## Current Status

The game builds successfully. Recent work has focused on the preparation/loadout screen and its asset-backed UI state.
