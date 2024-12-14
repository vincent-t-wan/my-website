// src/experiencedata.js

export const experiencedata = [
  { // TODO: add bolded words, and quantified results, to this AND the resume! Also refine the Dayforce one for resume purposes...
    id: 1,
    title: "Software Developer at Dayforce",
    location: "Toronto, Ontario, Canada",
    description:
      ["Delivered an accessible user interface that generates complex visualizations based on company report datasets for the _Government of Canada_, as well as widgets that provide key company metrics with _AI-generated_ predictions for subscribed customers, using _C#, TypeScript, and React_, resulting in a _100% increase_ in VAS revenue for extensibility and integration services",
        "Met tight deadlines for the November and February release by prioritizing critical features like generating report datasets and integrating dashboard _PowerBI_ visualizations. Actively resolved _2+_ critical bugs per sprint and incorporated customer feedback, ensuring _100%_ customer compliance.",
        "Contributed to _5+_ high-impact features like integrating multiple datasets within a single dashboard by working closely with senior developers and product managers, collaborating with _cross-functional_ teams, and aligning team goals with business priorities, resulting in a _20% increase_ in overall company communications."],
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
      ["Provided data on accumulated fuel and energy values of a vehicle’s lifetime to customers by utilizing _Firestore_ and applying the accumulator pattern on vehicle signals, alongside collaborating with the team to determine optimal signal processing methods, thus giving customers more complex insight into their vehicles.",
        "Increased the security of customer data by developing a _POST API endpoint_ that redirects fleet credentials to be securely stored in _Vault_ rather than an _SQL database_.",
        "Utilized _Terraform_ to relocate a _Pub/Sub_ topic across the entire project and configure permissions for a legacy service to access it, effectively improving the overall infrastructure of the data platform."],
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
      ["Created a user-friendly _Python_ interface for the simulated PLC utilizing byte manipulation in shared memory, enabling clients to program and display _real-time_ statistics through a cross-platform GUI toolkit, thereby significantly increasing the simulation software’s functionalities.",
        "Manually verified servo delay of _7.6 milliseconds_ by recording shuttle and servo positions and velocities at various master speeds using a high-speed camera and physics modeling tool (_Tracker_), and determining if the data suggests a linear correlation, enhancing my proficiency in data analysis.",
        "Replaced all “pallet” strings in the simulation software with “shuttle” through cross-team collaboration, including contacting other teams for source files and software to generate diagrams and gifs, thus saving _2 weeks’_ worth of work time for the software team."],
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
      ["Developed new features for their Video Conference service such as whiteboard color and highlighting options, emoji reactions to messages, and a permissions dialog, using _Java, React, and Redux_, increasing customer satisfaction.",
        "Ensured that the Video Conference service follows ARIA accessibility standards by using _HTML, CSS, and JavaScript_, to make content aria-labeled, tab accessible, and styled to meet the _Web Content Accessibility Guidelines (WCAG)_.",
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
        "Led and fostered a _dynamic_ team of four interns by _taking initiative_ during meetings and making sure everyone stayed on track, gaining valuable leadership and management skills.",
        "Perfected my design thinking skills by _conducting research, brainstorming, and collaborating_ with my team to create a project addressing a solution for the lack of individualized evaluation resources for assistive devices.",
        "Completed certifications for _Microsoft Azure Fundamentals and Microsoft Azure AI Fundamentals_ from taking their online learning paths consisting of approximately _100 hours_ of content and diligent studying, as a result benefitting my project component."],
    image: 'resources/azure.png',
    buttonText: "see",
    date: "May 2021 - Aug 2021",
    link: "https://uwaterloo.ca/co-operative-education/waterloo-experience-accelerate-home/",
  }
];