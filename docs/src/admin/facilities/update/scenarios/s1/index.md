---
aside: false
---

# Scenario 1.3.4. Update Facility

## 1.3.4.S1. User can update facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list facilities"
- `AND` user can see list of facilities
- `WHEN` user click "Facility 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "facility details"
- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/s1/edit-button.jpg){.shadow-img}

- `THEN` user redirected to page "edit facility"
- `WHEN` user enters "Facility 1A" in the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/s1/update-form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/s1/update-button.jpg){.shadow-img}

- `THEN` user redirected to page "facility details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/s1/update-success-notification.jpg){.shadow-img}

- `THEN` user see updated name "Facility 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/facilities/update/s1/updated-data.jpg){.shadow-img}