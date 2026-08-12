---
aside: false
---

# Scenario 1.3.1. Create Facility

## 1.3.1.F1. Create facility fails when user is not authenticated.

- `GIVEN` user visit `/admin/facilities/create` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/f1/signin-page.png){.shadow-img}