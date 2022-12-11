import React from "react";
import {add} from "./store/slices/shop";
import {useDispatch} from "react-redux";

const Menu2 = (props) => {

    const dispatch = useDispatch()
    const handleClickBuyButton = () => {
        dispatch(add(props.data))
        props.setIsPriceShown(true)
        setTimeout(() => {
            props.setIsPriceShown(false)
        }, 3000)
        props.animate()
    }

    return (
        <div className="menu2-div" onClick={handleClickBuyButton}>
            <div>
                <a>
                </a>
                <div className="menu2-image">
                    <img style={{width: 260, height: 210, marginBottom: 30, marginTop: 30}}
                         src={require('/src/Images/2/' +
                             props.data.img +
                             '.jpg')}
                         alt={props.data.name}/>
                </div>
                <div className="menu2-text">
                    <div className="menu2-name"
                         style={{fontWeight: 700}}>{props.data.name}<br/></div>
                    <div className="menu2-description">
                        {props.data.description}
                    </div>
                    <div>
                        <div className="menu2-price">
                            {props.data.price} p. {props.data.price2 && <span style={{
                            fontFamily: 'Neucha, Arial, sans-serif',
                            fontSize: 16,
                            verticalAlign: 'middle',
                            color: '#bdbdbd',
                            fontWeight: 400,
                            textDecoration: "line-through"
                        }}>&nbsp;{props.data.price2}</span>}
                        </div>
                        <div className="menu2-count"
                             style={{fontWeight: 400, position: 'static'}}>
                            {props.data.count && <div>&nbsp;{props.data.count}</div>}
                        </div>
                    </div>
                </div>

                <div className="menu2-button">
                    <a className="menu2-button-a"
                       style={{
                           color: '#f0f0f0',
                           border: '2 solid #000000',
                           backgroundColor: '#000000',
                           borderRadius: 5,
                       }}>Добавить в корзину
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu2