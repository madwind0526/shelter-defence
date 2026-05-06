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

### Preparation Loadout Connected To Main HUD

- Passed the latest `PreparationSnapshot` into the gameplay HUD state.
- Starting a run now applies the first hired soldier's equipped preparation weapon to the player `WeaponController`.
- Added gameplay weapon stat mappings for every preparation weapon ID.
- Added `WaveSnapshot` and `WaveManager.getSnapshot()` so the HUD can render wave total, remaining enemies, and progress.
- Rebuilt the gameplay HUD against the updated main-screen reference:
  - Hired soldiers only are shown in the left roster.
  - Each hired soldier displays their assigned weapon image.
  - Item bar counts come from purchased preparation items.
  - Gold/Rubi values come from the preparation economy after hiring and purchases.
  - Score, wave progress, barricade, special actions, and turret slots are rendered in the new layout.
- Registered `assets/images/stages/menu.png` as the top-control sprite for menu/settings/pause.
- Used CSS-drawn placeholders for grenade/air-strike and turret icons because no dedicated image assets exist yet.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Stage Asset Pass

- Registered the available gameplay HUD assets under `assets/images/stages/` in `mainHudAssets`.
- Swapped the main HUD to use:
  - `waves.png` for the wave panel frame.
  - `barricade.png` for the barricade panel frame.
  - `player.png` for soldier portrait frames.
  - `bullet.png` and `magazine.png` for ammo indicators.
  - `potion-health.png`, `potion-dex.png`, `potion-int.png`, and `repair-kit.png` for the item bar.
  - `grenade.png` and `air-attack.png` for special action buttons.
  - `turret.png` for turret slots.
  - `menu.png` for top controls.
- Changed `imageAssets.stage1Background` to `assets/images/stages/stage1-background.jpeg`.
- Changed the main gameplay HUD to use the DS Digital font family.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Reference Alignment

- Tuned the main HUD layout against the user's updated gameplay reference image.
- Adjusted soldier roster spacing and the player portrait frame color treatment.
- Repositioned and resized the wave panel, top controls, special buttons, crosshair, barricade, item bar, score text, and turret panel.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Ammo And Special Counter Update

- Made main soldier weapon image backgrounds fully transparent.
- Made main item icon backgrounds highly transparent.
- Updated main roster magazine counts to start from a base of 10 and add purchased magazine items from Preparation.
- Updated main roster bullet counts to derive from each assigned weapon's `magazineSize * magazineCount`, so different weapons show different bullet totals.
- Enlarged/cropped/brightened the stage `bullet.png` asset so the bullet icon is visible beside ammo counts.
- Added active-play special counters:
  - Grenade count increases by 1 every 10 seconds.
  - Air strike count increases by 1 every 30 seconds.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Turret Empty State

- Added a `TurretSnapshot` shared type with installed/shield/maxShield fields.
- Initialized all four gameplay turret slots as uninstalled.
- Updated the main HUD turret grid so uninstalled slots render empty.
- Installed turret slots now render the turret image plus a shield bar only while shield is above 0; shield 0 renders as destroyed/empty.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Roster And Currency Polish

- Widened the left squad roster and fixed row heights so each hired soldier row can show its assigned weapon.
- Enlarged weapon images in soldier rows.
- Made bullet and magazine icon/count backgrounds transparent.
- Changed bullet and magazine numbers to white with shadow.
- Enlarged Score/Gold/Rubi labels and values to roughly double the previous size and made values use the same font size as labels.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Item And Empty Slot Polish

- Made main item bar image backgrounds transparent.
- Moved item counts to sit directly below each item image.
- Changed the left player roster to always show five slots.
- Non-hired player slots now render as empty/dim rows so the roster does not collapse when only one soldier is hired.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Alignment And Hotkeys

- Moved the wave remaining text below the wave panel image so it does not overlap the progress bar.
- Adjusted the Score/Gold/Rubi layout so labels and numbers no longer collide.
- Enlarged and lowered the item bar while keeping item-count bottoms aligned with the Rubi line and turret panel bottom.
- Moved Grenade and Air Strike to the right-side vertical center.
- Added visible hotkey hints and input handling:
  - `1`-`4` use the four displayed item slots.
  - `Q` uses Grenade.
  - `A` uses Air Strike.
  - `F1`, `F2`, and `F3` select Menu, Settings, and Pause.
