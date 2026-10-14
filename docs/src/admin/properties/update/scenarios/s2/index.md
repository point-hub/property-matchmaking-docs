---
aside: false
---

# Scenario 1.7.4. Update Property

## 1.7.4.S2. User can update property status successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "properties"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/land-titles/create/s1/menu.jpg){.shadow-img}

- `THEN` user redirected to page "list property"
- `WHEN` user click "A001" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/read/s1/list.jpg){.shadow-img}

- `THEN` user redirected to page "property details"
- `WHEN` user click Archive Button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/archive-button.jpg){.shadow-img}

- `THEN` user sees archive modal popup
- `WHEN` user enters "Sold" in the reason field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/archive-reason.jpg){.shadow-img}

- `WHEN` user click Confirm Button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/archive-confirm-button.jpg){.shadow-img}

- `THEN` user sees archived label "This data has been archived."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/archived-label.jpg){.shadow-img}

- `WHEN` user click Restore Button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/restore-button.jpg){.shadow-img}

- `THEN` user sees restore modal popup
- `WHEN` user enters "Its still on sale" in the reason field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/restore-reason.jpg){.shadow-img}

- `WHEN` user click Confirm Button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/restore-confirm-button.jpg){.shadow-img}

- `THEN` user should not see archived label "This data has been archived."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/properties/update/s2/page-detail.jpg){.shadow-img}
