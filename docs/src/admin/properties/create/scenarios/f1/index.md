---
aside: false
---

# Scenario 1.7.1. Create Property

## 1.7.1.F1. Create property fails when user is not authenticated.

- `GIVEN` user visit `/admin/properties/create` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f1/signin-page.png){.shadow-img}