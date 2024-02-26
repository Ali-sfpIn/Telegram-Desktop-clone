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
      received1: ["سلامم", "11:00 pm"],
      sended2: ["سلام، خوبی؟", "11:02 pm"],
      received3: ["بد نیستم، وایسا یه لحظه", "11:02 pm"],
      received4: [
        `ببین این تیکه از کتاب چنین گفت زردتشت چقد قشنگه
        من تنها به خدایی ایمان دارم که رقصیدن را بداند و وقتی من به شیطان نظر افکندم، او را جدی، دقیق، عمیق و عبوس یافتم: در واقع او روح ثقل زمین است و مسئول افتادن همه ی چیزها نیز اوست. با خنده می کشند نه با خشم _ برخیزید! و بگذارید که روح ثقل رابکشیم. من راه رفتن را آموخته ام و از آن وقت است که می توانم بدوم، من پرواز کردن را آموخته ام و دیگر احتیاج ندارم که کسی مرا به حرکت کردن وادار دارد. اکنون مرا وزنی نیست، اکنون        من پرواز می کنم و خود را در زیر خود می یابم، اکنون خدایی در باطن من به رقص درآمده است`,
        `
        11:02 pm`,
      ],
      sended5: ["خب اوکی...ولی نگرفتم منظورتو", "11:03 pm"],
      received6: [
        "ببین مسئله اینحاست که الان من سردرد دارم، تموم تنم ام درد میکنه. از همه هم متنفرم",
        "11:03 pm",
      ],
      sended7: [`من الان نمیفهمم مشکلت کجاست آخه`, `11:03 pm`],
      received8: [`شاید نیاز دارم دوباره ببینمت`, `11:59 pm`],
    },
    amir: {
      starterTime: "2 february",
      sended1: ["سلام داش گلم", "20:32 pm"],
      received2: ["سلام علی داداش، خوبی؟", "20:50 pm"],
      sended3: [
        "قربونت داداشم خوبم، ایشالا خودتم خوب باشی، میگم امیر فردا با بچه ها میخوایم بریم شمال هستی؟",
        "20:52 pm",
      ],
      received4: [`آخه دوشنبه پرواز دارم حاجی`, `11:29pm`],
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
          postImgSrc: `post-1-js-challenges-img.jpg`,
          channelLinks: `Channel | Group | YouTube`,
          postDetails: `609 mehrshad, 10:22 pm`,
        },
        post2: {
          postText: `آقا فرق این دو تا چیه؟`,
          postSignature: "Js Challenges",
          postImgSrc: `post-2-js-challenges-img.jpg`,
          channelLinks: `Channel | Group | YouTube`,
          postDetails: `609 Ali, 11:29 pm`,
        },
      },
    },
  },
  groups: {
    message1: [`استاد فلسفه رو میگم بابا`, `Amir`],
    message2: [`میدونم ولی باز میگم هم امتحانش خیلی سخته هم درسش`, `mohammad`],
    message3: [` نمره میده ممد؟  `, `mary`],
    message3: [`این ترمم میفتم... `, `reza`],
    message4: [`وای منم با این استاده برداشتم💔`, `sarah`],
  },
};
