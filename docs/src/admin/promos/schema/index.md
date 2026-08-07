# Schema

Explains how data is organized and what kind of data can be stored in the system. It helps keep data clear, consistent, and easy to use.

- [Promos Schema](https://apidocs.simple-accounting.pointhub.app/users-13209321d0)

## Relations

- [Users Schema](https://apidocs.simple-accounting.pointhub.app/users-13209321d0) Represents the user who created or manages the promo. This relationship is used for ownership, auditing, and tracking who is responsible for each promo.
- [Properties Schema](https://apidocs.simple-accounting.pointhub.app/users-13209321d0) Represents the property associated with the promo. This logical relationship enables property-based filtering, searching, and helps match the appropriate promo to a selected property.
- [Customer Preferences Schema](https://apidocs.simple-accounting.pointhub.app/users-13209321d0) Represents the customer's selected preferences related to the promo. This logical relationship is used to match and recommend promos based on the customer's chosen preferences.
