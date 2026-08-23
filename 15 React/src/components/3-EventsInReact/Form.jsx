// In React, 'event' (or 'e') is a SyntheticEvent object automatically passed to event handler functions.
// We use the 'event' object for the following reasons:
// 1. event.preventDefault() -> Prevents default browser action (e.g., stopping page reloads on form submit).
// 2. event.target -> Accesses the DOM element that triggered the event and its child elements/values.
// 3. Cross-Browser Consistency -> React wraps native events in a SyntheticEvent wrapper for universal browser support.
// 4. Event Information -> Contains event metadata (e.g. event type, target elements, keypresses, mouse position).

function handlingforms(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form() {
    return (
        <>
            {/* onSubmit is attached to <form> to handle submit button clicks & Enter keypress */}
            <form onSubmit={handlingforms}>
                <input type="text" placeholder="Write something" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
