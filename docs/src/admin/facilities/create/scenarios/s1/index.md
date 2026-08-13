---
aside: false
---

# Scenario 1.3.1. Create Facility

## 1.3.1.S1. User can create facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list facilities"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create facility"
- `WHEN` user enters "Mini Market" in the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/form.jpg){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/save-button.jpg){.shadow-img}

- `THEN` user redirected to page "list facilities"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/create-success-notification.jpg){.shadow-img}

- `THEN` user view "Mini Market" in list facilities

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/data.jpg){.shadow-img}