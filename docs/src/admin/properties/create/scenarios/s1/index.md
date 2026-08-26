---
aside: false
---

# Scenario 1.7.1. Create Property

## 1.7.1.S1. User can create property successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/create-button.jpg){.shadow-img}

- `THEN` user redirected to page "create property"
- `WHEN` user enters "A001" in the code field
- `AND` user enters "Property 1" in the property name field
- `AND` user enters "Menganti" in the address field
- `AND` user enters "Wiyung" in the subdistrict field
- `AND` user enters "Babatan" in the district field
- `AND` user enters "Surabaya" in the city field
- `AND` user enters "https://www.google.com/maps/place/Wiyung,+Surabaya,+East+Java/@-7.3071967,112.6844761,15.73z/data=!4m6!3m5!1s0x2dd7fc606ad284fb:0xcfd5bab17bcbadb4!8m2!3d-7.3116072!4d112.6878768!16s%2Fg%2F11b_2tlkn3?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D" in the google maps link field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-1.jpg){.shadow-img}

- `WHEN` user enters "32" in the land area field
- `AND` user enters "64" in the building area field
- `AND` user enters "200,000,000" in the price field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-2-add-button.jpg){.shadow-img}

- `WHEN` user click add button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-2.jpg){.shadow-img}

- `THEN` user see "32 m2" in the land area column table
- `AND` user see "64" in the building area field
- `AND` user see "200,000,000" in the price field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-2-table.jpg){.shadow-img}

- `WHEN` user checks "Land Title 1" in the properties box
- `AND` user checks "Land Title 2" in the properties box
- `AND` user checks "Facilities 2" in the facilities box
- `AND` user checks "Facilities 3" in the facilities box
- `AND` user checks "Promos 3" in the promos box
- `AND` user checks "Promos 4" in the promos box

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-4.jpg){.shadow-img}

- `WHEN` user enters "John Doe" in the developer name field
- `AND` user enters "0812345678" in the whatsapp field
- `AND` user upload "MOU" in the MOU field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-5.jpg){.shadow-img}

- `WHEN` user upload "Photo 1" in the property gate photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-6.jpg){.shadow-img}

- `THEN` user see "Photo 1" in the property gate photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-6b.jpg){.shadow-img}

- `WHEN` user upload "Photo 2" in the property photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-7.jpg){.shadow-img}

- `THEN` user see uploaded "Photo 2" in the property photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-7b.jpg){.shadow-img}

- `WHEN` user upload "Photo 3" in the property photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-7c.jpg){.shadow-img}

- `THEN` user see uploaded "Photo 3" in the property photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/form-7d.jpg){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/save-button.jpg){.shadow-img}

- `THEN` user redirected to page "list property"
- `AND` user see "A001" in the code column of the table
- `AND` user see "Property 1" in the name column of the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/list.jpg){.shadow-img}

- `THEN` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/create/s1/notification.jpg){.shadow-img}
