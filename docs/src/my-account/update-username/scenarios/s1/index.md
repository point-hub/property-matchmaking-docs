---
aside: false
---

# Scenario 2.1. Update Username

## 2.1.F1. Username update fails when user is not authenticated.

![alt text](./home.webp){.shadow-img}

- `GIVEN` user visit `/signin`
- `WHEN` user type "admin" into input "username"
- `AND` user type "Admin123!" into input "password"
- `AND` user click button "sign-in"
- `THEN` user redirected to home page

![alt text](./signin-page.png){.shadow-img}

- `WHEN` user click account menu in top-right corner
- `AND` user click button "my-account"
- `THEN` system show popup "account-menu"

![alt text](./account-menu.png){.shadow-img}

- `WHEN` user click button

![alt text](./my-account-page.png){.shadow-img}

- `WHEN` user type "admin" into input "username"
- `AND` user click button "save"

![alt text](./fill-form.png){.shadow-img}

- `THEN` user see "Authentication credentials is invalid".