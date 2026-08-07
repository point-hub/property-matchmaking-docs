---
aside: false
---

# Scenario 1.2.2. Update Email

## 1.2.2.F1. Email update fails when user is not authenticated.

- `GIVEN` user visit `/admin/my-account/update-email` url without signin
- `THEN` user redirected to page signin

![alt text](./signin-page.png){.shadow-img}