import "dotenv/config.js"
import "../../config/dataBase.js"
import Product from "../Product.js"

let products = [
    { name: "Laptop Pro", brand: "TechMaster", type: "Electronics", price: 1200 },
    { name: "Smartphone X", brand: "Mobitech", type: "Electronics", price: 899 },
    { name: "4K Television", brand: "VisionPlus", type: "Electronics", price: 450 },
    { name: "Running Shoes", brand: "Sportify", type: "Apparel", price: 65 },
    { name: "Bluetooth Headphones", brand: "SoundWave", type: "Electronics", price: 150 },
    { name: "Electric Kettle", brand: "HomePro", type: "Kitchen", price: 30 },
    { name: "Blender", brand: "KitchenAid", type: "Kitchen", price: 55 },
    { name: "Gaming Chair", brand: "ComfySit", type: "Furniture", price: 200 },
    { name: "Desk Lamp", brand: "BrightLite", type: "Home Decor", price: 25 },
    { name: "Backpack", brand: "PackMate", type: "Accessories", price: 40 },
    { name: "Office Desk", brand: "FurnitureCo", type: "Furniture", price: 300 },
    { name: "Wireless Mouse", brand: "TechMaster", type: "Electronics", price: 25 },
    { name: "Tablet S10", brand: "Mobitech", type: "Electronics", price: 450 },
    { name: "Air Purifier", brand: "PureAir", type: "Home Appliances", price: 120 },
    { name: "Espresso Machine", brand: "BrewMaster", type: "Kitchen", price: 150 },
    { name: "Digital Camera", brand: "SnapPro", type: "Electronics", price: 550 },
    { name: "Treadmill", brand: "FitTrack", type: "Fitness", price: 900 },
    { name: "Sunglasses", brand: "SunGuard", type: "Accessories", price: 60 },
    { name: "Leather Wallet", brand: "ClassicHold", type: "Accessories", price: 30 },
    { name: "Mountain Bike", brand: "TrailBlazer", type: "Sports", price: 450 },
    { name: "Yoga Mat", brand: "FlexyFit", type: "Fitness", price: 20 },
    { name: "Stainless Steel Bottle", brand: "HydraFresh", type: "Kitchen", price: 18 },
    { name: "Camping Tent", brand: "OutdoorPro", type: "Outdoor", price: 120 },
    { name: "Vacuum Cleaner", brand: "DustFree", type: "Home Appliances", price: 80 },
    { name: "Electric Scooter", brand: "UrbanMove", type: "Transportation", price: 250 },
    { name: "Pressure Cooker", brand: "CookMate", type: "Kitchen", price: 45 },
    { name: "Laptop Stand", brand: "ErgoLift", type: "Office", price: 35 },
    { name: "Printer", brand: "PrintWorks", type: "Office", price: 120 },
    { name: "Smartwatch", brand: "TimePro", type: "Electronics", price: 180 },
    { name: "Winter Jacket", brand: "WarmWear", type: "Apparel", price: 90 },
    { name: "Portable Speaker", brand: "SoundWave", type: "Electronics", price: 75 },
    { name: "Sleeping Bag", brand: "CampWell", type: "Outdoor", price: 40 },
    { name: "Microwave Oven", brand: "QuickHeat", type: "Kitchen", price: 100 },
    { name: "Notebook Set", brand: "WriteOn", type: "Office", price: 10 },
    { name: "Electric Toothbrush", brand: "SmileCare", type: "Personal Care", price: 30 },
    { name: "Hair Dryer", brand: "StyleEase", type: "Personal Care", price: 25 },
    { name: "Sofa", brand: "ComfyHome", type: "Furniture", price: 500 },
    { name: "Alarm Clock", brand: "TimeKeeper", type: "Home Decor", price: 15 },
    { name: "Cookware Set", brand: "ChefMate", type: "Kitchen", price: 70 },
    { name: "Cordless Drill", brand: "PowerTool", type: "Tools", price: 45 },
    { name: "Water Purifier", brand: "PureLife", type: "Home Appliances", price: 150 },
    { name: "Bean Bag", brand: "ComfySit", type: "Furniture", price: 80 },
    { name: "Wireless Earbuds", brand: "SoundWave", type: "Electronics", price: 120 },
    { name: "Wristwatch", brand: "TimeMaster", type: "Accessories", price: 200 },
    { name: "Adjustable Dumbbells", brand: "FitTrack", type: "Fitness", price: 300 },
    { name: "Grill Machine", brand: "BBQMaster", type: "Kitchen", price: 90 },
    { name: "Floor Lamp", brand: "BrightLite", type: "Home Decor", price: 50 },
    { name: "Suitcase", brand: "TravelPro", type: "Accessories", price: 100 },
    { name: "Patio Furniture Set", brand: "OutdoorComfort", type: "Furniture", price: 700 },
    { name: "Keyboard", brand: "TechMaster", type: "Electronics", price: 30 },
    { name: "Electric Fan", brand: "CoolBreeze", type: "Home Appliances", price: 40 },
    { name: "Body Lotion", brand: "PureSkin", type: "Personal Care", price: 15 },
    { name: "Face Mask Pack", brand: "SkinGlow", type: "Personal Care", price: 12 },
    { name: "Children's Bicycle", brand: "TinyRider", type: "Sports", price: 80 },
    { name: "Tablet Stand", brand: "FlexyHold", type: "Electronics", price: 20 },
    { name: "Glassware Set", brand: "DrinkFine", type: "Kitchen", price: 25 },
    { name: "Oil Diffuser", brand: "AromaEase", type: "Home Decor", price: 35 },
    { name: "Baby Stroller", brand: "BabyEase", type: "Baby Care", price: 120 },
    { name: "Notebook PC", brand: "TechMaster", type: "Electronics", price: 1100 },
    { name: "Action Camera", brand: "AdventureCam", type: "Electronics", price: 250 },
    { name: "Chopping Board Set", brand: "ChefMate", type: "Kitchen", price: 20 },
    { name: "Office Chair", brand: "FurnitureCo", type: "Furniture", price: 150 },
    { name: "Electric Guitar", brand: "SoundWave", type: "Music", price: 200 },
    { name: "Blender", brand: "SmoothieKing", type: "Kitchen", price: 50 },
    { name: "Luggage Set", brand: "PackMate", type: "Accessories", price: 180 },
    { name: "Gaming Console", brand: "PlayMaster", type: "Electronics", price: 300 },
    { name: "Leather Belt", brand: "ClassicHold", type: "Accessories", price: 20 },
    { name: "Portable Projector", brand: "VisionLite", type: "Electronics", price: 270 },
    { name: "High-Performance Laptop", brand: "PowerTech", type: "Electronics", price: 1500 },
    { name: "Electric Griddle", brand: "CookMate", type: "Kitchen", price: 55 },
    { name: "Desk Organizer", brand: "OfficePro", type: "Office", price: 18 },
    { name: "Foot Massager", brand: "RelaxWell", type: "Personal Care", price: 120 },
    { name: "Picnic Blanket", brand: "OutdoorPro", type: "Outdoor", price: 25 },
    { name: "Dishwasher", brand: "CleanPro", type: "Home Appliances", price: 300 },
    { name: "Wine Cooler", brand: "ChillMaster", type: "Home Appliances", price: 100 },
    { name: "Garden Tool Set", brand: "GreenThumb", type: "Gardening", price: 40 },
    { name: "Photo Frame Set", brand: "DecorEase", type: "Home Decor", price: 30 },
    { name: "Thermos Flask", brand: "HydraFresh", type: "Kitchen", price: 25 },
    { name: "Vacuum Insulated Mug", brand: "DrinkMate", type: "Kitchen", price: 15 },
    { name: "Electric Toothbrush Pro", brand: "SmileCare", type: "Personal Care", price: 45 },
    { name: "Ceramic Heater", brand: "WarmZone", type: "Home Appliances", price: 90 },
    { name: "Hiking Boots", brand: "MountainFit", type: "Outdoor", price: 85 },
    { name: "Smart Thermostat", brand: "EcoTemp", type: "Home Appliances", price: 130 },
    { name: "Digital Scale", brand: "HealthPro", type: "Personal Care", price: 25 },
    { name: "Dog Bed", brand: "PetComfort", type: "Pet Supplies", price: 50 },
    { name: "Wireless Charger", brand: "ChargeMate", type: "Electronics", price: 35 },
    { name: "Bluetooth Speaker Mini", brand: "SoundBoost", type: "Electronics", price: 40 },
    { name: "Kitchen Knife Set", brand: "ChefSharp", type: "Kitchen", price: 75 },
    { name: "Umbrella", brand: "RainShield", type: "Accessories", price: 20 },
    { name: "Smart Light Bulb", brand: "BrightHome", type: "Home Decor", price: 15 },
    { name: "Massage Gun", brand: "MuscleEase", type: "Fitness", price: 110 },
    { name: "Portable Blender", brand: "JuiceIt", type: "Kitchen", price: 30 },
    { name: "Memory Foam Pillow", brand: "SleepWell", type: "Home Decor", price: 40 },
    { name: "Fitness Tracker", brand: "StepSmart", type: "Fitness", price: 60 },
    { name: "Electric Wine Opener", brand: "CorkMaster", type: "Kitchen", price: 25 },
    { name: "Desk Organizer Set", brand: "OfficeNeat", type: "Office", price: 28 },
    { name: "Indoor Plant Set", brand: "GreenThumb", type: "Home Decor", price: 55 },
    { name: "Fragrance Diffuser", brand: "AromaGlow", type: "Home Decor", price: 20 },
    { name: "Kids Tablet", brand: "TechForKids", type: "Electronics", price: 100 },
    { name: "Highlighter Set", brand: "ColorBright", type: "Office", price: 10 },
    { name: "Reusable Grocery Bags", brand: "EcoBag", type: "Accessories", price: 15 },
    { name: "Adjustable Laptop Stand", brand: "FlexDesk", type: "Office", price: 25 },
    { name: "Rechargeable Flashlight", brand: "BrightLite", type: "Outdoor", price: 18 },
    { name: "Electric Nail File", brand: "GlamCare", type: "Personal Care", price: 20 },
    { name: "Camping Hammock", brand: "OutdoorRelax", type: "Outdoor", price: 45 },
    { name: "All-Purpose Cleaner", brand: "CleanEase", type: "Home Appliances", price: 8 },
    { name: "Weighted Blanket", brand: "CozySleep", type: "Home Decor", price: 70 }
  
    ]
 Product.insertMany(products)
 
      
      