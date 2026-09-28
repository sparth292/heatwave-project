# HeatWatch — complete source code

All source files are reproduced in full below. See README.md for setup and project explanations.

## index.html

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="HeatWatch: an educational heatwave awareness portal using simulated readings."><title>Home | HeatWatch</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23132036'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23ffad45'/%3E%3C/svg%3E"><link rel="stylesheet" href="css/style.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header><div class="nav-wrap"><a class="brand" href="index.html"><span class="brand-icon" aria-hidden="true">☀</span> HeatWatch<span class="brand-sub">CAMPUS AWARENESS PORTAL</span></a><nav aria-label="Main navigation"><a href="index.html" aria-current="page">Home</a><a href="dashboard.html" >Dashboard</a><a href="alerts.html" >Alerts & advisories</a><a href="subscribe.html" >Subscribe</a></nav></div></header><div class="demo-bar"><span class="demo-label">SIMULATION</span> College project · Sample data only, not live weather or official warnings.</div><main id="main"><div class="page-heading"><p class="eyebrow">UNDERSTAND THE HEAT</p><h1>A little awareness.<br>A safer day.</h1><p class="lead">Explore heat conditions, understand the risks, and plan your day with practical heat safety advice.</p></div>
<div class="home-grid"><section class="status-card"><div class="section-top"><span class="eyebrow">CURRENT DEMO STATUS</span><span class="badge high">High risk</span></div><h2>Nagpur, Maharashtra</h2><p class="muted">Fixed simulated snapshot · Not current weather</p><div class="temperature">42<span>°C</span></div><p>Air temperature</p><div class="status-details"><div><strong>30%</strong><span>Humidity</span></div><div><strong>45°C</strong><span>Sample heat index</span></div></div><div class="status-advice">Limit time in the heat. Move outdoor activities to cooler hours and take regular cooling breaks.</div><a class="button" href="dashboard.html">Explore the dashboard <span aria-hidden="true">↗</span></a></section><section class="purpose"><p class="eyebrow">KNOW MORE. PREPARE BETTER.</p><h2>Heat awareness starts<br>with understanding.</h2><p>HeatWatch brings temperature, humidity, and heat risk information together in one simple portal. This student project shows how a monitoring interface can help a college community recognise hot conditions.</p><div class="feature"><span>01</span><div><h3>Compare conditions</h3><p>Explore four locations with a consistent set of simulated readings.</p></div></div><div class="feature"><span>02</span><div><h3>Know your next step</h3><p>Find clear risk labels and practical advice for each scenario.</p></div></div><a class="text-link" href="alerts.html">Read safety advisories →</a></section></div><aside class="note"><strong>A learning tool, with clear limits.</strong> All readings and risk categories are illustrative. This portal does not detect heatwaves, forecast weather, or issue real alerts.</aside></main><footer><div><strong>HeatWatch</strong><span>SY BTech · Heatwave monitoring & awareness</span></div><p>Educational prototype. Check your local weather authority for actual conditions.</p></footer></body></html>
```

## dashboard.html

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="HeatWatch: an educational heatwave awareness portal using simulated readings."><title>Dashboard | HeatWatch</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23132036'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23ffad45'/%3E%3C/svg%3E"><link rel="stylesheet" href="css/style.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header><div class="nav-wrap"><a class="brand" href="index.html"><span class="brand-icon" aria-hidden="true">☀</span> HeatWatch<span class="brand-sub">CAMPUS AWARENESS PORTAL</span></a><nav aria-label="Main navigation"><a href="index.html" >Home</a><a href="dashboard.html" aria-current="page">Dashboard</a><a href="alerts.html" >Alerts & advisories</a><a href="subscribe.html" >Subscribe</a></nav></div></header><div class="demo-bar"><span class="demo-label">SIMULATION</span> College project · Sample data only, not live weather or official warnings.</div><main id="main"><div class="page-heading"><p class="eyebrow">CONDITIONS AT A GLANCE</p><h1>Heatwave dashboard</h1><p class="lead">Select a location to explore its simulated conditions and recommended precautions.</p></div>
<div class="toolbar"><div><label for="location">Monitoring location</label><select id="location"><option value="nagpur">Nagpur, Maharashtra</option><option value="pune">Pune, Maharashtra</option><option value="mumbai">Mumbai, Maharashtra</option><option value="delhi">New Delhi, Delhi</option></select></div><span class="muted">Fixed sample dataset · No live connection</span></div><noscript><p class="note">Enable JavaScript to change locations. The comparison table remains available.</p></noscript>
<section id="readings" aria-live="polite" aria-atomic="true"><div class="section-top"><h2 id="city-title">Nagpur</h2><span id="risk-badge" class="badge high">High risk</span></div><div class="metrics"><article class="metric"><p>Air temperature</p><strong id="temperature">42°C</strong><span>Simulated reading</span></article><article class="metric"><p>Relative humidity</p><strong id="humidity">30%</strong><span>Moisture in the air</span></article><article class="metric"><p>Heat index</p><strong id="heat-index">45°C</strong><span>Illustrative feels-like value</span></article><article class="metric risk-metric"><p>Risk level</p><strong id="risk-text">High</strong><span>Educational classification</span></article></div><div class="advice-panel"><span class="advice-symbol" aria-hidden="true">!</span><div><h3>Recommended precautions</h3><p id="advice">Limit time in the heat. Move outdoor activities to cooler hours and take regular cooling breaks.</p></div></div></section>
<section class="comparison"><div class="section-top"><h2>Across the sample locations</h2><span class="muted">All values are simulated</span></div><div class="table-wrap"><table><caption class="sr-only">Simulated conditions for four locations</caption><thead><tr><th scope="col">Location</th><th scope="col">Temperature</th><th scope="col">Humidity</th><th scope="col">Heat index</th><th scope="col">Risk level</th></tr></thead><tbody><tr><th scope="row">Nagpur</th><td>42°C</td><td>30%</td><td>45°C</td><td><span class="badge high">High</span></td></tr><tr><th scope="row">Pune</th><td>29°C</td><td>40%</td><td>29°C</td><td><span class="badge low">Low</span></td></tr><tr><th scope="row">Mumbai</th><td>32°C</td><td>60%</td><td>37°C</td><td><span class="badge moderate">Moderate</span></td></tr><tr><th scope="row">New Delhi</th><td>45°C</td><td>30%</td><td>50°C</td><td><span class="badge extreme">Extreme</span></td></tr></tbody></table></div></section><p class="method">Demo rule based on sample heat index: below 32°C = Low; 32–39°C = Moderate; 40–47°C = High; 48°C or above = Extreme. These are project-defined categories, not official warning criteria. Heat index values are fixed examples, not calculated measurements.</p></main><footer><div><strong>HeatWatch</strong><span>SY BTech · Heatwave monitoring & awareness</span></div><p>Educational prototype. Check your local weather authority for actual conditions.</p></footer><script src="js/dashboard.js"></script></body></html>
```

