# Messenger Clone : Build The Real Messenger Clone | Next Js 14, React 18, Tailwind CSS, Next Auth, Prisma,Mongo, Pusher (2024) 

This is the only one real messenger clone. use it to master your skills in Next js for free.

This course is right for you if you:

## Our goals:

- Build beautiful frontend design ui
- Make high quality code 


## Core features

- [ Learn how to start a next js project from scratch ]
- [ Learn how to set up SEO to next js project ]
- [ Learn how to set up a authentification with next js from scracth ]
- [ Learn how to setup Tailwind Css with Next js ]
- [ Learn how to build react components with tailwind and framer motion ]
- [ Learn how to setup Prisma with Next js ]
- [ Learn how to setup Mongo DB with next Js ]



## Quick start

To spin up this example locally, follow these steps:

### Clone

  Use the `git clone` CLI to clone this template directly to your machine:

    git clone https://github.com/sylvaincodes/messenger-clone.git

### Set up env file

0. You will first need to setup Next js  [Next js](https://nextjs.org/docs/getting-started/installation) 

```bash
   NEXT_PUBLIC_SEVER_URL=
   ```
   
1. You will need prisma query [Prisma](https://www.prisma.io/docs/getting-started) 


2. You will need to setup mongo db  [MongoDb](https://account.mongodb.com/account/login) 

```bash
   DATABASE_URL=
   ```

3. You will need to setup pusher  [Pusher](https://pusher.com)

```bash
   PUHSER_KEY=
   ```
   
4. You will need to setup NEXT AUTH  [NextAuth](https://nextauth.com)
   
   ```bash

   NEXTAUTH_SECRET=

   ```


   
5. You will need to setup Github App [Github](https://github.com/settings/applications/new)

```bash

   GITHUB_ID= 
   GITHUB_SECRET=


   ```
   
6. You will need to setup Google App [Github](https://console.cloud.google.com/welcome)

```bash

   GOOGLE_CLIENT_ID= 
   GOOGLE_CLIENT_SECRET=


   ```

### Run Project on local

```bash
   npm run dev
   ```


## Project Dev Step 

1. Environment Setup
    - Install Nextjs project
    - Install Radix - shadcn

2. Project Folder Structure

3. Landing Page
    -   SEO 
    -   SMO
    -   Container - Colors - Fonts 
    -   UI template ( Header - Hero - Main - Footer )

4. Setup Auth UI
  
      ```bash

         npm i next-auth@latest
         npm i next-auth@prisma-adapter 
         npm i -D @types/bcrypt 
         npm i bcrypt
         npx auth secret

         ```

5. Setup Prisma and Mongo DB 
      
      ```bash
         npm i -D prisma && npx prisma init
         npm install mongodb
         npx prisma db push
         npm @prisma/client
      ```
6. Setup Next Auth API

      ```bash
         npm i next-auth@latest @next-auth/prisma-adapter bcrypt
         npm i -D @types/bcrypt
         
      ```
    - Register an Github app for GITHUB ID  https://github.com/settings/applications/new
    - Test Register API
    - Test Login API 

7. Setup Home Layout ( Navigation - Navbar )
8. Setup User conversations UI
9. Create User Post ( Message - Image )
10. Create Profil Drawer
11. Settings Messages 
12. Setting Group chat
13. Real time message with Pusher


## Questions

If you have any issues or questions [Send a comment](https://www.youtube.com/channel/UCmPmOdDw941pdi8YmIPjyEA) on youtube or reach out to me on  [Discord](https://discord.com/channels/1234070993996091503/1234070994512248853) 
