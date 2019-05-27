import React from 'react';

class BenchIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBenches();
    }


    render() {
        const benches = this.props.benches.map((bench) =>{
            debugger
            return(<li key={bench.id}>{bench.description}</li>)
        })
     
        return(
            <ul> 
                {benches}
            </ul>
        )
    }
}

export default BenchIndex;