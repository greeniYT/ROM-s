self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).then((res) => {
      return new Response(res.body, {
        status: res.status,
        headers: {
          ...Object.fromEntries(res.headers),
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
        },
      });
    })
  );
});
```
However, service workers also don't work on `file://` — you'd still need at least a basic local server.

**3. Launch Chrome with the restriction disabled** (quick and dirty for local testing):
```
chrome.exe --enable-features=SharedArrayBuffer
