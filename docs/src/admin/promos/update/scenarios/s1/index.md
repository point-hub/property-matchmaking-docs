---
aside: false
---

# Scenario 1.3.4. Update Promo

## 1.3.4.S1. User can update promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list promo"
- `AND` user can see list of promos
- `WHEN` user click "Promo 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/read/list.png){.shadow-img}

- `THEN` user redirected to page "promo details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/read/detail.png){.shadow-img}

- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/edit-button.png){.shadow-img}

- `THEN` user redirected to page "edit promo"
- `WHEN` user enters "Promo 1A" in the name field
- `AND` user enters "Promo Description 1A" in the name field
- `AND` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/update-button.png){.shadow-img}

- `THEN` user redirected to page "promo details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/success-notification.png){.shadow-img}

- `THEN` user see updated name "Promo 1A"
- `THEN` user see updated description "Promo Description 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/updated-name.png){.shadow-img}