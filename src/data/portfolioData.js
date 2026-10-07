export const personalInfo = {
  name: "Sanwar Ahmed Ovy",
  title: "ECE PhD Student & Aspiring Chip Architect",
  tagline: "Bridging Fundamental Chip Design, Emerging Devices, and Competitive Mathematical Rigor",
  institution: "North Dakota State University",
  department: "Electrical and Computer Engineering",
  lab: "Next Generation System Design Laboratory",
  currentRole: "Graduate Research Assistant (Full-time)",
  location: "2508 9th street N, Fargo, ND, 58102",
  phone: "+1 (701)-200-8405",
  email: "sanwar.ovy@ndsu.edu",
  gpa: "4.00 / 4.00",
  vision: "Envisioning myself shaping the future of silicon and high-performance computing in the chip-manufacturing industry.",
  objective: "EEE graduate who loves to work on hardware-based projects. With almost ten years of Math Olympiad background, expertise in multiple programming languages, and fundamental knowledge of chip design and computer architecture, I envision myself working for a chip-manufacturing industry someday."
};

export const researchInterests = [
  {
    id: "fabrication",
    title: "Fabrication",
    tag: "Semiconductor Process & Plasma Sheath",
    accent: "cyan",
    icon: "Cpu",
    shortDesc: "Exploring semiconductor cleanroom processes, thin-film etching, and Ion Energy Distribution (IED) in RF plasma sheaths.",
    fullDesc: "Deep exploration of semiconductor fabrication processing with an emphasis on achieving the narrowest and most controllable Ion Energy Distribution (IED) using capacitively coupled plasma with single- and triple-frequency sources. Understanding chemical-physical surface interactions critical for sub-nanometer node etching and deposition.",
    highlights: [
      "Triple-Frequency Capacitively Coupled Plasma (CCP) RF sheath modeling",
      "Narrow & controllable IED optimization for precision anisotropic etching",
      "Material selection & stoichiometric calculations for semiconductor lasers & cells",
      "Parametric sensitivity analysis utilizing MATLAB simulations"
    ],
    tools: ["MATLAB", "Plasma Sheath Physics", "RF Simulation", "Thin Film Mechanics"]
  },
  {
    id: "vlsi",
    title: "VLSI",
    tag: "Circuit & Physical Layout Design",
    accent: "green",
    icon: "CircuitBoard",
    shortDesc: "Transistor-level digital circuit design, SRAM memory cell layouts, timing calibration, and propagation delay minimization.",
    fullDesc: "End-to-end Very Large Scale Integration (VLSI) methodologies spanning behavioral HDL description down to transistor schematic and layout optimization. Specializing in standard cell design, configurable logic blocks, static timing analysis (STA), and layout verification.",
    highlights: [
      "3:1 Configurable Logic Block (CLB) unit circuit & SRAM layout design in Cadence",
      "Timing sequence calibration, critical path analysis & delay optimization",
      "Automated and manual 4-way double-lane traffic control chip synthesis",
      "Waveform verification & transient analysis in Cadence Virtuoso"
    ],
    tools: ["Cadence Virtuoso", "EDA Playground", "Verilog HDL", "Timing Analysis", "PSpice"]
  },
  {
    id: "fpga",
    title: "FPGA",
    tag: "Reconfigurable Hardware Architectures",
    accent: "amber",
    icon: "Layers",
    shortDesc: "Prototyping high-speed digital architectures on reconfigurable logic blocks with robust Verilog HDL testbenches.",
    fullDesc: "Architecting flexible digital systems utilizing Field-Programmable Gate Arrays. Bridging the gap between algorithm design and hardware realization through efficient resource allocation, LUT/CLB utilization, and clock domain management.",
    highlights: [
      "Custom CLB architecture modeling and functional verification",
      "Comprehensive testbench suites with corner-case signal injection",
      "Digital sequence detectors and finite state machines (FSM) implemented from scratch",
      "Synthesis and compilation workflows using Altera Quartus II & EDA tools"
    ],
    tools: ["Altera Quartus II", "Verilog HDL", "FSM Synthesis", "Timing Closure"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    tag: "Edge AI & Emerging Tech Systems",
    accent: "purple",
    icon: "BrainCircuit",
    shortDesc: "Investigating neural networks and machine learning models for biomedical signal processing and emerging circuit design.",
    fullDesc: "Integrating machine intelligence with low-power hardware systems. Conducting research in the Next Generation System Design Laboratory on emerging technology-based circuit architectures, alongside neural network applications for real-time sensor processing.",
    highlights: [
      "Emerging technology-based circuit and system design research at NDSU",
      "Neural network-driven driver drowsiness detection using MATLAB DSP",
      "Intelligent control algorithms for variable-gain biomedical ventilators",
      "Hardware-aware edge inference and parameter quantization"
    ],
    tools: ["Python", "MATLAB Neural Network", "Signal Processing", "Emerging Tech Systems"]
  }
];

export const educationHistory = [
  {
    degree: "Ph.D. in Electrical and Computer Engineering",
    institution: "North Dakota State University (NDSU)",
    location: "Fargo, ND, USA",
    period: "August 2023 – Present",
    score: "GPA: 4.00 / 4.00",
    status: "In Progress",
    advisor: "Dr. Sumitha George",
    details: [
      "Full-time Graduate Research Assistant at Next Generation System Design Laboratory",
      "Pioneering research into emerging technology-based circuit and system design",
      "Perfect 4.00 / 4.00 GPA throughout doctoral coursework"
    ],
    badgeColor: "cyan"
  },
  {
    degree: "Bachelor of Science in Electrical and Electronic Engineering (EEE)",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    location: "Dhaka, Bangladesh",
    period: "February 2017 – May 2022",
    score: "CGPA: 3.26 / 4.00",
    status: "Graduated",
    advisor: "Dr. Md. Nasim Ahmed Dewan",
    details: [
      "Undergraduate Thesis: 'Ion Energy Distribution in Triple Frequency Capacitive RF Sheath'",
      "Determined optimal fabrication parameter combinations for narrowest and most controllable IED",
      "Analyzed capacitively coupled plasma fed by single and triple-frequency sources with MATLAB modeling",
      "Completed rigorous laboratory sequences in VLSI, Optoelectronics, Microprocessors, and Control Systems"
    ],
    badgeColor: "green"
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Sylhet M.C. College",
    location: "Sylhet, Bangladesh",
    period: "2014 – 2016",
    score: "GPA: 5.00 / 5.00",
    status: "Completed",
    details: [
      "Awarded prestigious Board Merit Scholarship (2016) for outstanding academic distinction",
      "Secured top regional ranking in high school science curriculum"
    ],
    badgeColor: "amber"
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Sylhet Govt. Pilot High School",
    location: "Sylhet, Bangladesh",
    period: "2009 – 2014",
    score: "GPA: 5.00 / 5.00",
    status: "Completed",
    details: [
      "Awarded prestigious Board Merit Scholarship (2014)",
      "Began 10-year competitive Math Olympiad journey during school years"
    ],
    badgeColor: "purple"
  }
];

export const standardizedTests = [
  {
    exam: "GRE (Graduate Record Examination)",
    date: "25th January 2023",
    total: "313 / 340",
    highlight: "Quantitative 167 / 170 (~90th Percentile)",
    breakdown: [
      { name: "Quantitative", score: "167", max: "170", pct: "98%" },
      { name: "Verbal", score: "146", max: "170", pct: "86%" }
    ]
  },
  {
    exam: "IELTS (International English Language Testing System)",
    date: "8th October 2022",
    total: "Band 8.0 / 9.0 (C1 / C2 Proficient)",
    highlight: "Listening 8.5 | Reading 8.5",
    breakdown: [
      { name: "Listening", score: "8.5", max: "9.0", pct: "94%" },
      { name: "Reading", score: "8.5", max: "9.0", pct: "94%" },
      { name: "Writing", score: "7.0", max: "9.0", pct: "78%" },
      { name: "Speaking", score: "7.0", max: "9.0", pct: "78%" }
    ]
  }
];

export const workExperience = [
  {
    role: "Graduate Research Assistant (Full-time)",
    organization: "North Dakota State University",
    lab: "Next Generation System Design Laboratory",
    location: "Fargo, ND, USA",
    period: "August 2023 – Present",
    supervisor: "Dr. Sumitha George (Assistant Professor, ECE)",
    description: "Leading investigative research on emerging technology-based circuit architectures and intelligent system design. Conducting simulations, circuit optimization, and hardware modeling.",
    technologies: ["Emerging Devices", "Circuit Design", "System Architecture", "Python", "MATLAB"]
  }
];

export const academicProjects = [
  {
    id: "oeic",
    title: "Optoelectronic Integrated Circuit (OEIC)",
    lab: "Optoelectronics Lab",
    semester: "July 2021",
    category: "Optoelectronics & Physics",
    featured: true,
    brief: "MATLAB and Simulink-based simulation design for a complete Solar cell (including LED, LASER, and Photodetector).",
    description: "Comprehensive multi-device optoelectronic simulation integrating solid-state photovoltaics, light-emitting diodes, semiconductor laser diodes, and photodetectors. Selected material compositions, modeled quantum efficiency, and created MATLAB numerical algorithms to simulate laser emission spectra and carrier recombination kinetics.",
    techStack: ["MATLAB", "Simulink", "Semiconductor Physics", "Laser Diodes", "Optoelectronics"],
    keyAchievements: [
      "Engineered full simulation workflow for integrated solar cell, LED, LASER, and Photodetector",
      "Formulated precise material selection and stoichiometric bandgap calculations",
      "Authored custom MATLAB routines modeling stimulated emission and threshold current density"
    ]
  },
  {
    id: "traffic-control",
    title: "Smart Traffic Control System",
    lab: "VLSI 2 Lab",
    semester: "July 2021",
    category: "VLSI & Chip Design",
    featured: true,
    brief: "Design of a chip to control traffic in a 4-way junction with a double lane using EDA playground and Cadence.",
    description: "Architected a full digital traffic regulation ASIC for a complex 4-way junction featuring double lanes per direction. System operates on an autonomous sensor-driven cycle while providing priority overrides for emergency response vehicles and atypical congestion patterns.",
    techStack: ["Verilog HDL", "Cadence Virtuoso", "EDA Playground", "Testbench Verification", "Waveform Analysis"],
    keyAchievements: [
      "Designed robust finite-state machine (FSM) handling double-lane 4-way traffic",
      "Incorporated fail-safe manual command override logic for emergency vehicles",
      "Authored complete Verilog testbench and performed transient waveform verification in Cadence"
    ]
  },
  {
    id: "clb",
    title: "Configurable Logic Block (CLB)",
    lab: "VLSI 1 Lab",
    semester: "January 2021",
    category: "VLSI & Chip Design",
    featured: true,
    brief: "Simulate the circuit-level implementation of a 3:1 CLB unit (circuit design & layout of SRAM, memory cell) using Cadence.",
    description: "Detailed transistor-level schematic capture and physical layout design of a 3-input, 1-output reconfigurable logic tile. Designed internal SRAM storage cells, multiplexer tree, and routing interconnects, followed by rigorous static timing analysis.",
    techStack: ["Cadence Virtuoso", "SRAM Layout", "Transistor Sizing", "Timing Calibration", "Delay Optimization"],
    keyAchievements: [
      "Implemented full transistor schematic and custom silicon layout for SRAM cells and 3:1 CLB",
      "Calibrated timing sequences and operational clock periods across varying capacitive loads",
      "Calculated propagation delay across multiple corners and minimized critical path latencies"
    ]
  },
  {
    id: "ic-tester",
    title: "Logic IC Tester",
    lab: "Microprocessor Lab",
    semester: "January 2021",
    category: "Embedded & Microcontroller",
    featured: false,
    brief: "Design of a microcontroller circuit using STM32CubeIDE & Proteus to identify the operation and health of a logic Gate IC.",
    description: "Built an intelligent automated IC testing platform based on an ARM Cortex microcontroller. The system exercises all input truth tables and senses outputs in real time to classify IC type (AND, NAND, OR, XOR, etc.) and detect stuck-at faults.",
    techStack: ["STM32CubeIDE", "Proteus", "ARM Cortex", "C/C++", "Automated Testing"],
    keyAchievements: [
      "Single-handedly engineered embedded firmware in C and schematic layout in Proteus",
      "Automated truth table stimulus generation and instant fault-isolation algorithm"
    ]
  },
  {
    id: "ventilator",
    title: "Controller Design for a Ventilator",
    lab: "Control System Lab",
    semester: "January 2020",
    category: "Control & Biomedical",
    featured: false,
    brief: "6-man collaborative project: Variable-Gain Control for Respiratory Systems using MATLAB and Simulink.",
    description: "Formulated adaptive closed-loop feedback algorithms for critical care mechanical ventilators. Determined the transfer function of human pulmonary compliance and airway resistance, optimizing PID/variable-gain parameters to guarantee patient respiratory stability.",
    techStack: ["MATLAB", "Simulink", "Closed-Loop Control", "Transfer Functions", "PID Tuning"],
    keyAchievements: [
      "Developed the computational program to derive the overall transfer function of the closed-loop system",
      "Ensured rapid transient rise time with zero overshoot to prevent barotrauma in delicate lung models"
    ]
  },
  {
    id: "bit-detector",
    title: "Bit Sequence Detector",
    lab: "Digital Electronics Lab",
    semester: "January 2020",
    category: "Digital Logic",
    featured: false,
    brief: "Detects a specific 4-bit binary sequence from a 12-bit stream and counts occurrence frequency.",
    description: "Designed a discrete digital system to identify pre-programmed 4-bit sequential bit patterns arriving over serial streams. Counted occurrences with binary counters and 7-segment digital displays.",
    techStack: ["Proteus", "Digital Logic", "Flip-Flops", "FSM", "Hardware Simulation"],
    keyAchievements: [
      "Synthesized custom state machine transition table with minimum gate count",
      "Implemented every component from scratch in Proteus without pre-packaged high-level chips"
    ]
  },
  {
    id: "stepper-motor",
    title: "Stepper Motor Control: Full and Half Step",
    lab: "Power Electronics Lab",
    semester: "January 2020",
    category: "Power Electronics",
    featured: false,
    brief: "Full-step and half-step switching excitation driver design completed in Proteus.",
    description: "Constructed dual-mode stepper motor drive logic enabling high-torque full-step operation and precision half-step angular resolution, with regenerative flyback diode protection.",
    techStack: ["Proteus", "Power Electronics", "Driver Circuits", "H-Bridge / Transistor Switches"],
    keyAchievements: [
      "Designed switching sequence generator for both full and half step modes",
      "Modeled back-EMF suppression and current limiting for steady thermal dissipation"
    ]
  },
  {
    id: "fm-radio",
    title: "FM Radio Hardware Transmitter & Receiver",
    lab: "Communication Lab",
    semester: "January 2019",
    category: "RF & Analog Communications",
    featured: false,
    brief: "Breadboard hardware circuit transmitting audio from a phone to be received on an FM radio receiver.",
    description: "Assembled, tuned, and optimized an analog RF frequency-modulated transmitter on a solderless breadboard. Successfully broadcast audio wirelessly over standard commercial FM frequencies (88–108 MHz).",
    techStack: ["Breadboard Hardware", "RF Oscillators", "Varactor Diodes", "Analog Circuit Tuning"],
    keyAchievements: [
      "Tuned LC tank circuit oscillator for high frequency stability and minimal harmonic distortion",
      "Optimized antenna matching network for clear audio reception on mobile FM receivers"
    ]
  },
  {
    id: "pfi-plant",
    title: "Power Factor Improvement (PFI) Plant",
    lab: "Power System Lab",
    semester: "January 2019",
    category: "Power Systems",
    featured: false,
    brief: "Simulation project using Arduino & Proteus to adjust capacitance value both manually and automatically.",
    description: "Engineered an automated power factor correction controller that monitors phase lag between voltage and current waveforms and dynamically switches capacitor stages to restore unity power factor.",
    techStack: ["Arduino", "Proteus", "C++", "Power Factor Correction", "LCD Display"],
    keyAchievements: [
      "Wrote responsive firmware for real-time power factor phase measurement and manual override",
      "Designed workable Proteus schematic with relay-driven capacitor stepping banks"
    ]
  },
  {
    id: "drowsiness-detector",
    title: "Drowsiness Detector",
    lab: "Digital Signal Processing Lab",
    semester: "January 2019",
    category: "Signal Processing & AI",
    featured: false,
    brief: "MATLAB-based project using neural networks to determine whether a vehicle driver is falling asleep.",
    description: "Developed an early proof-of-concept neural network model that processes behavioral and physiological telemetry to issue automated fatigue alarms and prevent traffic accidents.",
    techStack: ["MATLAB", "Neural Networks", "DSP", "Pattern Classification", "Feature Extraction"],
    keyAchievements: [
      "Trained multi-layer perceptron neural network on alertness indicators",
      "Demonstrated accurate drowsiness prediction under noisy real-world sensory inputs"
    ]
  },
  {
    id: "ir-motion",
    title: "IR Motion Detector",
    lab: "Electronic Circuits Lab",
    semester: "July 2018",
    category: "Analog & Sensors",
    featured: false,
    brief: "Circuit engineered to detect human or object motion in pitch dark environments.",
    description: "Designed an active infrared emitter and phototransistor detection stage with high-gain differential amplification and noise-filtering comparator stages for reliable night detection.",
    techStack: ["Analog Circuits", "Infrared Emitters & Detectors", "Op-Amps", "Breadboard"],
    keyAchievements: [
      "Maximized signal-to-noise ratio in low-visibility environments",
      "Configured Schmitt-trigger thresholding to eliminate false positive triggers"
    ]
  },
  {
    id: "wind-turbine",
    title: "Single Phase AC from Vertical Axis Wind Turbine",
    lab: "Energy Conversion Lab",
    semester: "July 2018",
    category: "Renewable Energy",
    featured: false,
    brief: "Produced considerable electricity while keeping output voltage fluctuations closely regulated.",
    description: "Constructed an omnidirectional vertical axis wind turbine (VAWT) generator prototype paired with rectifier and regulator circuitry to convert variable kinetic wind energy into stable AC power.",
    techStack: ["Electromechanical Conversion", "VAWT", "Voltage Regulation", "Power Generation"],
    keyAchievements: [
      "Stabilized erratic wind-induced voltage fluctuations within tight operational tolerance",
      "Demonstrated efficient low-wind-speed self-starting aerodynamics"
    ]
  },
  {
    id: "building-design",
    title: "3-Storey Building Electrical Design",
    lab: "Electrical Service Design Lab",
    semester: "July 2021",
    category: "Electrical CAD & Infrastructure",
    featured: false,
    brief: "AutoCAD-based floor plan, fitting fixture layout, conduit routing, and switchboard diagrams with wire ratings.",
    description: "Developed code-compliant commercial electrical blueprints including first-floor distribution layout, conduit schematics, circuit breaker sizing, and phase balancing calculations.",
    techStack: ["AutoCAD", "Electrical Standards", "Conduit Routing", "Wire Ampacity Sizing"],
    keyAchievements: [
      "Calculated exact wire ampacity and safety margins for every building branch circuit",
      "Produced production-ready AutoCAD schematics for switchboards and conduit routing"
    ]
  }
];

export const awardsAndAchievements = {
  pedigreeSummary: "Nearly 10 years of competitive Math Olympiad pedigree, multiple national and regional championships, and consecutive government board merit scholarships.",
  mathOlympiad: [
    {
      title: "Champion — National Math Olympiad",
      year: "2015",
      level: "National",
      rank: "1st Place (National Champion)",
      icon: "Trophy",
      color: "amber",
      description: "Secured 1st place in the prestigious Bangladesh National Mathematical Olympiad, competing against top analytical minds from across the entire country."
    },
    {
      title: "Champion — Regional Math Olympiad (5 Consecutive Years)",
      year: "2012 – 2016",
      level: "Regional",
      rank: "5x Undefeated Champion",
      specialNote: "Perfect Scorer in 2016",
      icon: "Crown",
      color: "cyan",
      description: "Achieved an unprecedented 5-year consecutive championship streak at the Regional Math Olympiad, capped off by achieving a 100% Perfect Score in the 2016 tournament."
    },
    {
      title: "2nd Runner Up — National Math Olympiad",
      year: "2016 & 2012",
      level: "National",
      rank: "Podium Finish (3rd Place)",
      icon: "Medal",
      color: "emerald",
      description: "Earned national podium honors in two separate competitive seasons at the National Math Olympiad."
    },
    {
      title: "10th Place — National Undergraduate Math Olympiad",
      year: "2019",
      level: "Collegiate / National",
      rank: "Top 10 Nationally (7th in Regional)",
      icon: "Award",
      color: "purple",
      description: "Placed 10th in the grueling National Undergraduate Math Olympiad and 7th in the regional collegiate qualifier during his time at BUET."
    }
  ],
  scholarships: [
    {
      title: "Board Merit Scholarship — HSC",
      year: "2016",
      authority: "Government Education Board of Bangladesh",
      qualification: "Higher Secondary Certificate Examination (GPA 5.00 / 5.00)",
      description: "Awarded top-tier governmental merit scholarship based on outstanding performance in the national HSC examination."
    },
    {
      title: "Board Merit Scholarship — SSC",
      year: "2014",
      authority: "Government Education Board of Bangladesh",
      qualification: "Secondary School Certificate Examination (GPA 5.00 / 5.00)",
      description: "Received prestigious Board Merit Scholarship recognizing top rank in the national SSC examination."
    }
  ]
};

export const technicalSkills = {
  programming: [
    { name: "Verilog HDL", level: "Advanced", desc: "Chip design, testbenches, FSM synthesis" },
    { name: "MATLAB & Simulink", level: "Advanced", desc: "RF sheath physics, laser modeling, DSP, control" },
    { name: "Python", level: "Proficient", desc: "Data analysis, machine learning, algorithmic modeling" },
    { name: "C / C++", level: "Proficient", desc: "Embedded firmware, microcontroller peripherals" },
    { name: "emu8086 Assembly", level: "Intermediate", desc: "x86 architecture, register-level debugging" }
  ],
  hardware: [
    { name: "Microcontrollers", desc: "STM32 ARM Cortex, Arduino platforms" },
    { name: "Oscilloscope", desc: "High-frequency signal capture, transient probing" },
    { name: "Digital Modulation Trainer", desc: "RF & carrier modulation characterization" },
    { name: "ANACOM Module", desc: "Analog communication systems analysis" },
    { name: "Programmable Logic Controller (PLC)", desc: "Industrial automation & relay ladder logic" }
  ],
  software: [
    { name: "Cadence Virtuoso", desc: "IC schematic capture, SRAM cell layout, transient waveforms" },
    { name: "Altera Quartus II", desc: "FPGA compilation, timing closure, RTL synthesis" },
    { name: "Proteus VSM", desc: "Microcontroller co-simulation, schematic design" },
    { name: "STM32CubeIDE", desc: "ARM firmware development & embedded debugging" },
    { name: "AutoCAD", desc: "Electrical installation blueprints, conduit routing" },
    { name: "PSpice & PSAF", desc: "Analog circuit SPICE modeling & power flow analysis" },
    { name: "Arduino IDE", desc: "Rapid microcontroller prototyping" }
  ],
  presentation: [
    { title: "Project Proposals", desc: "Comprehensive technical specifications & engineering milestones" },
    { title: "Class Slide Presentations", desc: "Clear delivery in front of peers and university faculties" },
    { title: "Research Presentations", desc: "Defending academic methodologies, plasma data, and VLSI results" }
  ],
  languages: [
    { name: "English", proficiency: "Fluent", details: "Fluent in public speaking and formal writing (IELTS 8.0, GRE Verbal 146 / Quant 167)" },
    { name: "Bengali", proficiency: "Native", details: "Mother tongue" },
    { name: "Hindi", proficiency: "Conversational", details: "Fairly understand conversation" }
  ]
};

export const academicReference = {
  name: "Dr. Sumitha George",
  role: "PhD Supervisor",
  title: "Assistant Professor",
  department: "Electrical and Computer Engineering",
  institution: "North Dakota State University",
  location: "Fargo, ND, USA",
  email: "sumitha.george@ndsu.edu",
  phone: "+1 (701)-231-1735"
};
