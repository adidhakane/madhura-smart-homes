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
  // Motion Sensors (4 products)
  {
    id: 1,
    name: "PIR Motion Sensor - Indoor",
    category: "motion-sensors",
    price: "₹899",
    originalPrice: "₹1,199",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 128,
    description: "Advanced PIR motion sensor for indoor use with adjustable sensitivity and timer settings.",
    features: ["120° Detection Angle", "Adjustable Timer", "LED Indicator", "Easy Installation", "Energy Efficient"],
    specifications: {
      "Detection Range": "8 meters",
      "Power Supply": "12V DC",
      "Operating Temperature": "-10°C to +50°C",
      "Mounting": "Wall/Ceiling"
    }
  },
  {
    id: 2,
    name: "PIR Motion Sensor - Outdoor",
    category: "motion-sensors",
    price: "₹1,299",
    originalPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    description: "Weather-resistant outdoor PIR motion sensor with enhanced detection capabilities.",
    features: ["IP65 Rated", "Pet Immunity", "Dual Technology", "Anti-Masking", "Long Range"],
    specifications: {
      "Detection Range": "12 meters",
      "Power Supply": "12V DC",
      "Weather Rating": "IP65",
      "Pet Immunity": "Up to 25kg"
    }
  },
  {
    id: 3,
    name: "Microwave Motion Sensor",
    category: "motion-sensors",
    price: "₹1,599",
    originalPrice: "₹1,999",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 67,
    description: "High-precision microwave motion sensor for commercial and residential applications.",
    features: ["Through Wall Detection", "No False Alarms", "Adjustable Sensitivity", "Compact Design", "Long Life"],
    specifications: {
      "Detection Range": "15 meters",
      "Frequency": "5.8 GHz",
      "Power Consumption": "< 50mA",
      "Response Time": "< 2 seconds"
    }
  },
  {
    id: 4,
    name: "Smart Motion Sensor Hub",
    category: "motion-sensors",
    price: "₹2,299",
    originalPrice: "₹2,799",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    description: "WiFi-enabled smart motion sensor with app control and automation features.",
    features: ["WiFi Connectivity", "App Control", "Scene Integration", "Battery Backup", "Smart Notifications"],
    specifications: {
      "Connectivity": "WiFi 2.4GHz",
      "Battery Life": "2 years",
      "App": "EZ Home App",
      "Range": "10 meters"
    }
  },

  // Sensor Based LED Lights (4 products)
  {
    id: 5,
    name: "Motion Sensor LED Bulb 9W",
    category: "sensor-led",
    price: "₹699",
    originalPrice: "₹899",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 203,
    description: "Energy-efficient LED bulb with built-in motion sensor for automatic on/off operation.",
    features: ["Auto On/Off", "Motion Detection", "Energy Saving", "Long Life", "Easy Installation"],
    specifications: {
      "Wattage": "9W",
      "Lumens": "810 lm",
      "Color Temperature": "6500K",
      "Detection Range": "5 meters"
    }
  },
  {
    id: 6,
    name: "Sensor LED Strip Light",
    category: "sensor-led",
    price: "₹1,199",
    originalPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 94,
    description: "Flexible LED strip with motion sensor, perfect for under-cabinet and accent lighting.",
    features: ["Motion Activated", "Flexible Design", "Adhesive Backing", "Dimmable", "USB Powered"],
    specifications: {
      "Length": "1 meter",
      "LEDs": "60 LEDs/meter",
      "Power": "5V USB",
      "Sensor Range": "3 meters"
    }
  },
  {
    id: 7,
    name: "Smart Sensor Ceiling Light",
    category: "sensor-led",
    price: "₹2,499",
    originalPrice: "₹2,999",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 167,
    description: "Modern ceiling light with integrated motion sensor and smart controls.",
    features: ["Motion Detection", "Smart Control", "Adjustable Brightness", "Modern Design", "Easy Installation"],
    specifications: {
      "Wattage": "24W",
      "Lumens": "2400 lm",
      "Diameter": "30cm",
      "Sensor Range": "8 meters"
    }
  },
  {
    id: 8,
    name: "Outdoor Sensor Floodlight",
    category: "sensor-led",
    price: "₹1,899",
    originalPrice: "₹2,399",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 128,
    description: "High-power LED floodlight with motion sensor for outdoor security lighting.",
    features: ["Weather Resistant", "High Brightness", "Adjustable Timer", "Wide Coverage", "Security Lighting"],
    specifications: {
      "Wattage": "50W",
      "Lumens": "5000 lm",
      "IP Rating": "IP65",
      "Detection Angle": "180°"
    }
  },

  // Modular Tactile Switches (4 products)
  {
    id: 9,
    name: "1-Way Tactile Switch",
    category: "modular-tactile",
    price: "₹299",
    originalPrice: "₹399",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 89,
    description: "Premium quality 1-way tactile switch with smooth operation and elegant design.",
    features: ["Smooth Operation", "Durable Build", "Easy Installation", "Standard Size", "Quality Materials"],
    specifications: {
      "Current Rating": "16A",
      "Voltage": "240V AC",
      "Module Size": "1M",
      "Color": "White"
    }
  },
  {
    id: 10,
    name: "2-Way Tactile Switch",
    category: "modular-tactile",
    price: "₹399",
    originalPrice: "₹499",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 156,
    description: "2-way tactile switch for controlling lights from two different locations.",
    features: ["Two-Way Control", "Reliable Operation", "Premium Finish", "Easy Wiring", "Long Lasting"],
    specifications: {
      "Current Rating": "16A",
      "Voltage": "240V AC",
      "Module Size": "1M",
      "Switching": "2-Way"
    }
  },
  {
    id: 11,
    name: "Dimmer Tactile Switch",
    category: "modular-tactile",
    price: "₹799",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 203,
    description: "Advanced dimmer switch with tactile feedback for precise light control.",
    features: ["Dimming Control", "Tactile Feedback", "LED Compatible", "Smooth Operation", "Memory Function"],
    specifications: {
      "Load Capacity": "300W",
      "Dimming Range": "5-100%",
      "LED Compatible": "Yes",
      "Memory": "Last Setting"
    }
  },
  {
    id: 12,
    name: "Fan Speed Tactile Switch",
    category: "modular-tactile",
    price: "₹599",
    originalPrice: "₹749",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 94,
    description: "Multi-speed fan control switch with tactile operation and speed indication.",
    features: ["4-Speed Control", "Speed Indication", "Tactile Operation", "Reliable Control", "Standard Fitting"],
    specifications: {
      "Speed Steps": "4 + Off",
      "Load Capacity": "200W",
      "Indication": "LED",
      "Module Size": "2M"
    }
  },

  // Retrofit Convertor Switch & Controllers (4 products)
  {
    id: 13,
    name: "WiFi Smart Switch Convertor",
    category: "retrofit-convertor",
    price: "₹1,299",
    originalPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 167,
    description: "Convert any regular switch to smart switch with WiFi connectivity and app control.",
    features: ["WiFi Connectivity", "App Control", "Voice Control", "Easy Installation", "Compact Design"],
    specifications: {
      "Connectivity": "WiFi 2.4GHz",
      "Load": "10A",
      "Size": "45mm x 45mm",
      "App": "EZ Home App"
    }
  },
  {
    id: 14,
    name: "Bluetooth Switch Convertor",
    category: "retrofit-convertor",
    price: "₹999",
    originalPrice: "₹1,299",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 128,
    description: "Bluetooth-enabled switch convertor for local smart home control without internet.",
    features: ["Bluetooth 5.0", "No Internet Required", "Local Control", "Easy Setup", "Energy Efficient"],
    specifications: {
      "Connectivity": "Bluetooth 5.0",
      "Range": "10 meters",
      "Load": "10A",
      "Battery": "CR2032"
    }
  },
  {
    id: 15,
    name: "IR Remote Controller",
    category: "retrofit-convertor",
    price: "₹799",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 89,
    description: "Infrared remote controller for converting appliances to remote-controlled operation.",
    features: ["IR Control", "Universal Remote", "Learning Function", "Multiple Devices", "Compact Size"],
    specifications: {
      "Range": "8 meters",
      "Devices": "Up to 8",
      "Battery": "AAA x 2",
      "Frequency": "38kHz"
    }
  },
  {
    id: 16,
    name: "Smart Relay Controller",
    category: "retrofit-convertor",
    price: "₹1,599",
    originalPrice: "₹1,999",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 156,
    description: "Multi-channel relay controller for automating high-power appliances and devices.",
    features: ["4-Channel Control", "High Load Capacity", "WiFi Enabled", "Timer Function", "Safety Features"],
    specifications: {
      "Channels": "4",
      "Load per Channel": "30A",
      "Control": "WiFi + Manual",
      "Safety": "Overload Protection"
    }
  },

  // Premium Modular Touch Switches (4 products)
  {
    id: 17,
    name: "1-Gang Touch Switch - Gold",
    category: "premium-touch",
    price: "₹1,999",
    originalPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 203,
    description: "Luxury gold-finished touch switch with crystal glass panel and LED indication.",
    features: ["Crystal Glass Panel", "Gold Finish", "LED Indication", "Touch Sensitive", "Premium Design"],
    specifications: {
      "Material": "Crystal Glass",
      "Finish": "Gold",
      "Load": "16A",
      "Indication": "Blue LED"
    }
  },
  {
    id: 18,
    name: "2-Gang Touch Switch - Silver",
    category: "premium-touch",
    price: "₹2,799",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 167,
        description: "Elegant silver-finished 2-gang touch switch with tempered glass and smart features.",
    features: ["Tempered Glass", "Silver Finish", "Dual Control", "Smart Touch", "Modern Design"],
    specifications: {
      "Material": "Tempered Glass",
      "Finish": "Silver",
      "Gangs": "2",
      "Load per Gang": "16A"
    }
  },
  {
    id: 19,
    name: "3-Gang Touch Switch - Black",
    category: "premium-touch",
    price: "₹3,599",
    originalPrice: "₹4,299",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 128,
    description: "Sophisticated black 3-gang touch switch with premium glass finish and LED feedback.",
    features: ["Premium Black Glass", "3-Gang Control", "LED Feedback", "Touch Technology", "Luxury Finish"],
    specifications: {
      "Material": "Premium Glass",
      "Finish": "Piano Black",
      "Gangs": "3",
      "Touch Response": "< 0.1s"
    }
  },
  {
    id: 20,
    name: "Smart Touch Dimmer Switch",
    category: "premium-touch",
    price: "₹2,999",
    originalPrice: "₹3,699",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 94,
    description: "Premium touch dimmer switch with app control and voice command compatibility.",
    features: ["Touch Dimming", "App Control", "Voice Compatible", "Memory Function", "Premium Build"],
    specifications: {
      "Dimming": "1-100%",
      "Control": "Touch + App",
      "Voice": "Alexa, Google",
      "Memory": "Last Setting"
    }
  },

  // Touch Panels (5 products)
  {
    id: 21,
    name: "4-Scene Touch Panel",
    category: "touch-panels",
    price: "₹4,999",
    originalPrice: "₹5,999",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 156,
    description: "Advanced 4-scene touch panel for complete room automation and lighting control.",
    features: ["4 Scene Control", "Touch Interface", "Customizable Scenes", "LED Display", "Easy Programming"],
    specifications: {
      "Scenes": "4 Programmable",
      "Display": "LED Icons",
      "Size": "86mm x 86mm",
      "Load": "16A per channel"
    }
  },
  {
    id: 22,
    name: "8-Channel Touch Panel",
    category: "touch-panels",
    price: "₹7,999",
    originalPrice: "₹9,499",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 89,
    description: "Professional 8-channel touch panel for comprehensive home automation control.",
    features: ["8 Independent Channels", "Touch Control", "Status Display", "Scene Management", "Professional Grade"],
    specifications: {
      "Channels": "8",
      "Display": "LCD",
      "Control": "Capacitive Touch",
      "Programming": "Software Based"
    }
  },
  {
    id: 23,
    name: "Smart Home Control Panel",
    category: "touch-panels",
    price: "₹12,999",
    originalPrice: "₹15,499",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 203,
    description: "Central control panel with color display for complete smart home management.",
    features: ["Color Display", "WiFi Connectivity", "Multiple Protocols", "User Interface", "Central Control"],
    specifications: {
      "Display": "4.3\" Color TFT",
      "Connectivity": "WiFi, Zigbee, Z-Wave",
      "Protocols": "Multiple",
      "Interface": "Touch + App"
    }
  },
  {
    id: 24,
    name: "Curtain Control Touch Panel",
    category: "touch-panels",
    price: "₹3,999",
    originalPrice: "₹4,799",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 167,
    description: "Specialized touch panel for automated curtain and blind control systems.",
    features: ["Curtain Control", "Position Memory", "Timer Function", "Touch Interface", "Quiet Operation"],
    specifications: {
      "Channels": "2 (Open/Close)",
      "Motor Load": "500W",
      "Timer": "Programmable",
      "Position": "Memory Function"
    }
  },
  {
    id: 25,
    name: "HVAC Touch Control Panel",
    category: "touch-panels",
    price: "₹8,999",
    originalPrice: "₹10,799",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 128,
    description: "Advanced HVAC control panel with temperature sensing and climate management.",
    features: ["Temperature Control", "Climate Management", "Energy Monitoring", "Schedule Programming", "Smart Sensors"],
    specifications: {
      "Temperature Range": "16-30°C",
      "Sensors": "Temperature, Humidity",
      "Control": "Multi-zone",
      "Display": "Digital"
    }
  },

  // Accessories (4 products)
  {
    id: 26,
    name: "Smart Door Bell",
    category: "accessories",
    price: "₹2,999",
    originalPrice: "₹3,599",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 94,
    description: "WiFi-enabled smart doorbell with video calling and mobile notifications.",
    features: ["Video Calling", "Mobile Alerts", "Night Vision", "Two-way Audio", "Cloud Storage"],
    specifications: {
      "Video": "1080p HD",
      "Audio": "Two-way",
      "Storage": "Cloud + Local",
      "Power": "Battery/Wired"
    }
  },
  {
    id: 27,
    name: "Smart Power Socket",
    category: "accessories",
    price: "₹899",
    originalPrice: "₹1,199",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 156,
    description: "WiFi-controlled power socket with energy monitoring and scheduling features.",
    features: ["WiFi Control", "Energy Monitoring", "Scheduling", "Voice Control", "Safety Features"],
    specifications: {
      "Load": "16A",
      "Monitoring": "Power, Energy",
      "Control": "App + Voice",
      "Safety": "Overload Protection"
    }
  },
  {
    id: 28,
    name: "Smart Smoke Detector",
    category: "accessories",
    price: "₹1,899",
    originalPrice: "₹2,299",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 167,
    description: "Intelligent smoke detector with mobile alerts and interconnected alarm system.",
    features: ["Smoke Detection", "Mobile Alerts", "Interconnected", "Battery Backup", "Self-Testing"],
    specifications: {
      "Detection": "Photoelectric",
      "Battery": "10-year Lithium",
      "Alerts": "App + Sound",
      "Interconnect": "Wireless"
    }
  },
  {
    id: 29,
    name: "Smart Water Leak Sensor",
    category: "accessories",
    price: "₹1,299",
    originalPrice: "₹1,599",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 89,
    description: "Water leak detection sensor with instant mobile alerts and automatic shutoff capability.",
    features: ["Leak Detection", "Instant Alerts", "Auto Shutoff", "Battery Powered", "Easy Installation"],
    specifications: {
      "Detection": "Water Contact",
      "Battery Life": "2 years",
      "Alerts": "Instant Push",
      "Range": "100 meters"
    }
  }
];
