---
outline: [2,3]
---

# v1.0.0 - Initial Release

## SMART Goals

**Specific:** 

Develop a web app that helps the internal sales team match buyers with suitable properties using compatibility scoring based on location, price, area, facilities, and customer preferences.

**Measurable:** 

Launch MVP with:
- Customer questionnaire for define matching parameter
- Agency admin panel to upload their property database
- Property scoring and recommendation engine algorithm
- Customer closes transactions on platform to get special price

**Achievable:**

- Utilize existing property inventory, customer data, and current sales workflows from the property company as the initial foundation for development and testing.
- Develop the MVP in phases, starting with core matchmaking and recommendation features before expanding to advanced AI capabilities.
- Leverage the internal IT team’s existing technical expertise and infrastructure to accelerate development and deployment.
- Conduct direct testing and feedback sessions with the internal sales team to continuously improve recommendation accuracy and usability during implementation.


**Relevant:**

Improves sales efficiency and reduces manual property recommendation work.

**Time Bound:**

June 2026

## Features

| Feature | Description |
| ------- | ----------- |
| [1. Auth](/auth/about/)                                    | User authentication and access control features to secure the application.                   |
| [1.1. Signup](/auth/signup/)                               | Allows new users to create an account using email and password.                              |
| [1.2. Verify Email](/auth/verify-email/)                   | Sends a verification email to confirm the user’s email address.                              |
| [1.3. Signin](/auth/signin/)                               | Enables registered users to log in to the application.                                       |
| [1.4. Signout](/auth/signout/)                             | Allows users to securely log out of the application.                                         |
| [1.5. Forgot Password](/auth/forgot-password/)             | Provides a way for users to request a password reset link if they forget their password.     |
| [1.6. Reset Password](/auth/reset-password/)               | Allows users to set a new password after verifying their identity.                           |
| [2. My Account](/my-account/about/)                        | User profile management features to update personal information.                             |
| [2.1. Update Username](/my-account/update-username/)       | Allows users to change their display username.                                               |
| [2.2. Update Email](/my-account/update-email/)             | Allows users to update their email address.                                                  |
| [2.3. Update Password](/my-account/update-password/)       | Enables users to change their account password.                                              |
| [3. Properties](/properties/about/) | Manage property listings available on the platform. |
| [3.1. Schema](/properties/schema/) | Defines the data structure used for property information. |
| [3.2. Create](/properties/create/) | Allows users to create a new property listing. |
| [3.3. List](/properties/list/) | Displays all available property listings with filtering and sorting options. |
| [3.4. Read](/properties/read/) | Displays detailed information about a specific property. |
| [3.5. Update](/properties/update/) | Allows users to modify an existing property listing. |
| [3.6. Delete](/properties/delete/) | Allows users to permanently remove a property listing. |
| [4. Matchmaking](/matchmaking/about/) | Helps users discover properties that match their preferences. |
| [4.1. Schema](/matchmaking/schema/) | Defines the data structure used for property recommendations and preferences. |
| [4.2. Homepage](/matchmaking/homepage/) | Displays personalized property recommendations for users. |
| [4.3. Property Preferences](/matchmaking/property-preferences/) | Allows users to configure their preferred property criteria. |
| [4.4. Contact Agency](/matchmaking/contact-agency/) | Enables users to contact the property agency regarding a recommended property. |
| [5. Invoices](/invoices/about/) | Manage invoices and payment confirmation for transactions. |
| [5.1. Schema](/invoices/schema/) | Defines the data structure used for invoices and payments. |
| [5.2. Receive](/invoices/receive/) | Displays newly issued invoices for the user. |
| [5.3. List](/invoices/list/) | Displays all invoices with filtering and sorting options. |
| [5.4. Read](/invoices/read/) | Displays detailed information for a specific invoice. |
| [5.5. Confirm Payment](/invoices/confirm-payment/) | Allows users to submit or confirm payment for an invoice. |