# Matchmaking

The Matchmaking module helps connect customers with the most suitable properties based on their preferences and eligibility. Customers provide their desired location, budget, financing options, and other criteria, while the system evaluates available properties and delivers personalized recommendations.

## Data Flow

The matchmaking process compares customer preferences with property information to identify properties that best match the customer's requirements.

### 1. Customer Submits Preferences

The customer completes the preference form by providing information such as:

- Location
- Budget
- Buying problems
- Promos needed

The submitted information is stored in the `customer_preferences` collection.

### 2. Property Data

Each property in the `properties` collection contains information that can be used for matchmaking, including:

- Location
- Price
- Land Titles
- Facilities
- Promos

The values for `land titles`, `facilities`, `problems`, and `promos` come from the corresponding master data.

### 3. Compare Preferences with Properties

The system compares the customer's preferences with each property's information

| Properties | Customer Preferences |
| --- | --- |
| location | location |
| price | budget |

The property matches the customer's selected `location` and `budget`. 

The properties info like `land titles`, `facilities`, `problems`, and `promos` are not used as the primary property matching criteria. The agent can use this information to:

- Understand the customer's requirements.
- Discuss suitable property options.
- Address the customer's buying problems.
- Explain relevant facilities and land titles.
- Offer suitable promotions.
- Support the negotiation process with the customer.

## Customer Flow

<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;">

![alt text](https://property-matchmaking-docs.r2.lab.biz.id/adr/002/brainstorm-20072026.webp)

  </div>
</ClientOnly>

- 1. **Location.**
Tell us where you would like to find your new home.

- 2. **Home Budget.**
Let us know your budget and how you plan to pay for your home.

- 3. **Buyin Problems.**
Share any challenges or concerns you may have when buying a home.

- 4. **Promotion Needs.**
Tell us what kind of promotions or special offers you are looking for.

- 5. **Contact Info.**
Provide your name and WhatsApp number so we can send you the recommendations.

- 6. **Get Property Recommendations.**
  - 6.1. **Contact Kawan Hunian via WhatsApp.**
Send us a WhatsApp message to request your property recommendations.
  - 6.2. **Receive Your Recommendations.**
Kawan Hunian will send you a link with properties that match your preferences.

## Features

| Feature | Description |
| ------- | ----------- |
| [Send Customer Preferences](/web/matchmaking/send-customer-preferences/) | This feature allows customers to submit their property preferences, including their preferred location, budget, financing options, and contact information. |
| [Receive Property Recommendations](/web/matchmaking/receive-property-recommendations/) | The user can access the link to view a personalized list of recommended properties that match their preferences and requirements. |