---
outline: [2,5]
---

<script setup>
import Sitemap from '@/sitemap.vue'
</script>

# v1.0.0 - Initial Release

## SMART Goals

**Specific** 

Develop a web app that helps the internal sales team match buyers with suitable properties using compatibility scoring based on location, price, area, facilities, and customer preferences.

**Measurable** 

Launch MVP with:
- Customer questionnaire for define matching parameter
- Agency admin panel to upload their property database
- Property scoring and recommendation engine algorithm
- Customer closes transactions on platform to get special price

**Achievable**

- Utilize existing property inventory, customer data, and current sales workflows from the property company as the initial foundation for development and testing.
- Develop the MVP in phases, starting with core matchmaking and recommendation features before expanding to advanced AI capabilities.
- Leverage the internal IT team’s existing technical expertise and infrastructure to accelerate development and deployment.
- Conduct direct testing and feedback sessions with the internal sales team to continuously improve recommendation accuracy and usability during implementation.


**Relevant**

Improves sales efficiency and reduces manual property recommendation work.

**Time Bound**

June 2026

## Features

| Feature | Description |
| ------- | ----------- |
| [1. Admin](/admin/about/) | Features available to administrators for managing platform data. |

| Feature | Description |
| ------- | ----------- |
| [1.1. Auth](/admin/auth/about/)                                    | User authentication and access control features to secure the application.                   |
| [1.1.1. Signup](/admin/auth/signup/)                               | Allows new users to create an account using email and password.                              |
| [1.1.2. Verify Email](/admin/auth/verify-email/)                   | Sends a verification email to confirm the user’s email address.                              |
| [1.1.3. Signin](/admin/auth/signin/)                               | Enables registered users to log in to the application.                                       |
| [1.1.4. Signout](/admin/auth/signout/)                             | Allows users to securely log out of the application.                                         |
| [1.1.5. Forgot Password](/admin/auth/forgot-password/)             | Provides a way for users to request a password reset link if they forget their password.     |
| [1.1.6. Reset Password](/admin/auth/reset-password/)               | Allows users to set a new password after verifying their identity.                           |

| Feature | Description |
| ------- | ----------- |
| [1.2. My Account](/admin/my-account/about/)                        | User profile management features to update personal information.                             |
| [1.2.1. Update Username](/admin/my-account/update-username/)       | Allows users to change their display username.                                               |
| [1.2.2. Update Email](/admin/my-account/update-email/)             | Allows users to update their email address.                                                  |
| [1.2.3. Update Password](/admin/my-account/update-password/)       | Enables users to change their account password.                                              |

| Feature | Description |
| ------- | ----------- |
| [1.3. Certificates](/admin/certificates/about/) | Manage certificates available on the platform. |
| [1.3.1. Create Certificate](/admin/certificates/create/) | Allows users to create a new certificate. |
| [1.3.2. List Certificates](/admin/certificates/list/) | Displays all available certificate listings with filtering and sorting options. |
| [1.3.3. Read Certificate](/admin/certificates/read/) | Displays detailed information about a specific certificate. |
| [1.3.4. Update Certificate](/admin/certificates/update/) | Allows users to modify an existing certificate listing. |
| [1.3.5. Delete Certificate](/admin/certificates/delete/) | Allows users to permanently remove a certificate listing. |

| Feature | Description |
| ------- | ----------- |
| [1.4. Facilities](/admin/facilities/about/) | Manage facilities available on the platform. |
| [1.4.1. Create Facility](/admin/facilities/create/) | Allows users to create a new facility. |
| [1.4.2. List Facilities](/admin/facilities/list/) | Displays all available facility listings with filtering and sorting options. |
| [1.4.3. Read Facility](/admin/facilities/read/) | Displays detailed information about a specific facility. |
| [1.4.4. Update Facility](/admin/facilities/update/) | Allows users to modify an existing facility listing. |
| [1.4.5. Delete Facility](/admin/facilities/delete/) | Allows users to permanently remove a facility listing. |

