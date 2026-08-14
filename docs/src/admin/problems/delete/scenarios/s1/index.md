---
aside: false
---

# Scenario 1.3.5. Delete Problem

## 1.3.5.S1. User can delete problem successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "problems"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list problems"
- `AND` user can see list of problems
- `WHEN` user click "Problem 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "problem details"
- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/s1/delete-button.jpg){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/s1/confirm-button.jpg){.shadow-img}

- `THEN` user does not see "Problem 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/s1/data.jpg){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/s1/page-info.jpg){.shadow-img}

