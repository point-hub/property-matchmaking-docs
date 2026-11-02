---
aside: false
---

# Scenario 2.1.1. Send Customer Preferences

## 2.1.1.F2. Send preferences fails when the cash budget fields are empty.

- `GIVEN` user already logged in
- `AND` user visit page home
- `WHEN` user click button "Mulai Konsultasi Gratis"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/1.home.png){.shadow-img}

- `THEN` user redirected to page "Pilih Lokasi"
- `WHEN` user type "Surabaya Timur" into input location
- `AND` user type "Malang" into input location

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/2.location-form.png){.shadow-img}

- `THEN` user see choosen badge "Surabaya Timur"
- `AND` user see choosen badge "Malang"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/2.choosen-location.png){.shadow-img}

- `WHEN` user click button "Continue"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/2.continue.png){.shadow-img}

- `THEN` user redirected to page "Informasi Budget"
- `WHEN` user checks "Saya ingin membeli secara tunai"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/f2/checks-cash-checkbox.png){.shadow-img}

- `THEN` user see continue button is disabled

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/f2/continue-disabled.png){.shadow-img}
