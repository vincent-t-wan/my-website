// src/data.js

// future idea, make it a gif that plays a demo of the project when hovered

export const projectdata = [
    {
      id: 1,
      title: "ARM Microkernel and Train Control",
      tools: "C",
      description:
        ["A robust train control system that drives multiple trains to destinations as quickly as possible while avoiding collisions.", "Runs on a fully written operating system using a combination of C and assembly, featuring context switching, task scheduling, message passing, a name server, event notifications, interrupts and system calls, a clock server, and I/O servers.", "The operating system is deployed to a Raspberry Pi and communicates with the track and trains by sending bytes through a serial line."],
      image: "/assets/arm.jpg",
      link: null,
      key: 'arm',
    },
    {
      id: 2,
      title: "Health Harbor (Hack the North 2023)",
      tools: "CockroachDB, Python, React, PostgreSQL",
      description:
        ["Used APIs from CockroachDB and Cohere to develop a sophisticated pharmaceutical inventory management application featuring an optimized, scalable database for disease categorization, alongside a powerful AI clustering system utilizing state-of-the-art language models for disease diagnosis and medication recommendations.", "Designed an inventory interface for presenting the current stock of medications, with the medication inventory being sourced from an extensive dataset encompassing detailed medication information, quantities, descriptions, and image URLs.", "Implemented database queries and backend endpoints using CockroachDB, Python, PostgreSQL, and Flask."],
      image: "/assets/health_harbor.png",
      link: "https://health.usec.club/search",
      key: 'health_harbor',
    },
    {
      id: 3,
      title: "Grade Analyzer",
      tools: "JavaScript, Python",
      description:
        ["A discord bot that provides functionalities for students and their course grades, such as predicting whether a student should take a certain course, displaying graphs of course grades, and comparing grades with other students.", "Implemented a database server on my Raspberry Pi to store student and grade information.", "Trains a neural network with BERT encodings of course names to make predictions."],
      image: "/assets/grade_analyzer.png",
      link: "https://github.com/vincent-t-wan/grade-analyzer",
      key: 'grade_analyzer',
    },
    {
      id: 4,
      title: "Raspberry Pi GPIO",
      tools: "Python",
      description:
        ["A compilation of mini Raspberry Pi projects involving the use of its GPIO pins.", "Such projects include the game \"Simon Says\" and the use of an LCD display."],
      image: "/assets/raspberrypi.jpg",
      link: "https://github.com/vincent-t-wan/raspberry-pi",
      key: 'raspberry_pi',
    },
    {
      id: 5,
      title: "OS-161",
      tools: "CLanguage, Docker",
      description:
        ["Added new features to the OS-161 Operating System created by Harvard University, including synchronization primitives, system calls, and a smarter virtual memory."],
      image: "/assets/os161.png",
      link: null,
      key: 'os161',
    },
    {
      id: 6,
      title: "My-Movie-List",
      tools: "PostgreSQL, Python, React, Docker",
      description:
        ["Worked with 3 others to create a database-driven movie social networking and social cataloging application website."],
      image: "/assets/mymovielist.png",
      link: null,
      key: 'my_movie_list',
    },
    {
      id: 7,
      title: "Brackey’s Game Jam 2022.2: Sunset",
      tools: "Unity, C#",
      description:
        ["Led the team in creating a 2D multiplayer pixel-art platformer following the theme of \"You're not alone\".", "Created the main menu and game level."],
      image: "/assets/sunset.png",
      link: "https://vincentwan123.itch.io/sunset",
      key: 'sunset',
    },
    {
      id: 8,
      title: "AGL Summer Game Jam 2022: Perfect Fit",
      tools: "Unity, C#",
      description:
        ["Worked with two team members to design a game inspired by the game show \“Hole in the Wall\”.", "Implemented the main menu and game logic, including how the wall moves and the scoring system."],
      image: "/assets/perfectfit.png",
      link: "https://dominic-griffith.itch.io/perfect-fit",
      key: 'perfect_fit',
    },
    {
      id: 9,
      title: "Chess (cs246 Final Project)",
      tools: "C++",
      description:
        ["Chess game, with X11 graphics!"],
      image: "/assets/chessboard.png",
      link: "https://github.com/kaojonathan/chess",
      key: 'chess',
    },
    {
      id: 10,
      title: "Find-Your-Roots (Hack the North 2021)",
      tools: "HTML, CSS, JavaScript, PHP",
      description:
        ["Website for creating your own family tree!", "The project is not fully complete, but it is a great representation of the potential final product."],
      image: "/assets/fyr-pic.png",
      link: "https://github.com/S-Amman-W/Find-Your-Roots",
      key: 'roots',
    },
    {
      id: 11,
      title: "How2GraduateBCS",
      tools: "Node.js, HTML, JavaScript",
      description:
        ["Degree Requirement Checker For UW BCS (Co-op).", "Gives you information about the leftover requirements of your BCS degree at UWaterloo, using your unofficial transcript as input."],
      image: "/assets/howtogradpic.png",
      link: "https://github.com/vincent-t-wan/how2graduatebcs-uwaterloo",
      key: 'graduate',
    },
    {
      id: 12,
      title: "Note-Taking Application (Android)",
      tools: "Android Studio, Kotlin",
      description:
        ["An android application that allows a user to create/manage notes.", "Includes features such as filtering notes by importance and by a search text, deleting notes, randomly creating notes, and clearing notes."],
      image: "/assets/androidnotes.png",
      link: null,
      key: 'notes_android',
    },
    {
      id: 13,
      title: "Battleship Application",
      tools: "JavaFX, Kotlin",
      description:
        ["A JavaFX application featuring the board game Battleship.", "The backend was provided by the professors. I implemented the frontend such as the graphics, the animations, the hit-testing, and the transformations."],
      image: "/assets/battleship.png",
      link: null,
      key: 'battleship',
    },
    {
      id: 14,
      title: "Graphing Application",
      tools: "JavaFX, Kotlin",
      description:
        ["A simple JavaFX graphing application.", "It stores multiple datasets, each with a text title, x and y axis labels, and a list of integer numbers between 0 and 100.", "Selecting a dataset causes a simple bar graph to be shown, alongside basic statistics, and the dataset can be modified.", "Hovering over a bar indicates to the user which bar is being hovered, and clicking a bar \"hides\" it."],
      image: "/assets/graph.png",
      link: null,
      key: 'graph',
    },
    {
      id: 15,
      title: "Note-Taking Application (JavaFX)",
      tools: "JavaFX, Kotlin",
      description:
      ["A JavaFX application that allows a user to create/manage notes.", "Includes features such as filtering notes by importance and by a search text, deleting notes, randomly creating notes, and clearing notes.", "Dragging a .txt file onto the application creates a note with its contents."],
      image: "/assets/javafxnotes.png",
      link: null,
      key: 'notes_java',
    },

  ];