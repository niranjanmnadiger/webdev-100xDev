import React from 'react';

function App() {

    
    return(
        <div>
            <ErrorBoundary>
               <Card1 />
            </ErrorBoundary>
          
          <Card2/>
        </div>
    );

};
const styles = {background: "red", borderRadius: "20", margin:  10, padding: 10};

function Card1(){

        throw new Error("error here")
        
    return(
        <div style={styles}>
            hi there
        </div>
    );

};

function Card2(){

    return(
        <div style={styles}>
            hello there
        </div>
        
    );

};


//error boundary class

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default App;