---
aside: false
---

# Scenario 1.3.4. Update Promo

## 1.3.4.F2. Update promo fails when required fields are empty.

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
- `WHEN` user user clears the name field
- `AND` user user clears the description field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/f2/form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/f2/update-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required."
- `AND` user see error message "The description field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/update/f2/error.jpg){.shadow-img}