- Added simple control overlays for Menu, Settings, and Pause with resume behavior.
- Added item count consumption from the preparation inventory and basic special attack effects for Grenade/Air Strike.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Health Ring And Menu/Cheat Update

- Increased spacing between the four main item icons.
- Enlarged the Repair Kit icon by about 20% relative to the other item icons.
- Added more horizontal space between Score/Gold/Rubi labels and values.
- Reworked hired player portraits so the character photo renders in front of the frame treatment.
- Made the red profile ring act as a health indicator tied to current player health.
- Removed the health ring, bullet count, and magazine count from non-hired player slots.
- Added `Space` as a pause hotkey.
- Reworked `F1` Menu into Preparation, Exit, and Cheat Mode actions.
- Added Cheat Mode controls for Infinite Bullet, Power Shooting, No Reload, Jump to Stage, Rank placeholder, and GameOver.
- Paused gameplay timers and weapon updates while menu/pause overlays are open.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Barricade Blocking Gameplay

- Added real barricade health state, starting at 1500 HP.
- Connected the main HUD barricade HP text and bar to the real barricade state.
- Changed zombie movement so zombies target the barricade while it has health.
- Zombies stop at the barricade line and attack it instead of crossing through to the player.
- Once barricade health reaches 0, zombies switch back to targeting the player.
- Repair Kit now restores 350 barricade HP, capped at max health.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Barricade And Repair Kit Asset Paths

- Confirmed the available barricade image is `assets/images/stages/barricade.png`.
- Updated the legacy HUD barricade panel URL to also point to `assets/images/stages/barricade.png`, so all barricade HUD paths resolve to the requested image.
- Restored `repair-kit.png` files under `assets/images/items/` and `assets/images/stages/` from the available `repair-kit1.png` assets.
- Changed Repair Kit URL references back to the original `repair-kit.png` filenames.
- Confirmed item URL references use the original filenames for Repair Kit, potions, magazine, and jacket.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Gold Suffix Removed

- Removed the `G` suffix from the top Preparation Gold total.
- Removed the `G` suffix from Soldier Hire prices.
- Removed the `G` suffix from ITEMS card prices.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Fire And Base Magazine Count

- Changed Magazine's Preparation item count to start at 10.
- Changed item reset so Magazine returns to 10 while other item counts return to 0.
- Updated the main HUD roster magazine calculation to use the Preparation Magazine count directly.
- Changed the hired soldier action from disabled `Hired` to a usable `Fire` action.
- Firing a soldier now refunds half of that soldier's hire cost.
- Kept each soldier's equipped weapon state independent from hire/fire state so selected weapons are preserved.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Weapon Stat Scaling And Derived Combat Stats

- Added per-weapon STR/DEX/INT scaling values plus base damage, fire rate, critical chance, reload time, range, spread, and sound mapping.
- Added soldier + weapon derived combat calculation:
  - Final STR/DEX/INT = soldier base stat multiplied by the weapon stat scale.
  - Health = final STR.
  - Damage = weapon damage multiplied by final STR percentage.
  - Fire Rate = weapon fire rate multiplied by final DEX percentage.
  - Critical Chance = weapon critical chance multiplied by final INT percentage, capped at 95%.
- Starting gameplay now applies the first hired soldier's equipped weapon with the derived combat values.
- Additional hired soldiers now act as support fire, using their own soldier + weapon derived Damage, Fire Rate, and Critical Chance during active gameplay.
- Weapon firing now supports critical hits by rolling the derived critical chance and doubling damage on critical shots.
- Preparation now shows final STR/DEX/INT under the selected character.
- Hovering over the Preparation character now displays a compact stat panel with WEAPON, SOLDIER, and FINAL tables.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Required Soldier And Starting Gold

- Changed starting Preparation Gold from 4,567 to 100,000.
- Locked Anais as the required first soldier.
- Anais now stays hired and the Hire/Fire button is disabled for her in the Preparation UI.
- Added a state-level guard so Anais cannot be fired even if the hire/fire action is triggered directly.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Multi-Soldier Health And Turret Selection

