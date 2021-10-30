import React from 'react'

const Results = ({results}) => {
    return (
        <div>
            {results.map((result)=>(
                <Thumbail result={result} />
            ))}
        </div>
    )
}

export default Results
