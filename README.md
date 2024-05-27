I'll use this file to take notes:

---

CONTEXT.
type ChildrenType = {
children: ReactNode;
};
Why ReactNode? The value of this children property can be any valid React content, such as elements, components, text, etc. This is represented by ReactNode, which is a type that encompasses anything that can be rendered by React.

setToken: (token: string | null) => void;
Why (token: string | null) ? This is the parameter list of the setToken function. It specifies that the setToken function expects one parameter called token, which can be either a string or null. This means you can call setToken with either a string value (representing a token) or null to unset the token.

---
