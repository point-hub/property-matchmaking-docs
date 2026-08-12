---
aside: false
---

# Scenario 1.3.3. Read Facility

## 1.3.3.F1. Read facility fails when user is not authenticated.

- `GIVEN` user visit `/admin/facilities/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/f1/signin-page.png){.shadow-img}