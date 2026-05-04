# Design Document

## Project Purpose

Shelter Defence is a browser-based first-person defense game built with Vite, TypeScript, and Three.js. The player holds a fixed defensive position, aims with the mouse, shoots incoming enemies, survives waves, and chooses upgrades between waves.

## Problem To Solve

The project aims to deliver a compact, playable defense game loop with:

- Immediate browser play through Vite.
- A clear FPS-style interaction model: pointer lock, mouse aim, left-click fire, reload.
- A wave structure that creates escalating pressure.
- Upgrade choices that make each run feel progressively stronger.
- A HUD-heavy presentation using custom game assets instead of plain browser UI.

## Core Features

- First-person camera controlled by mouse movement.
- Pointer lock during active play.
- Weapon firing through Three.js raycasting.
- Ammo, magazine, reload timing, fire rate, spread, and damage logic.
- Enemy spawning, chasing, attacking, taking damage, and death cleanup.
- Wave progression with an upgrade selection break after each completed wave.
- Upgrade system affecting weapon damage, fire rate, magazine size, reload speed, player health, and defense.
- DOM-based HUD layered over the Three.js canvas.
- Custom image, HUD, sound, and font assets under `assets/`.
- Audio playback through pooled `HTMLAudioElement` instances unlocked after user interaction.

## Screen Design

Reference screen images are stored in `assets/images/screen-design/`.

- `intro.PNG`: show the `Shelter Defence` title/logo with `Preparation` and `Start Game` actions.
- `preparation.PNG`: allow hiring companion soldiers, choosing a suitable weapon for each companion, and buying required items.
- `main-screen.PNG`: show the battlefield with up to five companion status panels on the left, score/gold/rubi at lower-left, usable item counts at bottom-center, turret status on the right, wave/enemy progress near the top-center, and barricade health near the center/lower area.
- `stage-clear.PNG`: dim the gameplay screen and show a clear overlay with `Preparation` and `Next Stage` actions.

Main FPS companion status panels should include profile image, selected weapon, ammo count, magazine count, and a circular health ring around the profile image from 0% to 100%.

## Target Experience

The game should feel quick to understand and responsive to play. The first screen should be the actual playable experience, not a marketing page. HUD elements should feel like part of a tactical defense interface, while the game loop should remain readable and lightweight.

## Non-Goals

- Multiplayer networking is not currently implemented.
- Persistent saves, account systems, and backend services are not currently part of the app.
- Docker is not required for the current local workflow.
- `test-scraper.js` is not part of the Vite game runtime and should be treated as separate/legacy unless explicitly requested.
