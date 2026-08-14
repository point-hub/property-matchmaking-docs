---
aside: false
---

# Scenario 1.3.4. Update Problem

## 1.3.4.F2. Update problem fails when required fields are empty.

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
- `WHEN` user user clears the name field
- `AND` user user clears the description field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/f2/form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/f2/update-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/update/f2/error.jpg){.shadow-img}