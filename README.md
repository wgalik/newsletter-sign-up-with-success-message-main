# 📬 Newsletter Sign-Up Form with Success Message

This project is a responsive newsletter sign-up form built with HTML, SCSS, and JavaScript. It validates the user's email input, displays error messages for invalid submissions, and shows a success confirmation once a valid email is submitted.

Inspired by the Frontend Mentor challenge, this project focuses on form validation, responsive layout, and interactive user feedback.

## 📱 Demo

[Site](https://wgalik.github.io/newsletter-sign-up-with-success-message-main/)

## 🚀 Features

- ✅ **Responsive Design** — Works smoothly on mobile, tablet, and desktop screens.
- 🧠 **Email Validation** — Ensures the input follows a valid email format before submission.
- ⚠️ **Error Handling** — Displays a visual warning and red highlight for invalid inputs.
- 🎉 **Success Message** — Shows a personalized confirmation screen after successful submission.
- 💅 **Reusable SCSS Mixins** — Includes utilities for breakpoints, flexbox layouts, and button styles.
- ♿ **Accessible UI** — Designed with semantic HTML and keyboard-friendly input behavior.

## 🧠 Technologies Used

- **HTML5** — Semantic structure and accessibility.
- **SCSS (Sass)** — Organized and scalable styling with mixins and variables.
- **JavaScript (ES6)** — Handles validation, form submission, and dynamic content updates.

## ⚙️ How It Works

1. The user enters their **email address** into the input field.
2. On clicking the **“Subscribe”** button:
   - If the field is empty or the email format is invalid,  
     an error message (“Valid email required”) appears.
   - If the email is valid,  
     the **success message section** replaces the form,  
     displaying the user’s entered email.
3. Clicking the **“Dismiss message”** button resets the form and brings back the sign-up screen.

## 🧪 Form Validation Logic

Validation pattern used:

`/^[^@]+@[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,}$/`

Error states include:

- Empty input
- Incorrect email format (missing @, domain, or extension)

33 🖼️ Responsive Design

- Mobile-first approach
- Adjusts layout with SCSS breakpoints ($sm, $md, $lg, $xl, $xxl)
- Mobile: Vertical stacked layout
- Desktop: Side-by-side form and illustration

## 💡 Key SCSS Features

Mixins:

- `@mixin breakpoint()` — Responsive design control
- `@mixin flexbox()` — Reusable flex layouts
- `@mixin button() — Button` styling with hover effects
- `@mixin background-image()` — Simplified background image handling

Variables for color palette (e.g. `$Red`, `$Blue700`, `$White`)