| Feature | Description |
| ------- | ----------- |
| [1.5. Problems](/admin/problems/about/) | Manage problems available on the platform. |
| [1.5.1. Create Problems](/admin/problems/create/) | Allows users to create a new problem. |
| [1.5.2. List Problems](/admin/problems/list/) | Displays all available problem listings with filtering and sorting options. |
| [1.5.3. Read Problems](/admin/problems/read/) | Displays detailed information about a specific problem. |
| [1.5.4. Update Problems](/admin/problems/update/) | Allows users to modify an existing problem listing. |
| [1.5.5. Delete Problems](/admin/problems/delete/) | Allows users to permanently remove a problem listing. |

| Feature | Description |
| ------- | ----------- |
| [1.6. Promos](/admin/promos/about/) | Manage promos available on the platform. |
| [1.6.1. Create Promo](/admin/promos/create/) | Allows users to create a new promo. |
| [1.6.2. List Promos](/admin/promos/list/) | Displays all available promo listings with filtering and sorting options. |
| [1.6.3. Read Promo](/admin/promos/read/) | Displays detailed information about a specific promo. |
| [1.6.4. Update Promo](/admin/promos/update/) | Allows users to modify an existing promo listing. |
| [1.6.5. Delete Promo](/admin/promos/delete/) | Allows users to permanently remove a promo listing. |

| Feature | Description |
| ------- | ----------- |
| [1.7. Properties](/admin/properties/about/) | Manage property listings available on the platform. |
| [1.7.1. Create Property](/admin/properties/create/) | Allows users to create a new property listing. |
| [1.7.2. List Properties](/admin/properties/list/) | Displays all available property listings with filtering and sorting options. |
| [1.7.3. Read Property](/admin/properties/read/) | Displays detailed information about a specific property. |
| [1.7.4. Update Property](/admin/properties/update/) | Allows users to modify an existing property listing. |
| [1.7.5. Delete Property](/admin/properties/delete/) | Allows users to permanently remove a property listing. |

| Feature | Description |
| ------- | ----------- |
| [2. Web](/web/about) | Features available to customers and visitors. | 

| Feature | Description |
| ------- | ----------- |
| [2.1. Matchmaking](/web/matchmaking/about/) | Helps users discover properties that match their preferences. |
| [2.1.1. Send Customer Preferences](/web/matchmaking/send-property-preferences/) | Allows users to complete a questionnaire about their preferred property criteria to receive the best property recommendations. |
| [2.1.2. Receive Property Recommendations](/web/matchmaking/receive-property-recommendations/) | Displays personalized property recommendations for users. |

## Sitemap
<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;"> 
    <Sitemap />
  </div>
</ClientOnly>

## Scenarios

### 1. Admin

---

#### 1.1. Auth

---

##### 1.1.1. Signup

| 1.1.1.S Success Scenarios |
| ---- |
| [1.1.1.S1. User can sign up successfully.](/admin/auth/signup/scenarios/s1/) |

| 1.1.1.F Failed Scenarios |
| --- |
| [1.1.1.F1. Sign up fails when required fields are empty.](/admin/auth/signup/scenarios/f1/) |
| [1.1.1.F2. Sign up fails when username already exists.](/admin/auth/signup/scenarios/f2/) |
| [1.1.1.F3. Sign up fails when email already exists.](/admin/auth/signup/scenarios/f3/) |
| [1.1.1.F4. Sign up fails when password is not strong enough.](/admin/auth/signup/scenarios/f4/) |
| [1.1.1.F5. Sign up fails when password confirmation does not match.](/admin/auth/signup/scenarios/f5/) |

##### 1.1.2. Verify Email

| 1.1.2.S Success Scenarios |
| ---- |
| [1.1.2.S1. User can verify email successfully.](/admin/auth/verify-email/scenarios/s1/) |

| 1.1.2.F Failed Scenarios |
| ---- |
| [1.1.2.F1. Email verification fails when required fields are empty.](/admin/auth/verify-email/scenarios/f1/) |
| [1.1.2.F2. Email verification fails when verification code is invalid.](/admin/auth/verify-email/scenarios/f2/) |

##### 1.1.3. Signin

