# Create Ponti App

## Features

- ⚡️ [NextJS](https://nextjs.org/docs/getting-started)
- ⚛️ React 18
- ✨ TypeScript
- 🔐 **Auth:** [Next-Auth.js](https://next-auth.js.org)
- 🗂 **Data:** [Prisma](https://prisma.io)
- 📞 **API:** [tRPC v10](https://trpc.io)
- 💅 **Styling:** [TailwindCSS](https://tailwindcss.com) & [daisyUI](https://daisyui.com/docs/install/)
- 🧪 **Testing:** [Vitest](https://vitest.dev/)
- [Vercel](https://vercel.com)

## Set up

### Github

This repo run several Github actions for code quality, testing, and deployment.

To run them properly, you'll need to set some secrets for those actions to run properly:

```sh
# These are used in Code Quality
gh secret set CYPRESS_RECORD_KEY

# These are used in Code Quality & Deployment
gh secret set DATABASE_URL
gh secret set NEXTAUTH_SECRET
gh secret set NEXTAUTH_URL
gh secret set GOOGLE_CLIENT_ID
gh secret set GOOGLE_CLIENT_SECRET

# These are used in Deployment
gh secret set VERCEL_ORG_ID
gh secret set VERCEL_PROJECT_ID
gh secret set VERCEL_TOKEN
```

### Vercel

This repo deploys to Vercel. For the application to run properly, some secrets need to be set:

```sh
vercel env add DATABASE_URL <environment>
vercel env add NEXTAUTH_SECRET <environment>
vercel env add GOOGLE_CLIENT_ID <environment>
vercel env add GOOGLE_CLIENT_SECRET <environment>
```

### Vercel x NEXTAUTH

Vercel creates automatic previews of deployments, which is fantastic! In order to get these previews to work with NextAuth, we have to set up two seperate env variables:

```sh
vercel env add NEXTAUTH_URL <environment>
```

```sh
vercel env add NEXTAUTH_URL <environment>
```

For the `preview` URL, you'll have to use the static one that doesn't change. This is the URL that does not have the unique hash in it and is different from your project's `production` URL.

For the `production` URL, you can find this on the project page.

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
