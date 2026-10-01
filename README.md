# Corral 🐂

A macOS menu-bar **clipboard manager + snippet stash**. Round up everything you
copy — text, links, images, and your saved snippets — in one place. Built with
Electron.

Corral lives in your menu bar. Click the Taurus mark (or press the global
shortcut) to pop open your clipboard history and saved snippets. A clean, airy
light interface with a gold accent. Everything is stored locally in a JSON
file; nothing leaves your machine.


## Images

<img width="652" height="812" alt="Screenshot 2026-09-30 at 7 03 13 PM" src="https://github.com/user-attachments/assets/fb94ba41-c062-451a-9c99-88e7f599e15f" />
<img width="652" height="812" alt="Screenshot 2026-09-30 at 7 03 33 PM" src="https://github.com/user-attachments/assets/132b388f-cbe0-4200-8105-7d58c75391eb" />
<img width="1032" height="732" alt="Screenshot 2026-09-30 at 7 03 51 PM" src="https://github.com/user-attachments/assets/afab0c44-8fcc-4fab-ad44-9bb912ab06d1" />


## Features

**Menu-bar popover**
- Live clipboard history (text, links, images) captured automatically
- Saved snippets pinned to the top with ⌘1–⌘9 quick-paste shortcuts
- Filter tabs: All · Snippets · Images · Extract Text · Links · Texts · Notes
- Instant search, arrow-key navigation, click or ⌘number to copy
- "Clear" history, item counter, and a "Corral saved you N times" counter

**Main window**
- Add / edit / delete snippets with a reference name
- Import from file (split by line, or whole file as one snippet)
- Configurable global shortcut (⌘⇧ + letter)
- Export / import a full JSON backup

## Run it

```bash
cd corral
npm install      # downloads Electron (~one-time, needs internet)
npm start
```

The app starts as a menu-bar agent (no Dock icon). Look for the Taurus mark in
your menu bar. The default global shortcut is **⌘⇧R**.

> First launch: macOS will ask for permission to monitor the clipboard /
> control the computer — grant it so history capture works.

## Install the test build (Apple Silicon .dmg)

Grab `Corral-1.0.0-arm64.dmg` from the GitHub Release, open it, and drag Corral
into Applications. Because this test build is **unsigned**, do this once:

- **Right-click Corral.app → Open**, then click **Open** in the dialog.
- If macOS still says "damaged / can't be opened", run once:
  ```bash
  xattr -dr com.apple.quarantine /Applications/Corral.app
  ```

After that it launches normally every time. The gold Taurus mark appears in your
menu bar; the global shortcut is ⌘⇧R.

## Build & publish it yourself

```bash
npm run dist     # unsigned arm64 .dmg in dist/  (no Apple account needed)
```

Full step-by-step for pushing to GitHub and handing it to testers is in
[PUBLISHING.md](PUBLISHING.md). A GitHub Actions workflow is included that builds
the .dmg automatically when you push a `v*` tag.

## Project layout

```
corral/
├── package.json
├── src/
│   ├── main.js        # main process: tray, windows, clipboard watch, IPC, storage
│   ├── preload.js     # safe bridge exposed to the renderers
│   └── storage.js     # tiny JSON-file persistence
├── renderer/
│   ├── theme.css      # shared design tokens (colors, mono font, orange accent)
│   ├── popup.html/.css/.js            # the menu-bar popover
│   └── main.html/main.css/manager.js  # the management window
└── assets/
    ├── logo.svg               # the Corral Taurus mark
    ├── trayTemplate.png(@2x)  # menu-bar icon (template = auto light/dark)
    └── icon.png               # app icon
```

## Notes & next steps

- "Extract Text" tab is wired in the UI but OCR of clipboard images isn't
  implemented yet — drop in Tesseract.js to populate it.
- Auto-paste-on-select (simulating ⌘V into the previous app) needs a native
  module such as `robotjs`/`nut-js`; the current build copies to the clipboard
  and hides, which is the safe baseline.

Data lives at `~/Library/Application Support/Corral/corral-data.json`.
