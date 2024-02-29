"use strict";
const channelNames = [
  "Js Challenges",
  "Sky News",
  "Psychology News",
  "Python Easter!",
  "Tech Nuggets",
];

const messages = {
  personal: {
    sarina: {
      starterTime: "2 february",
      received1: ["سلامم", "11:00 PM"],
      sended2: ["سلام، خوبی؟", "11:02 PM"],
      received3: ["بد نیستم، وایسا یه لحظه", "11:02 PM"],
      received4: [
        `ببین این تیکه از کتاب چنین گفت زردتشت چقد قشنگه
        من تنها به خدایی ایمان دارم که رقصیدن را بداند و وقتی من به شیطان نظر افکندم، او را جدی، دقیق، عمیق و عبوس یافتم: در واقع او روح ثقل زمین است و مسئول افتادن همه ی چیزها نیز اوست. با خنده می کشند نه با خشم _ برخیزید! و بگذارید که روح ثقل رابکشیم. من راه رفتن را آموخته ام و از آن وقت است که می توانم بدوم، من پرواز کردن را آموخته ام و دیگر احتیاج ندارم که کسی مرا به حرکت کردن وادار دارد. اکنون مرا وزنی نیست، اکنون        من پرواز می کنم و خود را در زیر خود می یابم، اکنون خدایی در باطن من به رقص درآمده است`,
        `
        11:02 PM`,
      ],
      sended5: ["خب اوکی...ولی نگرفتم منظورتو", "11:03 PM"],
      received6: [
        "ببین مسئله اینحاست که الان من سردرد دارم، تموم تنم ام درد میکنه. از همه هم متنفرم",
        "11:03 PM",
      ],
      sended7: [`من الان نمیفهمم مشکلت کجاست آخه`, `11:03 PM`],
      received8: [`شاید نیاز دارم دوباره ببینمت`, `11:59 PM`],
    },
    amir: {
      starterTime: "2 february",
      sended1: ["سلام داش گلم", "20:32 PM"],
      received2: ["سلام علی داداش، خوبی؟", "20:50 PM"],
      sended3: [
        "قربونت داداشم خوبم، ایشالا خودتم خوب باشی، میگم امیر فردا با بچه ها میخوایم بریم شمال هستی؟",
        "20:52 PM",
      ],
      received4: [`آخه دوشنبه پرواز دارم حاجی`, `11:29PM `],
    },
  },
  channels: {
    jsChallenges: {
      starterTime: "1 february",
      subscribers: "3,856 subscribers",
      channelName: "Js Challenges",
      posts: {
        post1: {
          postText: `خروجی کد بالا رو برامون بفرستین`,
          postSignature: "Js Challenges",
          postImgSrc: `post-1-js-challenges.jpg`,
          channelLinks: `Channel | Group | YouTube`,
          postDetails: `609 mehrshad, 10:22 PM `,
        },
        post2: {
          postText: `آقا فرق این دو تا چیه؟`,
          postSignature: "Js Challenges",
          postImgSrc: `post-2-js-challenges.jpg`,
          channelLinks: `Channel | Group | YouTube`,
          postDetails: `503 Ali, 11:29 PM `,
        },
      },
    },
    skyNews: {
      starterTime: "30 january",
      subscribers: "20k subscribers",
      channelName: "Sky News",
      posts: {
        post1: {
          postText: "Space x is working on satellite 🔥🔥🔥",
          postSignature: "Sky News",
          postImgSrc: `post-1-sky-news.jpg`,
          channelLinks: `@sky-news`,
          postDetails: `12k , 8:22 PM `,
        },
        post2: {
          postText: `
          Did you know that the great majority of people have more than the average number of legs? It’s obvious really; amongst the 57 million people in Britain there are probably 5,000 people who have got only one leg. Therefore the average number of legs is:

          ((5000 * 1) + (56,995,000 * 2)) / 57,000,000 = 1.9999123

          Since most people have two legs…
          `,
          postSignature: "Sky News",
          postImgSrc: `post-2-sky-news.jpg`,
          channelLinks: `@sky-news`,
          postDetails: `13.1 , 9:00 PM`,
        },
      },
    },
    psychologyNews: {
      starterTime: "28 january",
      subscribers: "450k subscribers",
      channelName: "Psychology News",
      posts: {
        post1: {
          postText: "do we really cure ocd?",
          postSignature: "Psychology News",
          postImgSrc: `post1-psychologyNews.jpg`,
          channelLinks: `@psychology-news`,
          postDetails: `220k , 12:22 AM`,
        },
        post2: {
          postText: `
            The article traces the sources of the three most widespread quotations attributed to Freud "What does Woman want?", "To love and to work" (summarizing what a psychological healthy person should   be able to do well), and "Sometimes a cigar is just a cigar".
          `,
          postSignature: "Psychology News",
          postImgSrc: `post2-psychologyNews.jpg`,
          channelLinks: `@psychology-news`,
          postDetails: `250k , 8:10 PM`,
        },
      },
    },
    pythonEaster: {
      starterTime: "12 march",
      subscribers: "42k subscribers",
      channelName: "Python Easter",
      posts: {
        post1: {
          postText: "Python almost everywhere now...",
          postSignature: "Python Easter",
          postImgSrc: `post1-pythonEaster.jpg`,
          channelLinks: `@python-easter`,
          postDetails: `21.5k , 10:22 AM`,
        },
        post2: {
          postText: `
            here is the new update for our lovely language💖
          `,
          postSignature: "Python Easter",
          postImgSrc: `post2-pythonEaster.jpg`,
          channelLinks: `@python-easter`,
          postDetails: `28k , 7:20 PM`,
        },
      },
    },
  },
  groups: {
    بروبچ: {
      starterTime: "2 februrary",
      members: "12 memebers",
      messages: {
        message1: [`استاد فلسفه رو میگم بابا`, `amir`, `9:20 PM`],
        message2: [
          `میدونم ولی باز میگم هم امتحانش خیلی سخته هم درسش`,
          `mohammad`,
          `9:22 PM`,
        ],
        message3: {
          reply: [
            "میدونم ولی باز میگم هم امتحانش خیلی سخته هم درسش",
            "mohammad",
          ],
          message: [` نمره میده ممد؟  `, `mary`, `9:22 PM`],
        },
        message4: [`وای منم با این استاده برداشتم`, `sarah`, `10:03 PM`],
      },
    },
    میتینگ: {
      starterTime: "1 Aguest",
      members: "43 memebers",
      messages: {
        message1: [`دیگه رفتم بهش گفتم  `, `hossein`, `8:53 PM`],
        message2: [` پشمام...خب خب خب `, `sorena`, `8:55 PM`],
        message4: [`وای خدا`, `maryam`, `8:55 PM`],
        message3: {
          reply: ["دیگه رفتم بهش گفتم ", "hossein"],
          message: [` من که میگم گفته نه `, `sonia`, `9:00 PM`],
        },
      },
    },
  },
};
