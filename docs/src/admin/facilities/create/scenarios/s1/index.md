---
aside: false
---

# Scenario 1.3.1. Create Facility

## 1.3.1.S1. User can create facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/2.facilities-create-button.png){.shadow-img}

- `THEN` user redirected to page "create facility"
- `WHEN` user enters "SHM" in the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/3.fill-form.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/4.save-button.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/5.notification.png){.shadow-img}

- `THEN` user view "SHM" in list facility

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/5.success.png){.shadow-img}