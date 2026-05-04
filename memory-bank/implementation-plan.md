# Implementation Plan

## System Architecture

The application is a client-only browser game.

- Vite serves and bundles the app.
- TypeScript provides strict typing.
- Three.js renders the 3D game scene and handles camera/raycast primitives.
- DOM/CSS renders the HUD and overlay screens above the WebGL canvas.
- Static assets are imported through Vite `new URL(..., import.meta.url).href` references.

## Runtime Flow

1. `src/main.ts` imports styles, finds `#app`, creates `Game`, and calls `game.start()`.
2. `Game` constructs the HUD, input manager, renderer, scene, player, enemies, weapon, weapon view, wave manager, upgrade system, and audio manager.
3. `Game.start()` sizes the renderer and starts the animation loop.
4. `Game.tick()` computes `delta`, updates game state, renders the scene, and schedules the next frame.
5. During `playing`, input drives reload/fire behavior, enemies update, waves progress, and the HUD refreshes.
6. On wave completion, `Game` opens the upgrade overlay, applies the selected upgrade, then resumes play.
7. On player death, `Game` exits pointer lock and shows the game-over overlay.

## Folder And File Structure

- `src/main.ts`: application entry point.
- `src/styles.css`: global layout, HUD, overlay, and canvas styles.
- `src/game/Game.ts`: composition root, world setup, game loop, mode transitions.
- `src/game/Player.ts`: camera, look controls, player health.
- `src/game/Input.ts`: keyboard and mouse input state.
- `src/game/Enemy.ts`: enemy manager, enemy lifecycle, hit detection.
- `src/game/Weapon.ts`: weapon state, firing, reload, raycast damage, shot trails.
- `src/game/WeaponView.ts`: first-person weapon model and visual recoil.
- `src/game/WaveManager.ts`: wave lifecycle and spawn pacing.
- `src/game/UpgradeSystem.ts`: upgrade choice generation and effects.
- `src/game/AudioManager.ts`: sound asset registration, pools, playback.
- `src/game/AssetUrls.ts`: centralized image/HUD asset URLs.
- `src/game/types.ts`: shared type contracts.
- `src/ui/Hud.ts`: DOM HUD and overlays.
- `assets/images/`: general game image assets.
- `assets/images/Intro/`: intro background, game logo, and intro button art.
- `assets/images/chars/`: five companion character images; filenames are character names.
- `assets/images/items/`: six item icons for armor, potions, repair kit, and magazine.
- `assets/images/weapon/`: weapon images plus `weapon-summary.md` for weapon traits and descriptions.
- `assets/images/hud/`: HUD image assets currently referenced by the game.
- `assets/images/screen-design/`: screen reference images for intro, preparation, main FPS, and stage clear layouts.
- `assets/sounds/`: audio assets.
- `assets/fonts/`: font assets.
- `memory-bank/`: durable project context for future chats.

## Technology Stack

- Node/npm
- Vite
- TypeScript with `strict: true`
- Three.js
- Browser DOM APIs
- CSS
- Static image, sound, and font assets

## Design Patterns

- Composition root: `Game` wires together domain managers.
- Manager classes: `EnemyManager`, `WaveManager`, `AudioManager`, and `UpgradeSystem` encapsulate domain behavior.
- Immutable-ish definitions: weapon/enemy definitions are plain typed objects copied or extended at runtime.
- Per-frame update loop: gameplay modules expose `update(delta)` or equivalent methods.
- DOM overlay layer: HUD is separate from Three.js scene rendering.
- Centralized asset URL registry: image/HUD assets are registered in `AssetUrls.ts`; sounds are registered in `AudioManager.ts`.

## Planned Screen Modules

- Intro flow: implemented with `assets/images/Intro/intro-background.jpeg`, `shelter-defence-logo.png`, and `intro-buttons1.png`; follow `assets/images/screen-design/intro.PNG` for layout direction.
- Preparation flow: implemented in `src/game/PreparationState.ts`, `src/ui/Hud.ts`, and `src/styles.css`; follow `assets/images/screen-design/preparation.PNG` for visual refinement.
- Preparation data should derive display names from character and weapon filenames where practical, and use `weapon-summary.md` for weapon descriptions.
- Preparation shop rules: item counts are displayed as three digits, most items cap at 999, and Defense Vest caps at the hired squad count. Weapon arrows preview weapons; clicking the weapon image equips it to the selected soldier.
- Preparation UI uses the digital font from `assets/fonts/DS-DIGIB.TTF` for currency, item counts, prices, and key numeric controls.
- Preparation UI now uses image assets for Start Game (`start.png`, `start-game2.png`), currency (`gold.png`, `rubi.png`), and arrows (`left-arrow.png`, `right-arrow.png`).
- Preparation background currently uses `assets/images/prep-background.jpeg`; the requested `prep-background.png` is not present in the assets folder.
- Gameplay HUD: follow `assets/images/screen-design/main-screen.PNG` for companion roster, circular health rings, ammo/magazine counts, currency, item bar, turret slots, wave progress, and barricade health.
- Stage clear flow: follow `assets/images/screen-design/stage-clear.PNG`.

As these screens grow, prefer splitting large DOM UI responsibilities out of `Hud.ts` into focused UI modules such as intro, preparation, gameplay HUD, and stage clear views.

## Code Conventions

- Prefer ES modules and TypeScript types.
- Keep shared contracts in `src/game/types.ts`.
- Keep new game logic out of `Game.ts` when it can live in a focused module.
- Use `new URL(..., import.meta.url).href` for Vite-managed static assets.
- Avoid adding expensive allocations or DOM work inside the frame loop.
- Dispose Three.js geometry/material objects when dynamically removed and no longer reused.
- Add cleanup paths for event listeners.
- Keep generated files in `dist/` untouched.

## Verification Plan

- Run `npm run build` after code or asset path changes.
- Use `npm run dev` for local interactive testing.
- Check pointer lock, shooting, reload, wave completion, upgrades, game over, and HUD layout after gameplay changes.
- After frontend visual changes, inspect desktop and narrow viewport behavior.
- Mobile support is landscape-only. Portrait mobile view should show a rotate-device notice instead of the game UI.
