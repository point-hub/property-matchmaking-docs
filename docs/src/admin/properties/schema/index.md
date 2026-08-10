---
aside: false
---

# Schema

This section describes the database structure and the relationships between collections. The schema consists of master data collections and transactional or operational collections used by the application.

- [Properties Schema](https://kawanhunian.apidog.io/properties-16383951d0)

## Relationship

- [Users Schema](https://kawanhunian.apidog.io/users-16945732d0)

## Logical Relationship

The master data has a logical relationship with the `customer_preferences` and `properties` collections. Instead of storing the master data `_id`, these collections store the master data name.

This structure is used for property matchmaking, where the system compares the values in `customer_preferences` with the corresponding values in `properties`.

The master collections provide standardized values, while `customer_preferences` and `properties` store these values for matchmaking.

- [Certificates Schema](https://kawanhunian.apidog.io/certificates-16945687d0)
- [Facilities Schema](https://kawanhunian.apidog.io/facilities-16945717d0)
- [Problems Schema](https://kawanhunian.apidog.io/problems-16945718d0)
- [Promos Schema](https://kawanhunian.apidog.io/promos-16945719d0)
- [Customer Preferences Schema](https://kawanhunian.apidog.io/customer-preferences-16946173d0)

## ERD

The ERD describes the physical structure of the MongoDB collections, including the fields stored in each collection and their direct data relationships.

<script setup>
import ErdProperties from './erd-properties.vue'
</script>

<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;background: white"> 
    <ErdProperties />
  </div>
</ClientOnly>