## alerts.html

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="HeatWatch: an educational heatwave awareness portal using simulated readings."><title>Alerts & advisories | HeatWatch</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23132036'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23ffad45'/%3E%3C/svg%3E"><link rel="stylesheet" href="css/style.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header><div class="nav-wrap"><a class="brand" href="index.html"><span class="brand-icon" aria-hidden="true">☀</span> HeatWatch<span class="brand-sub">CAMPUS AWARENESS PORTAL</span></a><nav aria-label="Main navigation"><a href="index.html" >Home</a><a href="dashboard.html" >Dashboard</a><a href="alerts.html" aria-current="page">Alerts & advisories</a><a href="subscribe.html" >Subscribe</a></nav></div></header><div class="demo-bar"><span class="demo-label">SIMULATION</span> College project · Sample data only, not live weather or official warnings.</div><main id="main"><div class="page-heading"><p class="eyebrow">PREPARE & PROTECT</p><h1>Alerts & advisories</h1><p class="lead">Understand the sample risk levels, then choose simple precautions for a hotter day.</p></div>
<div class="risk-grid"><article class="risk-card low"><span class="badge low">01 · Low</span><h2>Stay aware</h2><p>Demo heat index below 32°C.</p><p>Keep drinking water and watch for changing conditions during outdoor activities.</p></article><article class="risk-card moderate"><span class="badge moderate">02 · Moderate</span><h2>Plan with care</h2><p>Demo heat index 32–39°C.</p><p>Take breaks in shade and choose cooler hours for outdoor activity.</p></article><article class="risk-card high"><span class="badge high">03 · High</span><h2>Reduce exposure</h2><p>Demo heat index 40–47°C.</p><p>Limit time in the heat and take regular breaks in a cool indoor space.</p></article><article class="risk-card extreme"><span class="badge extreme">04 · Extreme</span><h2>Prioritise cooling</h2><p>Demo heat index 48°C or above.</p><p>Postpone strenuous outdoor activities and seek an air-conditioned place.</p></article></div><p class="method">These colour bands are educational categories for this project, not official weather alerts. Low demo risk does not mean that heat exposure is risk-free.</p><section class="safety"><h2>Small steps that help</h2><div class="three-grid"><article><span class="eyebrow">HYDRATE</span><h3>Keep water nearby</h3><p>Drink water regularly. If a clinician has restricted your fluids, follow their advice.</p></article><article><span class="eyebrow">COOL DOWN</span><h3>Make room for breaks</h3><p>Use shade or air-conditioned spaces. Wear lightweight, loose-fitting clothing.</p></article><article><span class="eyebrow">CHECK IN</span><h3>Look out for others</h3><p>Check on people more vulnerable to heat. Never leave anyone in a parked vehicle.</p></article></div></section><aside class="note emergency"><strong>Confusion, collapse, or loss of consciousness in the heat?</strong> Seek emergency medical help immediately and move the person to a cooler place. Start cooling with wet cloths while help arrives.</aside><p class="method">Safety references: <a href="https://www.cdc.gov/heat-health/about/index.html" target="_blank" rel="noopener noreferrer">CDC: Heat and your health</a> and <a href="https://www.cdc.gov/niosh/heat-stress/about/illnesses.html" target="_blank" rel="noopener noreferrer">CDC: Heat-related illnesses</a>. For actual warnings, follow your local weather authority.</p></main><footer><div><strong>HeatWatch</strong><span>SY BTech · Heatwave monitoring & awareness</span></div><p>Educational prototype. Check your local weather authority for actual conditions.</p></footer></body></html>
```

## subscribe.html

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="HeatWatch: an educational heatwave awareness portal using simulated readings."><title>Advisory subscription | HeatWatch</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23132036'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23ffad45'/%3E%3C/svg%3E"><link rel="stylesheet" href="css/style.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header><div class="nav-wrap"><a class="brand" href="index.html"><span class="brand-icon" aria-hidden="true">☀</span> HeatWatch<span class="brand-sub">CAMPUS AWARENESS PORTAL</span></a><nav aria-label="Main navigation"><a href="index.html" >Home</a><a href="dashboard.html" >Dashboard</a><a href="alerts.html" >Alerts & advisories</a><a href="subscribe.html" aria-current="page">Subscribe</a></nav></div></header><div class="demo-bar"><span class="demo-label">SIMULATION</span> College project · Sample data only, not live weather or official warnings.</div><main id="main"><div class="page-heading"><p class="eyebrow">STAY HEAT AWARE</p><h1>Advisory subscription</h1><p class="lead">Try the subscription form. This demonstration validates your details in the browser only.</p></div><div class="subscribe-grid"><section class="form-card"><h2>Your details</h2><p class="muted">All fields marked * are required.</p><div id="dependency-status" class="note" role="status">Loading jQuery… An internet connection is required for form validation.</div><noscript><p class="note">Enable JavaScript and connect to the internet to use this form.</p></noscript><form id="subscription-form" novalidate><div class="form-grid"><div class="field"><label for="name">Full name <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" placeholder="e.g. Asha Patil" required aria-describedby="name-error" autocomplete="name" maxlength="80"><span class="error" id="name-error"></span></div><div class="field"><label for="email">Email address <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" placeholder="e.g. asha@example.com" required aria-describedby="email-error" autocomplete="email" maxlength="254"><span class="error" id="email-error"></span></div><div class="field"><label for="phone">Phone number <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" placeholder="e.g. 9876543210" required aria-describedby="phone-error" autocomplete="tel-national" inputmode="numeric" maxlength="10"><span class="error" id="phone-error"></span></div><div class="field"><label for="subscription-location">Location <span aria-hidden="true">*</span></label><select id="subscription-location" name="location" required aria-describedby="subscription-location-error"><option value="">Select your location</option><option value="nagpur">Nagpur</option><option value="pune">Pune</option><option value="mumbai">Mumbai</option><option value="delhi">New Delhi</option></select><span class="error" id="subscription-location-error"></span></div></div><p class="field-hint">Phone: enter a 10-digit Indian mobile number starting with 6–9, without +91.</p><label class="checkbox-label"><input id="receive-alerts" name="receive-alerts" type="checkbox"> I would like to receive heat advisories (optional demo preference).</label><p class="muted">No emails or SMS messages will be sent. Your details are not saved or submitted to a server.</p><button class="button" id="submit-button" type="submit" disabled>Validate subscription <span aria-hidden="true">→</span></button><p id="form-success" class="success" role="status" tabindex="-1" hidden></p></form></section><aside class="subscription-aside"><span class="eyebrow">BEFORE YOU SUBSCRIBE</span><h2>Awareness.<br>Without surprises.</h2><div class="feature"><span>01</span><p>Choose one of the four demonstration locations.</p></div><div class="feature"><span>02</span><p>Get helpful field-specific feedback before the form is accepted.</p></div><div class="feature"><span>03</span><p>See a confirmation of successful validation. No subscription is created.</p></div><a class="text-link" href="alerts.html">Explore the safety guide →</a></aside></div></main><footer><div><strong>HeatWatch</strong><span>SY BTech · Heatwave monitoring & awareness</span></div><p>Educational prototype. Check your local weather authority for actual conditions.</p></footer><script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script><script src="js/validation.js"></script></body></html>
```

