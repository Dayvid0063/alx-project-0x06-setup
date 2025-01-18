# Counter App with Redux

## Project Overview
This project demonstrates a counter application using Next.js and React, implementing Redux for global state management using Redux Toolkit.

## Features
- Global state management with Redux
- Centralized state store
- Type-safe actions and state
- Shared counter state across components
- Redux DevTools integration

## Technical Implementation

### Directory Structure
```
alx-project-0x06/
├── store/
│   └── store.ts
├── pages/
│   ├── _app.tsx
│   └── counter-app.tsx
├── components/
│   └── layouts/
│       ├── Layout.tsx
│       └── Header.tsx
└── styles/
    └── globals.css
```

### Key Components

#### Redux Store (`store/store.ts`)
```typescript
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value > 0 ? state.value -= 1 : 0
    }
  }
});
```

#### App Wrapper (`pages/_app.tsx`)
```typescript
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
```

## Technical Notes
- Uses Redux Toolkit for simplified Redux logic
- TypeScript integration for type safety
- Redux DevTools compatible
- Centralized state management

## Comparison with Other Approaches

### vs useState
- More setup required
- Better for complex state
- Better for large applications
- More powerful developer tools

### vs Context API
- More boilerplate
- Better performance for frequent updates
- Better developer tools
- More scalable for complex state
- Better for large teams
