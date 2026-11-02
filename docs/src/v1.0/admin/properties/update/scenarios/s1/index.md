---
aside: false
---

# Scenario 1.7.4. Update Property

## 1.7.4.S1. User can update property successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click "A001" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "property details"
- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s1/edit-button.jpg){.shadow-img}

- `THEN` user redirected to page "edit property"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/f2/page-details.jpg){.shadow-img}

- `WHEN` user change address field from "Jl Musi" to "Jl Musi no 21"
- `AND` user enters "https://www.google.com/maps/@-7.2778031,112.7271303,15z" in the google map link field
- `AND` user enters "@perumahansbyr" in the instagram field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s1/edit-form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/f2/update-button.jpg){.shadow-img}

- `THEN` user redirected to page "property details"
- `AND` user sees notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s1/notification.jpg){.shadow-img}

- `THEN` user sees code "A001"
- `AND` user sees updated address "Jl Musi no 21"
- `AND` user sees updated google map link "https://www.google.com/maps/@-7.2778031,112.7271303,15z"
- `AND` user sees updated instagram "@perumahansbyr"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s1/updated.jpg){.shadow-img}