- Changed main gameplay from a single player-health model to independent Health for every hired soldier.
- The manual weapon now follows the first living hired soldier and switches to the next living soldier when the current one dies.
- Other living hired soldiers continue to fire automatically using their own derived combat stats.
- A soldier with 0 Health no longer attacks.
- GameOver now triggers when every hired soldier is dead, even if turrets remain installed.
- Added `turret1.png` and `turret2.png` from `assets/images/chars/` to the asset registry.
- Added two Preparation turret definitions: Gun Turret and Flame Turret.
- Added four Preparation turret slots; turret buttons install to the next empty slot, and clicking a filled slot removes it.
- Main HUD turret slots now render the selected turret images with shield bars.
- Installed turrets attack independently during gameplay, with gun turret single-target fire and flame turret multi-target fire.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Stat Label Rename

- Renamed the Preparation character hover panel's weapon/final `RATE` label to `SPEED` for clearer fire-speed wording.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Turret Carousel Integration

- Moved the Preparation soldier hover stat panel below the left/right carousel arrows.
- Removed the separate lower-right turret selector UI.
- Integrated turrets into the same carousel as soldiers:
  - The SOLDIERS arrows now cycle through the five soldiers, then `TURRET (GUN)` and `TURRET (FIRE)`.
  - Turrets show their own STR/DEX/INT values in the lower stat readout.
  - Turrets have Hire and Fire controls in the same lower action area.
  - Hire installs the selected turret into the next empty turret slot, up to four total slots.
  - Fire removes one installed turret of the selected type and refunds half the hire cost.
- Disabled the weapon picker while a turret is selected because turrets use fixed weapons.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Turret Stat Tuning

- Increased Gun Turret stats to STR 320, DEX 240, INT 180, DAMAGE 95.
- Increased Flame Turret stats to STR 280, DEX 210, INT 260, DAMAGE 72.
- Updated gameplay turret attacks to use the turret definition's DAMAGE and fire rate values from Preparation data instead of hardcoded damage numbers.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Preparation Shared Turret Limit And Tooltip

- Changed Preparation turret hiring so Gun Turret and Flame Turret share the same four turret slots.
- Updated the turret Hire button to display total installed turrets as `0/4` through `4/4`; Fire still removes one turret of the currently selected type and refunds half.
- Added a hover stat panel for turrets in the SOLDIERS carousel, showing WEAPON and FINAL stats while leaving the SOLDIER box empty.
- Reduced the width, spacing, and font scale of the Preparation hover stat panel so it stays clear of the right-side items area.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Weapon Balance Cleanup

- Rebalanced weapon stat values into cleaner five-step values for easier comparison.
- Increased machine-gun-family STR/DEX modifiers and damage so Bren LMG, MP5K, and M4 Carbine sit above pistol/revolver damage.
- Lowered DEX modifiers for pistol, revolver, shotgun, and MGL.
- Kept the sniper rifle as the high-damage/high-critical option while rounding its visible values to clean integer steps.
- Changed Preparation info-panel formatting so weapon/final numbers and percentages display as rounded-up integers instead of decimals.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Soldier Health And Magazine Rebalance

- Rebalanced all Soldier STR/DEX/INT values to multiples of five.
- Lowered Soldier STR values so `STR x 10` produces Health values in a more useful 150-600-ish combat range after weapon scaling.
- Changed derived Soldier Health in both Preparation display and main gameplay to `ceil(final STR) x 10`.
- Restored weapon magazine sizes to their original distinct values instead of forcing all magazines to multiples of five.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main Ammo And Squad Firing Update

- Changed main HUD bullet counts to show current bullets only instead of `weapon magazineSize x magazine count`.
- Added per-soldier ammo, magazine reserve, reload timer, and fire cooldown state.
- Mouse shooting now makes all living hired soldiers fire along the current aim line according to each soldier's equipped weapon speed.
- Each soldier now uses the sound mapped to their equipped weapon when they fire.
- When a soldier's bullets reach 0, that soldier automatically reloads by consuming one magazine; when both bullets and magazines are 0, that soldier cannot fire.
- Zombie kills now award random Score and Gold.
- Direct weapon kills show a floating Gold popup over the killed zombie's screen position.
- Tightened Score/Gold/Rubi spacing, adjusted the wave progress track alignment, converted soldier portraits to a donut Health ring, and removed the red filled box from installed turret slots.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main Screen New Stage Assets

