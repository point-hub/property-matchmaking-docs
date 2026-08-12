---
aside: false
---

# Scenario 1.3.5. Delete Facility

## 1.3.5.S1. User can delete facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `AND` user can see list of facilities
- `WHEN` user click "Facility 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/list.png){.shadow-img}

- `THEN` user redirected to page "facility details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/detail.png){.shadow-img}

- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/delete-button.png){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/confirm-delete.png){.shadow-img}

- `THEN` user does not see "Facility 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/data.png){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/delete/page-info.png){.shadow-img}

