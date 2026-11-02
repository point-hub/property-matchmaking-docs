---
aside: false
---

# Scenario 1.3.3. Read Land Title

## 1.3.3.F1. Read land title fails when user is not authenticated.

- `GIVEN` user visit `/admin/land-titles/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.shadow-img}