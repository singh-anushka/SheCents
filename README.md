# SheCents-Smart Money Moves for women by women 

An fully responsive full stack application designed to educate women and others about finances through an engaging and gamified approach, 
employing a straightforward and interactive user interface.

# Screenshots 

### 1. Landing Page 
**This is the landing page - the first appearance of our website to the user.**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/fbf1cccb-d531-4e6f-95f3-acefdff56383)

### 2. Login/Signup
**Login and signup is done by clerk authentication**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/dd32a31a-eda4-471f-9a99-5eed16c992f2)

**Security is provided with the help of Two Factor Authentication Process**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/a8e64c7a-5e4c-4ee3-a5d8-845bd509b4b2)

**Google Auth is also provided**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/aa632188-d3a6-432e-96a2-aaff89409aea)

### 3. Courses
**Financial Modules are provided for various finance concepts**
![Screenshot 2024-05-15 114931](https://github.com/singh-anushka/SheCents/assets/115483735/f0b4443d-5cef-4a68-b367-703b69f22d64)

**Each Module have 5 Lessons**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/b6809e89-e7ea-47da-932d-34ace39ec147)

**Each Lesson have 8 Questions**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/5b294b0d-f336-4b1f-93db-a792637f9b1c)

**On Choosing the wrong answer hearts decreases**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/6f52270b-260b-4eee-9222-a6005d81c3da)

**The progress bar updates with each correct answer**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/0c782ced-77df-4d30-962a-45519b1ecd99)

**Popups for leaving the question page**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/d2e39511-e4ae-42e4-b0aa-a451f8d46746)

**PopUp when you ran out of your hearts**
![Screenshot 2024-05-15 120439](https://github.com/singh-anushka/SheCents/assets/115483735/c605d225-26f3-4b46-b3d8-3727a83eca8d)

**On Completing the Lesson**
![image](https://github.com/singh-anushka/SheCents/assets/115483735/6565eefe-accc-403f-994d-85726debe3d8)

### 4. Leaderboard
**Compare your performance with other users**
<img width="1440" alt="Screenshot 2024-05-18 at 11 28 06 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/fa51540e-e841-4348-a97e-5c0c6f7a5d66">

## Gamified Encouragements and Blankets
Inorder to boost user interests; the platform is gamefied with hearts and XPs.
Hearts act as a safety blanket for wrong answers, while XPs are the rewards to clearing a level.
In case one run out of Hearts:
![Screenshot 2024-05-15 120439](https://github.com/singh-anushka/SheCents/assets/115483735/e3bd69fd-d350-48c6-bab3-5a22e662ecdd)

**There are ways refill them -**

### 5. Quests
One of the ways to earn more hearts is through exhausting XPs. Quests are the best way to earn more XPs by finishing more lessons, and hence to Hearts.
<img width="1440" alt="Screenshot 2024-05-18 at 10 20 10 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/49c09c91-926e-4823-9ffb-b0ee416133d7">

### 6. Shop(Premium)
To get unlimited hearts is to enter into the Premium tier by a monthly subscription using payment gateway powered by Stripe.
<img width="1440" alt="Screenshot 2024-05-18 at 10 20 24 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/24c16afb-e20b-47c2-b4f9-181aa67b6bae">
<img width="1440" alt="Screenshot 2024-05-18 at 11 10 38 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/2d1966fa-39e6-42d6-a22f-c584cb975d51">



## Doubts?
### 7. Connect
To ensure users gain more knowledge about the current money moves in case the lessons are not enough. A connect with financial experts will help clear any doubts and will provide more knowledge about the field.
<img width="1439" alt="Screenshot 2024-05-18 at 10 32 01 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/c866d784-90e1-4ea5-9179-2f4549cf8ea0">

### 8. Blogs
Any further doubts regarding the practicality of the strategy and learnings given by community leaders in connect or through course modules are users can read other users experience, and post theirs too.
<img width="1440" alt="Screenshot 2024-05-18 at 10 31 40 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/4685c80d-a1e4-4c5d-a350-c391ed458dc5">

### 9. AskHer
Any more further personalized doubts and queries can be asked to AskHer, an NLP chatbot.
<img width="1440" alt="Screenshot 2024-05-18 at 10 32 33 AM" src="https://github.com/singh-anushka/SheCents/assets/93376863/afa60648-ba05-468a-be0b-615bd4c71a8e">

# Local Setup
1. Clone the project into local device and open terminal inside the corresponding folder
2. Make sure NodeJS is already installed. If not, download from [here](https://nodejs.org/en/download/)
3. Run the following command in the terminal
> ` npm install `
4. Install all the dependencies
> ` npm install --legacy-peer-deps `

**The project has been successfully installed in the device.**
5. Create `.env` file in **root** directory.
6. Contents of `.env`:

```env
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingo?sslmode=require"

# stripe api key and webhook
STRIPE_API_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# clerk admin user id(s) separated by comma and space (, )
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx"

```

7. Obtain Clerk Authentication Keys

   1. **Source**: Clerk Dashboard or Settings Page
   2. **Procedure**:
      - Log in to your Clerk account.
      - Navigate to the dashboard or settings page.
      - Look for the section related to authentication keys.
      - Copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` provided in that section.

8. Retrieve Neon Database URI

   1. **Source**: Database Provider (e.g., Neon, PostgreSQL)
   2. **Procedure**:
      - Access your database provider's platform or configuration.
      - Locate the database connection details.
      - Replace `<user>`, `<password>`, `<host>`, and `<port>` placeholders in the URI with your actual database credentials.
      - Ensure to include `?sslmode=require` at the end of the URI for SSL mode requirement.

9. Fetch Stripe API Key and Webhook Secret

   1. **Source**: Stripe Dashboard
   2. **Procedure**:
      - Log in to your Stripe account.
      - Navigate to the dashboard or API settings.
      - Find the section related to API keys and webhook secrets.
      - Copy the `STRIPE_API_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.

10. Specify Public App URL

   1. **Procedure**:
      - Replace `http://localhost:3000` with the URL of your deployed application.

11. Identify Clerk Admin User IDs

   1. **Source**: Clerk Dashboard or Settings Page
   2. **Procedure**:
      - Log in to your Clerk account.
      - Navigate to the dashboard or settings page.
      - Find the section related to admin user IDs.
      - Copy the user IDs provided, ensuring they are separated by commas and spaces.

12. Save and Secure:

    - Save the changes to the `.env.local` file.

13. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

14. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

```bash
npm run db:prod
```

This command uses `npm` to execute the Typescript file (`scripts/prod.ts`) and writes challenges data in database.

15. Verify Data in Database:

Once the script completes, check your database to ensure that the challenges data has been successfully seeded.

16. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

17. To run the project,run the command:
> ` npm run dev `
18. Now go to your default browser, and type the following command
> `http://localhost:3000/ `

*Steps 1-4 are needed for first-time installation only. Only steps 5 onwards will be needed while devolping the project.*

# Team Members
- #### [Ishpreet Kaur](https://github.com/Ishpreet-Kaur-Bedi)
- #### [Anushka Singh](https://github.com/singh-anushka)
- #### [Siddhi Agarwal](https://github.com/siddhi-agarwal25)


# Future Modifications 
 - **Google analytics can be used to track the number of users and helpful data charts**
 - **American Express Cards can be added for the premium model**
 - **Voice feature can be added in the answers to improve the interactivity and accessibility**
 - **Admin Dashboard can be made for performing CRUD operations of the questions and challenges with simple UI**
 - **AI Chatbot which answers the questions related to the finance**
 - **Feedback section can be build which collects testimonials from the customers**












