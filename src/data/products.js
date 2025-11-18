// export const productCategories = [
//   { id: 'all', name: 'All Products' },
//   { id: 'motion-sensors', name: 'Motion Sensors' },
//   { id: 'sensor-led', name: 'Sensor Based LED Lights' },
//   { id: 'modular-tactile', name: 'Modular Tactile Switches' },
//   { id: 'retrofit-convertor', name: 'Retrofit Convertor Switch & Controllers' },
//   { id: 'premium-touch', name: 'Premium Modular Touch Switches' },
//   { id: 'touch-panels', name: 'Touch Panels' },
//   { id: 'accessories', name: 'Accessories' }
// ];

// export const products = [
//   // Motion Sensors (3 products)
//   {
//     id: 1,
//     name: " PIR Motion Sensor (PR-05B)",
//     category: "motion-sensors",
//     image: "/prod1.webp",
//     description: "Smart energy-saving switch that controls connected appliances on detection of motion within 12m range. Detects temperature changes through infrared sensor and activates control signal to switch on appliances.",
//     features: ["360° Detection Range", "Day-Night Motion Detection", "Easy Installation", "Compatible with appliances up to 500W", "Ceiling Mount"],
//     specifications: {
//       "Detection Distance": "12m (diameter)",
//       "Hold Time": "10sec-7min",
//       "Rated Power": "1200W (Incandescent)",
//       "Installation Height": "2.2-4m",
//       "IP Rating": "IP20",
//       "Warranty": "2 Years"
//     }
//   },
//   {
//     id: 2,
//     name: " PIR Motion Sensor (PR-46B)",
//     category: "motion-sensors",
//     image: "/prod2.webp",
//     description: "Smart energy-saving switch that controls connected appliances on detection of motion within 8m range. Features automatic day-night light detection and easy installation.",
//     features: ["8m Detection Range", "Day-Night Detection", "Easy Installation", "Compatible with appliances up to 1000W", "Surface Mount"],
//     specifications: {
//       "Detection Distance": "8m (diameter)",
//       "Hold Time": "10sec-30min",
//       "Rated Power": "2000W (Resistive Max)",
//       "Installation Height": "2.2-6m",
//       "IP Rating": "IP20",
//       "Warranty": "2 Years"
//     }
//   },
//   {
//     id: 3,
//     name: " Microwave Motion Sensor (MW-753)",
//     category: "motion-sensors",
//     image: "/prod3.webp",
//     description: "Smart energy-saving switch using microwave sensor technology. Detects moving objects cutting through microwave signals for reliable motion detection in various conditions.",
//     features: ["360° Detection", "Microwave Technology", "Temperature Resistant (-20°C to 55°C)", "Day-Night Detection", "Stable Performance"],
//     specifications: {
//       "Detection Distance": "8m (diameter)",
//       "Hold Time": "10sec-12min",
//       "Rated Load": "1200W (Resistive Max)",
//       "Installation Height": "1.5-3.5m",
//       "IP Rating": "IP20",
//       "Warranty": "2 Years"
//     }
//   },

//   // Sensor Based LED Lights (3 products)
//   {
//     id: 4,
//     name: " T5 Sensor LED Tubelight (18W)",
//     category: "sensor-led",
//     image: "/prod4.jpg",
//     description: "T5 LED Tubelight with inbuilt microwave motion sensor. Automatically dims when no movement detected and glows at full brightness when motion is detected.",
//     features: ["Motion Detection", "Auto Dim Mode (3.6W)", "Full Brightness (18W)", "80% Energy Savings", "Surface Mounted"],
//     specifications: {
//       "Wattage": "18W / 3.6W (Dim)",
//       "Light Output": "1980 lumen",
//       "Color Temperature": "6500K",
//       "Detection Range": "8m (diameter)",
//       "LED Lifetime": "35000+ hours",
//       "Warranty": "2 Years"
//     }
//   },
//   {
//     id: 5,
//     name: " Sensor LED Surface Mount Tulip (12W)",
//     category: "sensor-led",
//     image: "/prod5.webp",
//     description: "Tulip LED Surface light with inbuilt microwave motion sensor. Operates at 20% brightness in standby and full brightness when motion detected.",
//     features: ["Motion Activated", "Dim Mode (2.4W)", "Full Brightness (12W)", "80% Energy Savings", "Easy Installation"],
//     specifications: {
//       "Wattage": "12W / 2.4W (Dim)",
//       "Light Output": "1200 lumen",
//       "Color Temperature": "6500K",
//       "Detection Range": "8m (diameter)",
//       "LED Lifetime": "35000+ hours",
//       "Warranty": "2 Years"
//     }
//   },
//   {
//     id: 6,
//     name: " Sensor LED Surface Mount Tulip (18W)",
//     category: "sensor-led",
//     image: "/prod6.webp",
//     description: "Higher wattage Tulip LED Surface light with microwave motion sensor. Perfect for larger areas requiring more illumination.",
//     features: ["Motion Detection", "Dim Mode (3.6W)", "Full Brightness (18W)", "Large Area Coverage", "Surface Mounted"],
//     specifications: {
//       "Wattage": "18W / 3.6W (Dim)",
//       "Light Output": "1800 lumen",
//       "Color Temperature": "6500K",
//       "Detection Range": "8m (diameter)",
//       "LED Lifetime": "35000+ hours",
//       "Warranty": "2 Years"
//     }
//   },

