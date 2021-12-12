var dynamite=[];
dynamite[0] = {};
dynamite[1] = {
    id:"2-1",
    storyId: 2,
    storyTitle: "The Explosive Origin of The Nobel Prizes",
    chapterNumber: 1,
    title: "Ascanio Sobrero and The Discovery of Nitroglycerine",
    content: [
        {
            id: 1,
            text: [ "The Explosive Origin of The Nobel Prizes", "Chapter 1: Ascanio Sobrero and The Discovery of Nitroglycerine"],
            background:"/public/images/classroom.jpg",
            tipe: "narasi",
            next: 2
        },
        {
            id: 2,
            text: [
                "Hi, I will be this class' teaching assistant for today."
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            tipe: "",
            next: 3
        },
        {
            id:3,
            text: "I'm going to give you a pop quiz. Are you ready to answer it?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Absolutely!",
                    next: 4
                },
                {
                    text: "Actually, no.",
                    next: 5
                }
            ]
        },
        {
            id: 4,
            text: [
                "Great, let's start!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 6
        },
        {
            id: 5,
            text: [
                "Don't worry, you can find all the information you need in the Dossier", "To open it, click on Menu, then click on the button that says 'Dossier'", "To close it, just do a double click on the page.", "Now let's start!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 6
        },
        {
            id: 6,
            text: "First question, who is the first person to discover Nitroglycerine?",
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            pilihan: [
                {
                    text: "Alfred Nobel",
                    next: 8
                },
                {
                    text: "Ascanio Sobrero",
                    next: 7
                },
                {
                    text: "Justus von Liebig",
                    next: 9
                }
            ]
        },
        {
            id: 7,
            text: [
                "That's correct!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 10
        },
        {
            id: 8,
            text: [
                "Hmm, sorry but you've answered incorrectly.", "Alfred Nobel invented dynamite which is made with Nitroglycerine.", "But the actual person who discovered Nitroglycerine was Ascanio Sobrero"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 10
        },
        {
            id: 9,
            text: [
                "Hmm, sorry but you've answered incorrectly.", "Justus von Liebig was the first person to invent a nitrogen-based fertilizer.", "The person who discovered Nitroglycerine was Ascanio Sobrero"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 10
        },
        {
            id: 10,
            text: [
                "Okay, next question!"
            ],
            charaImg: "/public/images/cogan.png",
            nama: "Supervisor X",
            next: 11
        },
        {
            id: 11,
        }
    ]
};

// module.exports = { chapter };