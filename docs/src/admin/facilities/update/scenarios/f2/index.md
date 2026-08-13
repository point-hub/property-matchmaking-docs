---
aside: false
---

# Scenario 1.3.4. Update Facility

## 1.3.4.F2. Update facility fails when required fields are empty.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list facilities"
- `AND` user can see list of facilities
- `WHEN` user click "Facility 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "facility details"
- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/s1/edit-button.jpg){.shadow-img}

- `THEN` user redirected to page "edit facility"
- `WHEN` user user clears the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/f2/form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/f2/update-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/f2/error.jpg){.shadow-img}