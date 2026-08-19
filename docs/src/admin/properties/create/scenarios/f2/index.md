---
aside: false
---

# Scenario 1.7.1. Create Property

## 1.7.1.F2. Create property fails when required fields are empty.


- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create property"
- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/f2/save-button.jpg){.shadow-img}

- `THEN` user see error message "The code field is required."
- `AND` user see error message "The name field is required."
- `AND` user see error message "The address field is required."
- `AND` user see error message "The subdistrict field is required."
- `AND` user see error message "The district field is required."
- `AND` user see error message "The city field is required."
- `AND` user see error message "The land area field is required."
- `AND` user see error message "The building area field is required."
- `AND` user see error message "The price field is required."
- `AND` user see error message "The developer name field is required."
- `AND` user see error message "The whatsapp field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/f2/error.jpg){.shadow-img}
