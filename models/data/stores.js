import "dotenv/config.js"
import "../../config/dataBase.js";
import Store from "../Store.js";



let stores = [
    
        {
          name: "Tech World",
          address: "123 Technology Ave, San Francisco, CA",
          phone: 4151234567
        },
        {
          name: "Book Haven",
          address: "456 Library Lane, New York, NY",
          phone: 2125556789
        },
        {
          name: "Gourmet Delights",
          address: "789 Culinary Road, Austin, TX",
          phone: 5123334444
        },
        {
          name: "Fashion Hub",
          address: "101 Trendy Blvd, Miami, FL",
          phone: 3052223333
        },
        {
          name: "Pet Paradise",
          address: "202 Pet Street, Seattle, WA",
          phone: 2061112222
        }
      ];
      
Store.insertMany(stores)
      
