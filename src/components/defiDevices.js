function defiDevices({dominance_name, total, dominance_pct}) {
    return (  
        <div className="row">
            <div className="tvl-defi">
                <h2>  Lending Leader</h2>
                <span> {data.Lending.dominance_name }</span>
                {console.log(data['Assets'])}
            </div>             
            <div className="tvl-defi">
                <h2>Total locked: </h2>
                <span> {String(data.Lending.total/1000000000).substring(0, 4)}B$</span>
            </div>  
            <div className="tvl-defi">
                <h2>Dominance Percentage</h2>
                <span> {String(data.Lending.dominance_pct).substring(0, 4)}%</span>
            </div>  
        </div>
    );
}

export default defiDevices;