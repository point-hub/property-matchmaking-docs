---
aside: false
---

# Scenario 1.3.1. Create Promo

## 1.3.1.F2. User can create promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list promos"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create promo"
- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/f2/save-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/f2/error.jpg){.shadow-img}