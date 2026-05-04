# AGENTS.md

## Memory Bank

새로운 chat을 시작하면 작업 전에 `memory-bank/`의 문서를 먼저 확인하세요. 이 디렉터리는 이전 맥락을 복원하기 위한 장기 작업 기록입니다.

- `memory-bank/design-document.md`: 프로젝트 목적, 해결할 문제, 핵심 기능을 정의합니다.
- `memory-bank/active-context.md`: 지금 하고 있는 일, 최근 변경, 다음에 확인할 맥락을 정리합니다.
- `memory-bank/implementation-plan.md`: 시스템 아키텍처, 폴더 및 파일 구조, 기술 스택, 디자인 패턴, 코드 컨벤션을 정리합니다.
- `memory-bank/progress.md`: 완료된 기능, 남은 작업, 진행 상황을 타임라인으로 기록합니다.
- `memory-bank/trouble-shooting.md`: 발생했던 오류 및 해결 방법을 기록합니다.

코드 변경, 자산 이동, 의존성 변경, 빌드/검증 결과, git 커밋 또는 PR 단위의 의미 있는 변경이 생기면 관련 `memory-bank` 문서를 함께 업데이트하세요.

## Screen Design

화면 구성 reference image는 `assets/images/screen-design/`에 보관하세요. 새 UI나 HUD를 구현하기 전에는 해당 reference image를 먼저 확인하세요. 현재 기준 파일은 `intro.PNG`, `preparation.PNG`, `main-screen.PNG`, `stage-clear.PNG`입니다.

이 저장소는 Vite + TypeScript + Three.js 기반의 1인칭 방어 게임입니다. 새 작업을 시작할 때는 이 문서를 먼저 읽고, 기존 모듈 경계를 유지하면서 변경하세요.

## 프로젝트 구조

- `src/main.ts`: 앱 진입점입니다. `#app` 루트를 찾고 `Game`을 생성해 시작합니다.
- `src/game/Game.ts`: 게임 조립, Three.js 씬 구성, 메인 루프, 모드 전환, HUD 갱신을 담당합니다.
- `src/game/Player.ts`: 플레이어 카메라, 시점 회전, 체력 및 피해 처리를 담당합니다.
- `src/game/Input.ts`: 키보드와 마우스 입력 상태를 관리합니다.
- `src/game/Enemy.ts`: 적 생성, 이동, 공격, 피격 판정, 사망 처리, 적 스냅샷을 담당합니다.
- `src/game/Weapon.ts`: 발사, 재장전, 탄약, 레이캐스트 피격, 탄도 이펙트를 담당합니다.
- `src/game/WeaponView.ts`: 카메라에 붙는 무기 모델, 반동, 머즐 플래시를 담당합니다.
- `src/game/WaveManager.ts`: 웨이브 진행, 적 스폰 수와 타이밍, 업그레이드 대기 상태를 담당합니다.
- `src/game/UpgradeSystem.ts`: 웨이브 종료 후 제시할 업그레이드 선택지를 구성합니다.
- `src/game/AudioManager.ts`: 무기 및 재장전 사운드 풀과 재생을 담당합니다.
- `src/game/AssetUrls.ts`: Vite `new URL(..., import.meta.url).href` 패턴으로 이미지와 사운드 자산 URL을 관리합니다.
- `src/game/types.ts`: 게임 전반에서 공유되는 타입을 정의합니다.
- `src/ui/Hud.ts`: DOM 기반 HUD, 시작/업그레이드/게임오버 오버레이를 담당합니다.
- `src/styles.css`: 전체 레이아웃, HUD, 오버레이, 캔버스 스타일을 담당합니다.
- `assets/images/`: 배경, 무기 시트, 아이템 아이콘, 하트 이미지 등 일반 게임 이미지를 둡니다.
- `assets/images/hud/`: HUD 패널, 버튼, 카운터, 크로스헤어 등 실제 HUD에서 쓰는 이미지 자산을 둡니다. 이전 `assets/images/hud2/` 자료는 이 위치로 이동되어야 하며, 코드에서는 `hud` 경로만 참조합니다.
- `assets/sounds/`: 무기 발사음, 재장전, 폭발 등 오디오 원본을 둡니다.
- `assets/fonts/`: 게임 UI에 사용할 폰트 원본을 둡니다.
- `dist/`, `node_modules/`: 생성물 또는 의존성입니다. 직접 수정하지 마세요.
- `test-scraper.js`: 현재 게임 빌드 경로에 포함되지 않는 별도/레거시 스크립트입니다. `package.json`의 `"type": "module"` 환경과 CommonJS `require/module.exports`가 충돌하므로, 이 파일을 다룰 때는 실행 방식부터 확인하세요.

## 자산 목록

