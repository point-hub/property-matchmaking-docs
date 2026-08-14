---
aside: false
---

# Scenario 1.3.5. Delete Promo

## 1.3.5.F1. Delete promo fails when user is not authenticated.

- `GIVEN` user visit `/admin/promos/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.shadow-img}