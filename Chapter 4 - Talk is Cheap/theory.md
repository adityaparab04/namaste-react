## Namaste React Course by Akshay Saini

# _Chapter 04 - Talk is Cheap_

### Theory explained the course

- What are `props`?
  - `props` also called properties are `arguments` to a functional component. In simple words passing `props` to a functional component is similar to passing arguments to the function.
  - `prop` is a object when passed in an argument.
  - React will wrap everything in an object and pass it to the component.
  - When you have to dynamically pass in some data to the component you pass it using `props`.
  - You can also destructure the props on the fly as the arguments.
  - You can pass props either as props or destructure it in the arguments itself or also take it as props and destructure it in the code.

-Best Practices to write react component

- Use optional chaining when not in Typescript
- Use Map, Filter, and Reduce.
- Compulsory to give a unique key whenever looping over a list and creating a component.
- When there are Components at the same level, every component needs to have a key to uniquely represent that component.
- React rerenders if there is a new component at the same level but if we give the components the id, now react exactly knows which element came in as a new render and this saves time and space.
- Rerendering is a inbuilt feature. `<Component key="unique_id" props={props}>`
- Don't use `index` as key unless the data doesn't have a unique distinguishing Id.

##### example for passing props

    const FunctionalComponent = (props) => {
        const { prop_A, prop_B, prop_C } = props
        return (
            <div>
                <h1>{props.prop_A}</h1>
                <h2>{props.prop_B}</h2>
                <h3>{props.prop_C}</h3>
            </div>
        )
    }

    const FunctionalComponent = (props) => {
        const { prop_A, prop_B, prop_C } = props
        return (
            <div>
                <h1>{prop_A}</h1>
                <h2>{prop_B}</h2>
                <h3>{prop_C}</h3>
            </div>
        )
    }

    const FunctionalComponent = ({ prop_A, prop_B, prop_C }) => {
        return (
            <div>
                <h1>{prop_A}</h1>
                <h2>{prop_B}</h2>
                <h3>{prop_C}</h3>
            </div>
        )
    }

    <Functional prop_A = "" prop_B = "" prop_C = ""/>

- Config driven UI

  - In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase.
  - You can make changes in the config file and the UI to that specific configuration will show that.

- Cloudinary
  - CDN to store images
