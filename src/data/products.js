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
//   // Motion Sensors (4 products)
//   {
//     id: 1,
//     name: "PIR Motion Sensor - Indoor",
//     category: "motion-sensors",
//     image: "/prod1.webp",
//     description: "Advanced PIR motion sensor for indoor use with adjustable sensitivity and timer settings.",
//     features: ["120° Detection Angle", "Adjustable Timer", "LED Indicator", "Easy Installation", "Energy Efficient"],
//     specifications: {
//       "Detection Range": "8 meters",
//       "Power Supply": "12V DC",
//       "Operating Temperature": "-10°C to +50°C",
//       "Mounting": "Wall/Ceiling"
//     }
//   },
//   {
//     id: 2,
//     name: "PIR Motion Sensor - Outdoor",
//     category: "motion-sensors",
//     image: "/prod2.webp",
//     description: "Weather-resistant outdoor PIR motion sensor with enhanced detection capabilities.",
//     features: ["IP65 Rated", "Pet Immunity", "Dual Technology", "Anti-Masking", "Long Range"],
//     specifications: {
//       "Detection Range": "12 meters",
//       "Power Supply": "12V DC",
//       "Weather Rating": "IP65",
//       "Pet Immunity": "Up to 25kg"
//     }
//   },
//   {
//     id: 3,
//     name: "Microwave Motion Sensor",
//     category: "motion-sensors",
//     image: "/prod3.webp",
//     description: "High-precision microwave motion sensor for commercial and residential applications.",
//     features: ["Through Wall Detection", "No False Alarms", "Adjustable Sensitivity", "Compact Design", "Long Life"],
//     specifications: {
//       "Detection Range": "15 meters",
//       "Frequency": "5.8 GHz",
//       "Power Consumption": "< 50mA",
//       "Response Time": "< 2 seconds"
//     }
//   },
//   {
//     id: 4,
//     name: "Smart Motion Sensor Hub",
//     category: "motion-sensors",
//     image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
//     description: "WiFi-enabled smart motion sensor with app control and automation features.",
//     features: ["WiFi Connectivity", "App Control", "Scene Integration", "Battery Backup", "Smart Notifications"],
//     specifications: {
//       "Connectivity": "WiFi 2.4GHz",
//       "Battery Life": "2 years",
//       "App": "Smart Home App",
//       "Range": "10 meters"
//     }
//   },

//   // Sensor Based LED Lights (4 products)
//   {
//     id: 5,
//     name: "Motion Sensor LED Bulb 9W",
//     category: "sensor-led",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     description: "Energy-efficient LED bulb with built-in motion sensor for automatic on/off operation.",
//     features: ["Auto On/Off", "Motion Detection", "Energy Saving", "Long Life", "Easy Installation"],
//     specifications: {
//       "Wattage": "9W",
//       "Lumens": "810 lm",
//       "Color Temperature": "6500K",
//       "Detection Range": "5 meters"
//     }
//   },
//   {
//     id: 6,
//     name: "Sensor LED Strip Light",
//     category: "sensor-led",
//     image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
//     description: "Flexible LED strip with motion sensor, perfect for under-cabinet and accent lighting.",
//     features: ["Motion Activated", "Flexible Design", "Adhesive Backing", "Dimmable", "USB Powered"],
//     specifications: {
//       "Length": "1 meter",
//       "LEDs": "60 LEDs/meter",
//       "Power": "5V USB",
//       "Sensor Range": "3 meters"
//     }
//   },
//   {
//     id: 7,
//     name: "Smart Sensor Ceiling Light",
//     category: "sensor-led",
//     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
//     description: "Modern ceiling light with integrated motion sensor and smart controls.",
//     features: ["Motion Detection", "Smart Control", "Adjustable Brightness", "Modern Design", "Easy Installation"],
//     specifications: {
//       "Wattage": "24W",
//       "Lumens": "2400 lm",
//       "Diameter": "30cm",
//       "Sensor Range": "8 meters"
//     }
//   },
//   {
//     id: 8,
//     name: "Outdoor Sensor Floodlight",
//     category: "sensor-led",
//     image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
//     description: "High-power LED floodlight with motion sensor for outdoor security lighting.",
//     features: ["Weather Resistant", "High Brightness", "Adjustable Timer", "Wide Coverage", "Security Lighting"],
//     specifications: {
//       "Wattage": "50W",
//       "Lumens": "5000 lm",
//       "IP Rating": "IP65",
//       "Detection Angle": "180°"
//     }
//   },

//   // Modular Tactile Switches (4 products)
//   {
//     id: 9,
//     name: "1-Way Tactile Switch",
//     category: "modular-tactile",
//     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
//     description: "Premium quality 1-way tactile switch with smooth operation and elegant design.",
//     features: ["Smooth Operation", "Durable Build", "Easy Installation", "Standard Size", "Quality Materials"],
//     specifications: {
//       "Current Rating": "16A",
//       "Voltage": "240V AC",
//       "Module Size": "1M",
//       "Color": "White"
//     }
//   },
//   {
//     id: 10,
//     name: "2-Way Tactile Switch",
//     category: "modular-tactile",
//     image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
//     description: "2-way tactile switch for controlling lights from two different locations.",
//     features: ["Two-Way Control", "Reliable Operation", "Premium Finish", "Easy Wiring", "Long Lasting"],
//     specifications: {
//       "Current Rating": "16A",
//       "Voltage": "240V AC",
//       "Module Size": "1M",
//       "Switching": "2-Way"
//     }
//   },
//   {
//     id: 11,
//     name: "Dimmer Tactile Switch",
//     category: "modular-tactile",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     description: "Advanced dimmer switch with tactile feedback for precise light control.",
//     features: ["Dimming Control", "Tactile Feedback", "LED Compatible", "Smooth Operation", "Memory Function"],
//     specifications: {
//       "Load Capacity": "300W",
//       "Dimming Range": "5-100%",
//       "LED Compatible": "Yes",
//       "Memory": "Last Setting"
//     }
//   },
//   {
//     id: 12,
//     name: "Fan Speed Tactile Switch",
//     category: "modular-tactile",
//     image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
//     description: "Multi-speed fan control switch with tactile operation and speed indication.",
//     features: ["4-Speed Control", "Speed Indication", "Tactile Operation", "Reliable Control", "Standard Fitting"],
//     specifications: {
//       "Speed Steps": "4 + Off",
//       "Load Capacity": "200W",
//       "Indication": "LED",
//       "Module Size": "2M"
//     }
//   },

//   // Retrofit Convertor Switch & Controllers (4 products)
//   {
//     id: 13,
//     name: "WiFi Smart Switch Convertor",
//     category: "retrofit-convertor",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
//     description: "Convert any regular switch to smart switch with WiFi connectivity and app control.",
//     features: ["WiFi Connectivity", "App Control", "Voice Control", "Easy Installation", "Compact Design"],
//     specifications: {
//       "Connectivity": "WiFi 2.4GHz",
//       "Load": "10A",
//       "Size": "45mm x 45mm",
//       "App": "Smart Home App"
//     }
//   },
//   {
//     id: 14,
//     name: "Bluetooth Switch Convertor",
//     category: "retrofit-convertor",
//     image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
//     description: "Bluetooth-enabled switch convertor for local smart home control without internet.",
//     features: ["Bluetooth 5.0", "No Internet Required", "Local Control", "Easy Setup", "Energy Efficient"],
//     specifications: {
//       "Connectivity": "Bluetooth 5.0",
//       "Range": "10 meters",
//       "Load": "10A",
//       "Battery": "CR2032"
//     }
//   },
//   {
//     id: 15,
//     name: "IR Remote Controller",
//     category: "retrofit-convertor",
//     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
//     description: "Infrared remote controller for converting appliances to remote-controlled operation.",
//     features: ["IR Control", "Universal Remote", "Learning Function", "Multiple Devices", "Compact Size"],
//     specifications: {
//       "Range": "8 meters",
//       "Devices": "Up to 8",
//       "Battery": "AAA x 2",
//       "Frequency": "38kHz"
//     }
//   },
//   {
//     id: 16,
//     name: "Smart Relay Controller",
//     category: "retrofit-convertor",
//     image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
//     description: "Multi-channel relay controller for automating high-power appliances and devices.",
//     features: ["4-Channel Control", "High Load Capacity", "WiFi Enabled", "Timer Function", "Safety Features"],
//     specifications: {
//       "Channels": "4",
//       "Load per Channel": "30A",
//       "Control": "WiFi + Manual",
//       "Safety": "Overload Protection"
//     }
//   },

