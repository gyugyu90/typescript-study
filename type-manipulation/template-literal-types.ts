type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

/// Create a "watched object" with an 'on' method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

// const person = makeWatchedObject({
//     firstName: 'Saoirse',
//     lastName: 'Ronan',
//     age: 26
// });

// person.on("firstNameChanged", (newName) => {
//     console.log(`new name is ${newName.toUpperCase()}`);
// })
// // person.on("firstName", () => {})

// person.on("ageChanged", newAge => {
//     if (newAge < 0) {
//         console.warn("warning! negative age");
//     }
// })