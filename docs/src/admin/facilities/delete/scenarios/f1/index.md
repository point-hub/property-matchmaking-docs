---
aside: false
---

# Scenario 1.3.5. Delete Facility

## 1.3.5.F1. Delete facility fails when user is not authenticated.

- `GIVEN` user visit `/admin/facilities/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/f1/signin-page.png){.shadow-img}