//   // Premium Modular Touch Switches (4 products)
//   {
//     id: 17,
//     name: "1-Gang Touch Switch - Gold",
//     category: "premium-touch",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     description: "Luxury gold-finished touch switch with crystal glass panel and LED indication.",
//     features: ["Crystal Glass Panel", "Gold Finish", "LED Indication", "Touch Sensitive", "Premium Design"],
//     specifications: {
//       "Material": "Crystal Glass",
//       "Finish": "Gold",
//       "Load": "16A",
//       "Indication": "Blue LED"
//     }
//   },
//   {
//     id: 18,
//     name: "2-Gang Touch Switch - Silver",
//     category: "premium-touch",
//     image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
//     description: "Elegant silver-finished 2-gang touch switch with tempered glass and smart features.",
//     features: ["Tempered Glass", "Silver Finish", "Dual Control", "Smart Touch", "Modern Design"],
//     specifications: {
//       "Material": "Tempered Glass",
//       "Finish": "Silver",
//       "Gangs": "2",
//       "Load per Gang": "16A"
//     }
//   },
//   {
//     id: 19,
//     name: "3-Gang Touch Switch - Black",
//     category: "premium-touch",
//     image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
//     description: "Sophisticated black 3-gang touch switch with premium glass finish and LED feedback.",
//     features: ["Premium Black Glass", "3-Gang Control", "LED Feedback", "Touch Technology", "Luxury Finish"],
//     specifications: {
//       "Material": "Premium Glass",
//       "Finish": "Piano Black",
//       "Gangs": "3",
//       "Touch Response": "< 0.1s"
//     }
//   },
//   {
//     id: 20,
//     name: "Smart Touch Dimmer Switch",
//     category: "premium-touch",
//     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
//     description: "Premium touch dimmer switch with app control and voice command compatibility.",
//     features: ["Touch Dimming", "App Control", "Voice Compatible", "Memory Function", "Premium Build"],
//     specifications: {
//       "Dimming": "1-100%",
//       "Control": "Touch + App",
//       "Voice": "Alexa, Google",
//       "Memory": "Last Setting"
//     }
//   },

//   // Touch Panels (5 products)
//   {
//     id: 21,
//     name: "4-Scene Touch Panel",
//     category: "touch-panels",
//     image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
//     description: "Advanced 4-scene touch panel for complete room automation and lighting control.",
//     features: ["4 Scene Control", "Touch Interface", "Customizable Scenes", "LED Display", "Easy Programming"],
//     specifications: {
//       "Scenes": "4 Programmable",
//       "Display": "LED Icons",
//       "Size": "86mm x 86mm",
//       "Load": "16A per channel"
//     }
//   },
//   {
//     id: 22,
//     name: "8-Channel Touch Panel",
//     category: "touch-panels",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
//     description: "Professional 8-channel touch panel for comprehensive home automation control.",
//     features: ["8 Independent Channels", "Touch Control", "Status Display", "Scene Management", "Professional Grade"],
//     specifications: {
//       "Channels": "8",
//       "Display": "LCD",
//       "Control": "Capacitive Touch",
//       "Programming": "Software Based"
//     }
//   },
//   {
//     id: 23,
//     name: "Smart Home Control Panel",
//     category: "touch-panels",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     description: "Central control panel with color display for complete smart home management.",
//     features: ["Color Display", "WiFi Connectivity", "Multiple Protocols", "User Interface", "Central Control"],
//     specifications: {
//       "Display": "4.3\" Color TFT",
//       "Connectivity": "WiFi, Zigbee, Z-Wave",
//       "Protocols": "Multiple",
//       "Interface": "Touch + App"
//     }
//   },
//   {
//     id: 24,
//     name: "Curtain Control Touch Panel",
//     category: "touch-panels",
//     image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
//     description: "Specialized touch panel for automated curtain and blind control systems.",
//     features: ["Curtain Control", "Position Memory", "Timer Function", "Touch Interface", "Quiet Operation"],
//     specifications: {
//       "Channels": "2 (Open/Close)",
//       "Motor Load": "500W",
//       "Timer": "Programmable",
//       "Position": "Memory Function"
//     }
//   },
//   {
//     id: 25,
//     name: "HVAC Touch Control Panel",
//     category: "touch-panels",
//     image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
//     description: "Advanced HVAC control panel with temperature sensing and climate management.",
//     features: ["Temperature Control", "Climate Management", "Energy Monitoring", "Schedule Programming", "Smart Sensors"],
//     specifications: {
//       "Temperature Range": "16-30°C",
//       "Sensors": "Temperature, Humidity",
//       "Control": "Multi-zone",
//       "Display": "Digital"
//     }
//   },

