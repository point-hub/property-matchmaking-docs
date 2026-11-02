---
aside: false
---

# Scenario 1.3.4. Update Land Title

## 1.3.4.F2. Update land title fails when required fields are empty.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "land titles"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list land titles"
- `AND` user can see list of land titles
- `WHEN` user click "Land Title 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "land title details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/read/s1/data.jpg){.shadow-img}

- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/s1/edit-button.jpg){.shadow-img}

- `THEN` user redirected to page "edit land title"
- `WHEN` user clears the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/f2/clear.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/f2/update-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/f2/error.jpg){.shadow-img}

