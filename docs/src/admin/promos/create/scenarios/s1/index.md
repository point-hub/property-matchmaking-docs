---
aside: false
---

# Scenario 1.3.1. Create Promo

## 1.3.1.S1. User can create promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list promo"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/2.promos-create-button.png){.shadow-img}

- `THEN` user redirected to page "create promo"
- `WHEN` user enters "Penghasilan terbatas" in the name field
- `AND` user enters "Cari rumah dengan cicilan lebih terjangkau." in the description field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/3.fill-form.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/4.save-button.png){.shadow-img}

- `THEN` user redirected to page "list promo"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/5.notification.png){.shadow-img}

- `THEN` user view "Penghasilan terbatas" in list promo name
- `AND` user view "Cari rumah dengan cicilan lebih terjangkau." in list promo description

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/5.success.png){.shadow-img}