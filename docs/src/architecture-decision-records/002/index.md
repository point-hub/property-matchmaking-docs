---
outline: [2,3]
---

# ADR#002

## Topic

What customer information do we need to collect, and what should the overall user flow be?

## Problem

Presenting all available properties without first understanding the customer's needs results in an overwhelming and inefficient experience. Customers must manually browse numerous listings, many of which do not match their preferences or financial capability.

Without collecting essential information such as preferred location, budget, financing method, down payment capability, and other purchasing preferences. The system cannot provide personalized recommendations. This leads to irrelevant property suggestions, longer decision-making time, and increased effort for both customers and property consultants.

## Decision

Instead of presenting every available property, the application guides users through a questionnaire to collect key information such as:

- Preferred location
- Budget and financing method
- Buying problems and promotion needs

Using this information, the system evaluates available properties and generates personalized recommendations.

<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;">
  
![alt text](https://property-matchmaking-docs.r2.lab.biz.id/adr/002/brainstorm-20072026.webp)

  </div>
</ClientOnly>

### Recommendation Formula

The property recommendation score is primarily calculated based on two key factors:

1. **Location Preference.** The system compares the customer's preferred location with each property's location. Properties that closely match the selected location receive a higher score.
2. **Budget Preference.** The system evaluates whether the property's price fits within the customer's target budget or financing capability. Properties that are closer to the customer's budget receive a higher score.
3. **Promotion Needs.** The system considers the customer's purchasing challenges, such as limited savings, income constraints, or credit history, to identify properties with promotions or financing programs that best address those needs.

The overall recommendation score is determined by combining these two factors. Properties with the highest scores are ranked first and presented as the most suitable recommendations for the customer.

## Reasoning

Using these three factors provides a balance between recommendation accuracy and implementation simplicity. The model is easy to maintain, transparent for business users, and can be expanded in the future if additional recommendation criteria are required.

## Discussion History

### 13 July 2026

**Define the User Preference Flow**

Discussed the overall user journey for collecting customer preferences before recommending properties. The objective is to gather sufficient information about each customer's needs, financial capability, and purchasing preferences so the system can generate personalized property recommendations.

<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;">
  
![alt text](https://property-matchmaking-docs.r2.lab.biz.id/adr/002/brainstorm-13072026.webp)

  </div>
</ClientOnly>

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |

### 17 July 2026

Finalized the user flow by simplifying the customer journey to better align with the current business process. Unnecessary steps were removed, and the flow was streamlined to improve the user experience while remaining consistent with existing business operations.

<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;">
  
![alt text](https://property-matchmaking-docs.r2.lab.biz.id/adr/002/brainstorm-17072026.webp)

  </div>
</ClientOnly>

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |

### 20 July 2026

Changed the flow so that users no longer receive property recommendations immediately. Instead, users send a WhatsApp message, and the KAHU agent will send them a link to their personalized property recommendations.

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |

