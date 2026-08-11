---
aside: false
---

# Scenario 2.1.1. Send Customer Preferences

## 2.1.1.F1. Send preferences fails when the location fields are empty.

- `GIVEN` user already logged in
- `AND` user visit page home
- `WHEN` user click button "Mulai Konsultasi Gratis"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/1.home.png){.shadow-img}

- `THEN` user redirected to page "Pilih Lokasi"
- `AND` user see continue button is disabled

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/f1/step-location-disabled.png){.shadow-img}
