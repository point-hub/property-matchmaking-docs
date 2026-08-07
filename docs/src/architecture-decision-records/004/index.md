---
outline: [2,3]
---

# ADR#004

## Topic

Choose the most suitable domain for the customer-facing web application?

## Problem

The customer needs to decide which domain should be used for the web application. The selected domain should:

- Be easy to remember and communicate.
- Clearly represent the purpose of the application.
- Align with the existing Kawan Hunian business and customer journey.
- Increase user trust and brand consistency.

## Options

### 1. property-matchmaking.pointhub.app

Use the Pointhub domain for the application for simplicity.

### 2. property-matchmaking.kawanhunian.com

Use a dedicated subdomain for the matchmaking application.

### 3. carirumah.kawanhunian.com

Use a subdomain that reflects the primary user goal.

### 4. kawanhunian.com

Use the main domain as the entry point for the application.

## Decision

4. kawanhunian.com

## Reasoning

- Aligns with the existing Kawan Hunian customer journey and business process.
- Uses the primary brand domain, increasing user trust and credibility.
- Short, simple, and easy to remember, type, and communicate.
- Eliminates the need for users to remember a separate subdomain.
- Provides a single entry point for users coming from social media, WhatsApp, advertisements, and other marketing channels.
- Allows the homepage to serve both as the property recommendation entry point and as a marketing website for educational content, promotions, and future features.
- Supports future expansion without requiring changes to the application's public URL.

## Discussion History

### 05 August 2026

Presented the application prototype to the customer and discussed domain options for the web application. After evaluating the available options based on branding, usability, and alignment with the existing Kawan Hunian customer journey, the customer decided to use kawanhunian.com as the primary domain.

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |
| Stefani | End User Representative |