//   // Modular Tactile Switches (3 products)
//   {
//     id: 7,
//     name: " Wi-Fi Smart Switch 16A 1 Channel",
//     category: "modular-tactile",
//     image: "/prod7.webp",
//     description: "High-load smart switch for controlling power-intensive appliances like AC, geyser, microwave. Features app control and voice assistant compatibility.",
//     features: ["16A High Load", "WiFi Connectivity", "Voice Control (Alexa/Google)", "Energy Monitoring", "Overload Protection"],
//     specifications: {
//       "Rated Current": "16A",
//       "Rated Voltage": "240VAC",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Control": "App + Voice + Manual",
//       "Fixing": "ROMA Type Switch Plate",
//       "Model": "GWF-KZ101"
//     }
//   },
//   {
//     id: 8,
//     name: " Wi-Fi Smart Switch 5A 2 Channel",
//     category: "modular-tactile",
//     image: "/prod8.webp",
//     description: "Dual channel smart switch for controlling two electrical points. Perfect for lights, fans, and moderate load appliances.",
//     features: ["2 Channel Control", "5A Per Channel", "WiFi Connectivity", "Voice Control", "Energy Management"],
//     specifications: {
//       "Rated Current": "5A per Gang",
//       "Rated Voltage": "240VAC",
//       "Channels": "2",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Control": "App + Voice + Manual",
//       "Model": "GWF-KS001-2"
//     }
//   },
//   {
//     id: 9,
//     name: " Wi-Fi Smart Fan Speed Regulator 120W",
//     category: "modular-tactile",
//     image: "/prod9.webp",
//     description: "Smart fan speed controller with 5-step speed adjustment. Features remote control and energy monitoring for optimal fan operation.",
//     features: ["5-Step Speed Control", "Remote Speed Control", "Energy Monitoring", "Voice Control", "Power Consumption Reduction"],
//     specifications: {
//       "Max Output Power": "150W @ 240VAC",
//       "Speed Steps": "5 + Off",
//       "Rated Voltage": "240VAC",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Control": "App + Voice + Manual",
//       "Model": "FI-01-150"
//     }
//   },

