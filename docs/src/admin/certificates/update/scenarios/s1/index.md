---
aside: false
---

# Scenario 1.3.4. Update Certificate

## 1.3.4.S1. User can update certificate successfully.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "certificates"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list certificate"
- `AND` user can see list of certificates
- `WHEN` user click "Certificate 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/read/list.png){.shadow-img}

- `THEN` user redirected to page "certificate details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/read/detail.png){.shadow-img}

- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/edit-button.png){.shadow-img}

- `THEN` user redirected to page "edit certificate"
- `WHEN` user enters "Certificate 1A" in the name field
- `AND` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/update-button.png){.shadow-img}

- `THEN` user redirected to page "certificate details"
- `AND` user see notification "Update success"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/success-notification.png){.shadow-img}

- `THEN` user see updated name "Certificate 1A"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/updated-name.png){.shadow-img}