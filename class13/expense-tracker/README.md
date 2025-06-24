## React router dom

1. Wrap everything inside `BrowserRouter` component.
2. Define all the required routes using `Route` component and keep those routes inside `Routes` component.

## `useContext` hook
Lets you access values from context in any component without having to pass props manually at every level.
- Theme
- Auth
- Settings

### Implementation

1. Create a context
```js
const ThemeContext = createContext();
```

2. Create a provider
```js
<ThemeContext.Provier value={{theme, setTheme}}>
  // components which want to receive this value from context
</ThemeContext.Provier>
```

3. Use context
```js
const { theme, setTheme } = useContext(ThemeContext);
```

## Authentication