//   // Accessories (4 products)
//   {
//     id: 26,
//     name: "Smart Door Bell",
//     category: "accessories",
//     image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
//     description: "WiFi-enabled smart doorbell with video calling and mobile notifications.",
//     features: ["Video Calling", "Mobile Alerts", "Night Vision", "Two-way Audio", "Cloud Storage"],
//     specifications: {
//       "Video": "1080p HD",
//       "Audio": "Two-way",
//       "Storage": "Cloud + Local",
//       "Power": "Battery/Wired"
//     }
//   },
//   {
//     id: 27,
//     name: "Smart Power Socket",
//     category: "accessories",
//     image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
//     description: "WiFi-controlled power socket with energy monitoring and scheduling features.",
//     features: ["WiFi Control", "Energy Monitoring", "Scheduling", "Voice Control", "Safety Features"],
//     specifications: {
//       "Load": "16A",
//       "Monitoring": "Power, Energy",
//       "Control": "App + Voice",
//       "Safety": "Overload Protection"
//     }
//   },
//   {
//     id: 28,
//     name: "Smart Smoke Detector",
//     category: "accessories",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
//     description: "Intelligent smoke detector with mobile alerts and interconnected alarm system.",
//     features: ["Smoke Detection", "Mobile Alerts", "Interconnected", "Battery Backup", "Self-Testing"],
//     specifications: {
//       "Detection": "Photoelectric",
//       "Battery": "10-year Lithium",
//       "Alerts": "App + Sound",
//       "Interconnect": "Wireless"
//     }
//   },
//   {
//     id: 29,
//     name: "Smart Water Leak Sensor",
//     category: "accessories",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     description: "Water leak detection sensor with instant mobile alerts and automatic shutoff capability.",
//     features: ["Leak Detection", "Instant Alerts", "Auto Shutoff", "Battery Powered", "Easy Installation"],
//     specifications: {
//       "Detection": "Water Contact",
//       "Battery Life": "2 years",
//       "Alerts": "Instant Push",
//       "Range": "100 meters"
//     }
//   }
// ];



export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'motion-sensors', name: 'Motion Sensors' },
  { id: 'sensor-led', name: 'Sensor Based LED Lights' },
  { id: 'modular-tactile', name: 'Modular Tactile Switches' },
  { id: 'retrofit-convertor', name: 'Retrofit Convertor Switch & Controllers' },
  { id: 'premium-touch', name: 'Premium Modular Touch Switches' },
  { id: 'touch-panels', name: 'Touch Panels' },
  { id: 'accessories', name: 'Accessories' }
];

