---
aside: false
---

# Scenario 1.2.1. Update Username

## 1.2.1.F2. Username update fails when required fields are empty.

- `GIVEN` user visit `/admin/my-account/update-username` url without signin
- `THEN` user redirected to page signin

![alt text](./signin-page.png){.shadow-img}