## css/style.css

```css
:root{--navy:#132036;--ink:#17263d;--muted:#5c6878;--line:#dce2e9;--orange:#ffad45;--paper:#f5f7fa}*{box-sizing:border-box}body{margin:0;color:var(--ink);background:var(--paper);font:16px/1.6 "Segoe UI",Arial,sans-serif}a{color:inherit}header{background:var(--navy);color:#fff}.nav-wrap{max-width:1180px;margin:auto;padding:22px 30px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{text-decoration:none;font-size:25px;font-weight:750;line-height:1.2}.brand-icon{color:var(--orange);font-size:32px;vertical-align:middle}.brand-sub{display:block;font-size:10px;letter-spacing:1.8px;margin:6px 0 0 40px;color:#c3ccd8}nav{display:flex;gap:7px;flex-wrap:wrap}nav a{text-decoration:none;font-size:14px;padding:10px 15px;border-radius:6px;color:#dce3ed}nav a:hover,nav a[aria-current]{background:#2b384d;color:white}nav a[aria-current]{box-shadow:inset 0 -3px var(--orange)}.demo-bar{padding:10px 24px;text-align:center;background:#fff3de;color:#654518;font-size:14px;border-bottom:1px solid #f0dfbe}.demo-label{font-size:12px;font-weight:800;letter-spacing:1px;margin-right:12px}main{max-width:1180px;margin:auto;padding:40px 30px 55px}.page-heading{margin-bottom:30px}.eyebrow{font-size:12px;font-weight:800;letter-spacing:1.8px;margin:0 0 12px;color:#56657b}h1{font-size:clamp(34px,4.5vw,54px);line-height:1.12;letter-spacing:-1.8px;margin:0 0 18px;font-weight:750}h2{font-size:24px;line-height:1.3;letter-spacing:-.5px;margin:0 0 12px}h3{font-size:18px;margin:0 0 6px}p{margin:0 0 16px}.lead{max-width:690px;color:var(--muted);font-size:18px}.home-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.status-card{background:white;border:1px solid var(--line);border-top:4px solid #ed9732;border-radius:12px;padding:28px;box-shadow:0 8px 22px #13203606}.section-top{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap}.section-top h2,.section-top .eyebrow{margin:0}.muted{color:var(--muted);font-size:14px}.badge{display:inline-block;padding:5px 12px;border-radius:5px;font-size:13px;font-weight:700;white-space:nowrap}.low{background:#e2f3eb;color:#176043}.moderate{background:#fff1c8;color:#785100}.high{background:#ffead5;color:#923e08}.extreme{background:#fbe0e5;color:#9a2439}.temperature{font-size:86px;letter-spacing:-5px;line-height:1.1;font-weight:650;margin:20px 0 0}.temperature span{font-size:36px;letter-spacing:-1px;font-weight:400}.status-details{display:flex;gap:55px;padding:20px 0;border-top:1px solid var(--line)}.status-details strong{font-size:24px;display:block}.status-details span{font-size:14px;color:var(--muted)}.status-advice{background:#fff6ea;border-left:3px solid #e39a38;padding:16px;margin:0 0 24px;font-size:15px}.button{display:inline-flex;align-items:center;justify-content:center;gap:35px;background:var(--navy);color:#fff;text-decoration:none;border:0;border-radius:6px;padding:14px 20px;font:600 15px "Segoe UI",Arial,sans-serif;cursor:pointer}.button:hover{background:#29405c}.button:disabled{opacity:.5;cursor:not-allowed}.purpose>p{color:var(--muted)}.purpose h2{font-size:32px}.feature{display:flex;gap:18px;border-top:1px solid var(--line);padding-top:18px;margin-top:18px}.feature>span{font-size:13px;color:#8a5107;font-weight:700}.feature p{color:var(--muted);font-size:15px}.text-link{display:inline-block;font-size:15px;font-weight:700;text-underline-offset:5px;margin-top:12px}.note{background:#eaf0f7;border:1px solid #d6e0eb;border-radius:6px;padding:18px 22px;margin-top:30px;font-size:14px}.note strong{display:block;margin-bottom:4px}footer{border-top:1px solid var(--line);max-width:1120px;margin:auto;padding:24px 0;display:flex;justify-content:space-between;gap:30px;font-size:12px;color:var(--muted)}footer strong{color:var(--ink);display:block;font-size:16px}footer p{max-width:320px;margin:0}.toolbar{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:30px;padding:22px;background:white;border:1px solid var(--line);border-radius:8px}label{display:block;font-weight:600;font-size:14px;margin-bottom:7px}select,input:not([type=checkbox]){font:inherit;background:white;border:1px solid #aab5c4;border-radius:5px;color:var(--ink);padding:11px 12px;max-width:100%;width:100%}.toolbar select{min-width:280px}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.metric{background:white;border:1px solid var(--line);border-radius:8px;padding:24px}.metric p{color:var(--muted);font-size:14px;margin-bottom:14px}.metric strong{display:block;font-size:40px;font-weight:650;line-height:1.25;margin-bottom:14px}.metric span{font-size:12px;color:var(--muted)}.risk-metric{border-top:3px solid #efaa53}.advice-panel{display:flex;gap:18px;background:#fff3e2;padding:22px;margin:24px 0 36px;border-radius:8px}.advice-panel p{margin:0}.advice-symbol{flex-shrink:0;display:grid;place-items:center;border:2px solid #98621b;color:#98621b;border-radius:50%;width:28px;height:28px;font-weight:800}.table-wrap{overflow-x:auto;background:white;border:1px solid var(--line);border-radius:8px}table{border-collapse:collapse;width:100%;text-align:left;white-space:nowrap}th,td{padding:17px 22px;border-bottom:1px solid var(--line);font-size:14px}thead{background:#edf1f6}tbody tr:last-child>*{border-bottom:0}.method{font-size:13px;color:var(--muted);margin-top:20px}.risk-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.risk-card{border-top:4px solid currentColor;padding:22px;border-radius:8px}.risk-card h2{font-size:21px;margin-top:18px}.risk-card p{font-size:15px}.risk-card p:last-child{margin:0}.safety{margin-top:40px}.three-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:25px}.three-grid article{padding:24px;background:white;border:1px solid var(--line);border-radius:8px}.three-grid p{margin:0;color:var(--muted);font-size:15px}.emergency{background:#fff0f1;border-color:#efcbd0;color:#792738}.subscribe-grid{display:grid;grid-template-columns:1.65fr 1fr;gap:50px}.form-card{padding:30px;background:white;border:1px solid var(--line);border-radius:10px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:24px}.error{display:block;color:#a12135;font-size:13px;margin-top:5px;min-height:0}.error:empty{display:none}[aria-invalid=true]{border-color:#b3283e!important;background:#fff8f8!important}.field-hint{font-size:13px;color:var(--muted);margin-top:15px}.checkbox-label{display:flex;align-items:flex-start;gap:10px;font-weight:400;font-size:15px;margin:23px 0 15px}input[type=checkbox]{width:18px;height:18px;flex-shrink:0;margin-top:4px;accent-color:var(--navy)}.success{padding:18px;background:#e5f4ec;color:#195438;border-radius:6px;margin:20px 0 0;font-size:15px}.subscription-aside{padding-top:22px}.subscription-aside h2{font-size:34px}.skip{position:absolute;left:15px;top:-80px;z-index:10;background:white;padding:10px}.skip:focus{top:8px}:focus-visible{outline:3px solid #1479cf;outline-offset:4px}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}[hidden]{display:none!important}@media(max-width:950px){.nav-wrap{align-items:flex-start;flex-direction:column}.home-grid,.subscribe-grid{gap:28px}.metrics,.risk-grid{grid-template-columns:repeat(2,1fr)}footer{margin:0 30px}.form-grid{grid-template-columns:1fr}.three-grid{gap:15px}}@media(max-width:640px){main{padding:30px 20px}.nav-wrap{padding:18px 20px;gap:18px}nav{gap:3px}nav a{padding:9px 10px;font-size:13px}.demo-bar{font-size:12px;padding:10px 16px}.demo-label{font-size:11px}.home-grid,.subscribe-grid,.three-grid{grid-template-columns:1fr}.purpose{padding-top:10px}.status-card,.form-card{padding:22px}.toolbar{align-items:stretch;flex-direction:column}.toolbar select{min-width:0}.metrics,.risk-grid{gap:12px}.metric{padding:17px}.metric strong{font-size:32px}.risk-card{padding:16px}.risk-card h2{font-size:19px}footer{flex-direction:column;margin:0 20px;gap:12px}.lead{font-size:16px}.section-top{gap:10px}}@media(max-width:370px){.risk-grid,.metrics{grid-template-columns:1fr}}

```

