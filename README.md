# sveltekit-offline

An example of an offline first implementation with SvelteKit and PouchDB.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# to start the database run the following in a separate terminal
npm run db

# access the database ui by going to
http://localhost:5984/_utils/
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
