---
aside: false
---

# Scenario 1.3.5. Delete Promo

## 1.3.5.S1. User can delete promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list promos"
- `AND` user can see list of promos
- `WHEN` user click "Promo 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "promo details"
- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/delete/s1/delete-button.jpg){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/delete/s1/confirm-button.jpg){.shadow-img}

- `THEN` user does not see "Promo 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/delete/s1/data.jpg){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/delete/s1/page-info.jpg){.shadow-img}

