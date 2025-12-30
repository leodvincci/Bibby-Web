# The Big Blue B

I stared at a blank browser window for longer than I'd like to admit.

For six months, Bibby had been a terminal app. White text on black. Commands typed, output printed, done. I'd built barcode scanning, Google Books integration, shelf management—all of it living in a world where "UI" meant formatting strings nicely.

Now I needed to build an actual interface. And I had no idea where to start.

------

## The Problem With CLIs

Here's the thing about command-line applications: they're invisible.

I'm six months into a career change from logistics to software development. Bibby is my portfolio project—a personal library management app that lets me catalog my 300+ books. The backend is solid. Spring Boot, PostgreSQL, clean architecture. I'm proud of it.

But when I imagine sitting across from an interviewer, showing them my work, I see the problem.

"So this is Bibby. You type `book add`, then scan a barcode, and—"

Their eyes glaze over. They're not going to clone my repo and run it locally. They're not going to install a barcode scanner. They want to see something. Click something. Watch it respond.

I needed a web frontend. Which meant I needed to learn React.

------

## The Smallest Thing

My instinct was to plan. Design the component hierarchy. Set up routing. Configure state management. Research CSS frameworks. Build a design system.

I've learned to distrust that instinct.

Instead, I wrote down the smallest possible thing I could build:

> A nav bar. Logo on the left. Menu items in the middle. Login button on the right. Static. No routing. No authentication. Just pixels on a screen.

Not exciting. Not impressive. But *shippable*. And more importantly: achievable by someone who'd never written a React component before.

I gave myself one afternoon.

------

## Hello, World

My first commit was embarrassing:

```tsx
function Nav(){
    return(
        <nav>
            <h1>Hello Nav</h1>
        </nav>
    )
}
```

That's it. A function that returns an `<h1>` tag. I committed it anyway.

Why? Because I needed to know the pipeline worked. File created. Component exported. App imports it. Browser renders it. Until I saw "Hello Nav" in my browser, everything else was theory.

It worked. Okay. Now I could build.

------

## The First-Letter Trick

I needed a logo. I didn't have one. I wasn't going to spend hours in Figma designing something when I should be learning React.

So I cheated:

```css
#bibby-logo::first-letter{
  font-weight: 800;
  font-size: 64px;
  color: #00296B;
}
```

The `::first-letter` pseudo-element. It styles just the first character. The "B" in "Bibby" becomes oversized and blue. The rest stays normal.

No image. No SVG. No external dependencies. Just CSS doing something clever.

I refreshed the browser. There it was—a big blue B followed by "ibby" in regular weight. It looked... like a logo? Kind of? Good enough.

I committed it and kept moving.

------

## Flexbox and Fiddling

The layout was the hard part. Not conceptually—I knew I wanted three sections in a row. But getting them to actually sit where I wanted took longer than I expected.

```css
nav{
  display: flex;
  align-items: center;
}

#nav-items{
  margin-left: 25%;
  width: 40%;
  justify-content: space-evenly;
}

#sign-in-btn{
  margin-left: 20%;
}
```

Those percentages are ugly. I know. They'll break on mobile. They'll look weird on ultrawide monitors. I wrote them anyway, because "works on my laptop" was good enough for today.

I added hover states. Changed the cursor to a pointer. Made the button darken when clicked. Small details that make it feel interactive, even though nothing actually happens yet.

Two hours after I started, I had a nav bar.

------

## What I Shipped

Four commits:

1. **Documentation** — Wrote down the scope before touching code
2. **Scaffold** — "Hello Nav" to prove the pipeline worked
3. **Typography** — Added fonts, styled the logo with `::first-letter`
4. **Layout** — Flexbox, menu items, button, hover states

The nav bar isn't impressive. It doesn't route anywhere. The login button is decorative. The spacing is held together with percentage margins and hope.

But it exists. It renders. When I open my browser, I see a header with a big blue B and four menu items and a button.

That's more than I had yesterday.

------

## What I Learned

**React is just functions.** I'd read this a hundred times. Writing my first component made it real. You return JSX. React renders it. There's no magic.

**Small commits compound.** Each of my four commits was a working state. I never had broken code. I could stop at any point and have something to show. That feels different from the "let me just get this working" marathon sessions I used to do.

**Scope discipline is freedom.** I wanted to add routing. I wanted mobile responsiveness. I wanted dark mode. I did none of it, because I'd written down what I was building before I started. The nav bar is done. Those features are future sprints.

**Ugly code that ships beats beautiful code that doesn't.** Those percentage margins bother me. But the nav bar is on screen, and I learned flexbox by using it. Refactoring is a future problem.

------

## What's Next

The page is mostly empty. A nav bar floating above white space.

That's fine. I'll add a hero section next. Then routing. Then authentication. One slice at a time.

But today, I built my first React component. The big blue B is watching me from the browser tab.

Tomorrow, I'll give it something to look at.

------

*I'm building [Bibby](https://github.com/leodvincci/Bibby) while transitioning from 14 years in logistics to software development. This is the first frontend work on a project that's been CLI-only for six months.*