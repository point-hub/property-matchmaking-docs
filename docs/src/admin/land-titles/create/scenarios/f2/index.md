---
aside: false
---

# Scenario 1.3.1. Create Land Title

## 1.3.1.F2. User can create land title successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "land titles"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list land titles"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create land title"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/s1/create-form.jpg){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/f2/save-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/f2/error.jpg){.shadow-img}