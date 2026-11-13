
# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers are an important feature of TypeScript. There are three main access modifiers: `public`, `private`, and `protected`. TypeScript also provides the `readonly` modifier, which controls whether a property can be reassigned.

When we create a class, we define properties and methods inside it. Access modifiers help us control how these properties and methods can be accessed from outside the class and through inheritance.

Let's discuss each modifier one by one.

## 1. Public

When we use `public` before a property or method, it means that we can access it from anywhere, including outside the class.

We can also change the value of a public property.

For example, if we have a `name` property declared as public, we can access and update it using an object of that class.

**Example:**

```typescript
class Person {
  public name: string = "Khaled";
}

const person = new Person();

console.log(person.name); // Khaled

person.name = "Masud";
console.log(person.name); // Masud
```

## 2. Private

What if we have some sensitive information that we don't want to access or modify from outside the class?

In that case, we can use the `private` modifier.

When we declare a property or method as private, it can only be accessed inside the class where it is declared. We cannot access it directly from outside the class or from a child class through inheritance.

**Example:**

```typescript
class Person {
  private salary: number = 30000;

  showSalary() {
    console.log(this.salary); // Allowed
  }
}

const person = new Person();

person.showSalary(); // 30000

// console.log(person.salary); // Error
```

## 3. Protected

The `protected` modifier is similar to `private`, but there is one important difference.

When we declare a property or method as protected, we cannot access it directly from outside the class. However, we can access it inside the class and its child classes through inheritance.

It is useful when we want to share properties or methods with child classes without making them publicly accessible.

**Example:**

```typescript
class Person {
  protected age: number = 28;
}

class Employee extends Person {
  showAge() {
    console.log(this.age); // Allowed
  }
}

const employee = new Employee();

employee.showAge(); // 28

// console.log(employee.age); // Error
```

## 4. Readonly

The `readonly` modifier means that we can read a property's value, but we cannot reassign it after initialization.

For example, a person's date of birth or the geographical coordinates (latitude and longitude) of a fixed location may not need to change after they are assigned.

We can use the `readonly` modifier to prevent accidental reassignment of these properties.

**Example:**

```typescript
class Person {
  readonly country: string = "Bangladesh";
}

const person = new Person();

console.log(person.country); // Bangladesh

// person.country = "USA"; // Error
```

**Important:** `readonly` is technically a property modifier, not an access modifier. Unlike `private` and `protected`, it does not control where a property can be accessed. It controls whether the property can be reassigned.

## Quick Comparison

| Modifier | Inside the class | Outside the class | Child class |
|---|---|---|---|
| `public` | Yes | Yes | Yes |
| `private` | Yes | No | No |
| `protected` | Yes | No | Yes |
| `readonly` | Can be read; reassignment is restricted | Can be read if otherwise accessible | Can be read if otherwise accessible |

## Conclusion

Access modifiers help us control how properties and methods are accessed in TypeScript classes.

- We use `public` when something should be accessible everywhere.
- We use `private` when something should only be accessible inside its own class.
- We use `protected` when child classes also need access.
- We use `readonly` when a property should not be reassigned after initialization.
