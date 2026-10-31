function Card({card}){
    return(
        <>
        {
        card.map((data,i)=>(
          <div key={i}>
            <div className="card">
              <div className="img">
                <img src={data.url}/>
              </div>
              <h6>{data.title}</h6>
              <p>{data.des}</p>
            </div>
          </div>
        ))
      }
        </>
    )
}
export default Card;