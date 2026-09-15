---
aside: false
---

# Scenario 1.2.1. Update Username

## 1.2.1.F3. Username update fails when username already exists.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](./menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](./pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click password button

![alt text](./password-button.jpg){.shadow-img}

- `THEN` user redirected to update password page

![alt text](./password-s1-1.jpg){.shadow-img}

- `WHEN` user types "Admin123!" in the current password field
- `AND` user types "a" in the new password field
- `THEN` user sees error message "Use at least 8 characters"
- `AND` user sees error message "Contain at least one uppercase letter"
- `AND` user sees error message "Contain at least one numeric character"
- `AND` user sees error message "Contain at least one special character"

![alt text](./password-f3-1.jpg){.shadow-img}