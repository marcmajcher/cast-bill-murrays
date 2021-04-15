# Cast Bill: Vol 1

You're producing a new movie, but the only available actor is Bill Murray. Fortunately, you have access to many incarnations of Mr. Murray, so you can pick and choose which ones you will cast.

## Instructions

For this project, you’ll be building out a React application that displays a list of available Bill Murrays, among other features. Try your best to find the right places to insert code into the established code base.

The base URL for your backend is: `http://localhost:6001`

These are the endpoints you might need:

- GET: `/bills`
- POST: `/bills`
- DELETE: `/bills/:id`

## Core Deliverables

As a user, I should be able to:

- See profiles of all Bill Murrays rendered in `BillCollection`.
- Add an individual Bill to the cast by clicking on it. The selected actor should render in the `YourCast` component. The instance of Bill Murray can be enlisted only **once**. The actor **does not** disappear from the `BillCollection`.
- Release an actor from the cast by clicking on it. The actor disappears from the `YourCast` component.
- Discharge a Bill Murray from their agency forever, by clicking the red button marked "x", which would delete the actor both from the backend and from the `YourCast` on the frontend.

## Bonus Deliverables

As a user, I should be able to:

- Choose if I want to cast a Bill into my movie or just see thier data. Clicking on the card should instead display a show view (`billspecs`) for that actor, which should replace `BillCollection`. billspecs should have two buttons: one to go back to the list view and another to cast that actor. 
- Sort actors by their health, salary, or rating. For this, create a new component, `SortBar`.
- etc