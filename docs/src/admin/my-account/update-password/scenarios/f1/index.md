---
aside: false
---

# Scenario 1.2.3. Update Password

## 1.2.3.F1. Password update fails when user is not authenticated.

- `GIVEN` user visit `/admin/my-account/update-password` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.shadow-img}