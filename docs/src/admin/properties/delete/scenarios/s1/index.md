---
aside: false
---

# Scenario 1.7.5. Delete Property

## 1.7.5.S1. User can delete property successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list promos"
- `AND` user can see list of promos
- `WHEN` user click "A001" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "properties details"
- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/delete/s1/delete-button.jpg){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/delete/s1/confirm-button.jpg){.shadow-img}

- `THEN` user does not see "A001" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/delete/s1/list-after.jpg){.shadow-img}

- `THEN` user see "Showing 0 to 0 of 0 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/delete/s1/page-info.jpg){.shadow-img}

