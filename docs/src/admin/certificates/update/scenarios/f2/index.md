---
aside: false
---

# Scenario 1.3.4. Update Certificate

## 1.3.4.F2. Update certificate fails when required fields are empty.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "certificates"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list certificates"
- `AND` user can see list of certificates
- `WHEN` user click "Certificate 1" data

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/read/list.png){.shadow-img}

- `THEN` user redirected to page "certificate details"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/read/detail.png){.shadow-img}

- `WHEN` user click edit button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/edit-button.png){.shadow-img}

- `THEN` user redirected to page "edit certificate"
- `WHEN` user clears the name field

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/f2/form.jpg){.shadow-img}

- `WHEN` user click update button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/f2/update-button.jpg){.shadow-img}

- `THEN` user see error message "The name field is required"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/update/f2/error.jpg){.shadow-img}

