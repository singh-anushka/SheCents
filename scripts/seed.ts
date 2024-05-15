import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([
        { 
        title: "Budgeting", imageSrc: "/budgeting.svg" },
        {
          title:"Savings",imageSrc:"/savings.svg"
        },
        {
          title:"Investment",imageSrc:"/investment.svg"
        },
        {
          title:"Retirement",imageSrc:"./retirement.svg"
        },
        {
          title:"Debt Management",imageSrc:"./debt.svg"
        }
      ])
      .returning();

    // For each course, insert units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: `Learn the basics of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: `Learn intermediate ${course.title}`,
            order: 2,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Level 1", order: 1 },
            { unitId: unit.id, title: "Level 2", order: 2 },
            { unitId: unit.id, title: "Level 3", order: 3 },
            { unitId: unit.id, title: "Level 4", order: 4 },
            { unitId: unit.id, title: "Level 5", order: 5 },
          ])
          .returning();

        // For each lesson, insert challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'which is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts.?',
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'A form of savings account that shows you own a piece of a company and have a claim on its assets and earning',
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: "Which of the following is a measure of company's profitability?",
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: 'What is the full form of CTO',
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: "Which financial metric used to assess a company's ability to pay short-term obligations without needing additional cash flows?",
                order: 5,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'When a buyer share from the seller on Ex-dividend date , who will recieive the divident?',
                order: 6,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'What financial term refers to the price at which a security is bought or sold at the current moment?',
                order: 7,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: 'What does the term "IPO" stand for in finance?',
                order: 8,
              },
            ])
            .returning();

          // For each challenge, insert challenge options
          for (const challenge of challenges) {
            if (challenge.order === 1) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Ethereum",
                  imageSrc: "/ethereum.svg",
                  audioSrc: "/ethereum.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Tether",
                  imageSrc: "/tether.svg",
                  audioSrc: "/tether.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "bitcoin",
                  imageSrc: "/bitcoin.svg",
                  audioSrc: "/bitcoin.mp3",
                },
              ]);
            }

            if (challenge.order === 2) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Stocks",
                  imageSrc: "/stocks.svg",
                  audioSrc: "/stocks.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Dividend",
                  imageSrc: "/dividend.svg",
                  audioSrc: "/dividend.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Shares",
                  imageSrc: "/shares.svg",
                  audioSrc: "/shares.mp3",
                },
              ]);
            }

            if (challenge.order === 3) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Revenue",
                  imageSrc: "/revenue.svg",
                  audioSrc: "/revenue.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Assets",
                  imageSrc: "/assets.svg",
                  audioSrc: "/assets.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Profit Margin",
                  imageSrc: "/profitmargin.svg",
                  audioSrc: "/profitmargin.mp3",
                },
              ]);
            }

            if (challenge.order === 4) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Central Trading Officer",
                  audioSrc: "/cheiftradingofficer.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Cheif Technology Officer",
                  audioSrc: "/cheiftechnicalofficer.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Capital Take over",
                  audioSrc: "/capitaltakover.mp3",
                },
              ]);
            }

            if (challenge.order === 5) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Gross Profit Margin",
                  imageSrc: "/grossporfitmargin.svg",
                  audioSrc: "/grossprofitmargin.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Return on Investment",
                  imageSrc: "/return.svg",
                  audioSrc: "returnoninvestment.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Quick Ratio (Acid-Test Ratio)",
                  imageSrc: "/quickratio.svg",
                  audioSrc: "/quickratio.mp3",
                },
              ]);
            }

            if (challenge.order === 6) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Seller",
                  imageSrc: "/seller.svg",
                  audioSrc: "/seller.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Broker",
                  imageSrc: "/broker.svg",
                  audioSrc: "/broker.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Buyer",
                  imageSrc: "/buyer.svg",
                  audioSrc: "/buyer.mp3",
                },
              ]);
            }

            if (challenge.order === 7) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Market Value",
                  imageSrc: "/marketvalue.svg",
                  audioSrc: "/marketvalue.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Face Value",
                  imageSrc: "/facevalue.svg",
                  audioSrc: "/facevalue.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Book Value",
                  imageSrc: "/bookvalue.svg",
                  audioSrc: "/bookvalue.mp3",
                },
              ]);
            }

            if (challenge.order === 8) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: " Investment Portfolio Overview",
                  audioSrc: "/investementportfoliooverview.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: " Initial Public Offering",
                  audioSrc: "/initialpublicoffering.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: " Individual Pension Option",
                  audioSrc: "/individualpensionoptions.mp3",
                },
              ]);
            }
          }
        }
      }
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();