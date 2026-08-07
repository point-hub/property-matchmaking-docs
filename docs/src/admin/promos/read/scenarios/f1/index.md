---
aside: false
---

# Scenario 1.6.3. Read Promo

## 1.6.3.F1. Read promo fails when user is not authenticated.

- `GIVEN` user visit `/admin/promos/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f1/signin-page.png){.shadow-img}