- Replaced the top-right menu/settings/pause sprite with separate `menu1.png`, `menu2.png`, and `menu3.png` images.
- Added `barricade-block.png` to the asset registry and used it for the foreground barricade.
- Replaced the simple Three.js barricade box with a textured barricade-block plane.
- Added an overlaid main-field defense layer that places installed turret images behind the barricade image.
- Registered `turret1-on.png`, `turret1-off.png`, `turret2-on.png`, and `turret2-off.png`.
- Updated turret panel slots and field placements to use the new turret on/off images.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Wave Clear Upgrade Icons

- Added dedicated upgrade icon asset references:
  - Field Kit: `medic.png`
  - Reinforced Nest: `repair-kit1.png`
  - Extended Mag: `magazine1.png`
  - Fast Hands: `fast.png`
  - Light Trigger: `bullets.png`
  - Hot Rounds: `explosion.png`
- Replaced the previous placeholder upgrade icon mappings with the new matching icons.
- Reworked the upgrade choice card markup and CSS for clearer icon/title/effect separation and stronger readability.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Visual Cleanup

- Removed the extra textured Three.js barricade plane so the foreground barricade is not visually duplicated.
- Kept the HUD foreground barricade image as the single visible front barricade layer.
- Changed soldier profile images to preserve their aspect ratio inside the donut Health ring.
- Updated the Health ring color so it is blue above 20% and red at 20% or below.
- Moved F1/F2/F3 labels above the top-right menu images and centered them horizontally.
- Hid duplicate text overlays for Menu/Settings/Pause because the new menu images include their own labels.
- Added F4 and F5 as Grenade and Air Strike hotkeys.
- Rendered unavailable Grenade/Air Strike controls in grayscale until the count is above zero.
- Changed the turret panel slots back to the generic `turret.png` image while the main field keeps using turret on/off images.
- Aligned Score/Gold/Rubi number columns to the Score value start position.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Profile, Fire Input, And Weapon Sounds

- Enlarged/cropped the full-body soldier PNGs inside the circular main roster portrait slots so visible profiles return without image distortion.
- Changed mouse firing input so shell/UI clicks do not arm squad firing; shooting only begins while pointer lock is active and clears when pointer lock exits.
- Added a short stagger to hired soldiers' initial fire cooldowns to reduce stacked instant volleys when three or more soldiers are hired.
- Retuned the main wave progress track coordinates to better match the transparent slot in `waves.png`.
- Moved and shrank the foreground `barricade-block.png` HUD layer so it sits closer to the battlefield barricade instead of floating over the item area.
- Updated weapon sound IDs and asset paths to use the new files under `assets/sounds/`: pistol, revolver, MP5K, M4 Carbine, rifle, MGL, machine gun, shotgun, and turret sounds.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### First-Person Weapon Images

- Registered the new first-person weapon PNGs under `assets/images/chars/`.
- Mapped preparation weapon IDs to the matching first-person images:
  - Colt M1911 -> `pisto.png`
  - Colt SAA -> `revolver.png`
  - MP5K -> `mp5k.png`
  - M4 Carbine -> `carbine.png`
  - Bren LMG -> `machine gun.png`
  - AI AW Sniper -> `rifle.png`
  - Pump-Action Shotgun -> `shotgun.png`
  - Milkor MGL -> `mgl.png`
- Replaced the temporary box-based Three.js weapon view with a transparent textured plane.
- Connected the first-person weapon image to the active living soldier's equipped weapon.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Mouse Release Weapon Sound Cutoff

- Added `Input.consumeShootRelease()` so gameplay can react when the left mouse button is released or pointer lock exits.
- Added `AudioManager.stopWeaponShots()` to stop currently playing weapon-shot pools without affecting reload or special effect sounds.
- Connected mouse release during active play to stop the currently alive soldiers' weapon shot sounds, so short clicks no longer play an entire long burst sample.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### First-Person Weapon Muzzle Alignment

- Flipped the first-person weapon image plane horizontally so gun muzzles point toward the center aim marker instead of out toward the right side of the screen.
- Added per-weapon muzzle anchor configuration in `WeaponView.ts`.
- Changed weapon plane placement to derive from the configured muzzle anchor, keeping the muzzle near the aim marker across pistol, revolver, SMG, rifle, shotgun, MGL, and machine gun assets.
- Moved the muzzle flash to the same configured aim-side anchor.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Transparent Main World Lane

