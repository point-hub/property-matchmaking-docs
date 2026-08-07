---
aside: false
---

# Scenario 1.3.5. Delete Certificate

## 1.3.5.F1. Delete certificate fails when user is not authenticated.

- `GIVEN` user visit `/admin/certificates/1` url without signin
- `THEN` user redirected to page signin

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f1/signin-page.png){.shadow-img}