---
aside: false
---

# Scenario 1.3.5. Delete Certificate

## 1.3.5.S1. User can delete certificate successfully.

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

- `WHEN` user click delete button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/delete/delete-button.png){.shadow-img}

- `WHEN` user click confirm button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/delete/confirm-delete.png){.shadow-img}

- `THEN` user does not see "Certificate 1" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/delete/data.png){.shadow-img}

- `THEN` user see "Showing 1 to 10 of 14 entries" in the table

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/delete/page-info.png){.shadow-img}

