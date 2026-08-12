---
aside: false
---

# Scenario 1.3.1. Create Promo

## 1.3.1.F2. User can create promo successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "promos"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list promo"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/2.promos-create-button.png){.shadow-img}

- `THEN` user redirected to page "create promo"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/s1/3.fill-form.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/f2/save-error.png){.shadow-img}

- `THEN` user see error message "The name field is required."
- `AND` user see error message "The description field is required."

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/promos/scenarios/f2/error-message.png){.shadow-img}