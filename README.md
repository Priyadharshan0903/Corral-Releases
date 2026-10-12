<p align="center">
  <img src="assets/logo.svg" width="96" height="96" alt="Corral’s fox mascot" />
</p>

<h1 align="center">Corral</h1>

<p align="center"><strong>Keep the image. Copy the words.</strong></p>

<p align="center">
  Keep copied screenshots and visual references close. Extract their text on your Mac.<br />
  Open your clipboard beside your mouse pointer with a global shortcut.
</p>

<p align="center">
  <a href="https://github.com/Priyadharshan0903/Corral-Releases/releases/download/v1.3.1/Corral-1.3.1-arm64.zip"><img src="https://img.shields.io/badge/Download_for_Mac-1.3.1-cf6c48?style=for-the-badge&amp;logo=apple&amp;logoColor=white" alt="Download Corral 1.3.1 for Apple Silicon" /></a>
  <a href="https://Priyadharshan0903.github.io/Corral-Releases/"><img src="https://img.shields.io/badge/Website-Visit-555b64?style=for-the-badge" alt="Visit the Corral website" /></a>
</p>

<p align="center">Image history · On-device OCR · A shortcut to your clipboard</p>

## Your images have more to give

Keep a screenshot from a teammate, a design reference, or a useful piece of
documentation in your clipboard history. Browse the **Images** tab and select
an image to copy it again.

When you need the words inside it, open the image in **OCR**. Corral uses
**Apple Vision on your Mac** to recognize its text on demand; your image is
not uploaded to an OCR service.

- **Copy the full text** from a screenshot instead of retyping it.
- **Copy individual details**: detected links, emails, phone numbers, dates,
  amounts, and numeric codes have their own copy controls.
- **Find it again** by searching the recognized text after extraction.

<p align="center"><img src="website/reference-card.svg" width="560" alt="Illustrative developer reference image with a terminal command, documentation link, and email address" /></p>

For example, a copied setup screenshot can give you `kubectl get pods -A`,
`https://example.com/docs`, and `hello@example.com` as reusable text. The image
above is illustrative sample content; the screenshots below show the actual
app renderers.

## Your mouse points. Corral follows.

Set the shortcut letter to **E** in Preferences, then press **⌘⇧E** from any
app. Corral opens beside your current mouse pointer, including on another
display, and fits its position near screen edges. Pick what you need without
leaving the window you were working in.

The shortcut is configurable; fresh installs start with **⌘⇧R**.

## A little fox in your menu bar

Corral is a **macOS menu-bar (tray) clipboard manager**. It runs in the
background without keeping a Dock icon visible. Click the fox to open your
clipboard under the menu-bar icon; use the global shortcut to open it beside
your pointer instead. Right-click the fox to reach **Open Library**,
**Preferences**, **Show Clipboard**, or **Quit Corral**.

## Meet your clipboard

The popup keeps saved snippet **names** beside your recent clipboard items.
Saved contents appear in the Library, with no saved-body previews or body search
in the tray popup. Copy a snippet with a click or a keyboard shortcut.

| Dark | Light |
| :---: | :---: |
| <img src="docs/images/popup-dark.png" width="360" alt="Corral’s dark clipboard popup showing saved snippet names" /> | <img src="docs/images/popup-light.png" width="360" alt="Corral’s light clipboard popup showing saved snippet names" /> |

## Keep the useful things nearby

| A place for… | What Corral does |
| :--- | :--- |
| Screenshots and visual references | Keep copied images in history and copy them again from the Images tab. |
| Text inside an image | Extract it on demand with Apple Vision; copy the full result or a detected value. |
| Things you just copied | Captures text, links, and images; search and filter recent items. |
| Commands, links, and repeat replies | Save named snippets, edit their contents, and import text files by line or as a whole. |
| A thought you want to keep | Notes saves automatically, with a word count, copy button, and retry feedback. |
| Your current workspace | A global shortcut opens the popup beside your pointer; pin it to keep it open across Spaces. |
| Your preferred look | Light, Dark, or System appearance; Classic, Amber, or Slate foxes with a small tail flick. |

The Library gives saved snippets room to breathe: names and previews on the
left, an editor and Preferences in the sidebar. Search saved contents here,
keep local JSON backups, and adjust your shortcut without leaving your snippets.

For example, give your Kubernetes commands names you can find quickly:

| Saved name | Snippet content |
| :--- | :--- |
| Cluster overview | `kubectl get pods -A` |
| Follow API logs | `kubectl logs -f deployment/api` |
| Local port forward | `kubectl port-forward service/api 8080:80` |

Corral copies these snippets for you to paste into your terminal.

![Corral’s dark Library with an invented saved snippet open in the editor](docs/images/library-dark.png)

<details>
<summary>See the Library in light mode</summary>

![Corral’s light Library](docs/images/library-light.png)

</details>

## A small place to think

