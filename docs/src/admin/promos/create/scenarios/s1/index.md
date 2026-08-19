---
aside: false
---

# Scenario 1.3.1. Create Promo

## 1.3.1.S1. User can create promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list promos"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create promo"
- `WHEN` user enters "Promo 1" in the name field
- `AND` user enters "Description for Promo 1" in the description field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/form.jpg){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/save-button.jpg){.shadow-img}

- `THEN` user redirected to page "list promos"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/create-success-notification.jpg){.shadow-img}

- `THEN` user view "Promo 1" in the name column of list promos
- `AND` user view "Description for Promo 1" in the description column of list promos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/data.jpg){.shadow-img}