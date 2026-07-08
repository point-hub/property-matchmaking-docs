---
outline: [2,3]
---

# ADR#001

## Topic

How to help the sales team provide faster, more accurate, and more personalized property recommendations to customers?

## Problem

One of the property companies in our business group requested a system to help their sales team recommend suitable properties to customers more efficiently.

Currently, the sales process is still handled manually, where sales staff need to review customer preferences such as location, budget, property size, and facilities, then compare them against available property listings. This process can be time-consuming and may result in less accurate recommendations.

To address this challenge, we were requested to develop a property matchmaking application that can automatically analyze customer criteria and generate a compatibility percentage score for each property. The goal is to help the sales team provide faster, more accurate, and more personalized property recommendations to customers.”

## Brainstorming Data

![alt text](brainstorm.svg)

## Options

### 1. Create a small MVP project and improve later

**Business Flow:**

1. Agent / Developer submits property listing
    - location
    - price
    - property size
    - facilities
    - photos
    - availability

2. Property stored in central database
    - System categorizes and indexes property data

3. Customer accesses platform
    - Register or start property search

4. Customer fills preference form
    - Budget range
    - Preferred location
    - Property type
    - Area size
    - Facilities needed
    - Other preferences

5. Matching engine processes customer criteria
    - Compare customer preferences with available properties
    - Calculate compatibility score

6. System generates property match results
    - Example:
      - Property A → 92% Match
      - Property B → 85% Match

7. Customer views recommended properties
    - Browse recommendations
    - Save favorites
    - Compare properties

8. Customer sends inquiry or requests viewing
    - Interested lead submitted to sales team

9. Sales team follows up customer
    - Consultation
    - Property viewing
    - Negotiation

10. Closing process
    - Customer closes transactions on platform to get special price

## Decision
Choose Option 1. Create a small MVP project and improve later

## Reasoning

Building an MVP allows the team to validate the core business process with real users before investing in advanced functionality. This approach enables faster delivery, earlier customer feedback, and reduces the risk of developing features that may not provide sufficient value.

**By focusing on the essential features first, the team can:**

- Deliver value to customers sooner.
- Validate business assumptions with real-world usage.
- Collect feedback to improve future iterations.
- Reduce development risk and unnecessary complexity.
- Prioritize future enhancements based on actual user needs rather than assumptions.

## Discussion History

### 11 March 2026

Conducted the initial meeting to understand the customer's business requirements, objectives, and overall project expectations.

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |

### 19 May 2026

Prepared and shared the initial project request proposal, outlining the proposed solution, business flow, and implementation approach for review.

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |


### 21 May 2026

Received feedback from Kartika on the proposed business flow:

- Introduce a special pricing mechanism for customers who complete the closing process through the platform.
- Remove the administrator approval step for listings to simplify and streamline the workflow.

| Participants | Roles |
| --- | --- | 
| Martien | Product Coordinator |
| Kartika | Customer |