Notes is a plain-text scratchpad inside the popup. Start typing, leave when you
need to, and come back to your draft.

<p align="center"><img src="docs/images/notes-dark.png" width="360" alt="Corral’s Notes tab with a plain-text draft, word count, and copy button" /></p>

<details>
<summary>Preferences in dark and light</summary>

| Dark | Light |
| :---: | :---: |
| <img src="docs/images/preferences-dark.png" width="440" alt="Corral’s dark Preferences sidebar" /> | <img src="docs/images/preferences-light.png" width="440" alt="Corral’s light Preferences sidebar" /> |

</details>

Screenshots use the actual app renderers with invented sample content. They
contain no personal clipboard history or credentials.

## Made for the keyboard

| Shortcut | Action |
| :--- | :--- |
| **⌘⇧E** (set E in Preferences) | Open Corral beside your mouse pointer from any app. |
| **⌘⇧R** | Default global shortcut on a fresh install; choose your own letter in Preferences. |
| **⌘1–⌘9** | Copy a visible item, or open it in the OCR tab. |
| **↑ / ↓** | Move through the list. |
| **Return** | Copy or open the selected item. |
| **⌘K** | Focus search. |
| **Escape** | Close the popup or leave OCR details. |

Picking an item copies it and dismisses the popup; paste with **⌘V**. Optional
Quick paste delivers text to the previous app and requires macOS Accessibility
permission. Fox animation respects Reduce Motion. The menu-bar icon stays
monochrome; changing the fox updates the app’s branding and running Dock icon.

## Download and run

Download the [Apple Silicon ZIP](https://github.com/Priyadharshan0903/Corral-Releases/releases/download/v1.3.1/Corral-1.3.1-arm64.zip),
extract **Corral.app**, and move it into **Applications**. Its fox lives in the
menu bar; the app does not keep a Dock icon visible.

This build is ad hoc signed and is not Apple-notarized. macOS may block its first
opening. After trying to open it, review **System Settings → Privacy & Security**
and use **Open Anyway** only if you trust the download. See
[Apple’s current instructions](https://support.apple.com/en-us/102445).
Other published downloads are on [Corral Releases](https://github.com/Priyadharshan0903/Corral-Releases/releases).

Clipboard history, snippets, and notes are stored locally at
`~/Library/Application Support/Corral/corral-data.json`. Corral does not upload
clipboard contents to a cloud service. Update checks contact GitHub for release
metadata and downloads; JSON backup files stay wherever you save them.

## Development

The source repository is private. In an authorized checkout, use **Node.js
22.12 or newer**, macOS, and Apple’s command-line tools for the Swift OCR helper.

```bash
npm ci
npm start
```

Check JavaScript syntax and run the focused renderer, state, and window tests:

```bash
npm run check
npm test
```

The tests use a lightweight DOM and Electron doubles. Live macOS Spaces,
fullscreen behavior, and native appearance still need a desktop check.

### Build the app

```bash
npm run dist            # Apple Silicon DMG
npm run dist:universal  # Universal Electron packaging target
```

For local ad hoc signing, the ZIP fallback, and release publishing, see
[PUBLISHING.md](PUBLISHING.md). The public download is Apple Silicon only;
Intel distribution also needs an Intel-compatible OCR helper.

The foxes are editable SVGs. Generate their app icons and 1×/2× menu-bar PNGs
with Core Graphics, or preserve the chosen tray assets while rebuilding only
the app icons:

```bash
npm run build:icons
npm run build:icons -- --app-only
```

### Work on the website

```bash
npm run website:build
npm run website:serve
```

The static output is `website/dist/`. The builder uses public release metadata,
with a tracked snapshot as an offline fallback; the deployed page does not need
a live GitHub API request. Website details are in [website/README.md](website/README.md).

### Regenerate screenshots

With Node 22 active in your shell, run the documentation-only capture harness:

```bash
npm run screenshots
# Equivalent:
./node_modules/.bin/electron scripts/capture-screenshots.js
```

If you use nvm, `nvm use 22` selects the required Node executable; you can also
pass that installation explicitly:

```bash
env PATH="$NVM_BIN:$PATH" ./node_modules/.bin/electron scripts/capture-screenshots.js
```

The harness uses a fresh temporary profile, invented fixtures, and hidden
offscreen windows. It does not launch the clipboard app, read clipboard data,
or load the production preload. More options are in
[scripts/SCREENSHOTS.md](scripts/SCREENSHOTS.md).

### Project layout

```text
src/          Main process, display placement, IPC, local persistence
renderer/     Clipboard popup, Library, Preferences, themes, fox selection
assets/       Animated fox SVGs, app icons, monochrome tray assets
native/       Apple Vision OCR helper
build/        SVG-to-PNG generation, signing entitlements, notarization hook
scripts/      Website tooling and synthetic documentation captures
docs/images/  Screenshots of the real app renderers
website/      Public landing page and tracked release metadata
```
