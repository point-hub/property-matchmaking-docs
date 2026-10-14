---
outline: [2,3]
---

# ADR#007

## Topic

Managing custom property data for land titles, facilities, and promos.

## Problem

The system allows users to select existing master data for land titles, facilities, and promotions while also adding custom entries.

However, automatically adding every custom entry to master data could unnecessarily clutter the available options.

**Example:**

If we add every additional promo to the master data, imagine how crowded the multiple-choice list would become, making it difficult for users to find the right option.

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/adr/007/multiple-choice.png){.shadow-img}

## Decision

The system will allow users to select existing master data or add custom entries for land titles, facilities, and promotions when creating or editing a property.

Custom entries will be saved as property-specific data and will not be automatically added to master data.

Administrators can review custom entries across properties, identify common or relevant entries, and decide which ones should be added to master data. Once added, these entries will become available for other users to select when creating or editing their properties.

## Reason

This approach maintains flexibility for users while ensuring that master data remains relevant, consistent, and manageable.

## Discussion History

### 14 October 2026

Because the customer may be confused about why the system was designed this way, we need to create ADR behind this design decision discussed earlier. This helps team understand the rationale behind each decision and verify that the implementation aligns with the intended behavior.

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |
| Stefani | Customer |
| Aini | Tester |
| Dian | Project Coordinator |