//   // Retrofit Convertor Switch & Controllers (5 products)
//   {
//     id: 10,
//     name: " Smart Relay Plug 10A",
//     category: "retrofit-convertor",
//     image: "/prod10.webp",
//     description: "Wi-Fi enabled smart plug suitable for TVs, set-top boxes, electric kettles, mobile chargers. Features energy monitoring and voice control.",
//     features: ["10A Load Capacity", "Energy Monitoring", "Voice Control", "Timer Automation", "Overload Protection"],
//     specifications: {
//       "Rated Current": "10A",
//       "Rated Voltage": "240VAC",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Control": "App + Voice + Manual",
//       "Fixing": "Portable Universal Socket",
//       "Model": "SP2-10-1"
//     }
//   },
//   {
//     id: 11,
//     name: "Wi-Fi Smart IR Blaster with 6A Smart Plug",
//     category: "retrofit-convertor",
//     image: "/prod11.webp",
//     description: "Universal remote controller for AC, TV, set-top box with integrated 10A smart plug. Control any IR-based appliance through mobile app.",
//     features: ["Universal IR Remote", "10A Smart Plug", "Multi-Brand Support", "Voice Control", "Energy Monitoring"],
//     specifications: {
//       "Rated Current": "10A",
//       "Remote Type": "Infrared IR",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Control": "App + Voice + Manual",
//       "Fixing": "Portable Universal Socket",
//       "Model": "SP2-10-1"
//     }
//   },
//   {
//     id: 12,
//     name: " Wi-Fi Smart IR Appliance Controller",
//     category: "retrofit-convertor",
//     image: "/prod12.webp",
//     description: "Smart infrared blaster for controlling AC, TV, set-top boxes, and fans. Wall-mount or tabletop installation with wide device compatibility.",
//     features: ["Wide Device Support", "Wall/Tabletop Mount", "Voice Control", "Energy Management", "Easy Installation"],
//     specifications: {
//       "Input Power": "5V/1A DC, Micro USB",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Operating Temp": "-10°C to +50°C",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Fitting": "Wall-mount/Tabletop",
//       "Model": "SI02-1-2"
//     }
//   },
//   {
//     id: 13,
//     name: " Wi-Fi Smart SOS Panic Button",
//     category: "retrofit-convertor",
//     image: "/prod13.webp",
//     description: "Emergency panic button for home security and personal safety. Sends SOS alerts via app, SMS, and local buzzer alarm.",
//     features: ["Emergency SOS Alert", "Local Buzzer Alarm", "SMS Notifications", "Battery Backup", "Continuous Alert"],
//     specifications: {
//       "Input Power": "5V/1A DC, USB C-type",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Operating Temp": "-10°C to +50°C",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Fitting": "Wall-mount",
//       "Model": "SOS1-1-1"
//     }
//   },
//   {
//     id: 14,
//     name: " Smart Wi-Fi Touch Panel Switch 3 Channel",
//     category: "retrofit-convertor",
//     image: "/prod14.webp",
//     description: "3-channel touch panel switch for controlling fans, lights, and appliances. Features touch-based control and voice assistant compatibility.",
//     features: ["3 Channel Control", "Touch Based Control", "Voice Control", "Timer Automation", "Easy Installation"],
//     specifications: {
//       "Channels": "3",
//       "Input Power": "5V/1A DC, USB C-type",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Operating Temp": "-10°C to +50°C",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Fitting": "2 Gang Switch Box"
//     }
//   },

//   // Premium Modular Touch Switches (7 products)
//   {
//     id: 15,
//     name: " Premium Touch Switch 16A Single Channel",
//     category: "premium-touch",
//     image: "/prod15.webp",
//     description: "Premium feather touch switch for high-load appliances like AC, geyser, microwave. Features toughened glass front plate and smart controls.",
//     features: ["Toughened Glass Panel", "16A High Load", "Feather Touch", "Energy Management", "Premium Design"],
//     specifications: {
//       "Output Power": "3500W per channel",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "Toughened Glass Front",
//       "Wireless": "Wi-Fi 2.4GHz",
//       "Model": "TS1-16-1"
//     }
//   },
//   {
//     id: 16,
//     name: " Premium Touch Switch 5A 2 Channel",
//     category: "premium-touch",
//     image: "/prod16.webp",
//     description: "Premium 2-channel touch switch for lights and appliances. Elegant toughened glass design with smart home integration.",
//     features: ["2 Channel Control", "Toughened Glass", "Premium Design", "Voice Control", "Energy Tracking"],
//     specifications: {
//       "Output Power": "1000W per channel",
//       "Channels": "2",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "Toughened Glass Front",
//       "Model": "TS2-10-1"
//     }
//   },
//   {
//     id: 17,
//     name: " Premium Touch Fan Speed Regulator",
//     category: "premium-touch",
//     image: "/prod17.webp",
//     description: "Premium touch fan speed controller with 4-step speed adjustment. Features elegant design and smart home connectivity.",
//     features: ["4-Step Speed Control", "Premium Touch Design", "Energy Efficient", "Voice Control", "Smart Scheduling"],
//     specifications: {
//       "Output Power": "100W per channel",
//       "Speed Steps": "4 + Off",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "Toughened Glass Front",
//       "Model": "TS4-05-2"
//     }
//   },
//   {
//     id: 18,
//     name: " Premium Touch Switch 5A 4 Channel",
//     category: "premium-touch",
//     image: "/prod18.webp",
//     description: "Premium 4-channel touch switch for comprehensive lighting and appliance control. Features elegant glass finish and smart controls.",
//     features: ["4 Channel Control", "Premium Glass Finish", "Individual Channel Control", "Voice Commands", "Energy Management"],
//     specifications: {
//       "Output Power": "500W per channel",
//       "Channels": "4",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "Toughened Glass Front",
//       "Model": "TS4-05-2"
//     }
//   },
//   {
//     id: 19,
//     name: " Premium Touch LED Dimmer Controller",
//     category: "premium-touch",
//     image: "/prod19.webp",
//     description: "Premium touch dimmer for dimmable LED lights. Features smooth dimming control through mobile app and voice commands.",
//     features: ["LED Dimming Control", "Smooth Touch Operation", "App Control", "Voice Dimming", "Premium Build"],
//     specifications: {
//       "Output Power": "150W per channel",
//       "Dimming": "Smooth LED Dimming",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "Toughened Glass Front",
//       "Model": "TD1-1501"
//     }
//   },
//   {
//     id: 20,
//     name: " Premium Touch Curtain Controller",
//     category: "premium-touch",
//     image: "/prod20.webp",
//     description: "Premium touch curtain controller for motorized curtains and blinds. Features 2-channel control with scheduling and voice commands.",
//     features: ["2-Channel Curtain Control", "Motorized Operation", "Schedule Control", "Voice Commands", "Premium Design"],
//     specifications: {
//       "Output Power": "175W per channel",
//       "Channels": "2 (Open/Close)",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "Toughened Glass Front",
//       "Model": "TC2-05-1"
//     }
//   },
//   {
//     id: 21,
//     name: " Premium Touch LED Dimmer 2 Channel",
//     category: "premium-touch",
//     image: "/prod21.webp",
//     description: "Premium 2-channel touch dimmer for LED lights. Features individual channel control with smooth dimming and smart scheduling.",
//     features: ["2-Channel Dimming", "Individual Control", "Smooth Operation", "Smart Scheduling", "Voice Control"],
//     specifications: {
//       "Max Output Power": "150W per channel",
//       "Channels": "2",
//       "Rated Voltage": "240VAC",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Housing": "FR Polycarbonate",
//       "Model": "TD2-1502"
//     }
//   },

