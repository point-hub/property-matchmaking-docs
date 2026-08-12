---
aside: false
---

# Scenario 1.7.1. Create Property

## 1.7.1.S1. User can create property successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/2.menu-certificate.png){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/3.button-create.png){.shadow-img}

- `THEN` user redirected to page "create property"
- `WHEN` user enters "A001" in the code field
- `AND` user enters "Property ABC" in the property name field
- `AND` user enters "Jl Musi" in the address field
- `AND` user enters "https://www.google.com/maps/@-7.2778031,112.7271303,15z?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D" in the google maps link field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-enters.png){.shadow-img}

- `WHEN` user enters "64" in the land area field
- `AND` user enters "32" in the building area field
- `AND` user enters "300,000,000" in the price field
- `AND` user click add button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-enters.png){.shadow-img}

- `WHEN` user checks "Certificate 1" in the certificates box
- `AND` user checks "Facilities 1" in the facilities box
- `AND` user checks "Promos 1" in the promos box

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-enters.png){.shadow-img}

- `WHEN` user upload "Photo 1" in the property gate photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-enters.png){.shadow-img}

- `WHEN` user upload "Photo 2" in the property photos

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.form-enters.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/5.button-save.png){.shadow-img}

- `THEN` user redirected to page "list property"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/6.notification.png){.shadow-img}
