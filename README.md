# HeatWatch — SY BTech project

A responsive educational heatwave portal built with HTML, CSS, vanilla JavaScript and jQuery 3.7.1. No React, backend, build tools, database, or additional frameworks are required.

## Folder structure

```text
heatwatch/
├── index.html             Home and current simulated status
├── dashboard.html         Interactive sample readings
├── alerts.html            Risk levels and safety advice
├── subscribe.html         Advisory subscription demo
├── css/
│   └── style.css           Shared responsive styling
├── js/
│   ├── dashboard.js        Dataset, risk rules and selection updates
│   └── validation.js       jQuery form validation
├── README.md               Run instructions and project notes
├── COMPLETE-CODE.md        Complete contents of all seven source files
└── TEST-RESULTS.txt         Browser verification results
```

## Exact steps to run

1. If using the ZIP, right-click it and choose **Extract All**. Do not open the HTML from inside the ZIP.
2. Open the extracted `heatwatch` folder. Keep its HTML files and the `css` and `js` folders together.
3. Connect to the internet. The subscription page loads jQuery from `https://code.jquery.com/jquery-3.7.1.min.js`; an internet connection is required for this CDN library. No other external libraries or fonts are loaded.
4. Double-click `index.html`. If it opens in a text editor, right-click it, choose **Open with**, and select Edge, Chrome or Firefox.
5. Use the top navigation to visit Dashboard, Alerts & advisories, and Subscribe. The address will start with `file:///`; this is expected. No terminal, installation or local server is needed.
6. On Dashboard, select each location to see the temperature, humidity, heat index, risk and advice change.
7. On Subscribe, press **Validate subscription** with empty fields to see individual errors. Try an invalid email and phone number. Then enter a name such as `Asha Patil`, `asha@example.com`, `9876543210`, and select a location. The alerts checkbox is optional. Press the button again to see the success message.

If the jQuery CDN cannot load, the page explains the problem and disables submission. Restore connectivity (and allow code.jquery.com if blocked), then reload the page. Home, Dashboard and Alerts use local files and work offline; Dashboard requires JavaScript enabled.

## Validation rules

- Name: required, 2–80 characters; Unicode letters, combining marks, spaces, apostrophes, periods and hyphens.
- Email: required, basic email syntax including a dotted domain; maximum 254 characters. This does not verify mailbox ownership or deliverability.
- Phone: required, exactly 10 digits beginning with 6–9, representing an Indian mobile number. Omit +91 and spaces. No number ownership or service check is performed.
- Location: required and must be one of the four listed locations.
- Receive alerts: optional preference; both checked and unchecked forms can be valid.
- jQuery handles submit, blur, input and change events, writes field-specific errors, sets `aria-invalid`, focuses the first invalid field and displays success. Native validation is disabled with `novalidate` so jQuery feedback is consistent.
- Every submit is prevented with `event.preventDefault()`. No data is sent, saved, placed in browser storage, or added to a URL. Success confirms validation only; no subscription is created and no alerts are sent.

## Simulated data and project rules

| Location | Temperature | Humidity | Heat index | Risk |
|---|---:|---:|---:|---|
| Nagpur | 42°C | 30% | 45°C | High |
| Pune | 29°C | 40% | 29°C | Low |
| Mumbai | 32°C | 60% | 37°C | Moderate |
| New Delhi | 45°C | 30% | 50°C | Extreme |

The fixed home snapshot is Nagpur. All values are illustrative, not live, dated observations or forecasts. Heat index is a fixed sample feels-like value, not a calculation. Project-defined categories use sample heat index: below 32°C Low, 32 to below 40°C Moderate, 40 to below 48°C High, and 48°C or higher Extreme. These categories do not represent official heatwave criteria.

To change dashboard examples, edit the `locations` object in `js/dashboard.js`; keep the static comparison table and the home snapshot consistent if changing their values. The dashboard uses `textContent` and the form uses jQuery `.text()` for displayed text.

## Verification

Tested in headless Microsoft Edge using actual local `file:///` pages and the real jQuery CDN. Checks cover all navigation destinations, all four dashboard states, invalid/valid form flows, optional checkbox states, stale-success clearing, CDN failure handling and zero runtime errors. All four pages were checked for page overflow at 320, 390, 768 and 1440 CSS pixels. Desktop home and mobile dashboard screenshots were visually inspected. See TEST-RESULTS.txt for individual results. Other browsers were not separately tested.

Responsive CSS uses grid layouts that collapse on narrow screens, with horizontal scrolling inside the comparison table. Accessibility features include a skip link, semantic landmarks, active navigation labels, visible keyboard focus, explicit field labels, error descriptions, a live results region, and text labels in addition to risk colours.

## Safety references

- [CDC: About heat and your health](https://www.cdc.gov/heat-health/about/index.html)
- [CDC: Heat-related illnesses](https://www.cdc.gov/niosh/heat-stress/about/illnesses.html)

The portal is an educational prototype. Consult local weather authorities for actual conditions and official advisories.
"# heatwave-project" 
