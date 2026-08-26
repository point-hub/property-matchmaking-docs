---
aside: false
---

# Scenario 1.3.5. Delete Land Title

## 1.3.5.S1. User can delete land title successfully.

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

- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/delete/s1/delete-button.jpg){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/delete/s1/confirm-button.jpg){.shadow-img}

- `THEN` user does not see "Land Title 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/delete/s1/data.jpg){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/delete/s1/page-info.jpg){.shadow-img}