- Removed the procedural box buildings, debris, and bunker posts from the main 3D world.
- Changed the floor and road from opaque standard materials to transparent basic materials so the stage background remains visible through them.
- Replaced the opaque raised center-line boxes with faint transparent plane stripes.
- Kept the gameplay lane geometry visually present but no longer blocking the 2D stage background art.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### General First-Person Weapon Alignment

- Removed the manual per-weapon muzzle coordinate table from `WeaponView.ts`.
- Added a general transparent-pixel scan for first-person weapon PNGs:
  - Finds the visible alpha bounds.
  - Uses the rightmost visible band as the muzzle candidate before the image is mirrored.
  - Estimates the muzzle vertical center from the visible pixels in that band.
  - Places the mirrored weapon plane so the estimated muzzle anchor lands on the shared aim anchor.
- Preloads and aligns every hired soldier's equipped first-person weapon when a run starts.
- Active soldier changes and Prep weapon changes now go through the same cached texture/alignment path.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main Background And HUD Hotkey/Profile Polish

- Changed the main stage background from a finite perspective plane to `scene.background`, so the stage art fills the whole game canvas instead of leaving empty side regions.
- Kept the transparent floor/road lane as gameplay depth reference over the full-canvas background.
- Re-cropped and brightened main soldier portrait images inside the circular health donut so the character profile is visible in front of the inner dark circle.
- Added a shared `--main-hotkey-size` CSS variable and applied it to item hotkeys `1`-`4`, top controls `F1`-`F3`, and specials `F4`/`F5`.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main View Alignment Follow-Up

- Fixed duplicate first-person weapon rendering by keeping repeated weapon IDs in `WeaponView.setWeapons()` instead of collapsing them with a `Set`.
- Main gameplay now sends every living soldier's equipped weapon to the first-person view, so a three-soldier squad can show three weapon images; only the active soldier slot is emphasized when duplicate weapons are equipped.
- Active first-person weapon muzzle alignment now remains on the shared aim anchor, while only support weapon slots are offset around it.
- Made the procedural floor, road, and center stripes fully transparent so they no longer fight the road already painted in the stage background.
- Hid the extra HUD barricade-block overlay while keeping the transparent gameplay barricade collision and HUD HP panel.
- Re-layered main soldier portrait images above the inner health-donut mask so profiles can appear inside the ring again.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Fixed-Map Aiming

- Changed main gameplay mouse movement so it no longer calls `Player.look()` or rotates the camera.
- Added a clamped normalized aim position in `Game.ts`; mouse movement updates that aim point instead of the world view.
- Passed the aim position into the HUD so the main crosshair moves across the screen while the background and map stay locked.
- Passed the same aim position into `WeaponController.fireDefinition()` so shots raycast through the moving crosshair.
- Added `WeaponView.setAim()` so the active first-person weapon muzzle follows the moving aim point.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Debug Layout Adjustment

- Reduced first-person weapon image scale by half in `WeaponView`, including both active and support weapon slots.
- Moved the barricade HP panel from the center-bottom battlefield area to the lower-left HUD area above Score/Gold/Rubi.
- Removed the wave panel image/progress bar markup from the main HUD.
- Replaced it with digital text showing `WAVES (wave/total)` and `remaining/total Zombies are remaining`.
- Restored floor, road, and center stripe debug opacity to 50%.
- Restored the HUD barricade-block overlay at 50% opacity for visual debug; no separate procedural building meshes currently remain to adjust.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main Lane And Roster Ammo Adjustment

- Moved each hired soldier row's bullet and magazine indicators to start at the weapon image's left edge.
- Raised bullet/magazine icons and numbers above the weapon layer with z-index so the weapon image cannot obscure them.
- Expanded the fixed-map crosshair clamp to almost the full screen edge range.
- Narrowed zombie spawn and movement X bounds to the center road lane (`-10..10`) so enemies stay within the intended road instead of moving beyond the screen-side building area.
- Moved the active barricade target line farther from the player, from `z=3.45` to `z=-4.5`.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Readability Pass

- Confirmed the soldier bullet icon path is `assets/images/stages/bullet.png`.
- Changed the soldier bullet icon CSS to render the actual image with `object-fit: contain` instead of stretching/inverting it.
- Matched magazine icon dimensions to the bullet icon and tightened magazine icon/count spacing.
- Increased spacing between the bullet icon and bullet number.
- Added a visual offset between the first-person weapon muzzle and crosshair while keeping shot direction tied to the crosshair.
- Removed the barricade panel background image and kept only `BARRICADE`, the HP text, and the health bar.
- Doubled the shared hotkey font size used by item slots, top controls, and special controls.
- Moved the top-right menu controls farther from the top/right edges.
- Reduced the gap between main item images and their count text.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Barricade HP Bar Restyle

