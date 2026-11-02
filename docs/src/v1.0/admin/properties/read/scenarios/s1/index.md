---
aside: false
---

# Scenario 1.7.3. Read Property

## 1.7.3.S1. User can view property data.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click "A001" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "property details"
- `AND` user sees "A001" in the code field
- `AND` user sees "Perumahan Surabaya" in the name field
- `AND` user sees "Jl Musi" in the address field
- `AND` user sees "Kota Surabaya" in the city field
- `AND` user sees "Tegalsari" in the district field
- `AND` user sees "Dr. Soetomo" in the village field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/read/s1/data.jpg){.shadow-img}
