---
aside: false
---

# Scenario 1.3.2. List Certificates

## 1.3.2.S1. User can view paginated certificates data.

- `GIVEN` user already logged in
- `AND` user visit home page
- `WHEN` user click menu "certificates"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/scenarios/s1/1.menu.png){.shadow-img}

- `THEN` user redirected to page "list certificates"
- `AND` user can see list of certificates

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/list/s1/data.png){.shadow-img}

- `THEN` user can see pagination summary "Showing 1 to 10 of 15 entries"

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/list/s1/page-info.png){.shadow-img}

- `THEN` user can see pagination controls button

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/admin/certificates/list/s1/pagination.png){.shadow-img}