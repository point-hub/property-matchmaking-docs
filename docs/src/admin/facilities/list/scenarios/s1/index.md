---
aside: false
---

# Scenario 1.3.2. List Facilities

## 1.3.2.S1. User can view paginated facilities data.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `AND` user can see list of facilities

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/list/s1/data.png){.shadow-img}

- `THEN` user can see pagination summary "Showing 1 to 10 of 15 entries"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/list/s1/page-info.png){.shadow-img}

- `THEN` user can see pagination controls button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/list/s1/pagination.png){.shadow-img}