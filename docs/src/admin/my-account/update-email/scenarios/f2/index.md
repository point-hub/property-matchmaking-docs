---
aside: false
---

# Scenario 1.2.2. Update Email

## 1.2.2.F2. Email update fails when required fields are empty.

- `GIVEN` user visit `/admin/my-account/update-username` url without signin
- `THEN` user redirected to page signin

![alt text](./signin-page.png){.shadow-img}