import { get, ref } from "firebase/database"
import { app } from "./firebase/firebase"
import { FBEvent, Tense } from "./types"
import { parseDate } from "./util"

export const getUpcomingEvents = (events: FBEvent[], tense: Tense) => {
  return events.filter(event => {
      const filterKey = event.end_time ?? event.start_time
      return parseDate(filterKey) >= new Date()
  })
}

export const getEvents = async (): Promise<FBEvent[]> => {
  try {
    // const response = await get(ref(app.db(), '/events'))
    // return response.val()
    // return []
    return [
          {
            "attending_count": 61,
            "cover": {
              "id": "712074284055117",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/348815884_807232924130570_6777321065449900218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1091cb&_nc_ohc=UG2EhwglXskAX9Q2ClD&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfB0647dolPWzYw2Wo39iUNIB-hMHjNQRcKe6CMXLgKOdg&oe=64847F43"
            },
            "created_time": "2023-05-22T09:06:09+0000",
            "description": "Have you seen the new Super Mario Bros. Movie?🤷🏻‍♀️ No?❌ Have you heard of the annual UNSW Adventure Society Ski Trip?🦙⛷️ No? Yes..?🤪\n\nWell… the highly anticipated event is here‼️‼️\n🤌🤌MAMMA MIA!🤌🤌 YES, YOU HEARD THAT RIGHT! ADSOC SKI TRIP 2023 HAS ARRIVED!!!🎿❄️ Join us for an epic time on the slopes🏂 as we bring the magic of the Mushroom Kingdom🍄🏰 to this chilling adventure🥶🥶\n\nGet ready for a one-of-a-kind experience filled with action-packed skiing,⛷️playful competition🎖️😏 and mesmerizing views😍🏔️ It's time to strap on your skis (or snowboard), grab your friends🫶 and embark on a thrilling journey to a winter wonderland❄️⛄️ like no other. Whether you’re an amateur or a speed skiing veteran, there is always room for fun🤗 and learning new skills. YAHOOOO!🤩🤩🤩\n\nThere will be heaps of FUN FILLED activities for all, whether you’re more of a Mario🍕❤️, Luigi🟢, Toad 🍄, Yoshi 🐲🐉, Princess Peach👑🍑, or Bowser👹, including skiing, snowboarding, board games🎲, trivia and of course, battle of the snowballers❄️! This trip is sure to make you the saviour of your kingdom!🦸‍♀️😆\n\nADSOC Ski Trip is the perfect “teleport me to another world” 🗺️🔮✨ experience to spend your term break, or for non-UNSW attendees, the ideal getaway to hang out with your friends.🥰🥰🥰\n\nLet’s-a-go!🥳🥳🥳\n\n\n⛷️⛷️⛷️IMPORTANT INFORMATION⛷️⛷️⛷️\n\nWHEN: Monday 4th September - Thursday 7th September, 2023 (UNSW T2 break) \nWHERE: Perisher and Snowy Valley Resort, Jindabyne, NSW\nPRICING:\nADSOC Members: $805 \nArc Members: $850\nNon-Arc Members: $855\nNote: If you are not already an ADSOC member, you can register with the link on our Facebook page. \n\nTickets will be released at 6:00 PM, Friday 26 May. Press going or interested for event updates. \n\n\n❄️PRICE BREAKDOWN❄️\n\nThe base price for the 2023 Ski Trip includes:\n- 3 x Nights accommodation at the Snowy Valley Resort, Jindabyne\n- 3 day Perisher Ski Lift Pass and Basic Ski or Snowboard Hire \n- Return transfer between Sydney and Jindabyne via Coach \n- Daily Mountain Shuttle\n- All inclusive National Park Fees\n- 3 x Hot Breakfasts (Tuesday, Wednesday, Thursday) \n- 2 x 3 Course Dinners (Tuesday and Wednesday) \n\nOptional Add-Ons \n- $35 for 1 x 2 Hour Lesson (to be paid prior to full payment deadline) \n- $51 for 3 day Snow Jacket and Pants Hire (to be paid on the bus)\n\n‼️PAYMENT DEADLINES & REFUND POLICY‼️\n\nAn initial deposit of $150 is required upon registration to secure a spot.\n\nFriday June 30: Deposit is non-refundable and non-transferable. \n\nSunday 16 July: Remaining payment to be made by this date. \nFull payment is non-refundable. However, they may be transferred. \n\nMonday 14 August: Tickets are non-transferable.",
            "end_time": "2023-09-07T21:00:00+1000",
            "id": "606444648105922",
            "maybe_count": 274,
            "name": "UNSW ADSOC Presents: ADSOC’s Super Smash Ski Party ",
            "place": {
              "name": "Perisher, Jindabyne"
            },
            "start_time": "2023-09-04T14:00:00+1000",
            "updated_time": "2023-06-01T15:11:47+0000"
          },
          {
            "attending_count": 5,
            "cover": {
              "id": "719296393332906",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/351601114_295573576136122_5185326913684714636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1091cb&_nc_ohc=N1YfFqNNuj4AX93mWXK&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfAbz5mZFIbLKfYuyN-MTFuroWFBGLCrsZUYGZsMEXkivQ&oe=648358AA"
            },
            "created_time": "2023-06-04T12:13:34+0000",
            "description": "Not quite in the swing of things for term 2? 😓😓\nWell come start 🏁 your engines instead, as UNSW Adventure Society is back again with a 🏎️ HyperKarting Event!!⚡🤯 \n\nTake your mind off the lectures📖💻 ahead, and watch out 👀 for those corners at Moore Park Hyperkarting! Come along with friends👫or make some new ones whilst battling for first place!🥇Whether you’re still an L plater😖 or an F1 driver🏎️, this event is perfect for you!🥰\n\nWith this discounted package🤑, you'll be receiving 2 x 15 minute races + a BONUS race for the top 14 competitors!!🏃‍♂️\n\nSo buckle up and start the term with some adventure and adrenaline 💥🚀.\nDon’t miss out, registration is open now!\n\n\n---------- EVENT DETAILS ----------\n📅WHEN: Wednesday 21st June (Week 4)\n📍WHERE: Moore Park Hyper Karting (Level 5 Car Park, 207 Park Rd S, Moore Park NSW 2021)\n⏰TIME: 6:30pm - 9pm  \n💸COST: $72 (includes 2-3 races, 15 min each)\n\n\nREGISTER HERE, LIMITED SPOTS AVAILABLE !!!\nhttps://forms.gle/R35WvwdSkus5cQZr9",
            "end_time": "2023-06-21T21:00:00+1000",
            "id": "575720211351384",
            "maybe_count": 31,
            "name": "ADSOC Presents: Moore Park HyperKarting ",
            "start_time": "2023-06-21T18:30:00+1000",
            "updated_time": "2023-06-04T12:16:42+0000"
          },
          {
            "attending_count": 31,
            "cover": {
              "id": "715868180342394",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/350343367_260751026465840_199069163780597591_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1091cb&_nc_ohc=RZOpuTPPmsEAX-a5BIV&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfBtk_MJ6Kjti-EqiJjSFs7SE1tiRQoM-IXf4ifqX3gMfw&oe=6483D1EF"
            },
            "created_time": "2023-05-29T08:37:33+0000",
            "description": "⚠️🚨 ATTENTION BOULDERERS 🚨⚠️ \n\nLooking to get out of the house and find a new hobby? 🧗‍♀️Socialise and meet some new friends? 💞 Or even be a part of ADSOC and BoulderSoc's first ever collab? 🤯\n\nWhether you've never heard of bouldering before, or you’re a beast on the wall🧗🏻‍♀️, this event IS FOR YOU!👊\n\nStart off the trimester strong 💪 and come join us at NOMAD Bouldering Gym to climb 🧗‍♂️, socialise 🗣, eat 🍕 and have an absolutely spectacular day! 😍\n\nWe will provide 🤩FREE🤩 catering,🍕 so come along and support your favourite socieities!🥰\n\n\nIMPORTANT DETAILS!\n📅 WHEN: Saturday, 10th of June (Week 2)\n🏠 WHERE: NOMAD Bouldering Gym\n🕰 TIME: 11:00 am - 4 pm\n💸 COST: $15 for entry + $7 shoe and chalk hire if needed! \n\n\nRegister with the link below ‼️‼️‼️\n\nhttps://forms.gle/F1PhrjrPE8BVW7WA8",
            "end_time": "2023-06-10T16:00:00+1000",
            "id": "793145295787749",
            "maybe_count": 160,
            "name": "UNSW ADSOC x BoulderSoc Presents: Bouldering T2",
            "place": {
              "id": "104476013287461",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.885178070006,
                "longitude": 151.17489868506,
                "state": "NSW",
                "street": "Unit 7, 12 Chester Street",
                "zip": "2038"
              },
              "name": "NOMAD Bouldering Gym"
            },
            "start_time": "2023-06-10T11:00:00+1000",
            "updated_time": "2023-05-29T08:39:20+0000"
          },
          {
            "attending_count": 16,
            "cover": {
              "id": "719765149952697",
              "offset_x": 50,
              "offset_y": 0,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/351567077_181866507864443_7306775474916589105_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1091cb&_nc_ohc=MPFGyQ7kn7UAX98Y4vt&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfBksQEW3ClgVx71TC-3LIRkUYjyEplqzynjBuHlrthG7g&oe=64830403"
            },
            "created_time": "2023-06-05T08:54:55+0000",
            "description": "Winter has arrived 🥶 and there's no better way to be equipped than by copping\n✨💙 The OFFICIAL 2023 ADSOC HOODIE AND BEANIE ✨💙\nWhether it be at home 🏠, on campus 📚, or on the icy slopes during ski trip ❄️ ⛷ - you’ll be guaranteed to stay warm 🔥 and be dripped out, so don’t miss out 😍.\n\n❗️ ORDERS END 11:59PM SUNDAY 18TH JUNE ❗️\n\nPURCHASE HERE:\nhttps://forms.gle/9LnSBTih9mNM9Zt36\n\n🎪 UPCOMING MERCH STALL 🎪\nIf you would like to try on the hoodie/beanie in-person, we will be holding a stall at Arc's Winter Wonderland Festival @ UNSW happening on Wednesday 14th June from 11AM - 5PM. More details will be announced on Facebook and Instagram.\n\n💵 PRICES 💵\nCOMBO Hoodie & Beanie Deal: $55\nHoodie only: $40 ($35 for ski trip attendees)\nBeanie only: $20\n\n👕 HOODIE SPECS 👕\nBrand/make: Bocini CJ1060 Pull Over Hoodie - Unisex \nColours: Charcoal, Bottle Green, Royal Blue\nMaterial: Polyester/cotton fleece with anti pill fabric and a cotton jersey lined hood, 320Gsm\nPrint style: Embroidered front and screen printed back\nSizes: XS, S, M, L, XL, 2XL (size measuring chart)\nPreview hoodie mockups and colours\n\n🎩 BEANIE SPECS 🎩\nBrand/make: Legend Life 4229 Acrylic Cuff Beanie\nColours: Black, Grey\nMaterial: 100% acrylic, AZO free\nDecoration type: Woven patch\nSize: One size-fits-all\nPreview beanie mockups and colours\n\nNOTE: Hoodie and beanie mockups are for reference only, final product may vary slightly.\n\n🚚 LOGISTICS AND PICK-UP 🚚\nAfter this form closes, a bulk order will be sent to our supplier which is estimated to take 3-4 weeks to produce. After our team receives the bulk order, we will announce the time and location of where you can pick-up your merchandise (Most likely UNSW). You will be emailed with pick-up information so keep an eye out for a social media announcement.\n\n🔄 CHANGING YOUR ORDER 🔄\nNOTE: Changes can only be made to your order BEFORE 11:59PM SUNDAY 18TH JUNE. After this date, we will not be able to change your order. If you have made an order and would like to change hoodie size or colour, please edit your google form response. You can do this by locating the email confirmation your previous order.\n\nIf you would like to order multiple hoodies / beanies, please submit this form again.\n\nFor any other enquiries, please message ADSOC on Facebook messenger or email adsocunsw@gmail.com",
            "end_time": "2023-06-18T23:59:00+1000",
            "id": "1311626553068482",
            "maybe_count": 5,
            "name": "UNSW ADSOC PRESENTS: WINTER MERCH",
            "start_time": "2023-06-05T19:00:00+1000",
            "updated_time": "2023-06-05T08:54:55+0000"
          },
          {
            "attending_count": 28,
            "cover": {
              "id": "692440426018503",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/341551001_1202033470679809_2405716241197009539_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1091cb&_nc_ohc=VZqJnDHwFOAAX8wkGDl&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfDmw5UD1lve9V-TZAWPsKaH5tHmTFbdP6PTEy-jLz3DkQ&oe=64840944"
            },
            "created_time": "2023-04-17T01:35:02+0000",
            "description": "End of term assignments and exams📝📚 got you burnt out😫🥲 and hangry?🤬😖\n\nTake a break🧘‍♀️😴 from your last minute cramming🤭💻 this wednesday and visit 🍗🍖UNSW ADSOC’s END OF TERM BBQ🍗🍖 \n\nWe’ll have all the snags 🌭and soft drinks 🥤your heart desires😍😍😍 So be there or you’ll have bad luck for your exams🤩🤩🤩\n\n📆Date: Wednesday 19th April\n⏰Time: 12pm - 2pm\n📍Location: UNSW Kensington Campus Quad",
            "end_time": "2023-04-19T14:00:00+1000",
            "id": "1432542687490653",
            "maybe_count": 37,
            "name": "UNSW ADSOC PRESENTS: END OF TERM BBQ",
            "place": {
              "id": "207012965994566",
              "location": {
                "city": "Kensington",
                "country": "Australia",
                "latitude": -33.916961444128,
                "longitude": 151.23104693011,
                "state": "NSW",
                "zip": "2000"
              },
              "name": "Unsw Quad"
            },
            "start_time": "2023-04-19T12:00:00+1000",
            "updated_time": "2023-04-17T01:35:02+0000"
          },
          {
            "attending_count": 28,
            "cover": {
              "id": "682588750337004",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/338216572_1165053210872475_5711854025267415390_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1091cb&_nc_ohc=TjGkiDRHeHwAX93lRB9&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfBima5PDOgqt-c4k_WoUP-iphzgTm7pAHk0DT23BdIenQ&oe=648403AF"
            },
            "created_time": "2023-03-29T05:41:24+0000",
            "description": "𝑻𝒆𝒆-hee! 🫵🏻🤭 A little 𝒃𝒊𝒓𝒅𝒊𝒆 told me that you’re having a 𝒓𝒐𝒖𝒈𝒉 😥 time shooting your 𝒔𝒉𝒐𝒕 🏌🏻‍♀️ on Hinge.😭\n\n𝑷𝒖𝒕𝒕 not to worry! ⛳️ 𝐀𝐃𝐒𝐎𝐂 can still get your hips 𝒔𝒘𝒊𝒏𝒈ing🏌🏻😧 at our 𝐆𝐎𝐋𝐅 𝐃𝐑𝐈𝐕𝐈𝐍𝐆 𝐑𝐀𝐍𝐆𝐄 𝐄𝐕𝐄𝐍𝐓! \n\nYou’ll get 𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃 𝒃𝒂𝒍𝒍𝒔😏 for 2 hours, so bring your 𝑨-𝒈𝒂𝒎𝒆 and show us how much of a 𝒑𝒍𝒂𝒚𝒆𝒓 🫵🏻 😉 you can be.\n\nLet us show you that WAO 🤣 is not the only 𝒄𝒍𝒖𝒃🏌🏻 that’ll help you 𝒔𝒄𝒐𝒓𝒆.😔\n\nThis event is open to all levels of experience🥳, so whether you bring your friends, or come along to meet new ones 🫂, it’ll be a w𝒉𝒐𝒍𝒆some time!\n\nGet in quick limited spots! Make sure to rego below 👇🏻 \n\n𝐈𝐌𝐏𝐎𝐑𝐓𝐀𝐍𝐓 𝐃𝐄𝐓𝐀𝐈𝐋𝐒\n📆DATE: Wednesday 12th April (WK 9)\n⏰TIME: 4:30-7pm\n⛳️LOCATION: Moore Park Golf Driving Range\n💸COST: $16 (includes 2 hours of unlimited + equipment hire) \n\nREGISTER NOW WITH THE LINK BELOW‼️‼️‼️\nhttps://docs.google.com/forms/d/e/1FAIpQLSdLPof2UsI23rGtPQ2cizVS3ff0OiUs1hCU1LG45OY_MH-alQ/viewform?usp=sf_link",
            "end_time": "2023-04-12T19:00:00+1000",
            "id": "173123312273435",
            "maybe_count": 94,
            "name": "UNSW ADSOC PRESENTS: GOLF DRIVING RANGE @Moore Park",
            "place": {
              "id": "554499001287794",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.896590932882,
                "longitude": 151.2200248674,
                "state": "NSW",
                "street": "Cleveland St"
              },
              "name": "Moore Park Driving Range"
            },
            "start_time": "2023-04-12T16:30:00+1000",
            "updated_time": "2023-03-29T05:41:24+0000"
          },
          {
            "attending_count": 25,
            "cover": {
              "id": "672561394673073",
              "offset_x": 50,
              "offset_y": 47,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/335440690_1304782150079451_3017843273105404976_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1091cb&_nc_ohc=FCDAbJTBN-YAX-ounWD&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfAcikDv8Tdf3hnpu94Hc1OmFG3cA5hSU71n23pT3X0qSg&oe=64834285"
            },
            "created_time": "2023-03-10T08:17:14+0000",
            "description": "Are you ready kids??🗣️🗣️ I can’t hear youuuu??👂🙉\n\nGet ready for a thrilling day as UNSW Adventure Society Presents: ✨FLEXI WEEK KAYAKING & PADDLEBOARDING✨\n\nMid terms got you bummed out and drained😓🤕?? Want to explore🗺️🔎 more of Sydney and try something new?? It’s time for you to rejuvenate💆‍♀️🧘‍♀️, relax😎☺️ and spend a wonderful day at Simpsons Bay🌊🌊\n\nStay afloat or tip over the boat🛶 as you paddle around the cute fishies 🐠🐡 and STUNNING lakeside views🌅🌅 at a discounted price🤑💰\n\nHave an excuse to capsize your friends or race across the river 🏃‍♂️💨 to battle 🥊🤺 it out for title of the speediest💪🚣‍♀️\n\nThis event is for pros and beginners alike so come along and pair up with your bestie🫶, or make new friends👯‍♀️\n\nDid we mention there’ll be a FREE BBQ AND SNACKS?🌭🍬🥤So what are you waiting for? REGISTER NOW!\n\nIMPORTANT DETAILS\n📆WHEN: Thursday 23rd March (Flexi Week 6)\n⏰TIME: 11am - 4pm\n📍WHERE: Bundeena Kayaks\n🤑COST: \nNote: these fees are for a 2hr hire + FREE BBQ & snacks\nSingle kayak: $30\nDouble kayak: $50 ($25 pp) (if you register for double kayak, ensure both individuals register and pay separately. If you wish to pay together, please message ADSOC)\nStand-up paddle boarding: $25 pp\n\nRegister today using the link below‼️‼️‼️‼️\nhttps://docs.google.com/forms/d/e/1FAIpQLSezTZA056imrX0Z_AjOAr3IByh7PZfVA3N9xLzG0hDQaqOBcA/viewform?usp=sf_link",
            "end_time": "2023-03-23T16:00:00+1100",
            "id": "618944263400683",
            "maybe_count": 144,
            "name": "UNSW ADSOC PRESENTS: FLEXI WEEK KAYAKING AND PADDLEBOARDING",
            "place": {
              "id": "72084024433",
              "location": {
                "city": "Bundeena",
                "country": "Australia",
                "latitude": -34.0828738909,
                "located_in": "333902543934865",
                "longitude": 151.13984023103,
                "state": "NSW",
                "street": "Bonnie Vale Picnic Grounds",
                "zip": "2230"
              },
              "name": "Bundeena Kayaks"
            },
            "start_time": "2023-03-23T11:00:00+1100",
            "updated_time": "2023-03-10T11:45:37+0000"
          },
          {
            "attending_count": 42,
            "cover": {
              "id": "661091625820050",
              "offset_x": 50,
              "offset_y": 44,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/332171715_733620634998701_8028265551858441541_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1091cb&_nc_ohc=CqjQppH1UFIAX_MAYBC&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfD8osT5ceIsyH4hr29A7GM-TBCNqedfnU0athEmfF-zNQ&oe=64835C85"
            },
            "created_time": "2023-02-19T06:08:15+0000",
            "description": "🚨CALLING ALL BOULDERERS🚨\n\n\n🦙UNSW ADSOC is back and here to provide you with a rockin day🗿\n\nReady to get out of that summer☀️ slump?💤 Or maybe you want to pretend uni hasn’t started…EITHER WAY this event is perfect for you✨ \n\nCome along and test those summer gains💪🏽 or lose that extra summer weight🏋🏻‍♀️ You’ll also get to socialise and make new friends💌 Whether you’ve never tried bouldering or are a bouldering monkey🙈, this event is perfect for anyone that is keen‼️\n\nADSOC will also provide 🤑 FREE 🤑 catering with just a GOLD COIN donation. This will go towards the charity of YOUR choice. \n\nSo come down to BlocHaus Bouldering in Marrickville, to climb🧗make friends👭🏻eat🍕and make a difference😊\n\n\n---------- IMPORTANT DETAILS ---------\n📆 WHEN: Sunday, 5 March (Week 3) \n⏰ TIME: 11am - 4pm (approx)\n📍WHERE: BlocHaus Bouldering Sydney, Marrickville\n💲COST: $16 entry + $6 shoe hire will be available if you need it on the day\n\nRegister with the link below‼️‼️‼️\n\nhttps://forms.gle/6Seus6kb2mykTd6m7",
            "end_time": "2023-03-05T16:00:00+1100",
            "id": "504007858570778",
            "maybe_count": 234,
            "name": "UNSW ADSOC PRESENTS: Bouldering @ BlocHaus",
            "place": {
              "id": "109576570440144",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.90868,
                "longitude": 151.1676,
                "state": "NSW",
                "street": "49 Fitzroy Street Marrickville",
                "zip": "2204"
              },
              "name": "BlocHaus Marrickville"
            },
            "start_time": "2023-03-05T11:00:00+1100",
            "updated_time": "2023-02-19T09:55:02+0000"
          },
          {
            "attending_count": 23,
            "cover": {
              "id": "661593105769902",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/332035262_618284463467055_4152339776747728084_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1091cb&_nc_ohc=Gd-zXnvrifAAX8HWnaI&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfD8QNXXOf6-mPtGuDROCujqZKFLZW3cDI-3jzu8GPzdXg&oe=64843D46"
            },
            "created_time": "2023-02-20T00:07:22+0000",
            "description": "Missed out on our Subcommittee Recruitment deadline?!?! 😥😥\n\nNOT TO WORRY!! Applications have been extended until Friday 24th February 11:59PM!!! 😁😁\n\nThis is your last chance, so make sure you sign up now: \nhttps://forms.gle/yZBaeCoZ4vybduRT6\n\n----------\n\nUNSW Adventure Society (ADSOC) is a non-academic, social club that offers outdoor experiences to enrich the experiences of university students. \n\nADSOC prides itself as being inclusive of ALL fitness levels and this is reflected in our broad range of events held throughout our beginner friendly events such as our annual Ski Trip and flagship bouldering events.\n\nADSOC promotes both the physical and social benefits that outdoor and indoor activities bring and a healthy work-life balance.\nIf you resonate with these values then joining the ADSOC committee is a great way to support them! It is the perfect opportunity to express your creative side or test your organisational abilities. ADSOC is all about self improvement while having fun, making memories and life long friends!\nStudents from all degrees and years are encouraged to apply for subcommittee positions. Experience is highly regarded but not essential.\n\nWe are currently recruiting for 4 portfolios:\n- Events\n- Human Resources\n- Marketing\n- Sponsorships\n\nInterviews will be conducted on a rolling basis until Week 3 of T1.\n\nFor more details on the roles and criteria please read the document below:\nhttps://drive.google.com/file/d/1AG4hYCc8na4gIb-2r0fn4Cu3A3BymvuI/view?usp=share_link\n\nSuccessful applicants will be contacted via email with your allotted interview time which will be conducted on campus.\n\nIf you have any further questions, you are more than welcome to contact us via our FB page or email at: adsocunsw@gmail.com.\nWe look forward to your interest into joining our quirky and joyous fam ❤",
            "end_time": "2023-02-24T23:59:00+1100",
            "id": "891148412007728",
            "maybe_count": 24,
            "name": "UNSW ADSOC Presents: Subcommittee Recruitment [EXTENDED]",
            "place": {
              "id": "50461955643",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.917010287581,
                "longitude": 151.23047590256,
                "state": "NSW",
                "zip": "2052"
              },
              "name": "UNSW"
            },
            "start_time": "2023-02-20T11:15:00+1100",
            "updated_time": "2023-02-20T00:53:12+0000"
          },
          {
            "attending_count": 30,
            "cover": {
              "id": "649115477017665",
              "offset_x": 50,
              "offset_y": 40,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/328153200_1203275500306480_5889146375913190998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1091cb&_nc_ohc=zTL_YcOyGe8AX-xn41n&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfBEPpRZEDss252EOfZJ6DaxASiA2iCAxNn_cPVC_Och8g&oe=64834895"
            },
            "created_time": "2023-02-01T06:34:56+0000",
            "description": "Haven’t gotten enough sun this summer because you stayed inside playing video games?🎮 New year's resolution to get your daily 10k steps in?🏃‍♂️💪\n\nDon't fear😱 as UNSW Adventure Society Presents: ✨O-Week Coastal Walk✨\n\nWhether you're starting your first year at uni😇 or it’s your sixth and ‘last’🤭 this is a great opportunity to begin the year making new friends and having a banging time🥳🥳🥳\n\nWe’re doing an uno reverse🔄 from last year and starting the walk from Bondi to Coogee beach☀️🌊, with a lunch break in bronte🤤🥰\n\nAt the end of the walk we’ll be having 🍕🍕🍕FREE PIZZA🍕🍕🍕, go for a swim and also play some fun beach games!!🏖️🏐\n\nFeel free to bring any pets along on the day 🐶😸\n\nWe can’t wait to meet our new fellow adventurers🥰🥰🥰\n\n\n📍Location: Bondi Beach to Coogee Beach\n📆 Date: Sunday 12th of February (O-Week)\n⏰ Time: 11:00AM – 4:00PM (Meet at 11 sharp for a 11:15 start)\n🤑 Cost: FREE!!!\n\n\nREGISTER HERE ‼️‼️‼️\nhttps://docs.google.com/forms/d/e/1FAIpQLSfrtVNdWPLqTdnPbues-pRytroqJE44KotoO9Oy2TTSLIsE0w/viewform?usp=sf_link",
            "end_time": "2023-02-12T16:00:00+1100",
            "id": "593349879509554",
            "maybe_count": 68,
            "name": "UNSW ADSOC PRESENTS: OWEEK COASTAL WALK",
            "place": {
              "id": "231930360637432",
              "location": {
                "city": "Coogee",
                "country": "Australia",
                "latitude": -33.92222,
                "longitude": 151.25708,
                "state": "NSW",
                "street": "Bondi To Coogee Walk",
                "zip": "2034"
              },
              "name": "Bondi To Coogee Beach Coastal Walk"
            },
            "start_time": "2023-02-12T11:00:00+1100",
            "updated_time": "2023-02-08T10:51:18+0000"
          },
          {
            "attending_count": 11,
            "cover": {
              "id": "648600067069206",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/328280489_750561810018093_4829106191678275792_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1091cb&_nc_ohc=DzRa7k9z26AAX_joe9B&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfDgn_JfXLmwchWu2gGN1WbbB2uis-Lx9wDsm9z5Ppzlww&oe=6483A1C5"
            },
            "created_time": "2023-01-31T06:53:35+0000",
            "description": "‼️ALERT‼️\n\nIT’S 2023 AND UNSW Adventure Society is back and better than ever🦙🤿🌋🫶🏼⚡️🏓🎿🧗🏻‍♀️🛶🏖️\n\nIf adventure is what you’re looking for👀, you’ve come to the right place🤪. \n\nWhether you’re a returning adventurer🤸🏻‍♀️or a new pirate🏴‍☠️ on this ship🚢 , ADSOC has a jam-packed lineup for you🤩🏃🏻 full of new and thrilling experiences to shake up your year!⚡️🤝\n\nDo you ever have that urge to explore and try new things?🙋🏻‍♀️ Get out of your comfort zone?🙃 To make new friends and memories as you go?❤️ Well, UNSW ADSOC has the ability to satisfy these urges! It is the pinnacle of adventure, simultaneously offering both excitement🤣 and fear😖. We offer a range of events such as, bouldering🧗🏻‍♀️, kayaking🛶, hiking🥾, and most notably our annual SKI TRIP⛷️! Through these events you will meet some amazing people, and hopefully form lasting friendships👫👭🏻👬\n\nWe have also partnered up with some great sponsors this year in order to maximize the value of your membership😮 By providing amazing discounts and benefits🤑, we hope you fulfill your desire for adventure✌🏼You’ll receive these in a goody bag, along with some other special treats when you sign up as a member this O Week🍭! \n\nIf you want more information about our deals, feel free to come down to our stall and have a chat. We’ll also have a special activity running, where you’ll have the chance to swing and hopefully score🎯🙃\n\nADSOC offers a welcoming hand to all🫴🏻 and would love to see our family of adventurers and explorers grow🗺️ \n\nSo join us at UNSW’s 2023 O Week, and come down and say hi at our stall!💙\n\n\n---------- IMPORTANT DETAILS ---------\n\n📅WHEN: MON 6 - THURS 9 February \n⏰TIME: 10am - 4pm \n📌WHERE: QUADRANGLE, UNSW \n🤑COST: FREE !!\n\nMembership Registration Form:\nhttps://forms.gle/qy72Pn69rK3DGcvX6",
            "end_time": "2023-02-09T16:00:00+1100",
            "id": "905114784166277",
            "maybe_count": 29,
            "name": "UNSW ADSOC @ O-WEEK 2023",
            "place": {
              "id": "207012965994566",
              "location": {
                "city": "Kensington",
                "country": "Australia",
                "latitude": -33.916961444128,
                "longitude": 151.23104693011,
                "state": "NSW",
                "zip": "2000"
              },
              "name": "Unsw Quad"
            },
            "start_time": "2023-02-06T10:00:00+1100",
            "updated_time": "2023-02-02T12:35:28+0000"
          },
          {
            "attending_count": 14,
            "cover": {
              "id": "636879638241249",
              "offset_x": 50,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/325359467_1111906612818781_6697240436815008657_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1091cb&_nc_ohc=9ha-uw6o2-sAX93VTtn&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfB_uPsl1Bv8_6XDMPJztIihwq_XQtA37-DOsbofqbs4yg&oe=64844251"
            },
            "created_time": "2023-01-13T03:09:45+0000",
            "description": "UNSW Adventure Society (ADSOC) is a non-academic, social club that offers outdoor experiences to enrich the experiences of university students. \n\nADSOC prides itself as being inclusive of ALL fitness levels and this is reflected in our broad range of events held throughout our beginner friendly events such as our annual Ski Trip and flagship bouldering events.\n\nADSOC promotes both the physical and social benefits that outdoor and indoor activities bring and a healthy work-life balance.\nIf you resonate with these values then joining the ADSOC committee is a great way to support them! It is the perfect opportunity to express your creative side or test your organisational abilities. ADSOC is all about self improvement while having fun, making memories and life long friends!\nStudents from all degrees and years are encouraged to apply for subcommittee positions. Experience is highly regarded but not essential.\nWe are currently recruiting for 4 portfolios:\n- Events\n- Human Resources\n- Marketing\n- Sponsorships\n\nInterviews will be conducted on a rolling basis until Week 3 of T1.\nFor more details on the roles and criteria please read the document below:\nhttps://drive.google.com/file/d/1AG4hYCc8na4gIb-2r0fn4Cu3A3BymvuI/view?usp=share_link\n\n--------- HOW TO APPLY ---------\nFill out the following application form to APPLY:\nhttps://forms.gle/yZBaeCoZ4vybduRT6\nApplications close Monday 20th of February 11:59pm.\nSuccessful applicants will be contacted via email with your allotted interview time which will be conducted on campus.\nIf you have any further questions, you are more than welcome to contact us via our FB page or email at: adsocunsw@gmail.com.\nWe look forward to your interest into joining our quirky and joyous fam ❤",
            "end_time": "2023-02-20T00:00:00+1100",
            "id": "1624106448059685",
            "maybe_count": 39,
            "name": "UNSW ADSOC Presents: Subcommittee Recruitment",
            "start_time": "2023-02-06T00:00:00+1100",
            "updated_time": "2023-02-20T00:51:58+0000"
          },
          {
            "attending_count": 15,
            "cover": {
              "id": "588631099732770",
              "offset_x": 50,
              "offset_y": 40,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/314668973_588631096399437_1256165443501369447_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1091cb&_nc_ohc=nWet_FF3SBsAX86axkc&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfDcWl-BknffJgEaeym6gi0m2e8ony_CBaK8ltcypdNXwA&oe=64832A1F"
            },
            "created_time": "2022-11-06T23:58:06+0000",
            "description": "🛒 PURCHASE HERE 🛒\nhttps://forms.gle/s2tdgNXMLLYnXApPA\n\n\nDon’t forget your umbrella.. cause you’ll need it with this\n\n☔️☔️ INCOMING ADSOC DRIP ☔️☔️\n\nADSOC has you sorted for the upcoming ☀️ SUMMER SEASON ☀️ that is just around the corner with our freshly released ✨👒 BUCKET HATS 👒✨. Whether you’re sunbathing on the beach 🏖️, kayaking on the water 🛶, or anywhere in the great outdoors 🌄 - you’ll be guaranteed to stay sun safe 🧴 and gain so much clout, so don’t miss out 😍. \n\nBucket hats are perfect for any adventurer and will be available only in a black colour with a medium size fit (58cm).\n \n\n🤑 PRICE 🤑\n$15 for Arc members\n$20 for non-arc members\n\n🚚 PICK-UP 🚚\nPickup will likely be at UNSW with specific information to be organised at a later date. Keep an eye out on your emails for distributions happening at the end of Term 3.\n\n\nFor any questions, please contact ADSOC on facebook or email adsocunsw@gmail.com.",
            "end_time": "2022-11-21T11:00:00+1100",
            "id": "6154787261210002",
            "maybe_count": 11,
            "name": "UNSW ADSOC Presents: Bucket Hats",
            "start_time": "2022-11-07T11:00:00+1100",
            "updated_time": "2022-11-07T06:05:55+0000"
          },
          {
            "attending_count": 11,
            "cover": {
              "id": "579988393930374",
              "offset_x": 50,
              "offset_y": 47,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/313000182_579988390597041_6521628508612510013_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1091cb&_nc_ohc=sqk7eVaS8EYAX8OVoJ1&_nc_oc=AQl3yYNFQAdJCqqqG-LJ8mHq4F9UIyDx2CxVMD8Be7bELOdBoQK8KHbweFXhzlNuZ4MHpFmsP9cjvntpuSRyM0br&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfAEfP1e3hQmamV7OMta8pz8KHXEzq5gUhhsoOpbrVilgA&oe=64847823"
            },
            "created_time": "2022-10-26T01:33:43+0000",
            "description": "How much wood🪵 would a woodchuck 🦫chuck if a woodchuck🦫 could chuck wood🪵???\nIf you want to find out the answer to this mind boggling🤯 question come to UNSW Adventure Society: Chop that Wood 🪓🪵\nChannel your inner Thor 🦸💪 or favourite horror movie character🩸🧟‍♀️as you test out your axe throwing skills against your friends…or foes😈\nYou’ll start off with a masterclass coaching session followed by target practice🎯 and a final epic showdown to the death💀💀 (not actually)\nThis event is for both experienced axe throwers🫡 and beginners alike so don’t throw😉 away this great opportunity to try something new!!💓\n \n📍Location: MANIAX Axe Throwing (9-11 Jabez Street, Marrickville NSW 2204)\n📆 Date: Saturday, 5th November (Week 8)\n⏰ Time: 4:00PM – 7:00PM\n🤑 Cost: $60\n \nThis is one of our last events of the year so don’t miss out and register now!!!\n\nRegistration Form: https://forms.gle/HpK5V9XRDCZkcPQZ8",
            "end_time": "2022-11-05T18:30:00+1100",
            "id": "1151764685760546",
            "maybe_count": 67,
            "name": "UNSW ADSOC Presents: Axe Throwing",
            "start_time": "2022-11-05T16:00:00+1100",
            "updated_time": "2022-10-26T01:33:43+0000"
          },
          {
            "attending_count": 16,
            "cover": {
              "id": "561735482422332",
              "offset_x": 50,
              "offset_y": 52,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/309274293_561735479088999_3736068197324655360_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1091cb&_nc_ohc=vEp8RtLBBiMAX8gJ4eU&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfDql3DKYt5lOosXPJSK_ONFWMiA3ZZ4GCJzOLgxdry11g&oe=6483FD15"
            },
            "created_time": "2022-09-30T13:21:59+0000",
            "description": "✨UNSW ADSOC presents✨\n\n‼️OUR FINAL BOULDERING EVENT OF THE YEAR‼️\nBefore you get caught in the whirlwind of midsems📚come and test those gains💪and sneak in a weekend workout🏋🏻‍♀️\n\nThe sensuous experience🧘🏻‍♀️😌of making your way up and across those walls, hanging mid air and the satisfaction of completing a bouldering puzzle is why you HAVE to join us🥰This event is for all skill levels and is also the perfect opportunity to socialize and make new friends👭🏻\nThe event will also be catered with PIZZA🍕🍕delivered by the pizza maiden herself😀\n\nSo don’t leave us hanging and come join us at NOMAD Bouldering Gym in Annandale 🧗‍♂️🧗‍♀️to end the year with a bang💥\n\n--------- DETAILS ---------\n\n📅WHEN: Sunday 16 October (WK 5) \n⏰TIME: 11am-4pm\n📌WHERE: NOMAD Bouldering, Annandale\n🤑COST: $25 for entry + shoe hire + catering\n\nRegistration form below!\n\nhttps://forms.gle/GiUMhqy9mgRqG98j8",
            "end_time": "2022-10-16T16:00:00+1100",
            "id": "625648765714409",
            "maybe_count": 79,
            "name": "UNSW ADSOC Presents: Nomad Bouldering",
            "place": {
              "name": "Unit 7/12 Chester Street, Annandale NSW 2038"
            },
            "start_time": "2022-10-16T11:00:00+1100",
            "updated_time": "2022-10-05T01:08:31+0000"
          },
          {
            "attending_count": 38,
            "cover": {
              "id": "779851066733496",
              "offset_x": 50,
              "offset_y": 49,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/310237000_779851060066830_8355552751774936364_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1091cb&_nc_ohc=EUhi41QMHIIAX8-xCoV&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfBbxZMyQKCmuw_bSpAsNwRar8AgvOWR1XW-jGxM2fygrg&oe=64833658"
            },
            "created_time": "2022-09-28T09:00:19+0000",
            "description": "Want a break from uni? 😩\nEager to catch some rays? ☀️ \n\nBut most importantly, meet some adorable puppies? 🐕 \n\nThis event is perfect for you! Join us on Saturday for a nice and relaxing walk along the water 🏝  with some cute doggies following along the way 🥰 \n\nThere will also be a sausage sizzle and some picnic food for all to buy where ALL PROCEEDS will go to RSPCA 🤍\n\nJoin us on this walk-a-dog-athon !! ✨✨✨\n\n— KEY DETAILS —\n\n📅 Date: Week 4 Saturday 8th October 2022\n\n⏰ Time: 11-2 pm\n\n📍 Location: Sydney Park Alexandria\n\n💰 Cost: Donations",
            "id": "644228927115455",
            "maybe_count": 63,
            "name": "UNSW ADSOC X APRS X DOGSOC Presents: Walk-a-dog-a-thon",
            "place": {
              "name": "Sydney Park Rd, Alexandria NSW 2015, Australia"
            },
            "start_time": "2022-10-15T11:00:00+1100",
            "updated_time": "2022-10-10T06:30:05+0000"
          },
          {
            "attending_count": 20,
            "cover": {
              "id": "564117062184174",
              "offset_x": 50,
              "offset_y": 40,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/309435091_564117055517508_4025396529987461987_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1091cb&_nc_ohc=uEphgWN7UPsAX_hK0aD&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfCOtVUXID-67jNOtKDL_RtOpSAGQM6hwpq62ju0RWC99A&oe=6483AFF3"
            },
            "created_time": "2022-10-05T11:06:06+0000",
            "description": "Hello fellow adventurers! \n\nThe year 2022 has been such an exciting year with ADSOC so far, with a range of wonderful adventurous activities filling the terms and our much anticipated ski trip being an absolute blast for all those who attended. However, now for another big event of the year, it's time for our AGM! Have a say in the future leadership of ADSOC or even nominate yourself for executive positions and become even more involved in a society you love. We’ll be hosting it online for ease of access and are looking forward to seeing you all there for your vote determining the 2023 ADSOC leadership team. \n\nDetails of the AGM: \n\nDate: Week 5 Tuesday, 11th October\nTime: 6pm \nLocation: Zoom  \n\nhttps://unsw.zoom.us/j/83640389633\n\nThe Agenda for the AGM will be as follows:\n\nIntroduction \n1. President Annual Report by Christine Chen \n2. Treasurer’s Report by Lily Jiang \n3. Constitutional Amendments via voting process \n4. Elections of Executives and Directors \n5. Meeting Closure \n\nThe following positions are open for nominations:\n\n- President\n- Vice President\n- Treasurer\n- Secretary\n- Arc Delegate\n- Events Directors x2\n- Media Directors x2\n- Sponsorship Directors x2\n- HR Directors x2\n\nPlease read the role descriptions and familiarize yourself with the roles you’re applying for, the link can be found here:\n\nhttps://drive.google.com/file/d/158asJE_ic5rta9kLgMm3wXv0OfJBiIT8/view?usp=sharing\n\nIf you would like to apply for a position, please nominate yourself on the form below: \n\nhttps://forms.gle/3PM2FUWqzxCDAsAw9 \n\nIf you are unable to attend the AGM and would like to apply for a position, please email us a short video of why you think you would be a suitable candidate.\nShould you have any questions regarding an executive role within UNSW Adventurer’s Society, please do not hesitate to contact us on adsocunsw@gmail.com.\n\nPlease note that to vote, you must have been a registered member of ADSOC for at least 7 days prior to the AGM.\nGood luck to all nominees!",
            "id": "1115938022390377",
            "maybe_count": 10,
            "name": "UNSW ADSOC Presents: AGM 2022",
            "start_time": "2022-10-11T18:00:00+1100",
            "updated_time": "2022-10-11T07:09:42+0000"
          },
          {
            "attending_count": 70,
            "cover": {
              "id": "1237835963624029",
              "offset_x": 50,
              "offset_y": 24,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/287869374_1237835960290696_1345937116981563900_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1091cb&_nc_ohc=YoTymeEeKngAX93nPHd&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfDJ5osyEVoEv1-TJdTP7lnKiLPqAccSLkgLolpb28iuAg&oe=6483F6EF"
            },
            "created_time": "2022-06-15T06:16:35+0000",
            "description": "Wanna come chill and play Card Jitsu at my iggy after Sled Racing down Ski Hill? - Sensei probably :P\n\nThe long awaited moment is finally here ! It's the brrrr-eak of the year that you’ve all been waiting for. The highly anticipated journey to Club Alpaca Island 🐧🐧\n\nThat’s right, ❤️ ADSOC SKI TRIP 2022 IS WADDLING BACK UP SKI HILL and INTO OUR HEARTS! 🥰\n\nChill out of the slopes and experience love at first sight as you and your fellow alpacas race down Ski Hill 🏔️and chill in your igloos. \n\nCatch the ski lift to the top of the mountain for some thaw-dropping sights.\n\nThere’s fun lessons for you to join if you’re an amateur, but always feel free to flake it till you make it 💪  With HEAPS of fun activities for all alpacas, penguins and puffles alike such as  skiing ⛷️, snowboarding 🏂, food 🍦, night activities 🌃 and of course, snowball fights ☃️, this trip is sure to satisfy you <3 \n\nThis trip is the perfect way to spend your break between Terms 2 and 3, or for non UNSW folks, the perfect getaway to hangout with your UNSW friends on.\n\n❄️❄️❄️\n WHEN: Monday 5th september - Thursday 8th September 2022 (During T2 break, UNSW)\n WHERE: Perisher and Snowy Valley Resort, Jindabyne\n PRICE: $750 for Arc members and $800 for Non-Arc Members\nINITIAL DEPOSIT: $150\n\nWAITING LIST: https://forms.gle/bLyfxMDhov6gznn78\n\n⛄⛄⛄\nPRICING BREAKDOWN\nThe base price for the 2022 Ski Trip includes:\n- 3 Day Perisher Ski Lift Pass and Basic Ski Hire (see Pricing and Hire section for add-ons)\n- 3 Nights Accommodation at the Snowy Valley Resort, Jindabyne\n- Return Transfer between Sydney and Jindabyne via coach\n- Daily Shuttle Service to and from Perisher\n- All Compulsory National Park Fees\n- 3 x Hot Breakfasts (Tuesday, Wednesday, Thursday)\n- 2 x 3-Course Dinners (Tuesday, Wednesday)\n\nOptional add-ons (TO BE PAID ON THE BUS)\n- $12 for Snowboard Hire\n- $ PRICE TBC for 2 x 2 Hour Lessons (estimated approximately $50)\n- $45 for 3 day Snow Jacket and Pants Hire\n\n💯 PAYMENT DEADLINES 💯\n Friday 15th July: $150 deposit must be paid by this date to secure a spot.\n\nSunday 17th July: Deposit is non-refundable and non-transferable.\n\nSaturday 22rd July: Remaining payment to be made by this date.\nFull payment is non-refundable.\n\nWAITING LIST: https://forms.gle/bLyfxMDhov6gznn78",
            "end_time": "2022-09-08T19:00:00+1000",
            "id": "1380606615767877",
            "maybe_count": 239,
            "name": "[SOLD OUT] UNSW ADSOC Presents: Club Alpaca Goes to Ski Hill",
            "place": {
              "id": "112519795427657",
              "location": {
                "city": "Jindabyne",
                "country": "Australia",
                "latitude": -36.443288461968,
                "longitude": 148.63316169844,
                "state": "NSW",
                "zip": "2627"
              },
              "name": "Jindabyne, New South Wales"
            },
            "start_time": "2022-09-05T18:00:00+1000",
            "updated_time": "2022-07-21T23:42:55+0000"
          },
          {
            "attending_count": 2,
            "cover": {
              "id": "527431452519402",
              "offset_x": 50,
              "offset_y": 45,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/298583658_527431449186069_6386121329148330018_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1091cb&_nc_ohc=Uml7oqsVtjUAX-iC3bq&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfAxM5k_dTxXXK_BGHipknBDwvup6RW_NfD2ffZRKoNddA&oe=64845127"
            },
            "created_time": "2022-08-14T11:54:58+0000",
            "description": "once again.. it’s that time of the year..\n🥶 HOODIE SEASON!! 🥶\ninstead of buying that $450 north face puffer 🥲 save your money and cop \n✨💙The OFFICIAL 2022 ADSOC Hoodie💙✨instead, at the price of ONLY $45 👑 🤑\n\nwhether it be at home 🏠, on campus 📚, or on the icy slopes of Perisher ❄️ ⛷ - you’ll be guaranteed to stay warm 🔥 and be dripped out, so don’t miss out 😍\n\n✨The hoodies are perfect for any adventurer, and will be available in the colours Blue, White or Beige from size XS to XL ✨\n\n⚡️⚡️⚡️\nHOW TO PURCHASE:\nClick the form below, choose your size and colour, with a screenshot of your $45 payment to our account details on the form and keep an eye out on your emails for our hoodie distributions happening in Term 3\n\nhttps://forms.gle/A75KSp88HPfyt9RKA",
            "end_time": "2022-08-21T23:59:00+1000",
            "id": "3437731513164848",
            "maybe_count": 1,
            "name": "[EXTENDED] UNSW Adventure Society Presents: 2022 Hoodies",
            "start_time": "2022-08-15T18:00:00+1000",
            "updated_time": "2022-08-14T11:54:58+0000"
          },
          {
            "attending_count": 23,
            "cover": {
              "id": "1256907925050166",
              "offset_x": 50,
              "offset_y": 0,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/292405772_1256907921716833_2290186264883580463_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1091cb&_nc_ohc=OYhVcKCDkWoAX8ocDDn&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfD58a3CZUBHrQ5zvyEwT58LBtkRl-cxVx4iqGAR57Td1w&oe=6483AF61"
            },
            "created_time": "2022-07-13T08:35:18+0000",
            "description": "If you want to come flex ur Ps or pretend ur not on ur Ls…\n\nGuess what? You’re in luck!! UNSW ADSOC and UNSW Car Society is back again with a hyper karting event that you’ll wanna skrt skrt to!! \n\nWhether you’re a Lamborghini enthusiast, Ferrari fanatic or even a Corolla stroller, come join us at Hyper Karting Moore Park this Flexi week.\n\nAccelerate your procrastinations by taking a U-turn away from uni and speeding towards a day of adrenaline and adventure. \nCome along with friends or even make some new ones, whilst battling it out for a spot on topbecause who doesn’t like a little healthy competition.\n\n\n3…2…1…GO!\n\nDon’t miss out, limited tickets available!\n\n\n-----Event Details-----\n\nWHEN: August 4th \nWHERE: Hyper Karting, Moore Park (Level 5 Car Park, 207 Park Rd S, Moore Park NSW 2021)\nTIME: 6:45pm - 8:30pm\n\nPlease wear comfortable clothing and closed shoes to drive in!\n\nPRICING!\n\nPrice: $85\n\nIMPORTANT!\nDeposit is required to secure a spot!\n\nPayment Details:\nAccount Name: UNSW CarSoc\nBSB: 062033\nAccount number: 10830130\n\nREGISTER NOW, LIMITED SPOTS: https://forms.gle/fvnSXZ3iQG75hMWF9",
            "end_time": "2022-08-04T20:00:00+1000",
            "id": "1335360903656289",
            "maybe_count": 134,
            "name": "UNSW ADSOC X UNSW CarSoc Presents: Go Karting",
            "place": {
              "name": "Level 5 Car Park, 207 Park Rd S, Moore Park NSW 2021"
            },
            "start_time": "2022-08-04T18:45:00+1000",
            "updated_time": "2022-07-21T23:42:55+0000"
          },
          {
            "attending_count": 17,
            "cover": {
              "id": "518927766703104",
              "offset_x": 50,
              "offset_y": 40,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/296722160_518927763369771_5167208630605911429_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1091cb&_nc_ohc=uhq5dmPr8isAX8t5vH6&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfCDyIP-vklt9Oz2bmQ5c4Ytj_iClkkmwroEKjQstuW-nA&oe=6483E5D2"
            },
            "created_time": "2022-07-24T08:59:50+0000",
            "description": "once again.. it’s that time of the year..\n🥶 HOODIE SEASON!! 🥶\ninstead of buying that $450 north face puffer 🥲 save your money and cop \n✨💙The OFFICIAL 2022 ADSOC Hoodie💙✨instead, at the price of ONLY $45 👑 🤑\n\nwhether it be at home 🏠, on campus 📚, or on the icy slopes of Perisher ❄️ ⛷ - you’ll be guaranteed to stay warm 🔥 and be dripped out, so don’t miss out 😍\n\n✨The hoodies are perfect for any adventurer, and will be available in the colours Blue, White or Beige from size XS to XL ✨\n\n⚡️⚡️⚡️\nHOW TO PURCHASE:\nClick the form below, choose your size and colour, with a screenshot of your $45 payment to our account details on the form and keep an eye out on your emails for our hoodie distributions happening in Term 3\n\nFORM IS NOW CLOSED",
            "end_time": "2022-08-13T21:00:00+1000",
            "id": "344981181165876",
            "maybe_count": 12,
            "name": "[EXTENDED] UNSW Adventure Society Presents: 2022 Hoodies",
            "start_time": "2022-07-31T18:00:00+1000",
            "updated_time": "2022-09-01T00:25:12+0000"
          },
          {
            "attending_count": 57,
            "cover": {
              "id": "1230575954350030",
              "offset_x": 50,
              "offset_y": 40,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/285503723_1230575951016697_5126532304846700235_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1091cb&_nc_ohc=UImubE42LrEAX-vvsE8&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfAzRFRU0f3HatpKTDX7Epr-kFIau1CkEBSr_iRf8TZBSA&oe=648317E2"
            },
            "created_time": "2022-06-04T08:12:49+0000",
            "description": "Wishing to get them gains 💪💪 for future events 🤪👀 but you wanna just sack the gym 🏋️‍♂️🏋️‍♂️ esp 🦵leg day🦵for once...\n\nOr you just want a chance to show off 😎😎 and say \"mY MoOsCles ArE GeTtiNg bIgGeR\" 🥵🥵\n\nWell adventurers, we got the perfect event for you!\n\n✨UNSW Adventure Society✨ is here to present its 🗻bouldering event 🗻 with a day of bouldering at BlocHaus Bouldering Sydney in Marrickville.🧗‍♂️🧗‍♀️  \n\nAll fatigue ailments are solved with the wondrous experience 🤩🤩 of catapulting yourself up a wall with your fingers wrapped around the rough holds of a bouldering puzzle🙊🙊. Take satisfaction in the completion of a good climb and socialise and make friends 🙆‍♀️🙆‍♂️ whilst hanging on for dear life 😶😶(don’t worry it really is beginner friendly)😁. This is a great event for any keen boulderers to meet others like them or for those who have never climbed before 🥺🥺 to get an introduction to the fantastic sport. The event will come with a day of chill vibes 😍😍, catered lunch 🤤🤤 and special prizes 🤯🤯for those keen to conquer the toughest puzzles on offer \n\n\n---------- IMPORTANT DETAILS ---------\n\n📅WHEN:Sunday the 19th of June \n⏰TIME: 11am - 4pm \n📌WHERE: BlocHaus Bouldering Sydney, Marrickville\n🤑COST: $22 for entry + catering\nShoe hire for $6 if you need it on the day \n\nRegistration form below!\n\nhttps://forms.gle/iERG7rxPDmwPDK1x6",
            "end_time": "2022-06-19T16:00:00+1000",
            "id": "710152773433111",
            "maybe_count": 210,
            "name": "UNSW ADSOC Presents: Bouldering",
            "place": {
              "id": "109576570440144",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.90868,
                "longitude": 151.1676,
                "state": "NSW",
                "street": "49 Fitzroy Street Marrickville",
                "zip": "2204"
              },
              "name": "BlocHaus Marrickville"
            },
            "start_time": "2022-06-19T11:00:00+1000",
            "updated_time": "2022-07-21T23:42:55+0000"
          },
          {
            "attending_count": 38,
            "cover": {
              "id": "1191184214955871",
              "offset_x": 50,
              "offset_y": 0,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/277977539_1191184208289205_1300569932645630695_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1091cb&_nc_ohc=0dwgpXlYTJ0AX9HDpfg&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfDTcXaQNE1P_hSU-n1rbpLE1dgu4P6nqOrbonzRQPk-SA&oe=6482A656"
            },
            "created_time": "2022-04-06T00:59:48+0000",
            "description": "Take your crush kayaking and there's a 90% chance they’ll get wet 👀 – Ghandi, probably \n\nHello fellow Adventurers!\n\nDo you want to escape from the misery of lectures and tests 😓, and need to replenish your broken soul before the business end of the term 🙆? Or want another way to procrastinate productively 😛, by making new friends and exercising 👯💪? Well UNSW Adventure Society🦙 has the perfect solution for you, with an oar-some 😜 kayaking and paddleboarding event at Bundeena Kayaks 🛶 🥳! Let your mind flow into the pristine waters of Simpsons Bay 🌊 and paddle away with friends, both old and new 🚣. Or just sit back, relax and bathe in the sunshine 😎🌞, while your partner does all the work 😜! Whether you’re a keen bean who's been kayaking from birth, or a beginner wanting to explore and try something new, there will be plenty of fun to be had for everyone! You can easily ask for help so don’t worry about being left behind👌. So round up the gang and have a banger of a time, or come along by yourself and meet some new friends 🥳. Don’t miss out on this amazing opportunity to have a blast and discover a lifelong passion🎉🙌! \n\n~~~~ Event Details ~~~~\n\nWHEN: 16th April 2022 Saturday (Easter Saturday) \nTIME: 11:00am at Bundeena & 11:30am Kayak/Paddleboarding start (STRICT)\nWHERE: Bundeena Kayaks\n\n\nRegister for the event here!!!\n\nhttps://forms.gle/8tvqj1QLDowgcPiH6",
            "end_time": "2022-04-16T16:00:00+1000",
            "id": "354510033278552",
            "maybe_count": 163,
            "name": "UNSW ADSOC Presents: Kayaking & Paddleboarding",
            "place": {
              "id": "72084024433",
              "location": {
                "city": "Bundeena",
                "country": "Australia",
                "latitude": -34.0828738909,
                "located_in": "333902543934865",
                "longitude": 151.13984023103,
                "state": "NSW",
                "street": "Bonnie Vale Picnic Grounds",
                "zip": "2230"
              },
              "name": "Bundeena Kayaks"
            },
            "start_time": "2022-04-16T11:00:00+1000",
            "updated_time": "2022-07-21T23:42:55+0000"
          },
          {
            "attending_count": 87,
            "created_time": "2022-03-02T06:19:51+0000",
            "description": "❄️ADSOC x DisneySoc x IceSoc Presents: DISNEY ADVENTURE ON ICE! ❄️\n\nHave you missed skating to your favourite Disney songs 🎶, dressing up as your favourite Disney character 🐁 and 𝘯𝘰𝘵 𝘧𝘢𝘭𝘭𝘪𝘯𝘨 𝘰𝘷𝘦𝘳 on the ice?\n\nWell here’s your chance! 📣 Come join Adventure Society 🏂, Disney Society ☃️ and Ice Skating Society ⛸ in a Winter Wonderland, complete with Ice Skating , activities (did someone say Limbo 👀) and 𝘪𝘤𝘦𝘣𝘳𝘦𝘢𝘬𝘦𝘳𝘴. Best of all, come dressed as your favourite Disney character and meet friends worth melting for! 🌟⛷\n\n❄️EVENT DETAILS❄️\n📅Date: Thursday March 24 (Week 6)\n🕖Time: 6:00PM - 7:30PM (Please arrive 5 minutes early)\n📍Location: Ice Zoo, 689 Gardeners Rd, Alexandria NSW 2015\n🕺Dress Code: Disney themed (PRIZE FOR BEST DRESSED!)\n\nTICKET PRICES:\nSOLD OUT\n\nUPDATE: The cash payment option will no  longer be available for new ticket bookings.\nUPDATE: Tickets are now sold out.\n\nIMPORTANT: Early bird prices are EXCLUSIVE to ONLINE PAYMENTS only. If you are paying by cash on the day of the event, you must pay the additional $3 fee, resulting in the prices listed above.\n\n*All listed prices include skate hire*\n\n📣Tickets are limited so make sure to book now to secure a spot! All are welcome!📣[SOLD OUT]",
            "end_time": "2022-03-24T19:30:00+1100",
            "id": "2762306634074773",
            "maybe_count": 181,
            "name": "ADSOC x DisneySoc x IceSoc Presents: Disney Adventure on Ice [SOLD OUT]",
            "place": {
              "id": "1052704038138141",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.91984875926,
                "longitude": 151.18274380296,
                "state": "NSW",
                "street": "689 Gardeners Road",
                "zip": "2020"
              },
              "name": "Ice Zoo"
            },
            "start_time": "2022-03-24T18:00:00+1100",
            "updated_time": "2022-03-21T23:38:18+0000"
          },
          {
            "attending_count": 61,
            "cover": {
              "id": "5398550106822417",
              "offset_x": 20,
              "offset_y": 50,
              "source": "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/275787842_5398550100155751_817003851793031391_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1091cb&_nc_ohc=7CQSbHKMLo4AX9hqTDE&_nc_ht=scontent-atl3-1.xx&edm=AJKTm1sEAAAA&oh=00_AfAjTlksUD4GZ4EKYgL6Af3kJTsZoe22ur6sDcPsoKwlWQ&oe=6483C86C"
            },
            "created_time": "2022-03-14T07:30:10+0000",
            "description": "✨Welcome to UNSW’s first ever QUADSOC Dodgeball Tournament✨ \n\nDrown away your mid term stress this flexi week and compete in this one of a kind 🏐🏃DODGEBALL TOURNAMENT🏃🏐\n\nWhether it be playing with your friends or against your friends, join us on this momentous day and have some fun! 🤩🤪\n\nGet your competitive spirit up and compete to win up to $400 worth of prizes😍🏆\n\n—————————————————————-\n\n🏐Details🏐\n\nDATE: Week 6 23rd March Wednesday\nTIME: 11:30am-2pm\nWHERE: UNSW Fitness and Aquatic Centre (University Gym)\nWHAT TO BRING: Water, Sneakers, appropriate clothing\n\n—————————————————————-\n\nSpaces will fill up fast so get in quick and register your team of up to 6 people or register individually‼️\n**if you register a team of less than 6 people, individual players will be placed in your team\n\nTicket prices:\nTeam of 6: $30 \nIndividually: $5 \n** team of 3: $15 and so on..\n\n✅REGO NOW: https://docs.google.com/forms/d/e/1FAIpQLSdysrF3E9s-9Jfl-paIPGymhMNlE-BabMn41Rhuq4dg9PAtxg/viewform?usp=sf_link\n\n🚩Registrations close 21st March, 11:59PM🚩\n\nSpectators are welcome too😎 so come and support your friends in this intense tournament till the winning team is crowned 👑✨ (there will be some snacks and drinks on the sideline) 🧃\n\nSpectator form: https://docs.google.com/forms/d/e/1FAIpQLSeSpf6Amno5H6Batpe30ynx-XebQ0an0HEIWqamcyRFSxHO1g/viewform?usp=sf_link\n\nHappy playing and may the best team win🤩",
            "end_time": "2022-03-23T14:00:00+1100",
            "id": "946029256282487",
            "maybe_count": 68,
            "name": "APRS x Adsoc x Realsoc x PFC: Quadsoc Dodgeball Tournament",
            "place": {
              "id": "471725802865308",
              "location": {
                "city": "Sydney",
                "country": "Australia",
                "latitude": -33.915502402269,
                "longitude": 151.22661259287,
                "state": "NSW",
                "street": "Building B4",
                "zip": "2033"
              },
              "name": "Unsw Fitness & Aquatic Centre"
            },
            "start_time": "2022-03-23T11:00:00+1100",
            "updated_time": "2022-04-06T07:41:21+0000"
          }
        ]
  } catch (error) {
    console.error('Error getting events:\n', error)
    return []
  }
}