- Restyled the barricade HP bar to match the user's rectangular reference.
- The bar now uses a black track, dark blue border, square corners, and a solid red health fill.
- Kept the existing `BARRICADE` label and numeric HP text.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main HUD Annotated Adjustment Pass

- Replaced the separate soldier bullet/magazine icon and count cells with paired translucent HUD boxes.
- Kept those ammo boxes in the existing soldier-row position but raised their z-index above weapon art.
- Enlarged the main wave and zombies-remaining text.
- Moved the top-right menu/settings/pause icon group farther from the top/right edges and kept F1/F2/F3 centered above the icons.
- Hid the extra foreground barricade image and kept the barricade HUD to one red HP bar.
- Added a stage-start camera pitch reset so the transparent 3D map/lane starts aligned to the background height when a run begins or resumes after an upgrade.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Barricade Secondary Bar Removal

- Removed the unwanted yellow secondary bar below the barricade HP bar.
- The barricade HUD now shows only `BARRICADE`, the numeric HP text, and the red HP bar.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### First-Person Squad Weapon Formation

- Tightened the bullet/magazine spacing in each soldier roster row.
- Moved F1/F2/F3 labels farther above the top-right menu images.
- Reworked `WeaponView` to place up to five first-person soldier weapons in a stable formation.
- Soldiers 1, 3, and 5 use the first-person PNG direction as-is; soldiers 2 and 4 use a horizontal flip.
- The formation leaves a center gap between soldiers 1 and 2 so the moving crosshair can sit between them.
- Changed the automatic muzzle anchor estimation to use the original PNG's left-side muzzle before per-slot flipping.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Weapon Sound And Soldier Status Spacing

- Added a one-shot mouse-fire request path so very short clicks are not lost between animation frames.
- Changed mouse-release sound stopping to keep a tiny minimum playback window, making short clicks audible while still cutting off held-shot sounds quickly.
- Stopped living soldier weapon sounds immediately on wave clear/upgrade, pause/menu entry, and GameOver.
- Reduced the vertical gap between main Soldier Status rows from `0.75vh` to `0.35vh`.
- Left turret auto-attack behavior unchanged per the user's request to pass on that item for now.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Stage And Wave Rule System

- Rebuilt `WaveManager` around five waves per stage.
- Wave composition now follows the requested counts:
  - Wave 1: 20 normal zombies.
  - Wave 2: 40 normal zombies.
  - Wave 3: 60 normal zombies.
  - Wave 4: 80 normal zombies plus one mid boss.
  - Wave 5: 100 normal zombies plus two early mid bosses and one big boss.
- Zombie base health starts at 100 and scales by `1.5x` each stage.
- Added boss spawn options:
  - Mid boss: `5x` health/damage, `2x` size.
  - Big boss: `10x` health/damage, `3x` size.
- Wave clears now award `+10` Magazine, random Gold `10,000-50,000`, and random Rubi `1-10`.
- Wave clears for waves 1-4 show the temporary upgrade selection.
- Wave 5 triggers Stage Clear, awards random Gold `50,000-100,000` and Rubi `10-20`, resets stage-scoped upgrades, and starts the next stage.
- Registered `stage1` through `stage6` backgrounds and changed stage advancement to swap the active scene background.
- Center-aligned upgrade card icon and text layout.
- Updated the cheat Jump action to use Stage number rather than global wave number.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main Combat Feedback And HUD Spacing

- Reduced the main Soldier Status row height and gap so soldier profiles sit much closer vertically.
- Pulled the soldier bullet and magazine HUD boxes closer together while keeping them above the weapon art.
- Lowered the default main crosshair position.
- Shifted the first-person weapon aim offsets and squad formation closer to screen center.
- Changed direct zombie kill reward popups to show only the numeric gold gain.
- Added projected zombie health bars above active enemies.
- Added red floating damage numbers for normal hits and pink floating numbers for critical hits.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Menu, Cheat, GameOver, And Stage Polish

