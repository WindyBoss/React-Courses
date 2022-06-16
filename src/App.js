import paintings from "./paintings.json"
import PaintingList from "./components/PaintingList"
import Section from "./components/Section";

/*
* Conditional React Rendering
* operator && -> replace if in react in rendering
* if else can be used only by ternar operator ? :
* false, undefinedm or null are not rendered by React
*/
export default function App() {
    const isOnline = false; 
    return (
        <div>
            <Section title="Week Top">
                <PaintingList items={paintings}/>
            </Section>
            <Section>
                {isOnline && 'Online'} 
                {false}
                {undefined}
                {null}

                {isOnline ? 'Online' : 'Sorry Offline'}
            </Section>
        </div>
    );
}