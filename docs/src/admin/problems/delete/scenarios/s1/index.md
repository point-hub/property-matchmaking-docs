---
aside: false
---

# Scenario 1.3.5. Delete Problem

## 1.3.5.S1. User can delete problem successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "problems"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list problem"
- `AND` user can see list of problems
- `WHEN` user click "Problem 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/read/list.png){.shadow-img}

- `THEN` user redirected to page "problem details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/read/detail.png){.shadow-img}

- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/delete-button.png){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/confirm-delete.png){.shadow-img}

- `THEN` user does not see "Problem 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/data.png){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/delete/page-info.png){.shadow-img}