//   // Touch Panels (2 products)
//   {
//     id: 22,
//     name: " Elixir Glass Touch Panel Switches",
//     category: "touch-panels",
//     image: "/prod22.webp",
//     description: "Sleek bezel-free glass touch panel with customizable switch combinations. Features light dimming, fan speed, curtain control, and appliance switching.",
//     features: ["Bezel-Free Design", "Customizable Combinations", "Light Dimming", "Fan Speed Control", "Curtain Operation"],
//     specifications: {
//       "Module Options": "2M/4M/6M/8M",
//       "Output Power": "1000W per channel",
//       "Housing": "Frameless Toughened Glass",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Colors": "White & Black",
//       "Wireless": "Wi-Fi 2.4GHz"
//     }
//   },
//   {
//     id: 23,
//     name: " Elite Touch Panel Switches",
//     category: "touch-panels",
//     image: "/prod23.webp",
//     description: "Elite bezel-free touch panel with acrylic front plate. Customizable for comprehensive home automation with elegant design.",
//     features: ["Bezel-Free Elite Design", "Acrylic Front Plate", "Comprehensive Control", "Customizable Layout", "Modern Aesthetics"],
//     specifications: {
//       "Module Options": "2M/4M/6M/8M/12M",
//       "Output Power": "1000W per channel",
//       "Housing": "Frameless Acrylic Front",
//       "Wi-Fi Range": "30m indoor, 45m outdoor",
//       "Colors": "White & Black",
//       "Wireless": "Wi-Fi 2.4GHz"
//     }
//   },

