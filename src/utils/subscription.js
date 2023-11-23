const subscriptions = [
  {
    title: "Normal User",
    price: "Free",
    features: ["Create 1 Event per month", "Access to Basic Events", "Limited Customer Support"],
    product_id: "prod_BasicUserProductID",
    recommend:false
  },
  {
    title: "Platinum User",
    price: "$99/month",
    features: [
      "Create Unlimited Events",
      "Access to VIP Events",
      "24/7 Premium Customer Support",
      "Exclusive Event Analytics",
    ],
    product_id: "prod_PlatinumUserProductID",
    recommend:true
  },
  {
    title: "Gold User",
    price: "$49/month",
    features: [
      "Create 3 Events per month",
      "Access to Premium Events",
      "Priority Customer Support",
    ],
    product_id: "prod_GoldUserProductID",
    recommend: false
  },
  
];

export { subscriptions };