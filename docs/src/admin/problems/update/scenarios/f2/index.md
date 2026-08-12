---
aside: false
---

# Scenario 1.3.4. Update Problem

## 1.3.4.F2. Update problem fails when required fields are empty.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "problems"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/scenarios/f2/2.menu-problem.png){.shadow-img}

- `THEN` user redirected to page "list problem"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/scenarios/f2/3.button-create.png){.shadow-img}

- `THEN` user redirected to page "create problem"
- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/scenarios/f2/5.button-save.png){.shadow-img}

- `THEN` user view error message "The name field is required"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/problems/scenarios/f2/6.error.png){.shadow-img}
