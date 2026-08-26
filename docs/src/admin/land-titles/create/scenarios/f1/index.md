---
aside: false
---

# Scenario 1.3.1. Create Land Title

## 1.3.1.F1. Create land title fails when user is not authenticated.

- `GIVEN` user visit `/admin/land-titles/create` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.shadow-img}