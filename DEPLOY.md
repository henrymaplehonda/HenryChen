# Deploy Honda Quote Tool to GitHub Pages

## Files to add to your repo
- `quote.html`  ← password gate (share THIS link)
- `qt.html`     ← the tool itself (never share this directly)

## Steps

### 1. Clone your repo (if not already)
```
git clone https://github.com/henrymaplehonda/Henry.git
cd Henry
```

### 2. Copy both files into the repo root
```
copy quote.html  →  Henry/quote.html
copy qt.html     →  Henry/qt.html
```

### 3. Push to GitHub
```
git add quote.html qt.html
git commit -m "Add internal quote tool"
git push
```

### 4. Your tool is live at:
```
https://henrymaplehonda.github.io/Henry/quote.html
```

### Password
```
6475236878
```

## Notes
- The link `quote.html` is NOT linked anywhere on your site — it's hidden
- Share only: https://henrymaplehonda.github.io/Henry/quote.html
- Never share `qt.html` directly — it has no password protection
- Session stays unlocked until browser tab is closed
- GitHub Pages may take 1–2 minutes to go live after push
