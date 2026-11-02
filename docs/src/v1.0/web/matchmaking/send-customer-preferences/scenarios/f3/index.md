---
aside: false
---

# Scenario 2.1.1. Send Customer Preferences

## 2.1.1.F3. Send preferences fails when the finance budget fields are empty.

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
- `WHEN` user type "100,000,000" into input minimal anggaran
- `AND` user type "300,000,000" into input maksimal anggaran

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/f3/fill-budget.png){.shadow-img}

- `THEN` user see continue button is disabled

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/f3/continue-disabled.png){.shadow-img}
