---
aside: false
---

# Scenario 1.3.5. Delete Facility

## 1.3.5.S1. User can delete facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list facilities"
- `AND` user can see list of facilities
- `WHEN` user click "Facility 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "facility details"
- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/s1/delete-button.jpg){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/s1/confirm-button.jpg){.shadow-img}

- `THEN` user does not see "Facility 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/s1/delete-data.jpg){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/s1/page-info.jpg){.shadow-img}

