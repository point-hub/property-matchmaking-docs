---
aside: false
---

# Scenario 1.3.4. Update Promo

## 1.3.4.S1. User can update promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list promos"
- `AND` user can see list of promos
- `WHEN` user click "Promo 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "promo details"
- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/s1/edit-button.jpg){.shadow-img}

- `THEN` user redirected to page "edit promo"
- `WHEN` user enters "Promo 1A" in the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/s1/form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/s1/update-button.jpg){.shadow-img}

- `THEN` user redirected to page "promo details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/s1/update-success-notification.jpg){.shadow-img}

- `THEN` user see updated name "Promo 1A"
- `AND` user see updated name "Description for Promo 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/s1/updated-data.jpg){.shadow-img}