- `assets/images/`: `Game_HUD_example1.png`, `Game_HUD_example2.jpeg`, `heart-empty.png`, `heart-filled.png`, `HUD-empty1.png`, `HUD-empty2.png`, `HUD-Sheet1-alpha.png`, `HUD-Sheet1.png`, `HUD-Sheet2-alpha.png`, `HUD-Sheet2.png`, `item-bomb.png`, `item-rocket.png`, `item-shield.png`, `item-slow.png`, `NextStage.png`, `Stage1-bg.jpeg`, `Stylized_firearm_icons_game.jpeg`, `TopRanks.png`, `Weapon_item_sheet.jpeg`, `Zombie_enemy_variations.jpeg`
- `assets/images/hud/`: `barricade-panel.png`, `counter-panel.png`, `crosshair.png`, `helper-command-panel.png`, `helper-health-panel.png`, `player-panel.png`, `special-button.png`, `square-button.png`, `toggle-panel.png`, `wave-panel.png`, `weapon-panel.png`
- `assets/sounds/`: `ak-47.mp3`, `explosion.mp3`, `falling-bomb.mp3`, `Gun-Reload.mp3`, `laser-gun.mp3`, `m16.mp3`, `machine-gun.mp3`, `pistol-shot.mp3`, `Plasma-Gun.mp3`, `shotgun.mp3`
- `assets/fonts/`: `DS-DIGIB.TTF`

## 개발 명령

- `npm run dev`: 로컬 개발 서버를 실행합니다.
- `npm run build`: TypeScript 검사 후 Vite 프로덕션 빌드를 수행합니다.
- `npm run preview`: 빌드 결과를 로컬에서 미리 봅니다.

변경 후에는 최소한 `npm run build`를 실행해 타입과 번들 오류를 확인하세요. 브라우저 동작, 포인터 락, 사운드, HUD 배치가 바뀌는 작업은 개발 서버에서 직접 확인하는 것이 좋습니다.

## 코딩 규칙

- TypeScript strict 모드를 기준으로 작성합니다. `any`는 피하고, 공유 계약은 `src/game/types.ts`에 추가하세요.
- ES module 문법을 사용합니다. `src` 안에서는 `import/export` 패턴을 유지하세요.
- 자산 경로는 `AssetUrls.ts`에 모아 `new URL(..., import.meta.url).href`로 추가하는 패턴을 따르세요.
- 게임 루프 내부에서는 매 프레임 DOM 재생성, 새 geometry/material 대량 생성, 무거운 배열 변환을 늘리지 않도록 주의하세요.
- Three.js 객체를 반복 생성하는 경우 제거 시 `dispose()`가 필요한지 확인하세요.
- 사용자 입력 이벤트를 추가하면 `dispose()` 또는 적절한 cleanup 경로도 함께 추가하세요.
- `Game.ts`는 이미 많은 책임을 조립하고 있으므로, 새 기능의 세부 로직은 가능한 한 전용 모듈에 두고 `Game.ts`에서는 연결만 하세요.

## 모듈별 작업 가이드

- 게임 흐름, 모드, 렌더링 순서 변경: `src/game/Game.ts`를 먼저 확인하세요.
- 무기 성능, 발사 판정, 탄약, 재장전 변경: `src/game/Weapon.ts`와 `src/game/types.ts`를 함께 수정하세요.
- 화면에 보이는 무기 움직임 변경: `src/game/WeaponView.ts`만으로 해결 가능한지 먼저 봅니다.
- 적 스탯, 피격, 이동, 공격, 사망 애니메이션 변경: `src/game/Enemy.ts`를 수정하세요.
- 웨이브 난이도와 스폰 규칙 변경: `src/game/WaveManager.ts`를 수정하세요.
- 업그레이드 종류나 효과 변경: `src/game/UpgradeSystem.ts`와 `UpgradeId` 타입을 함께 확인하세요.
- HUD 텍스트, 패널, 오버레이 변경: `src/ui/Hud.ts`와 `src/styles.css`를 함께 수정하세요.
- 이미지나 사운드 추가: `assets/`에 파일을 두고 `src/game/AssetUrls.ts` 또는 `AudioManager.ts`에 등록하세요.

## UI/게임 품질 체크

- HUD 요소가 캔버스 위에서 겹치거나 잘리지 않는지 데스크톱과 좁은 화면에서 확인하세요.
- 시작 화면, 업그레이드 화면, 게임오버 화면의 버튼이 한 번만 정상 동작하는지 확인하세요.
- 포인터 락이 시작/업그레이드/게임오버 전환에서 자연스럽게 해제되고 다시 요청되는지 확인하세요.
- 사운드는 첫 사용자 제스처 이후에만 재생될 수 있으므로 `AudioManager.unlock()` 흐름을 깨지 마세요.
- 웨이브 완료 시 적 수, 킬 수, 업그레이드 표시가 일관되게 갱신되는지 확인하세요.

## 변경 시 주의할 점

- `dist/` 결과물은 소스가 아닙니다. 빌드 산출물만 바뀐 경우 일반적으로 커밋 대상에서 제외하세요.
- `package-lock.json`은 의존성 변경이 있을 때만 수정하세요.
- 이미지와 사운드 파일은 용량이 커질 수 있으므로 꼭 필요한 자산만 추가하세요.
- 루트의 로그 파일(`vite.out.log`, `vite.err.log`)은 개발 중 생성물로 취급하세요.
- 기존 사용자 변경이 있는 파일을 되돌리지 마세요. 필요한 부분만 좁게 수정하세요.

## 리뷰 관점

작업 완료 전에는 다음을 우선 확인하세요.

- 타입 오류 또는 빌드 오류가 없는가?
- 메인 루프에서 불필요한 매 프레임 비용을 늘리지 않았는가?
- DOM HUD 갱신과 게임 상태 변경이 서로 어긋나지 않는가?
- 새 이벤트 리스너, Three.js 객체, 오디오 객체가 정리되지 않은 채 남지 않는가?
- 새 기능이 기존 시작, 플레이, 업그레이드, 게임오버 흐름을 깨지 않는가?
