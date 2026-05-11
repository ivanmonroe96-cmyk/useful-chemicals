const merchantCountryCodes = [
  'US', 'DE', 'GB', 'FR', 'ES', 'IT', 'NL', 'PL', 'CZ', 'RO', 'TR', 'AE', 'SA', 'CN', 'KR', 'ID', 'VN', 'BD', 'BR', 'TH',
];

export function getMerchantReturnPolicy(policyUrl: string) {
  return {
    '@type': 'MerchantReturnPolicy',
    name: 'Industrial chemical return policy',
    url: policyUrl,
    applicableCountry: merchantCountryCodes,
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    returnPolicySeasonalOverride: {
      '@type': 'MerchantReturnPolicySeasonalOverride',
      name: 'Damaged or incorrect shipment review',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      startDate: '2026-01-01',
      endDate: '2026-12-31',
    },
  };
}

export function getMerchantShippingDetails(shippingUrl: string) {
  return {
    '@type': 'OfferShippingDetails',
    name: 'Regulated international chemical shipping',
    shippingSettingsLink: shippingUrl,
    shippingRate: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    shippingDestination: merchantCountryCodes.map((countryCode) => ({
      '@type': 'DefinedRegion',
      addressCountry: countryCode,
    })),
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 3,
        unitCode: 'DAY',
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 3,
        maxValue: 15,
        unitCode: 'DAY',
      },
    },
  };
}

export function getQuoteBasedOffer(offerUrl: string, policyUrl: string, shippingUrl: string) {
  return {
    '@type': 'Offer',
    url: offerUrl,
    price: '0',
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    businessFunction: 'http://purl.org/goodrelations/v1#Sell',
    seller: {
      '@type': 'Organization',
      name: 'UE Chemicals',
      url: 'https://useful-chemicals.com',
      email: 'info@useful-chemicals.com',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: 0,
      priceCurrency: 'USD',
      description: 'Quote-based B2B pricing. Final product and freight pricing is provided after buyer qualification, quantity review, and destination compliance checks.',
    },
    hasMerchantReturnPolicy: getMerchantReturnPolicy(policyUrl),
    shippingDetails: getMerchantShippingDetails(shippingUrl),
  };
}