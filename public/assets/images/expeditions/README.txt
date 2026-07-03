Project screenshots — one folder per expedition (folder name = the content
file's name in src/content/expeditions/).

Drop any number of images (.png .jpg .jpeg .webp .avif .gif) into a project's
folder. The site picks them up automatically at build time:

  - 0 images  -> the card keeps its "SCREENSHOT PENDING" placeholder frame
  - 1 image   -> shown as a static figure
  - 2+ images -> auto-rotating slideshow (crossfade every few seconds, with a
                 1/3 counter in the FIG. caption; rotation is disabled for
                 visitors with prefers-reduced-motion)

Display order is alphabetical by filename — prefix with 01-, 02-, ... to
control the sequence. Images are shown in a 4:3 frame (object-cover), so
crops close to 4:3 (e.g. 1200x900) look best.

In `npm run dev` a browser refresh picks up new files; the deployed site
picks them up on the next build.