export const products = [
  // Motion Sensors (3 products)
  {
    id: 1,
    name: " PIR Motion Sensor (PR-05B)",
    category: "motion-sensors",
    image: "/prod1.webp",
    description: "Smart energy-saving switch that controls connected appliances on detection of motion within 12m range. Detects temperature changes through infrared sensor and activates control signal to switch on appliances.",
    features: ["360° Detection Range", "Day-Night Motion Detection", "Easy Installation", "Compatible with appliances up to 500W", "Ceiling Mount"],
    specifications: {
      "Detection Distance": "12m (diameter)",
      "Hold Time": "10sec-7min",
      "Rated Power": "1200W (Incandescent)",
      "Installation Height": "2.2-4m",
      "IP Rating": "IP20",
      "Warranty": "2 Years"
    }
  },
  {
    id: 2,
    name: " PIR Motion Sensor (PR-46B)",
    category: "motion-sensors",
    image: "/prod2.webp",
    description: "Smart energy-saving switch that controls connected appliances on detection of motion within 8m range. Features automatic day-night light detection and easy installation.",
    features: ["8m Detection Range", "Day-Night Detection", "Easy Installation", "Compatible with appliances up to 1000W", "Surface Mount"],
    specifications: {
      "Detection Distance": "8m (diameter)",
      "Hold Time": "10sec-30min",
      "Rated Power": "2000W (Resistive Max)",
      "Installation Height": "2.2-6m",
      "IP Rating": "IP20",
      "Warranty": "2 Years"
    }
  },
  {
    id: 3,
    name: " Microwave Motion Sensor (MW-753)",
    category: "motion-sensors",
    image: "/prod3.webp",
    description: "Smart energy-saving switch using microwave sensor technology. Detects moving objects cutting through microwave signals for reliable motion detection in various conditions.",
    features: ["360° Detection", "Microwave Technology", "Temperature Resistant (-20°C to 55°C)", "Day-Night Detection", "Stable Performance"],
    specifications: {
      "Detection Distance": "8m (diameter)",
      "Hold Time": "10sec-12min",
      "Rated Load": "1200W (Resistive Max)",
      "Installation Height": "1.5-3.5m",
      "IP Rating": "IP20",
      "Warranty": "2 Years"
    }
  },

  // Sensor Based LED Lights (3 products)
  {
    id: 4,
    name: " T5 Sensor LED Tubelight (18W)",
    category: "sensor-led",
    image: "/prod4.jpg",
    description: "T5 LED Tubelight with inbuilt microwave motion sensor. Automatically dims when no movement detected and glows at full brightness when motion is detected.",
    features: ["Motion Detection", "Auto Dim Mode (3.6W)", "Full Brightness (18W)", "80% Energy Savings", "Surface Mounted"],
    specifications: {
      "Wattage": "18W / 3.6W (Dim)",
      "Light Output": "1980 lumen",
      "Color Temperature": "6500K",
      "Detection Range": "8m (diameter)",
      "LED Lifetime": "35000+ hours",
      "Warranty": "2 Years"
    }
  },
  {
    id: 5,
    name: " Sensor LED Surface Mount Tulip (12W)",
    category: "sensor-led",
    image: "/prod5.webp",
    description: "Tulip LED Surface light with inbuilt microwave motion sensor. Operates at 20% brightness in standby and full brightness when motion detected.",
    features: ["Motion Activated", "Dim Mode (2.4W)", "Full Brightness (12W)", "80% Energy Savings", "Easy Installation"],
    specifications: {
      "Wattage": "12W / 2.4W (Dim)",
      "Light Output": "1200 lumen",
      "Color Temperature": "6500K",
      "Detection Range": "8m (diameter)",
      "LED Lifetime": "35000+ hours",
      "Warranty": "2 Years"
    }
  },
  {
    id: 6,
    name: " Sensor LED Surface Mount Tulip (18W)",
    category: "sensor-led",
    image: "/prod6.webp",
    description: "Higher wattage Tulip LED Surface light with microwave motion sensor. Perfect for larger areas requiring more illumination.",
    features: ["Motion Detection", "Dim Mode (3.6W)", "Full Brightness (18W)", "Large Area Coverage", "Surface Mounted"],
    specifications: {
      "Wattage": "18W / 3.6W (Dim)",
      "Light Output": "1800 lumen",
      "Color Temperature": "6500K",
      "Detection Range": "8m (diameter)",
      "LED Lifetime": "35000+ hours",
      "Warranty": "2 Years"
    }
  },

  // Modular Tactile Switches (3 products)
  {
    id: 7,
    name: " Wi-Fi Smart Switch 16A 1 Channel",
    category: "modular-tactile",
    image: "/prod7.webp",
    description: "High-load smart switch for controlling power-intensive appliances like AC, geyser, microwave. Features app control and voice assistant compatibility.",
    features: ["16A High Load", "WiFi Connectivity", "Voice Control (Alexa/Google)", "Energy Monitoring", "Overload Protection"],
    specifications: {
      "Rated Current": "16A",
      "Rated Voltage": "240VAC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Control": "App + Voice + Manual",
      "Fixing": "ROMA Type Switch Plate",
      "Model": "GWF-KZ101"
    }
  },
  {
    id: 8,
    name: " Wi-Fi Smart Switch 5A 2 Channel",
    category: "modular-tactile",
    image: "/prod8.webp",
    description: "Dual channel smart switch for controlling two electrical points. Perfect for lights, fans, and moderate load appliances.",
    features: ["2 Channel Control", "5A Per Channel", "WiFi Connectivity", "Voice Control", "Energy Management"],
    specifications: {
      "Rated Current": "5A per Gang",
      "Rated Voltage": "240VAC",
      "Channels": "2",
      "Wireless": "Wi-Fi 2.4GHz",
      "Control": "App + Voice + Manual",
      "Model": "GWF-KS001-2"
    }
  },
  {
    id: 9,
    name: " Wi-Fi Smart Fan Speed Regulator 120W",
    category: "modular-tactile",
    image: "/prod9.webp",
    description: "Smart fan speed controller with 5-step speed adjustment. Features remote control and energy monitoring for optimal fan operation.",
    features: ["5-Step Speed Control", "Remote Speed Control", "Energy Monitoring", "Voice Control", "Power Consumption Reduction"],
    specifications: {
      "Max Output Power": "150W @ 240VAC",
      "Speed Steps": "5 + Off",
      "Rated Voltage": "240VAC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Control": "App + Voice + Manual",
      "Model": "FI-01-150"
    }
  },

  // Retrofit Convertor Switch & Controllers (5 products)
  {
    id: 10,
    name: " Smart Relay Plug 10A",
    category: "retrofit-convertor",
    image: "/prod10.webp",
    description: "Wi-Fi enabled smart plug suitable for TVs, set-top boxes, electric kettles, mobile chargers. Features energy monitoring and voice control.",
    features: ["10A Load Capacity", "Energy Monitoring", "Voice Control", "Timer Automation", "Overload Protection"],
    specifications: {
      "Rated Current": "10A",
      "Rated Voltage": "240VAC",
      "Wireless": "Wi-Fi 2.4GHz",
      "Control": "App + Voice + Manual",
      "Fixing": "Portable Universal Socket",
      "Model": "SP2-10-1"
    }
  },
  {
    id: 11,
    name: "Wi-Fi Smart IR Blaster with 6A Smart Plug",
    category: "retrofit-convertor",
    image: "/prod11.webp",
    description: "Universal remote controller for AC, TV, set-top box with integrated 10A smart plug. Control any IR-based appliance through mobile app.",
    features: ["Universal IR Remote", "10A Smart Plug", "Multi-Brand Support", "Voice Control", "Energy Monitoring"],
    specifications: {
      "Rated Current": "10A",
      "Remote Type": "Infrared IR",
      "Wireless": "Wi-Fi 2.4GHz",
      "Control": "App + Voice + Manual",
      "Fixing": "Portable Universal Socket",
      "Model": "SP2-10-1"
    }
  },
  {
    id: 12,
    name: " Wi-Fi Smart IR Appliance Controller",
    category: "retrofit-convertor",
    image: "/prod12.webp",
    description: "Smart infrared blaster for controlling AC, TV, set-top boxes, and fans. Wall-mount or tabletop installation with wide device compatibility.",
    features: ["Wide Device Support", "Wall/Tabletop Mount", "Voice Control", "Energy Management", "Easy Installation"],
    specifications: {
      "Input Power": "5V/1A DC, Micro USB",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Operating Temp": "-10°C to +50°C",
      "Wireless": "Wi-Fi 2.4GHz",
      "Fitting": "Wall-mount/Tabletop",
      "Model": "SI02-1-2"
    }
  },
  {
    id: 13,
    name: " Wi-Fi Smart SOS Panic Button",
    category: "retrofit-convertor",
    image: "/prod13.webp",
    description: "Emergency panic button for home security and personal safety. Sends SOS alerts via app, SMS, and local buzzer alarm.",
    features: ["Emergency SOS Alert", "Local Buzzer Alarm", "SMS Notifications", "Battery Backup", "Continuous Alert"],
    specifications: {
      "Input Power": "5V/1A DC, USB C-type",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Operating Temp": "-10°C to +50°C",
      "Wireless": "Wi-Fi 2.4GHz",
      "Fitting": "Wall-mount",
      "Model": "SOS1-1-1"
    }
  },
  {
    id: 14,
    name: " Smart Wi-Fi Touch Panel Switch 3 Channel",
    category: "retrofit-convertor",
    image: "/prod14.webp",
    description: "3-channel touch panel switch for controlling fans, lights, and appliances. Features touch-based control and voice assistant compatibility.",
    features: ["3 Channel Control", "Touch Based Control", "Voice Control", "Timer Automation", "Easy Installation"],
    specifications: {
      "Channels": "3",
      "Input Power": "5V/1A DC, USB C-type",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Operating Temp": "-10°C to +50°C",
      "Wireless": "Wi-Fi 2.4GHz",
      "Fitting": "2 Gang Switch Box"
    }
  },

  // Premium Modular Touch Switches (7 products)
  {
    id: 15,
    name: " Premium Touch Switch 16A Single Channel",
    category: "premium-touch",
    image: "/prod15.webp",
    description: "Premium feather touch switch for high-load appliances like AC, geyser, microwave. Features toughened glass front plate and smart controls.",
    features: ["Toughened Glass Panel", "16A High Load", "Feather Touch", "Energy Management", "Premium Design"],
    specifications: {
      "Output Power": "3500W per channel",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "Toughened Glass Front",
      "Wireless": "Wi-Fi 2.4GHz",
      "Model": "TS1-16-1"
    }
  },
  {
    id: 16,
    name: " Premium Touch Switch 5A 2 Channel",
    category: "premium-touch",
    image: "/prod16.webp",
    description: "Premium 2-channel touch switch for lights and appliances. Elegant toughened glass design with smart home integration.",
    features: ["2 Channel Control", "Toughened Glass", "Premium Design", "Voice Control", "Energy Tracking"],
    specifications: {
      "Output Power": "1000W per channel",
      "Channels": "2",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "Toughened Glass Front",
      "Model": "TS2-10-1"
    }
  },
  {
    id: 17,
    name: " Premium Touch Fan Speed Regulator",
    category: "premium-touch",
    image: "/prod17.webp",
    description: "Premium touch fan speed controller with 4-step speed adjustment. Features elegant design and smart home connectivity.",
    features: ["4-Step Speed Control", "Premium Touch Design", "Energy Efficient", "Voice Control", "Smart Scheduling"],
    specifications: {
      "Output Power": "100W per channel",
      "Speed Steps": "4 + Off",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "Toughened Glass Front",
      "Model": "TS4-05-2"
    }
  },
  {
    id: 18,
    name: " Premium Touch Switch 5A 4 Channel",
    category: "premium-touch",
    image: "/prod18.webp",
    description: "Premium 4-channel touch switch for comprehensive lighting and appliance control. Features elegant glass finish and smart controls.",
    features: ["4 Channel Control", "Premium Glass Finish", "Individual Channel Control", "Voice Commands", "Energy Management"],
    specifications: {
      "Output Power": "500W per channel",
      "Channels": "4",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "Toughened Glass Front",
      "Model": "TS4-05-2"
    }
  },
  {
    id: 19,
    name: " Premium Touch LED Dimmer Controller",
    category: "premium-touch",
    image: "/prod19.webp",
    description: "Premium touch dimmer for dimmable LED lights. Features smooth dimming control through mobile app and voice commands.",
    features: ["LED Dimming Control", "Smooth Touch Operation", "App Control", "Voice Dimming", "Premium Build"],
    specifications: {
      "Output Power": "150W per channel",
      "Dimming": "Smooth LED Dimming",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "Toughened Glass Front",
      "Model": "TD1-1501"
    }
  },
  {
    id: 20,
    name: " Premium Touch Curtain Controller",
    category: "premium-touch",
    image: "/prod20.webp",
    description: "Premium touch curtain controller for motorized curtains and blinds. Features 2-channel control with scheduling and voice commands.",
    features: ["2-Channel Curtain Control", "Motorized Operation", "Schedule Control", "Voice Commands", "Premium Design"],
    specifications: {
      "Output Power": "175W per channel",
      "Channels": "2 (Open/Close)",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "Toughened Glass Front",
      "Model": "TC2-05-1"
    }
  },
  {
    id: 21,
    name: " Premium Touch LED Dimmer 2 Channel",
    category: "premium-touch",
    image: "/prod21.webp",
    description: "Premium 2-channel touch dimmer for LED lights. Features individual channel control with smooth dimming and smart scheduling.",
    features: ["2-Channel Dimming", "Individual Control", "Smooth Operation", "Smart Scheduling", "Voice Control"],
    specifications: {
      "Max Output Power": "150W per channel",
      "Channels": "2",
      "Rated Voltage": "240VAC",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Housing": "FR Polycarbonate",
      "Model": "TD2-1502"
    }
  },

  // Touch Panels (2 products)
  {
    id: 22,
    name: " Elixir Glass Touch Panel Switches",
    category: "touch-panels",
    image: "/prod22.webp",
    description: "Sleek bezel-free glass touch panel with customizable switch combinations. Features light dimming, fan speed, curtain control, and appliance switching.",
    features: ["Bezel-Free Design", "Customizable Combinations", "Light Dimming", "Fan Speed Control", "Curtain Operation"],
    specifications: {
      "Module Options": "2M/4M/6M/8M",
      "Output Power": "1000W per channel",
      "Housing": "Frameless Toughened Glass",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Colors": "White & Black",
      "Wireless": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: 23,
    name: " Elite Touch Panel Switches",
    category: "touch-panels",
    image: "/prod23.webp",
    description: "Elite bezel-free touch panel with acrylic front plate. Customizable for comprehensive home automation with elegant design.",
    features: ["Bezel-Free Elite Design", "Acrylic Front Plate", "Comprehensive Control", "Customizable Layout", "Modern Aesthetics"],
    specifications: {
      "Module Options": "2M/4M/6M/8M/12M",
      "Output Power": "1000W per channel",
      "Housing": "Frameless Acrylic Front",
      "Wi-Fi Range": "30m indoor, 45m outdoor",
      "Colors": "White & Black",
      "Wireless": "Wi-Fi 2.4GHz"
    }
  },

  // Accessories (2 products)
  {
    id: 24,
    name: " Premium Glass Finish Switch Plates",
    category: "accessories",
    image: "/prod24.jpg",
    description: "Premium glass-finish switch plates designed to complement modern interiors. Compatible with metal gang boxes and customizable combinations.",
    features: ["Premium Glass Finish", "Modern Design", "High-Quality Acrylic", "Customizable Combinations", "Elegant Touch"],
    specifications: {
      "Module Options": "2M/4M/6M/8M/12M",
      "Front Plate": "2mm Acrylic",
      "Back Plate": "Polycarbonate",
      "Colors": "Black/White",
      "Compatibility": "Metal Gang Boxes",
      "Durability": "High-Quality Materials"
    }
  },
  {
    id: 25,
    name: " Premium Switch Plate Accessories",
    category: "accessories",
    image: "/prod25.jpg",
    description: "Complete range of premium switch plate accessories for seamless integration with smart devices.",
    features: ["Seamless Integration", "Premium Materials", "Multiple Configurations", "Easy Installation", "Modern Aesthetics"],
    specifications: {
      "Module Options": "2M/4M/6M/8M/12M",
      "Material": "High-Quality Acrylic",
      "Back Support": "Polycarbonate",
      "Color Options": "Black/White",
      "Compatibility": "EZ HOME Devices",
      "Installation": "Standard Gang Box"
    }
  }
];
