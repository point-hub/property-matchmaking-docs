---
aside: false
---

# Scenario 2.1.1. Send Customer Preferences

## 2.1.1.F4. Send preferences fails when the contact information fields are empty.

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
- `WHEN` user type "200,000,000" into input minimal anggaran
- `AND` user type "300,000,000" into input maksimal anggaran
- `AND` user type "0" into input minimal uang muka (dp)
- `AND` user type "20,000,000" into input maksimal uang muka (dp)
- `AND` user type "1,000,000" into input minimal cicilan bulanan
- `AND` user type "3,000,000" into input maksimal cicilan bulanan
- `AND` user type "35" into input usia
- `AND` user choose "Menikah" into checkbox status pernikahan
- `AND` user type "2" into input jumlah tanggungan

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/3.form.png){.shadow-img}

- `WHEN` user click continue button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/3.filled-continue.png){.shadow-img}

- `THEN` user redirected to page "Kendala anda saat ini"
- `WHEN` user checks the "Penghasilan terbatas" checkbox

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/4.buying-problem.png){.shadow-img}

- `WHEN` user click continue button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/4.continue.png){.shadow-img}


- `THEN` user redirected to page "Kebutuhan Promo"
- `WHEN` user checks the "Sewa dulu, beli kemudian" checkbox

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/5.promo-needed.png){.shadow-img}

- `WHEN` user click continue button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/5.continue.png){.shadow-img}

- `THEN` user redirected to page "Informasi Kontak Anda"
- `WHEN` user type "John" into input name
- `WHEN` user type "0812345678" into input nomer WhatsApp

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/6.contact.png){.shadow-img}

- `THEN` user see continue button is disabled

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/f4/continue-disabled.png){.shadow-img}