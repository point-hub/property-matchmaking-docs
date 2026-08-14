---
aside: false
---

# Scenario 1.3.4. Update Problem

## 1.3.4.S1. User can update problem successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "problems"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list problems"
- `AND` user can see list of problems
- `WHEN` user click "Problem 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "problem details"
- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/s1/edit-button.jpg){.shadow-img}

- `THEN` user redirected to page "edit problem"
- `WHEN` user enters "Problem 1A" in the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/s1/form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/s1/update-button.jpg){.shadow-img}

- `THEN` user redirected to page "problem details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/s1/update-success-notification.jpg){.shadow-img}

- `THEN` user see updated name "Problem 1A"
- `AND` user see updated name "Description for Problem 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/s1/updated-data.jpg){.shadow-img}