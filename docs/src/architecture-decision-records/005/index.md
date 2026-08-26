---
outline: [2,3]
---

# ADR#005

## Topic

Rename Certificates to Land Titles to accurately represent SHM (Sertifikat Hak Milik) and HGB (Hak Guna Bangunan), which are land titles rather than generic certificates.

## Problem

The term Certificates is too generic and does not accurately describe the information being managed by the property matchmaking system.

The system specifically handles land titles such as:

- SHM (Sertifikat Hak Milik)
- HGB (Hak Guna Bangunan)

Using Certificates may cause confusion because it can refer to various types of property or supporting documents, while SHM and HGB represent specific land rights/titles.

## Decision

Rename the Certificates feature to Land Titles.

## Reason

The terminology should accurately reflect the business domain and be understandable to end users.

Land Titles is more specific and appropriate for SHM and HGB than Certificates. It also provides a clearer foundation for adding other land-right types in the future.

## Discussion History

### 19 August 2026

- Rename feature certificates to land titles

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |
