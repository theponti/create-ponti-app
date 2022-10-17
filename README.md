# Create Ponti App

## Features
- [NextJS](https://nextjs.org/docs/getting-started)
- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [daisyUI](https://daisyui.com/docs/install/)
- [tRPC v10](https://trpc.io)
- [Vercel](https://vercel.com)

## Principles
### 1. Solve Problems
It's easy to fall in the trap of "adding everything" - we explicitly don't want to do that. 

All dependecies added should solve a specific problem that exists within the core technologies included. This means we won't add things like state libraries (zustand, redux) but we will add things like NextAuth.js and integrate Prisma and tRPC for you.

### 2. Bleed Responsibly
We love our bleeding edge tech. The amount of speed and, honestly, fun that comes out of new shit is really cool. We think it's important to bleed responsibly, using riskier tech in the less risky parts. This means we wouldn't ⛔️ bet on risky new database tech (SQL is great!). But we happily ✅ bet on tRPC since it's just functions that are trivial to move off.

### 3. Typesafety Isn't Optional
Two of the three T's are typesafe (Typescript, tRPC). We take typesafety seriously in these parts. Any decision that compromises the full-stack, typesafe nature of the app is a decision that should be made in a different project. The stated goal of the app is to provide the quickest way to start a new fullstack, type safe web application.

## Useful resources
- [Protecting routes with Next-Auth.js](https://next-auth.js.org/configuration/nextjs#unstable_getserversession)
- [Typesafety isn't optional](https://github.com/t3-oss/create-t3-app/tree/)