- Reworked the F1 main menu to use centered digital typography and a 2x2 grid: STORE, CHEAT, RESUME, EXIT.
- Connected STORE to Preparation, CHEAT to Cheat Mode, and EXIT to the intro screen.
- Reworked Cheat Mode typography/alignment and removed the Go to GameOver action.
- Added a main HUD cheat status box below the F1/F2/F3 icons for Bullet, Power, Reload, and Jump.
- Changed Infinite Bullet HUD ammo readouts to display an infinity symbol.
- Added `GameOver.png` and `TopRanks.png` screen usage for the GameOver and ranking flow.
- Added local Top 10 ranking storage with name entry for qualifying scores and digital Name/Score/Stage rows.
- Restored barricade health to full when moving to the next stage.
- Removed eyebrow labels from Wave Clear and Stage Clear overlays and applied centered digital styling.
- Lowered the default crosshair further.
- Increased mid boss and big boss health/damage multipliers by 10x over the previous values.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Main Feedback, Sound, And Stage Alignment Polish

- Changed Power Shot damage popups to display `+∞`.
- Moved normal and critical damage popups to the zombie overhead position instead of the hit point.
- Removed floating kill Gold text while keeping random Score/Gold rewards.
- Changed the upgrade overlay title to `CHOOSE A CARD` and kept the reward line centered.
- Re-unlocked audio after upgrade/stage/menu resume and stopped interrupted audio playback from disabling later shot sounds.
- Added `STAGE N` to the main wave title before `WAVES`.
- Shifted first-person weapon formation slots 1, 2, and 3 toward the center while leaving slots 4 and 5 unchanged.
- Reset aim/view alignment when entering a new stage or jumping stages so the map and stage background start from the same baseline.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Stage Road Mask Calibration

- Switched gameplay stage backgrounds to the new `assets/images/stages-bg/bg1.jpg` through `bg6.jpg` files.
- Added road mask references for `bg1-road.png` through `bg6-road.png`.
- Added `src/game/StageRoadMask.ts` to read black road pixels from each mask and derive normalized road top, center, road width, and lane half-width.
- Connected the mask-derived road top to stage view alignment so the 3D map/spawn far line is pitched to each background's road start.
- Connected the mask-derived lane width to `WaveManager`, so zombie spawn X bounds are based on the current stage road mask instead of one fixed lane width.
- Verified with `npm run build`; build succeeds with the existing chunk-size warning.

### Menu Reset, Rank Frame, And Flow Sounds

- Removed the small `Menu` eyebrow text from the F1 MENU overlay.
- Added a full fresh-reset path for F1 EXIT:
  - Resets Preparation gold/rubi, hired soldiers, turret slots, item counts, selected weapon/soldier, message, score, waves, barricade, specials, cheats, weapon modifiers, active enemies, and turret combat state.
  - Returns to the intro screen as if the game has just started.
- Changed F1 STORE so returning with Start Game resumes the existing run state instead of starting over.
- Added UI sound playback for:
  - `GameStart.mp3` on intro/title screen.
  - `GameOver.mp3` when GameOver appears.
  - `Rank.mp3` when Top Rank opens.
- Added `NextStage.png` to the Stage Clear panel.
- Changed Stage 6 clear to return to a fresh intro instead of wrapping to a missing next stage.
- Wrapped the Top Rank image and ranking table in a translucent panel for readability.
- Removed unused `item-bomb`, `item-rocket`, `item-shield`, and `item-slow` asset URL references because those files are no longer present.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Team Damage, Knockback, And Road Mask Refresh

- Changed zombie damage popups so rapid hits from multiple soldiers against the same zombie are summed and shown as one team-total popup.
- Limited zombie knockback to the shotgun, Milkor MGL, and machine-gun weapon family instead of every firearm.
- Updated stage road-mask loading to force-refresh on stage entry, allowing revised `bg3-road.png` and `bg4-road.png` masks to regenerate their stage road profiles during development.
- Checked the revised bg3/bg4 road masks: both black road masks are readable, with road tops around the middle of the image.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Field Turret Display And Hire Routing