## js/dashboard.js

```js
// Fixed educational examples. No network requests or live weather data.
'use strict';
const locations = {
  nagpur: { name: 'Nagpur', temperature: 42, humidity: 30, heatIndex: 45 },
  pune: { name: 'Pune', temperature: 29, humidity: 40, heatIndex: 29 },
  mumbai: { name: 'Mumbai', temperature: 32, humidity: 60, heatIndex: 37 },
  delhi: { name: 'New Delhi', temperature: 45, humidity: 30, heatIndex: 50 }
};
const precautions = {
  Low: 'Keep drinking water and stay aware of changing conditions during outdoor activities.',
  Moderate: 'Take breaks in shade. Choose cooler hours for outdoor activity and keep water nearby.',
  High: 'Limit time in the heat. Move outdoor activities to cooler hours and take regular cooling breaks.',
  Extreme: 'Postpone strenuous outdoor activities. Seek an air-conditioned place and check on people vulnerable to heat.'
};
function getRisk(index) {
  if (index >= 48) return 'Extreme';
  if (index >= 40) return 'High';
  if (index >= 32) return 'Moderate';
  return 'Low';
}
function updateDashboard() {
  const data = locations[document.getElementById('location').value];
  if (!data) return;
  const risk = getRisk(data.heatIndex);
  document.getElementById('city-title').textContent = data.name;
  document.getElementById('temperature').textContent = data.temperature + '°C';
  document.getElementById('humidity').textContent = data.humidity + '%';
  document.getElementById('heat-index').textContent = data.heatIndex + '°C';
  document.getElementById('risk-text').textContent = risk;
  const badge = document.getElementById('risk-badge');
  badge.textContent = risk + ' risk';
  badge.className = 'badge ' + risk.toLowerCase();
  document.getElementById('advice').textContent = precautions[risk];
}
document.getElementById('location').addEventListener('change', updateDashboard);
updateDashboard();

```

