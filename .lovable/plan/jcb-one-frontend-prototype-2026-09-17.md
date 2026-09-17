# JCB ONE frontend prototype

## Goal
Build the complete mobile-first JCB ONE single-page prototype described in the uploaded brief, using the supplied JCB logo and a bold yellow, charcoal, white industrial editorial style.

## Scope
- Create the sticky header, QR landing flow, machine identification states, three-step explainer, dynamic sample QR codes, app download content, store-review content, screenshot previews, language section, legal dialogs, and footer in the requested order.
- Detect and validate `vin`, `machineId`, and `serialNumber` URL parameters, show loading/success/error/missing states, and provide working test/copy/navigation actions.
- Add a mock API/service layer and QR helpers so UI code remains separate from future backend integration.
- Add functional translations for English (US/UK), Spanish, Portuguese, and German, persisting the selected language in the browser.
- Use generated industrial JCB-style machinery imagery, the supplied logo, a matching favicon, responsive layouts, and accessible interactions.
- Add route-specific title and sharing metadata.

## Technical details
- Keep the experience as the `/` TanStack Start route.
- Use a QR React package for genuinely scannable codes and `VITE_PUBLIC_BASE_URL` with the current origin fallback.
- Keep all visual colors and typography in semantic Tailwind v4 tokens.
- Implement legal content as clearly marked draft dialogs without inventing official wording.
- Validate the final page at desktop and mobile sizes, including URL-parameter and interaction states.
