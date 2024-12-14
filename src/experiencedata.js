// src/experiencedata.js

export const experiencedata = [
  { // TODO: add bolded words, and quantified results, to this AND the resume! Also refine the Dayforce one for resume purposes...
    id: 1,
    title: "Software Developer at Dayforce",
    location: "Toronto, Ontario, Canada",
    description:
      ["Delivered an accessible user interface that generates complex visualizations based on company report datasets for the <b>Government of Canada</b>, as well as widgets that provide key company metrics with <b>AI-generated</b> predictions for subscribed customers, using <b>C#, TypeScript, and React</b>, resulting in a <b>100% increase</b> in VAS revenue for extensibility and integration services",
        "Met tight deadlines for the November and February release by prioritizing critical features like generating report datasets and integrating dashboard <b>PowerBI</b> visualizations. Actively resolved <b>2+</b> critical bugs per sprint and incorporated customer feedback, ensuring <b>100%</b> customer compliance.",
        "Contributed to <b>5+</b> high-impact features like integrating multiple datasets within a single dashboard by working closely with senior developers and product managers, collaborating with <b>cross-functional</b> teams, and aligning team goals with business priorities, resulting in a <b>20% increase</b> in overall company communications."],
    image: 'resources/dayforce.jpg',
    buttonText: "see",
    date: "May 2024 - Dec 2024",
    link: "https://www.dayforce.com/",
  },
  {
    id: 2,
    title: "Software Developer at Geotab",
    location: "Waterloo, Ontario, Canada",
    description:
      ["Provided data on accumulated fuel and energy values of a vehicle’s lifetime to customers by utilizing <b>Firestore</b> and applying the accumulator pattern on vehicle signals, alongside collaborating with the team to determine optimal signal processing methods, thus giving customers more complex insight into their vehicles.",
        "Increased the security of customer data by developing a <b>POST API endpoint</b> that redirects fleet credentials to be securely stored in <b>Vault</b> rather than an <b>SQL database</b>.",
        "Utilized <b>Terraform</b> to relocate a <b>Pub/Sub</b> topic across the entire project and configure permissions for a legacy service to access it, effectively improving the overall infrastructure of the data platform."],
    image: 'resources/geotab.jpg',
    buttonText: "see",
    date: "Sep 2023 - Dec 2023",
    link: "https://www.geotab.com/",
  },
  {
    id: 3,
    title: "Software Developer at Automation Tooling Systems (ATS)",
    location: "Cambridge, Ontario, Canada",
    description:
      ["Created a user-friendly <b>Python</b> interface for the simulated PLC utilizing byte manipulation in shared memory, enabling clients to program and display <b>real-time</b> statistics through a cross-platform GUI toolkit, thereby significantly increasing the simulation software’s functionalities.",
        "Manually verified servo delay of <b>7.6 milliseconds</b> by recording shuttle and servo positions and velocities at various master speeds using a high-speed camera and physics modeling tool (<b>Tracker</b>), and determining if the data suggests a linear correlation, enhancing my proficiency in data analysis.",
        "Replaced all “pallet” strings in the simulation software with “shuttle” through cross-team collaboration, including contacting other teams for source files and software to generate diagrams and gifs, thus saving <b>2 weeks’</b> worth of work time for the software team."],
    image: 'resources/ats.png',
    buttonText: "see",
    date: "Jan 2023 - Apr 2023",
    link: "https://atsautomation.com/",
  },
  {
    id: 4,
    title: "Software Developer at YuJa",
    location: "North York, Ontario, Canada",
    description:
      ["Developed new features for their Video Conference service such as whiteboard color and highlighting options, emoji reactions to messages, and a permissions dialog, using <b>Java, React, and Redux</b>, increasing customer satisfaction.",
        "Ensured that the Video Conference service follows ARIA accessibility standards by using <b>HTML, CSS, and JavaScript</b>, to make content aria-labeled, tab accessible, and styled to meet the <b>Web Content Accessibility Guidelines (WCAG)</b>.",
        "Improved my workplace communication skills by closely working with the QA team to fix bugs and successfully release new features that complied with the performance and design expectations of customers."],
    image: 'resources/yuja-logo.png',
    buttonText: "see",
    date: "May 2022 - Aug 2022",
    link: "https://www.yuja.com/",
  },
  {
    id: 5,
    title: "Project Team Member, Microsoft - Azure & Artificial Intelligence Fundamentals",
    subtitle: "Waterloo Experience (WE) Accelerate Program",
    location: "Waterloo, Ontario, Canada (remote, project-based experience)",
    description:
      ["Waterloo Experience (WE) Accelerate Program.",
        "Led and fostered a <b>dynamic</b> team of four interns by <b>taking initiative</b> during meetings and making sure everyone stayed on track, gaining valuable leadership and management skills.",
        "Perfected my design thinking skills by <b>conducting research, brainstorming, and collaborating</b> with my team to create a project addressing a solution for the lack of individualized evaluation resources for assistive devices.",
        "Completed certifications for <b>Microsoft Azure Fundamentals and Microsoft Azure AI Fundamentals</b> from taking their online learning paths consisting of approximately <b>100 hours</b> of content and diligent studying, as a result benefitting my project component."],
    image: 'resources/azure.png',
    buttonText: "see",
    date: "May 2021 - Aug 2021",
    link: "https://uwaterloo.ca/co-operative-education/waterloo-experience-accelerate-home/",
  }
];