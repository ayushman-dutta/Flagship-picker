/* =====================================================
   ELEMENTS
===================================================== */

const cardsContainer =
    document.getElementById("cardsContainer");

const selectedCount =
    document.getElementById("selectedCount");

const resetBtn =
    document.getElementById("resetBtn");


const cardOverlay =
    document.getElementById("cardOverlay");

const expandedCard =
    document.getElementById("expandedCard");

const closeCard =
    document.getElementById("closeCard");


const expandedNumber =
    document.getElementById("expandedNumber");

const expandedImage =
    document.getElementById("expandedImage");

const expandedLabel =
    document.getElementById("expandedLabel");

const expandedTitle =
    document.getElementById("expandedTitle");

const expandedText =
    document.getElementById("expandedText");



/* =====================================================
   CARD CONTENT
===================================================== */

/*
    Each number has its own content.

    The number assigned to a physical card
    is randomized.

    The content stays attached to that number.

    Example:

    If Card #4 receives number 17,
    clicking it will show the content
    belonging to number 17.
*/

const cardData = [

    {
        title: "The Vision",
        text: "A simple idea can become something extraordinary when you know how to present it.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Product",
        text: "Every great pitch begins with a product that solves a real problem.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Idea",
        text: "Turn an ordinary thought into an idea people cannot ignore.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Founder",
        text: "People don't just buy products. They buy the confidence of the person presenting them.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Market",
        text: "Know who needs your product and why they should care about it.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Strategy",
        text: "A strong pitch turns a good idea into a believable opportunity.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Challenge",
        text: "Great businesses are built by solving problems that people actually have.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Brand",
        text: "A memorable product deserves a memorable identity.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Customer",
        text: "Build for the person who will actually use what you create.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Story",
        text: "Facts explain your product. A story makes people remember it.",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Pitch",
        text: "You have limited time. Make every second of your pitch count.",
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Team",
        text: "A powerful idea becomes stronger when the right people build it together.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Future",
        text: "Don't just explain what exists. Show people what could exist.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Risk",
        text: "Every ambitious idea carries risk. The job is to show why it is worth taking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Opportunity",
        text: "The best pitches make an opportunity feel impossible to ignore.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Solution",
        text: "A product matters when it provides a solution that is better than the alternatives.",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Problem",
        text: "Before selling your solution, make the audience understand the problem.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Value",
        text: "If your audience cannot understand the value, the pitch has already failed.",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Impact",
        text: "The strongest ideas create value beyond the person who invented them.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Edge",
        text: "What makes your idea different? That difference is your competitive edge.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Growth",
        text: "A good product gets attention. A scalable product creates lasting growth.",
        image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Money",
        text: "A business needs more than an exciting idea. It needs a path to making money.",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Moment",
        text: "Sometimes one well-timed pitch is enough to change everything.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Winner",
        text: "The winning pitch is the one people remember after everyone else has stopped talking.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
    }

];



/* =====================================================
   STATE
===================================================== */

let selectedCards = new Set();



/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

    return array;

}



/* =====================================================
   CREATE CARDS
===================================================== */

function createCards() {

    cardsContainer.innerHTML = "";

    selectedCards.clear();

    selectedCount.textContent = "0";



    /*
        Create numbers 1–24.

        Their positions are randomized.
    */

    const numbers =
        shuffle(
            Array.from(
                { length: 24 },
                (_, i) => i + 1
            )
        );



    numbers.forEach(
        (number, index) => {

            const card =
                document.createElement("div");

            card.className = "card";


            /*
                Unique physical card ID.
            */

            card.dataset.cardId = index;


            /*
                Number permanently assigned
                to this physical card.
            */

            card.dataset.number = number;



            card.innerHTML = `

                <div class="card-inner">

                    <div class="card-front">

                        <span class="top-left">
                            ✦
                        </span>

                        <span class="top-right">
                            ✧
                        </span>

                        <div class="card-symbol">
                            ✦
                        </div>

                        <span class="bottom-left">
                            ✧
                        </span>

                        <span class="bottom-right">
                            ✦
                        </span>

                    </div>


                    <div class="card-back">

                        <span class="number">
                            ${number}
                        </span>

                    </div>

                </div>

            `;



            card.addEventListener(
                "click",
                () => selectCard(card)
            );


            cardsContainer.appendChild(card);

        }
    );

}



/* =====================================================
   SELECT CARD
===================================================== */

function selectCard(card) {

    const cardId =
        card.dataset.cardId;


    /*
        THIS IS THE IMPORTANT PART.

        If the card has already been chosen,
        don't do anything.

        It cannot be selected again.
    */

    if (
        selectedCards.has(cardId)
    ) {

        return;

    }



    /*
        Remember this physical card.
    */

    selectedCards.add(cardId);



    const number =
        Number(card.dataset.number);



    /*
        Disable the physical card.
    */

    card.classList.add(
        "flipped",
        "selected",
        "disabled"
    );



    /*
        Update counter.
    */

    selectedCount.textContent =
        selectedCards.size;



    /*
        Open the large card AFTER
        the small card has flipped.
    */

    setTimeout(
        () => {

            showExpandedCard(number);

        },
        650
    );

}



/* =====================================================
   SHOW EXPANDED CARD
===================================================== */

function showExpandedCard(number) {

    /*
        Array uses number - 1 because
        array indexes start at 0.
    */

    const data =
        cardData[number - 1];



    if (!data) {

        return;

    }



    /*
        Fill the large card.
    */

    expandedNumber.textContent =
        String(number).padStart(2, "0");


    expandedImage.src =
        data.image;


    expandedImage.alt =
        data.title;


    expandedLabel.textContent =
        `CARD ${String(number).padStart(2, "0")}`;


    expandedTitle.textContent =
        data.title;


    expandedText.textContent =
        data.text;



    /*
        Show overlay.
    */

    cardOverlay.classList.add(
        "active"
    );

}



/* =====================================================
   CLOSE EXPANDED CARD
===================================================== */

function closeExpandedCard() {

    cardOverlay.classList.remove(
        "active"
    );

}


closeCard.addEventListener(
    "click",
    closeExpandedCard
);



/*
    Clicking outside the large card
    also closes it.
*/

cardOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === cardOverlay
        ) {

            closeExpandedCard();

        }

    }
);



/*
    ESC key closes the expanded card.
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeExpandedCard();

        }

    }
);



/* =====================================================
   RESET
===================================================== */

resetBtn.addEventListener(
    "click",
    () => {

        /*
            New random number assignment.

            All previously disabled cards
            become selectable again.
        */

        createCards();

    }
);



/* =====================================================
   INITIALIZE
===================================================== */

createCards();