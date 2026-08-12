---
aside: false
---

# Scenario 1.3.4. Update Problem

## 1.3.4.S1. User can update problem successfully.

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

- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/edit-button.png){.shadow-img}

- `THEN` user redirected to page "edit problem"
- `WHEN` user enters "Problem 1A" in the name field
- `AND` user enters "Problem Description 1A" in the name field
- `AND` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/update-button.png){.shadow-img}

- `THEN` user redirected to page "problem details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/success-notification.png){.shadow-img}

- `THEN` user see updated name "Problem 1A"
- `THEN` user see updated description "Problem Description 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/updated-name.png){.shadow-img}