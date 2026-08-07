---
aside: false
---

# Scenario 1.6.1. Create Promo

## 1.6.1.F2. User can create promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/2.menu-certificate.png){.shadow-img}

- `THEN` user redirected to page "list promo"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/3.button-create.png){.shadow-img}

- `THEN` user redirected to page "create promo"
- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/5.button-save.png){.shadow-img}

- `THEN` user view error message "The name field is required"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/6.error.png){.shadow-img}
