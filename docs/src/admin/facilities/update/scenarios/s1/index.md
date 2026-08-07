---
aside: false
---

# Scenario 1.4.4. Update Facility

## 1.4.4.S1. User can update facility successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "facilities"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/2.menu-certificate.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/3.button-create.png){.shadow-img}

- `THEN` user redirected to page "create facility"
- `WHEN` user input "SHM" into column name

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-input.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/5.button-save.png){.shadow-img}

- `THEN` user redirected to page "list facility"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/6.notification.png){.shadow-img}

- `THEN` user view "SHM" in list facility

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/7.list.png){.shadow-img}