//   // Accessories (2 products)
//   {
//     id: 24,
//     name: " Premium Glass Finish Switch Plates",
//     category: "accessories",
//     image: "/prod24.jpg",
//     description: "Premium glass-finish switch plates designed to complement modern interiors. Compatible with metal gang boxes and customizable combinations.",
//     features: ["Premium Glass Finish", "Modern Design", "High-Quality Acrylic", "Customizable Combinations", "Elegant Touch"],
//     specifications: {
//       "Module Options": "2M/4M/6M/8M/12M",
//       "Front Plate": "2mm Acrylic",
//       "Back Plate": "Polycarbonate",
//       "Colors": "Black/White",
//       "Compatibility": "Metal Gang Boxes",
//       "Durability": "High-Quality Materials"
//     }
//   },
//   {
//     id: 25,
//     name: " Premium Switch Plate Accessories",
//     category: "accessories",
//     image: "/prod25.jpg",
//     description: "Complete range of premium switch plate accessories for seamless integration with smart devices.",
//     features: ["Seamless Integration", "Premium Materials", "Multiple Configurations", "Easy Installation", "Modern Aesthetics"],
//     specifications: {
//       "Module Options": "2M/4M/6M/8M/12M",
//       "Material": "High-Quality Acrylic",
//       "Back Support": "Polycarbonate",
//       "Color Options": "Black/White",
//       "Compatibility": "EZ HOME Devices",
//       "Installation": "Standard Gang Box"
//     }
//   }
// ];





export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'security-sensors', name: 'Security Sensors' },
  { id: 'environmental-sensors', name: 'Environmental Sensors' },
  { id: 'smart-controls', name: 'Smart Controls' },
  { id: 'smart-lighting', name: 'Smart Lighting' },
  { id: 'smart-plugs', name: 'Smart Plugs & Relays' },
  { id: 'emergency-devices', name: 'Emergency Devices' }
];

