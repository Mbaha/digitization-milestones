# Digitization Milestones

Static mobile-friendly milestone tracker for the NPC Data Office digitization timeline.

## GitHub Pages

This app is ready to publish on GitHub Pages.

Recommended setup:

1. Create a new GitHub repository.
2. Put the contents of this folder at the repository root.
3. Publish the repository.
4. In GitHub, open `Settings` > `Pages`.
5. Set the source to the `main` branch root.

The app is configured to work both:

- on a GitHub Pages repository URL such as `https://username.github.io/repository-name/`
- on a custom domain root such as `https://milestones.example.org/`

## Files

- `index.html`: app shell
- `styles.css`: mobile UI styling
- `app.js`: milestone data and interaction logic
- `manifest.webmanifest`: install metadata for home screen support
- `service-worker.js`: offline cache
- `.nojekyll`: prevents GitHub Pages from running Jekyll processing
