---
aside: false
---

# Scenario 1.7.1. Create Property

## 1.7.1.F2. User can create property successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/2.menu-certificate.png){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/3.button-create.png){.shadow-img}

- `THEN` user redirected to page "create property"
- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/5.button-save.png){.shadow-img}

- `THEN` user view error message "The code field is required"
- `AND` user view error message "The property name field is required"
- `AND` user view error message "The address field is required"
- `AND` user view error message "The google map link field is required"
- `AND` user view error message "The instagram field is required"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/f2/6.error.png){.shadow-img}
