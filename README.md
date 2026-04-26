# MochiPrice

Static prototype for an English-language anime figure price comparison platform.

## Open

Open `index.html` directly in a browser.

## What It Includes

- English interface for search, filters, figure pages, provider cards, wishlist, and price alerts.
- Exact figure variation matching so Rem Nendoroid, Rem scale, Rem bunny, Rem wedding, and Rem prize figures stay separate.
- Provider validation by trusted provider list, provider domain, title tokens, image, price, availability, duplicate detection, and confidence status.
- Price table with product price, currency, shipping, fees, total, stock status, direct listing links, and last updated labels.
- Honest unavailable states: unknown price, shipping, fees, or totals are shown as unavailable instead of being guessed.
- Search by character, series, manufacturer, type, SKU, status, and provider.
- Filters for manufacturer, scale/type, availability, provider, maximum verified total, confirmed listings, and Portugal shipping.
- Wishlist with `localStorage`, price alert modal, canvas price history, provider directory, and admin verification queue.

## Production Notes

Use official APIs, affiliate feeds, partner exports, or permission-aware crawlers. Respect each provider's terms, robots.txt, and rate limits. Currency conversion should use a dated FX provider such as ECB or OpenExchangeRates, and shipping should come from provider APIs, checkout-safe estimators, or validated shipping tables.
