---
aside: false
---

# Scenario 1.3.1. Create Certificate

## 1.3.1.S1. User can create certificate successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "certificates"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list certificate"
- `WHEN` user click button "create"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/2.certificates-create-button.png){.shadow-img}

- `THEN` user redirected to page "create certificate"
- `WHEN` user enters "SHM" in the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/3.fill-form.png){.shadow-img}

- `WHEN` user click button save

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/4.save-button.png){.shadow-img}

- `THEN` user redirected to page "list certificate"
- `AND` user view notification "Create success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/5.notification.png){.shadow-img}

- `THEN` user view "SHM" in list certificate

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/5.success.png){.shadow-img}