## js/validation.js

```js
'use strict';
// Fail closed if the CDN is unavailable: no unvalidated form submission.
if (!window.jQuery) {
  document.getElementById('dependency-status').textContent = 'jQuery could not load. Connect to the internet and reload this page to enable validation. The form is disabled until then.';
  document.getElementById('subscription-form').addEventListener('submit', function (event) { event.preventDefault(); });
} else {
  jQuery(function ($) {
    $('#dependency-status').prop('hidden', true);
    $('#submit-button').prop('disabled', false);
    const fields = ['name', 'email', 'phone', 'subscription-location'];
    const touched = new Set();
    function validate(id) {
      const $field = $('#' + id);
      const value = $field.val().trim();
      let error = '';
      if (!value) {
        error = { name: 'Enter your full name.', email: 'Enter your email address.', phone: 'Enter your phone number.', 'subscription-location': 'Select a location.' }[id];
      } else if (id === 'name' && (value.length < 2 || value.length > 80 || !/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(value))) {
        error = 'Use 2–80 characters: letters, spaces, apostrophes, periods or hyphens.';
      } else if (id === 'email' && (value.length > 254 || !/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(value) || $field[0].validity.typeMismatch)) {
        error = 'Enter a valid email address, such as name@example.com.';
      } else if (id === 'phone' && !/^[6-9]\d{9}$/.test(value)) {
        error = 'Enter 10 digits starting with 6–9, without spaces or +91.';
      } else if (id === 'subscription-location' && !['nagpur', 'pune', 'mumbai', 'delhi'].includes(value)) {
        error = 'Select one of the listed locations.';
      }
      $field.attr('aria-invalid', error ? 'true' : 'false');
      $('#' + id + '-error').text(error);
      return !error;
    }
    // jQuery handles submission, field events, error messages and success state.
    $('#subscription-form').on('submit', function (event) {
      event.preventDefault(); // Demo only: never navigate or send data.
      $('#form-success').prop('hidden', true);
      let firstInvalid = null;
      fields.forEach(function (id) {
        touched.add(id);
        if (!validate(id) && firstInvalid === null) firstInvalid = id;
      });
      if (firstInvalid !== null) {
        $('#' + firstInvalid).trigger('focus');
        return;
      }
      const preference = $('#receive-alerts').is(':checked') ? 'Alerts preference: opted in (demo only).' : 'Alerts preference: not opted in.';
      $('#form-success').text('Validation successful! ' + preference + ' No data was saved or sent, and no subscription was created.').prop('hidden', false).trigger('focus');
    });
    fields.forEach(function (id) {
      $('#' + id).on('blur', function () { touched.add(id); validate(id); })
        .on('input change', function () {
          $('#form-success').prop('hidden', true);
          if (touched.has(id)) validate(id);
        });
    });
    $('#receive-alerts').on('change', function () { $('#form-success').prop('hidden', true); });
  });
}

```
