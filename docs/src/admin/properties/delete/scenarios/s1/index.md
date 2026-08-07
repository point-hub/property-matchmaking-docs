---
aside: false
---

# Scenario 1.7.5. Delete Property

## 1.7.5.S1. User can delete property successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/2.menu-certificate.png){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/3.button-create.png){.shadow-img}

- `THEN` user redirected to page "create property"
- `WHEN` user input "SHM" into column name

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-input.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/5.button-save.png){.shadow-img}

- `THEN` user redirected to page "list property"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/6.notification.png){.shadow-img}

- `THEN` user view "SHM" in list property

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/7.list.png){.shadow-img}