| 1.1.3.S Success Scenarios |
| ---- |
| [1.1.3.S1. User can sign in successfully.](/admin/auth/signin/scenarios/s1/) |

| 1.1.3.F Failed Scenarios |
| ---- |
| [1.1.3.F1. Sign in fails when credentials do not match.](/admin/auth/signin/scenarios/f1/) |

##### 1.1.4. Signout

| 1.1.4.S Success Scenarios |
| ---- |
| [1.1.4.S1. User can sign out successfully.](/admin/auth/signout/scenarios/s1/) |

##### 1.1.5. Forgot Password

| 1.1.5.S Success Scenarios |
| ---- |
| [1.1.5.S1. User can request password reset successfully.](/admin/auth/forgot-password/scenarios/s1/) |

| 1.1.5.F Failed Scenarios |
| --- |
| [1.1.5.F1. Password reset request fails when required fields are empty.](/admin/auth/forgot-password/scenarios/f1/) |
| [1.1.5.F2. Password reset request fails when email is not found.](/admin/auth/forgot-password/scenarios/f2/) |

##### 1.1.6. Reset Password

| 1.1.6.S Success Scenarios |
| ---- |
| [1.1.6.S1. User can reset password successfully.](/admin/auth/reset-password/scenarios/s1/) |

| 1.1.6.F Failed Scenarios |
| ---- |
| [1.1.6.F1. Password reset fails when required fields are empty.](/admin/auth/reset-password/scenarios/f1/) |
| [1.1.6.F2. Password reset fails when password is not strong enough.](/admin/auth/reset-password/scenarios/f2/) |
| [1.1.6.F3. Password reset fails when password confirmation does not match.](/admin/auth/reset-password/scenarios/f3/) |

#### 1.2. My Account

---

##### 1.2.1. Update Username

| 1.2.1.S Success Scenarios |
| ---- |
| [1.2.1.S1. User can update username successfully.](/admin/my-account/update-username/scenarios/s1/) |

| 1.2.1.F Failed Scenarios |
| ---- |
| [1.2.1.F1. Username update fails when user is not authenticated.](/admin/my-account/update-username/scenarios/f1/) |
| [1.2.1.F2. Username update fails when required fields are empty.](/admin/my-account/update-username/scenarios/f2/) |
| [1.2.1.F3. Username update fails when username already exists.](/admin/my-account/update-username/scenarios/f3/) |

##### 1.2.2. Update Email

| 1.2.2.S Success Scenarios |
| ---- |
| [1.2.2.S1. User can update email successfully.](/admin/my-account/update-email/scenarios/s1/) |

| 1.2.2.F Failed Scenarios |
| ---- |
| [1.2.2.F1. Email update fails when user is not authenticated.](/admin/my-account/update-email/scenarios/f1/) |
| [1.2.2.F2. Email update fails when required fields are empty.](/admin/my-account/update-email/scenarios/f2/) |
| [1.2.2.F3. Email update fails when email already exists.](/admin/my-account/update-email/scenarios/f3/) |

##### 1.2.3. Update Password

| 1.2.3.S Success Scenarios |
| ---- |
| [1.2.3.S1. User can update password successfully.](/admin/my-account/update-password/scenarios/s1/) |

| 1.2.3.F Failed Scenarios |
| ---- |
| [1.2.3.F1. Password update fails when user is not authenticated.](/admin/my-account/update-password/scenarios/f1/) |
| [1.2.3.F2. Password update fails when required fields are empty.](/admin/my-account/update-password/scenarios/f2/) |
| [1.2.3.F3. Password update fails when password is not strong enough.](/admin/my-account/update-password/scenarios/f3/) |
| [1.2.3.F4. Password update fails when password confirmation does not match.](/admin/my-account/update-password/scenarios/f4/) |

#### 1.3. Certificates

---

##### 1.3.1. Create Certificate

| 1.3.1.S Success Scenarios |
| ---- |
| [1.3.1.S1. User can create certificate successfully.](/admin/certificates/create/scenarios/s1/) |

