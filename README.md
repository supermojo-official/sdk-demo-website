# Supermojo Partner Integration

This repo provides a fully functional website to serve as an example for partners to use when integrating with Supermojo APIs. This site is based on the [Supermojo Partner Docs](https://docs.supermojo.com/)

## Prerequisites

Contact Supermojo to register and get the following information

- ClientId
- TokenAddress

## Target Environment

Testing of the SDK will utilize the SM Partner Integration environment and is subject to outages and database resets. If there are issues with the SDK, please wait up to 10 minutes and try again. If your problems persist, contact SM support at [Support](mailto:support@supermojo.com)

## Set Environment Variables

Rename `.env.sample` to `.env`, and set the `ClientId` and `TokenAddress` received from Supermojo.

```
REACT_APP_CLINENT_ID=00056f70-3575-4e3e-ae0a-a4e9b2a4c9f0
REACT_APP_TOKEN_ADDRESS=rMnt7GF5zBwAvvG7AaPWPMFi2dRKHLhurw
```

### Test Payments

The SM Partner Integration environment uses test payments and test net block chains. Use the following for test payments

- Credit Card Number: 4007400000000007 (Other fields can have any value)
