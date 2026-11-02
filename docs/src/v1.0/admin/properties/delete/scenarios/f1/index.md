---
aside: false
---

# Scenario 1.7.5. Delete Property

## 1.7.5.F1. Delete property fails when user is not authenticated.

- `GIVEN` user visit `/admin/properties/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.shadow-img}