| 1.3.1.F Failed Scenarios |
| ---- |
| [1.3.1.F1. Create certificate fails when user is not authenticated.](/admin/certificates/create/scenarios/f1/) |
| [1.3.1.F2. Create certificate fails when required fields are empty.](/admin/certificates/create/scenarios/f2/) |

##### 1.3.2. List Certificates

| 1.3.2.S Success Scenarios |
| ---- |
| [1.3.2.S1. User can view paginated certificates data.](/admin/certificates/list/scenarios/s1/) |

| 1.3.2.F Failed Scenarios |
| ---- |
| [1.3.2.F1. Certificate list retrieval fails when user is not authenticated.](/admin/certificates/list/scenarios/f1/) |

##### 1.3.3. Read Certificate

| 1.3.3.S Success Scenarios |
| ---- |
| [1.3.3.S1. User can view certificate data.](/admin/certificates/read/scenarios/s1/) |

| 1.3.3.F Failed Scenarios |
| ---- |
| [1.3.3.F1. Read certificate fails when user is not authenticated.](/admin/certificates/read/scenarios/f1/) |

##### 1.3.4. Update Certificate

| 1.3.4.S Success Scenarios |
| ---- |
| [1.3.4.S1. User can update certificate successfully.](/admin/certificates/update/scenarios/s1/) |

| 1.3.4.F Failed Scenarios |
| ---- |
| [1.3.4.F1. Update certificate fails when user is not authenticated.](/admin/certificates/update/scenarios/f1/) |
| [1.3.4.F2. Update certificate fails when required fields are empty.](/admin/certificates/update/scenarios/f2/) |

##### 1.3.5. Delete Certificate

| 1.3.5.S Success Scenarios |
| ---- |
| [1.3.5.S1. User can delete certificate successfully.](/admin/certificates/delete/scenarios/s1/) |

| 1.3.5.F Failed Scenarios |
| ---- |
| [1.3.5.F1. Delete certificate fails when user is not authenticated.](/admin/certificates/delete/scenarios/f1/) |

#### 1.4. Facilities

---

##### 1.4.1. Create Facility

| 1.4.1.S Success Scenarios |
| ---- |
| [1.4.1.S1. User can create facility successfully.](/admin/facilities/create/scenarios/s1/) |

| 1.4.1.F Failed Scenarios |
| ---- |
| [1.4.1.F1. Create facility fails when user is not authenticated.](/admin/facilities/create/scenarios/f1/) |
| [1.4.1.F2. Create facility fails when required fields are empty.](/admin/facilities/create/scenarios/f2/) |

##### 1.4.2. List Facilities

| 1.4.2.S Success Scenarios |
| ---- |
| [1.4.2.S1. User can view paginated facilities data.](/admin/facilities/list/scenarios/s1/) |

| 1.4.2.F Failed Scenarios |
| ---- |
| [1.4.2.F1. Facility list retrieval fails when user is not authenticated.](/admin/facilities/list/scenarios/f1/) |

##### 1.4.3. Read Facility

| 1.4.3.S Success Scenarios |
| ---- |
| [1.4.3.S1. User can view facility data.](/admin/facilities/read/scenarios/s1/) |

| 1.4.3.F Failed Scenarios |
| ---- |
| [1.4.3.F1. Read facility fails when user is not authenticated.](/admin/facilities/read/scenarios/f1/) |

##### 1.s4.4. Update Facility

| 1.s4.4.S Success Scenarios |
| ---- |
| [1.s4.4.S1. User can update facility successfully.](/admin/facilities/update/scenarios/s1/) |

| 1.s4.4.F Failed Scenarios |
| ---- |
| [1.s4.4.F1. Update facility fails when user is not authenticated.](/admin/facilities/update/scenarios/f1/) |
| [1.s4.4.F2. Update facility fails when required fields are empty.](/admin/facilities/update/scenarios/f2/) |

##### 1.4.5. Delete Facility

| 1.4.5.S Success Scenarios |
| ---- |
| [1.4.5.S1. User can delete facility successfully.](/admin/facilities/delete/scenarios/s1/) |

| 1.4.5.F Failed Scenarios |
| ---- |
| [1.4.5.F1. Delete facility fails when user is not authenticated.](/admin/facilities/delete/scenarios/f1/) |

