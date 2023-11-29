const subscriptions = [
  {
    title: "Normal",
    price: "Free",
    features: ["Create 1 Event per month", "Access to Basic Events", "Limited Customer Support"],
    product_id: "0",
    recommend: false,
  },
  {
    title: "Platinum",
    price: "$99/month",
    features: [
      "Create Unlimited Events",
      "Access to VIP Events",
      "24/7 Premium Customer Support",
      "Exclusive Event Analytics",
    ],
    product_id: "1",
    recommend: true,
  },
  {
    title: "Gold",
    price: "$49/month",
    features: [
      "Create 3 Events per month",
      "Access to Premium Events",
      "Priority Customer Support",
    ],
    product_id: "2",
    recommend: true,
  },
];

export { subscriptions };
