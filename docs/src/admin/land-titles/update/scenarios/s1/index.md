---
aside: false
---

# Scenario 1.3.4. Update Land Title

## 1.3.4.S1. User can update land title successfully.

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
- `WHEN` user enters "Land Title 1A" in the name field
- `AND` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/s1/update-button.jpg){.shadow-img}

- `THEN` user redirected to page "land title details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/s1/notification.jpg){.shadow-img}

- `THEN` user see updated name "Land Title 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/update/s1/updated.jpg){.shadow-img}