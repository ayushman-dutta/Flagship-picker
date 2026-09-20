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
        title: "Phone with Unlimited Recharge",
        text: "CURVEBALL : You can call anyone but will receive calls only from the people you hate.",
        image: "mobile with unlimited.png"
    },

    {
        title: "Headphones with unlimited battery",
        text: "CURVEBALL : You can use without charging but Plays a 30 second’s unskippable ad after every song.",
        image: "unlimited headphone.png"
    },

    {
        title: "Dream Recorder",
        text: "CURVEBALL : You can record and store the Happiest dreams, but the dream you record will never happen with you in real life.",
        image: "dream recorder.png"
    },

    {
        title: "Bagpack with infinite space",
        text: "CURVEBALL : You can put anything inside, but you can only take out one thing per day.",
        image: "unlimited bagpack.png"
    },

    {
        title: "Smart AI Refrigerator",
        text: "CURVEBALL : It knows exactly what you want to eat but refuses to open until you choose something healthy.",
        image: "smart ai fridge.png"
    },

    {
        title: "Food Coupon With Unlimited Uses",
        text: "CURVEBALL : But it makes you obsese for three days, everytime you order with it.",
        image: "unlimited food coupon.png"
    },

    {
        title: "Spectacles that read people's minds.",
        text: "CURVEBALL : But you can only apply it on unhealthy foods.",
        image: "magical spectacles.png"
    },

    {
        title: "Magical Perfume that makes everyone trust you.",
        text: "CURVEBALL : It has a distinct, lingering undertone of onions.",
        image: "magical perfume.png"
    },

    {
        title: "WiFi Enabled Socks",
        text: "CURVEBALL : Socks that track your steps but disconnected from WiFi if feet smells too bad",
        image: "wifi socks.png"
    },

    {
        title: "Magical Hairdryer that gives perfect hairstyle",
        text: "CURVEBALL : Changes the hairstyle when someone compliments you.",
        image: "magical hairdryer.png"
    },

    {
        title: "Magical Elevator that takes you anywhere.",
        text: "CURVEBALL : Takes you anywhere instantly, but you have to explain to it why you deserve to go there.",
        image: "anywhere elevator.png"
    },

    {
        title: "The Magic Camera That automatically stores happy moments from your life.",
        text: "CURVEBALL : But it cannot capture a moment while you are aware that it is happening.",
        image: "magical camera.png"
    },

    {
        title: "Smart Wallet that automatically tracks your spending and saves money",
        text: "CURVEBALL: But it refuses to let you spend money on things it considers unnecessary.",
        image: "smart wallet.png"
    },

    {
        title: "AI Dating app that gurantees you a partner",
        text: "CURVEBALL: It never tells you why you were matched with them.",
        image: "ai dating app.png"
    },

    {
        title: "A bed which gives you perfect sleep",
        text: "CURVEBALL : Gives you perfect sleep , but before letting you sleep, it replays your most embarrassing moment of the day.",
        image: "magic bed.png"
    },

    {
        title: "A Water Bottle that never runs out",
        text: "CURVEBALL : Every time it refills, someone somewhere loses the same amount of water.",
        image: "Magical bottle.png"
    },

    {
        title: "T-shirt that changes color with your mood",
        text: "CURVEBALL: It reveals your real mood even when you're trying to hide it.",
        image: "magical tshirt.png"
    },

    {
        title: "MAGIC MIRROR that gives feedback on how you look",
        text: "CURVEBALL: It gives brutally honest feedback whenever you disagree with it.",
        image: "magic mirror.png"
    },

    {
        title: "A bicycle that never tires you out",
        text: "CURVEBALL: The faster you pedal, the harder it becomes to control the bicycle.",
        image: "cycle.png"
    },

    {
        title: "Phone that automatically deletes unnecessary photos",
        text: "CURVEBALL: It decides which photos are unnecessary based on whether you remember taking them.",
        image: "auto deleter.png"
    },

    {
        title: "A Doorbell That Identifies Visitors",
        text: "CURVEBALL : It tells you who is outside but also tells them exactly what you're doing inside.",
        image: "doorbell.png"
    },

    {
        title: "Smart Spoon That Counts Calories",
        text: "CURVEBALL : It counts calories only after you've swallowed the food.",
        image: "spoon.png"
    },

    {
        title: "A toothbrush that guarantees perfect dental health.",
        text: "CURVEBALL : It refuses to stop brushing until it thinks your teeth are clean.",
        image: "brush.png"
    },

    {
        title: "A suitcase that can hold an unlimited amount of luggage without getting heavier.",
        text: "CURVEBALL: You can only take things out at your destination.",
        image: "suitcase.png"
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