#### 1.5. Problems

---

##### 1.5.1. Create Problem

| 1.5.1.S Success Scenarios |
| ---- |
| [1.5.1.S1. User can create problem successfully.](/admin/problems/create/scenarios/s1/) |

| 1.5.1.F Failed Scenarios |
| ---- |
| [1.5.1.F1. Create problem fails when user is not authenticated.](/admin/problems/create/scenarios/f1/) |
| [1.5.1.F2. Create problem fails when required fields are empty.](/admin/problems/create/scenarios/f2/) |

##### 1.5.2. List Problems

| 1.5.2.S Success Scenarios |
| ---- |
| [1.5.2.S1. User can view paginated problems data.](/admin/problems/list/scenarios/s1/) |

| 1.5.2.F Failed Scenarios |
| ---- |
| [1.5.2.F1. Problem list retrieval fails when user is not authenticated.](/admin/problems/list/scenarios/f1/) |

##### 1.5.3. Read Problem

| 1.5.3.S Success Scenarios |
| ---- |
| [1.5.3.S1. User can view problem data.](/admin/problems/read/scenarios/s1/) |

| 1.5.3.F Failed Scenarios |
| ---- |
| [1.5.3.F1. Read problem fails when user is not authenticated.](/admin/problems/read/scenarios/f1/) |

##### 1.5.4. Update Problem

| 1.5.4.S Success Scenarios |
| ---- |
| [1.5.4.S1. User can update problem successfully.](/admin/problems/update/scenarios/s1/) |

| 1.5.4.F Failed Scenarios |
| ---- |
| [1.5.4.F1. Update problem fails when user is not authenticated.](/admin/problems/update/scenarios/f1/) |
| [1.5.4.F2. Update problem fails when required fields are empty.](/admin/problems/update/scenarios/f2/) |

##### 1.5.5. Delete Problem

| 1.5.5.S Success Scenarios |
| ---- |
| [1.5.5.S1. User can delete problem successfully.](/admin/problems/delete/scenarios/s1/) |

| 1.5.5.F Failed Scenarios |
| ---- |
| [1.5.5.F1. Delete problem fails when user is not authenticated.](/admin/problems/delete/scenarios/f1/) |

#### 1.6. Promos

---

##### 1.6.1. Create Promo

| 1.6.1.S Success Scenarios |
| ---- |
| [1.6.1.S1. User can create promo successfully.](/admin/promos/create/scenarios/s1/) |

| 1.6.1.F Failed Scenarios |
| ---- |
| [1.6.1.F1. Create promo fails when user is not authenticated.](/admin/promos/create/scenarios/f1/) |
| [1.6.1.F2. Create promo fails when required fields are empty.](/admin/promos/create/scenarios/f2/) |

##### 1.6.2. List Promos

| 1.6.2.S Success Scenarios |
| ---- |
| [1.6.2.S1. User can view paginated promos data.](/admin/promos/list/scenarios/s1/) |

| 1.6.2.F Failed Scenarios |
| ---- |
| [1.6.2.F1. Promo list retrieval fails when user is not authenticated.](/admin/promos/list/scenarios/f1/) |

##### 1.6.3. Read Promo

| 1.6.3.S Success Scenarios |
| ---- |
| [1.6.3.S1. User can view promo data.](/admin/promos/read/scenarios/s1/) |

| 1.6.3.F Failed Scenarios |
| ---- |
| [1.6.3.F1. Read promo fails when user is not authenticated.](/admin/promos/read/scenarios/f1/) |

##### 1.6.4. Update Promo

| 1.6.4.S Success Scenarios |
| ---- |
| [1.6.4.S1. User can update promo successfully.](/admin/promos/update/scenarios/s1/) |

| 1.6.4.F Failed Scenarios |
| ---- |
| [1.6.4.F1. Update promo fails when user is not authenticated.](/admin/promos/update/scenarios/f1/) |
| [1.6.4.F2. Update promo fails when required fields are empty.](/admin/promos/update/scenarios/f2/) |

