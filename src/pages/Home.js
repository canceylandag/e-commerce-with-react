import { useSelector } from "react-redux";

const Home=()=>{
    const products = useSelector((state) => state.products.products);

    return(

        <div className="c-item-02">
        
        <div className="c-item-02-A">

            <button className="clear-button" id="clear-button" onClick="">
                Filtreleri temizle
            </button>

            <div className="sort-select-container">
                <select className="sort-select" id="sort-select">
                    <option value="descPrice">Fiyata göre azalan</option>
                    <option value="ascPrice">Fiyata göre artan</option>
                    <option value="descRate">Puana göre azalan</option>
                    <option value="descDiscount">İndirime göre azalan</option>
                </select>
            </div>

        </div>

        <div className="c-item-02-B" id="product-list">
            {[...products].map(x=>{
                return(
                    <div id="card-temp">
                    <a className="card-01">
                        <img  className="c-item-01"src={x.thumbnail}/>
                        <h5 className="c-item-02">{x.title}</h5>
                        <p className="c-item-03">{x.description}</p>
                    </a>
                    </div>
                )
            })}
        </div>
    </div>

    );

}

export default Home;