---
aside: false
---

# Scenario 1.3.2. List Land Titles

## 1.3.2.F1. Land Title list retrieval fails when user is not authenticated.

- `GIVEN` user visit `/admin/land-titles` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/signin-page.png){.shadow-img}