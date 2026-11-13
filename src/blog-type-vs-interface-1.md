
# Difference Between Type Alias and Interface

Type aliases and interfaces are both used to define types in TypeScript, but they have some core differences.

First, let's discuss the main differences between **Type Alias** and **Interface**.

## 1. Different Types of Definitions

We use type aliases when defining different kinds of types, such as objects, arrays, unions, primitives, and function types.

On the other hand, we mainly use interfaces to define the structure of objects.

## 2. Union Types

Interfaces do not directly support union types in TypeScript, while type aliases directly support them.

For example, using a type alias is valid:

```typescript
type ID = string | number;

let userId: ID = 101;

userId = "USER-101";
```

But using an interface directly for a union type is not valid:

```typescript
interface ID = string | number; // Error
```

However, interfaces can be used with type aliases indirectly.

For example:

```typescript
interface Admin {
  role: "admin";
}

interface User {
  role: "user";
}

type Person = Admin | User;
```

Here, we use two interfaces to define the object structures, and then we use a type alias to combine them into a union type.

## 3. Syntax Difference

Another difference is their syntax.

We use the `=` sign when defining a type alias, but we don't use it when defining an interface.

**Example:**

Using Type Alias:

```typescript
type User = {
  name: string;
  age: number;
};
```

Using Interface:

```typescript
interface User {
  name: string;
  age: number;
}
```

## When Should We Choose One Over the Other?

Now that we understand the differences between type aliases and interfaces, the main question is: When should we choose one over the other?

In that case, I prefer using **interface** when defining the structure of an object.

On the other hand, I prefer using **type** when working with unions, intersections, primitive types, arrays, or function types.

Both are useful in TypeScript, and the choice depends on the situation and requirements of the project.