- Changed the active gameplay turret slot count to use `MAX_TURRET_SLOTS = 2` consistently in gameplay setup/reset and HUD rendering.
- Enlarged lower-corner field turrets by 1.5x and flipped the right-side turret horizontally so both turrets face toward the center.
- Added turret fire state to `TurretSnapshot`; when a turret hits an in-range zombie, the HUD briefly swaps to the on image, plays a recoil animation, and shows a muzzle flash.
- Confirmed turret auto-fire is range-gated through `EnemyManager.hasEnemyInRange()` and `damageInRange()`, so turrets only attack zombies close enough to the barricade area.
- Separated Preparation soldier hire and turret hire buttons/handlers, preventing the shared `.prep-hire` selector from mixing the selected soldier/turret action.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Gun Turret Only

- Removed the flame turret from the Preparation turret carousel.
- Narrowed turret type contracts and runtime/HUD branches to gun turret behavior.
- Removed unused `turret2` image and sound URL registrations so the flame turret assets are no longer pulled in by source references.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Turret Balance And Score Layering

- Raised the main Score/Gold/Rubi block above the lower-left turret sprite with an explicit z-index.
- Reduced gun turret damage from 60 to 40, matching Stage 1 normal zombie Health 100 so normal zombies need 3 turret hits.
- Confirmed turret attack uses `damageInRange(damage, rangeZ, 1)`, limiting each turret shot to one in-range zombie.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Turret Slot Indicator Placement

- Moved the main turret slot indicator panel out from the far right and into the space between the bottom item bar and the right-side field turret.
- Raised the turret slot indicator panel above the field turret sprite so installed/empty turret slots remain visible.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Barricade And Turret Indicator Alignment

- Raised the barricade health HUD above the lower-left field turret sprite with an explicit z-index.
- Aligned the `TURRET` indicator label with the item hotkey number row and reused the same font-size token.
- Resized turret indicator slots to 80% of the item image height and centered them against the item image row.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Turret Range And Fire Feedback

- Expanded the turret attack threshold behind the barricade line so turrets can hit zombies that are close enough to attack the barricade.
- Reduced gun turret fireRate from 20 to 10.
- Stopped using `turret1-on.png` as the field turret firing state; the field turret now keeps `turret1-off.png` and uses CSS recoil/muzzle-flash animation for firing feedback.
- Removed the unused `turret1On` asset URL registration.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Special Action Vertical Position

- Moved the F4/F5 special action stack upward from the screen center to roughly the midpoint between its previous position and the F1-F3 top-control icon row.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Turret Damage Feedback

- Added a range-damage result path for turret attacks so the damaged enemy id and popup anchor are available after a turret hit.
- Routed turret damage into the same pending floating-damage aggregation used by soldier shots, so soldier and turret hits on the same zombie combine into one damage number.
- Applied Power Shooting cheat damage to turret shots as well, making turret attacks one-hit kill while the cheat is active.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Required Soldier Button State

- Changed the locked Anais `Hired` button in Preparation from green to gray so it reads as a disabled required state instead of a normal hire/fire action.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Field Turret Side Order

- Swapped the lower-corner field turret display order so the first installed turret renders on the right and the second installed turret renders on the left.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Field Turret On/Off Image State

- Restored the main HUD `turret1-on.png` asset registration.
- Changed lower-corner field turrets to render `turret1-off.png` while idle and `turret1-on.png` only during the hit-confirmed firing timer.
- Shortened the field turret firing image timer from 0.16s to 0.06s so the on image can visibly turn off between rapid shots.
- Removed the CSS muzzle/recoil firing decoration so the visible firing state comes from the turret image pair.
- Confirmed the current gun turret `fireRate` is 10, which maps to roughly 10 shots per second in the existing cooldown logic.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Turret Fire Rate Slowdown

- Reduced gun turret `fireRate` from 10 to 2, changing turret cadence from about 10 shots per second to about 2 shots per second.
- Updated the runtime fallback turret fireRate to 2.
- Pointed the `turret1` sound id to `assets/sounds/turret1.mp3`, which now exists as the dedicated turret sound file.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

### Zombie GLB Assets And Dist Save

- Added candidate real zombie model assets under `assets/models/zombie/`: `zombie1.glb` and `zombie2.glb`.
- Noted that the current assets appear to cover standing/static and walking zombie states, but not attack/death animation states.
- Prepared a git save that explicitly includes ignored `dist/` build output at the user's request.
- Verified with `npm run build`; build succeeds with only the existing chunk-size warning.

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

The game builds successfully. Recent work has focused on connecting the preparation loadout to the main gameplay HUD and matching the updated main-screen reference.
