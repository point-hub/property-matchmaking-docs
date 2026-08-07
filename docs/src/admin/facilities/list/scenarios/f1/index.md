---
aside: false
---

# Scenario 1.4.2. List Facilities

## 1.4.2.F1. Facility list retrieval fails when user is not authenticated.

- `GIVEN` user visit `/admin/facilities` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f1/signin-page.png){.shadow-img}