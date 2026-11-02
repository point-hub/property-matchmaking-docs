---
aside: false
---

# Scenario 2.1.1. Send Customer Preferences

## 2.1.1.S1. User can send their preferences with cash payment successfully.

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

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s2/page-budget.png){.shadow-img}

- `WHEN` user type "200,000,000" into input minimal anggaran
- `AND` user type "300,000,000" into input maksimal anggaran
- `AND` user checks "Saya ingin membeli secara tunai" checkbox

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s2/fill-budget.png){.shadow-img}

- `WHEN` user click continue button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s2/continue.png){.shadow-img}

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

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/form-contact.jpg){.shadow-img}

- `WHEN` user click "Dapatkan hasil rekomendasi" button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s1/dapatkan-hasil-rekomendasi-button.jpg){.shadow-img}

- `THEN` user redirected to https://web.whatsapp.com/ website to send message to Kawan Hunian WhatsApp number
- `AND` system will send email to Kawan Hunian email about property recommendations link that match user preferences

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/web/matchmaking/send-customer-preferences/scenarios/s2/email-cash-payment.png){.shadow-img}