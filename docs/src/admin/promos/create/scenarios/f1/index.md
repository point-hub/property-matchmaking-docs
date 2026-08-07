---
aside: false
---

# Scenario 1.6.1. Create Promo

## 1.6.1.F1. Create promo fails when user is not authenticated.

- `GIVEN` user visit `/admin/promos/create` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f1/signin-page.png){.shadow-img}