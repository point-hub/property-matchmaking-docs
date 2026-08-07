---
aside: false
---

# Scenario 1.2.1. Update Username

## 1.2.1.F1. Username update fails when user is not authenticated.

- `GIVEN` user visit `/admin/my-account/update-username` url without signin
- `THEN` user redirected to page signin

![alt text](./signin-page.png){.shadow-img}