export const products = [
  // Security Sensors (3 products)
  {
    id: 1,
    name: "Door Window Sensor",
    category: "security-sensors",
    image: "/jio-door-sensor.png",
    description: "Smart door/window contact sensor that sends instant notifications to your mobile device when doors or windows are opened or closed. Perfect for home security monitoring.",
    features: [
      "Open/Close Detection",
      "Instant Mobile Notifications",
      "Easy Installation",
      "Low Battery Alert",
      "Wireless Connectivity"
    ],
    specifications: {
      "Sensor Type": "Magnetic Contact Sensor",
      "Wireless": "Zigbee/Wi-Fi",
      "Battery Life": "Up to 2 years",
      "Detection Range": "Up to 2cm gap",
      "Operating Temperature": "-10°C to 50°C",
      "Warranty": "1 Year"
    }
  },
  {
    id: 2,
    name: "Motion Sensor",
    category: "security-sensors",
    image: "/jio-motion-sensor.png",
    description: "Passive infrared (PIR) motion sensor that detects movement and triggers customizable alerts. Ideal for security monitoring and automation scenarios.",
    features: [
      "PIR Motion Detection",
      "Customizable Alerts",
      "Wide Detection Angle",
      "Battery Powered",
      "Smart Home Integration"
    ],
    specifications: {
      "Sensor Type": "Passive Infrared (PIR)",
      "Detection Range": "Up to 8 meters",
      "Detection Angle": "110° horizontal",
      "Wireless": "Zigbee/Wi-Fi",
      "Battery Life": "Up to 2 years",
      "Warranty": "1 Year"
    }
  },
  {
    id: 3,
    name: "Smoke Sensor",
    category: "security-sensors",
    image: "/jio-smoke-sensor.png",
    backgroundColor: "#f5f5f5",
    description: "Photoelectric smoke detector that provides early warning of fire hazards. Beeps locally and sends remote alerts to your mobile device when smoke is detected.",
    features: [
      "Photoelectric Detection",
      "Local Alarm Beep",
      "Remote Mobile Alerts",
      "Self-Testing Function",
      "Low Battery Warning"
    ],
    specifications: {
      "Detection Type": "Photoelectric",
      "Alarm Sound": "85dB at 3 meters",
      "Wireless": "Zigbee/Wi-Fi",
      "Battery Life": "Up to 3 years",
      "Operating Temperature": "0°C to 50°C",
      "Warranty": "1 Year"
    }
  },
  {
    id: 15,
    name: "Smart Biometric Door Lock",
    category: "security-sensors",
    image: "/jio-door-sensor.png",
    description: "Advanced biometric door lock with fingerprint recognition, password entry, and RFID card access. Features auto-locking, remote monitoring, and multiple unlock methods for maximum security and convenience.",
    features: [
      "Fingerprint Recognition (100+ fingerprints)",
      "Password & PIN Access",
      "RFID Card Support",
      "Remote Lock/Unlock via App",
      "Auto-Lock Function",
      "Anti-Peep Password",
      "Low Battery Alert",
      "Tamper Alarm"
    ],
    specifications: {
      "Lock Type": "Biometric Fingerprint + Password + RFID",
      "Fingerprint Capacity": "Up to 100 fingerprints",
      "Password Capacity": "Up to 50 passwords",
      "Card Capacity": "Up to 100 RFID cards",
      "Wireless": "Wi-Fi + Bluetooth",
      "Battery Life": "8-12 months (8 AA batteries)",
      "Emergency Power": "USB power port",
      "Material": "Zinc Alloy + Stainless Steel",
      "Operating Temperature": "-20°C to 60°C",
      "Unlock Methods": "Fingerprint, Password, Card, App, Mechanical Key",
      "Warranty": "2 Years"
    }
  },

  // Environmental Sensors (3 products)
  {
    id: 4,
    name: "Gas Leak Sensor",
    category: "environmental-sensors",
    image: "/jio-gas-leak-sensor.png",
    description: "Advanced gas leak detector that triggers loud sound alerts and sends instant app notifications when gas leakage is detected. Essential for kitchen and home safety.",
    features: [
      "LPG & Natural Gas Detection",
      "Loud Sound Alert",
      "App Notifications",
      "Quick Response Time",
      "Wall Mountable"
    ],
    specifications: {
      "Gas Types": "LPG, Natural Gas, Coal Gas",
      "Alarm Sound": "85dB",
      "Response Time": "< 30 seconds",
      "Power Supply": "AC 220V",
      "Wireless": "Zigbee/Wi-Fi",
      "Warranty": "1 Year"
    }
  },
  {
    id: 5,
    name: "Water Leak Sensor",
    category: "environmental-sensors",
    image: "/jio-waterleak-sensor.png",
    description: "Detects presence of water and triggers instant notifications and alerts. Perfect for bathrooms, kitchens, basements, and areas prone to water leakage.",
    features: [
      "Water Presence Detection",
      "Instant Notifications",
      "Compact Design",
      "Battery Powered",
      "Multiple Placement Options"
    ],
    specifications: {
      "Detection Type": "Water Contact Sensor",
      "Response Time": "< 5 seconds",
      "Wireless": "Zigbee/Wi-Fi",
      "Battery Life": "Up to 2 years",
      "Operating Temperature": "0°C to 50°C",
      "Warranty": "1 Year"
    }
  },
  {
    id: 6,
    name: "Temperature & Humidity Sensor",
    category: "environmental-sensors",
    image: "/jio-temp-humidity-sensor.png",
    description: "Monitors temperature and humidity levels in real-time. Sends notifications to mobile device and can trigger other smart devices based on set thresholds.",
    features: [
      "Temperature Monitoring",
      "Humidity Tracking",
      "Real-time Notifications",
      "Automation Triggers",
      "Historical Data Logging"
    ],
    specifications: {
      "Temperature Range": "-10°C to 60°C",
      "Humidity Range": "0% to 100% RH",
      "Accuracy": "±0.5°C, ±3% RH",
      "Wireless": "Zigbee/Wi-Fi",
      "Battery Life": "Up to 2 years",
      "Warranty": "1 Year"
    }
  },

  // Smart Controls (3 products)
  {
    id: 7,
    name: "Smart Dimmer",
    category: "smart-controls",
    image: "/jio-smart-dimmer.png",
    description: "Smart dimmer switch for controlling brightness of dimmable lights. Features power consumption monitoring and remote control via mobile app.",
    features: [
      "Brightness Control",
      "Power Monitoring",
      "Voice Control Compatible",
      "Schedule Automation",
      "Energy Tracking"
    ],
    specifications: {
      "Max Load": "150W LED",
      "Dimming Range": "1% to 100%",
      "Rated Voltage": "220-240V AC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Control": "App + Voice + Manual",
      "Warranty": "1 Year"
    }
  },
  {
    id: 8,
    name: "Smart Relay",
    category: "smart-controls",
    image: "/jio-smart-relay.png",
    description: "In-wall smart relay for controlling existing switches. Monitor power consumption and control lights/appliances remotely through mobile app.",
    features: [
      "In-wall Installation",
      "Power Monitoring",
      "Remote Control",
      "Voice Commands",
      "Existing Switch Compatible"
    ],
    specifications: {
      "Max Load": "10A (2200W)",
      "Rated Voltage": "220-240V AC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Dimensions": "Fits standard switch box",
      "Control": "App + Voice + Manual",
      "Warranty": "1 Year"
    }
  },
  {
    id: 9,
    name: "IR Blaster",
    category: "smart-controls",
    image: "/jio-ir-remote-controller.png",
    description: "Universal infrared controller for all your IR appliances. Control AC, TV, set-top box, and other IR devices using a single smart controller.",
    features: [
      "Universal IR Control",
      "Multi-Device Support",
      "Voice Control",
      "Schedule Automation",
      "Easy Setup"
    ],
    specifications: {
      "Control Range": "Up to 10 meters",
      "Compatible Devices": "AC, TV, STB, DVD, etc.",
      "Wireless": "Wi-Fi 2.4GHz",
      "Power Supply": "USB 5V/1A",
      "IR Database": "5000+ devices",
      "Warranty": "1 Year"
    }
  },

  // Smart Lighting (1 product)
  {
    id: 10,
    name: "Smart Bulb",
    category: "smart-lighting",
    image: "/jio-smart-bulb.png",
    description: "RGB smart bulb with color changing and dimming functions. Set mood lighting, create schedules, and control via voice commands or mobile app.",
    features: [
      "16 Million Colors",
      "Dimming Function",
      "Voice Control",
      "Schedule & Scenes",
      "Energy Efficient"
    ],
    specifications: {
      "Wattage": "9W (60W equivalent)",
      "Brightness": "800 lumens",
      "Color Temperature": "2700K-6500K",
      "Base Type": "B22/E27",
      "Wireless": "Wi-Fi 2.4GHz",
      "Warranty": "1 Year"
    }
  },

  // Smart Plugs & Relays (2 products)
  {
    id: 11,
    name: "Smart Plug 10A",
    category: "smart-plugs",
    image: "/jio-smart-plug.png",
    description: "Smart plug for controlling appliances up to 10A current rating. Features power monitoring, scheduling, and voice control compatibility.",
    features: [
      "10A Load Capacity",
      "Power Monitoring",
      "Voice Control",
      "Timer & Schedule",
      "Compact Design"
    ],
    specifications: {
      "Max Current": "10A (2200W)",
      "Rated Voltage": "220-240V AC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Socket Type": "Universal 3-pin",
      "Control": "App + Voice + Manual",
      "Warranty": "1 Year"
    }
  },
  {
    id: 12,
    name: "Smart Plug 16A",
    category: "smart-plugs",
    image: "/jio-smart-plug.png",
    description: "Heavy-duty smart plug for high-power appliances like AC, geyser, and microwave. Supports up to 16A current with power consumption monitoring.",
    features: [
      "16A Heavy Duty",
      "High Power Support",
      "Energy Monitoring",
      "Overload Protection",
      "Voice Control"
    ],
    specifications: {
      "Max Current": "16A (3500W)",
      "Rated Voltage": "220-240V AC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Socket Type": "Universal 3-pin",
      "Control": "App + Voice + Manual",
      "Warranty": "1 Year"
    }
  },

  // Emergency Devices (2 products)
  {
    id: 13,
    name: "Smart Siren",
    category: "emergency-devices",
    image: "/jio-smart-siren.png",
    description: "Smart siren that triggers loud alarm based on set preferences when paired with other smart devices. Perfect for security and emergency alerts.",
    features: [
      "Loud Alarm (100dB)",
      "Smart Device Integration",
      "Customizable Triggers",
      "Remote Activation",
      "Battery Backup"
    ],
    specifications: {
      "Sound Level": "100dB at 1 meter",
      "Power Supply": "AC 220V + Battery Backup",
      "Wireless": "Zigbee/Wi-Fi",
      "Alarm Duration": "Customizable (1-60 min)",
      "Operating Temperature": "-10°C to 50°C",
      "Warranty": "1 Year"
    }
  },
  {
    id: 14,
    name: "Panic Button",
    category: "emergency-devices",
    image: "/jio-panic-button.png",
    description: "One-touch emergency button that triggers instant alerts with a simple press. Sends notifications to family members and can activate siren or other devices.",
    features: [
      "One-Touch Activation",
      "Instant Alerts",
      "Multiple Recipients",
      "Portable Design",
      "Battery Powered"
    ],
    specifications: {
      "Button Type": "Single Press Emergency",
      "Wireless": "Zigbee/Wi-Fi",
      "Battery Life": "Up to 2 years",
      "Alert Types": "App, SMS, Siren",
      "Mounting": "Wall/Portable",
      "Warranty": "1 Year"
    }
  }
];
