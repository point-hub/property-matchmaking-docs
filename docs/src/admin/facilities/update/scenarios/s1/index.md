---
aside: false
---

# Scenario 1.3.4. Update Facility

## 1.3.4.S1. User can update facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `AND` user can see list of facilities
- `WHEN` user click "Facility 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/list.png){.shadow-img}

- `THEN` user redirected to page "facility details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/detail.png){.shadow-img}

- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/edit-button.png){.shadow-img}

- `THEN` user redirected to page "edit facility"
- `WHEN` user enters "Facility 1A" in the name field
- `AND` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/update-button.png){.shadow-img}

- `THEN` user redirected to page "facility details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/success-notification.png){.shadow-img}

- `THEN` user see updated name "Facility 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/updated-name.png){.shadow-img}