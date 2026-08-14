---
aside: false
---

# Scenario 1.3.1. Create Problem

## 1.3.1.S1. User can create problem successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "problems"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list problems"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create problem"
- `WHEN` user enters "Problem 1" in the name field
- `AND` user enters "Description for Problem 1" in the description field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/form.jpg){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/save-button.jpg){.shadow-img}

- `THEN` user redirected to page "list problems"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/create-success.jpg){.shadow-img}

- `THEN` user view "Problem 1" in the name column of list problems
- `AND` user view "Description for Problem 1" in the description column of list problems

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/create/s1/data.jpg){.shadow-img}