##### 1.6.5. Delete Promo

| 1.6.5.S Success Scenarios |
| ---- |
| [1.6.5.S1. User can delete promo successfully.](/admin/promos/delete/scenarios/s1/) |

| 1.6.5.F Failed Scenarios |
| ---- |
| [1.6.5.F1. Delete promo fails when user is not authenticated.](/admin/promos/delete/scenarios/f1/) |

#### 1.7. Properties

---

##### 1.7.1. Create Property

| 1.7.1.S Success Scenarios |
| ---- |
| [1.7.1.S1. User can create property successfully.](/admin/properties/create/scenarios/s1/) |

| 1.7.1.F Failed Scenarios |
| ---- |
| [1.7.1.F1. Create property fails when user is not authenticated.](/admin/properties/create/scenarios/f1/) |
| [1.7.1.F2. Create property fails when required fields are empty.](/admin/properties/create/scenarios/f2/) |

##### 1.7.2. List Properties

| 1.7.2.S Success Scenarios |
| ---- |
| [1.7.2.S1. User can view paginated properties data.](/admin/properties/list/scenarios/s1/) |
| [1.7.2.S2. User can view filtered status active properties data.](/admin/properties/list/scenarios/s2/) |
| [1.7.2.S3. User can view filtered status inactive properties data.](/admin/properties/list/scenarios/s3/) |

| 1.7.2.F Failed Scenarios |
| ---- |
| [1.7.2.F1. Property list retrieval fails when user is not authenticated.](/admin/properties/list/scenarios/f1/) |

##### 1.7.3. Read Property

| 1.7.3.S Success Scenarios |
| ---- |
| [1.7.3.S1. User can view property data.](/admin/properties/read/scenarios/s1/) |

| 1.7.3.F Failed Scenarios |
| ---- |
| [1.7.3.F1. Read property fails when user is not authenticated.](/admin/properties/read/scenarios/f1/) |

##### 1.7.4. Update Property

| 1.7.4.S Success Scenarios |
| ---- |
| [1.7.4.S1. User can update property successfully.](/admin/properties/update/scenarios/s1/) |
| [1.7.4.S1. User can update property status successfully.](/admin/properties/update/scenarios/s1/) |

| 1.7.4.F Failed Scenarios |
| ---- |
| [1.7.4.F1. Update property fails when user is not authenticated.](/admin/properties/update/scenarios/f1/) |
| [1.7.4.F2. Update property fails when required fields are empty.](/admin/properties/update/scenarios/f2/) |

##### 1.7.5. Delete Property

| 1.7.5.S Success Scenarios |
| ---- |
| [1.7.5.S1. User can delete property successfully.](/admin/properties/delete/scenarios/s1/) |

| 1.7.5.F Failed Scenarios |
| ---- |
| [1.7.5.F1. Delete property fails when user is not authenticated.](/admin/properties/delete/scenarios/f1/) |

### 2. Web

---

#### 2.1. Matchmaking

---

##### 2.1.1. Send Customer Preferences

| 2.1.1.S Success Scenarios |
| ---- |
| [2.1.1.S1. User can send their preferences successfully.](/web/matchmaking/send-customer-preferences/scenarios/s1/) |

| 2.1.1.F Failed Scenarios |
| ---- |
| [2.1.1.F1. Send preferences fails when the location fields are empty.](/web/matchmaking/send-customer-preferences/scenarios/f1/) |
| [2.1.1.F2. Send preferences fails when the cash budget fields are empty.](/web/matchmaking/send-customer-preferences/scenarios/f2/) |
| [2.1.1.F3. Send preferences fails when the finance budget fields are empty.](/web/matchmaking/send-customer-preferences/scenarios/f3/) |
| [2.1.1.F4. Send preferences fails when the contact information fields are empty.](/web/matchmaking/send-customer-preferences/scenarios/f4/) |


##### 2.1.2. Receive Property Recommendations

| 2.1.2.S Success Scenarios |
| ---- |
| [2.1.2.S1. User can view property recommendations.](/web/matchmaking/receive-property-recommendations/scenarios/s1/) |
