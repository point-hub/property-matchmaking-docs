---
aside: false
---

# Scenario 1.2.3. Update Password

## 1.2.3.F1. User isn't authenticated.

- `GIVEN` user visit `/admin/my-account/update-password` url without signin
- `THEN` user redirected to page signin

![alt text](./signin-page.png){.shadow-img}