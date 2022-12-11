import React from "react";
import {add} from "./store/slices/shop";
import {useDispatch} from "react-redux";

const Menu1 = (props) => {

    const dispatch = useDispatch()
    const handleClickBuyButton = () => {
        dispatch(add(props.array))
        props.setIsPriceShown(true)
        setTimeout(() => {
            props.setIsPriceShown(false)
        }, 3000)
        props.animate()
    }


    return (
        <div className='set'>
            <div className="t615__content"
                 style={{border: '1 solid #e0e6ed', backgroundColor: '#ffffff', borderRadius: 9,}}>
                <div className="t615__title t-name t-name_xl" style={{height: 341, marginTop: 45}}>
                    <strong><span data-redactor-tag="span"
                                  style={{fontSize: 24}}>{props.array.name}</span><br/></strong><img
                    src={require('/src/Images/2/' +
                        props.array.img +
                        '.jpg')}
                    style={{width: 300}}
                    alt={props.array.name}
                />
                </div>
                <div className="t615__descr t-descr t-descr_xs"
                     style={{height: 214, marginTop: 20}}>
                    <b>{props.array.count}</b><br/>
                    <ul style={{
                        paddingLeft: 10,
                        width: 278,
                        listStyleType: "none",
                        fontFamily: 'Neucha, Arial, sans-serif',
                        fontWeight: 300,
                        lineHeight: 1.55
                    }}>
                        <li>{props.array.description}
                        </li>
                        <li style={{marginTop: 18}}><strong>{props.array.mass}</strong></li>
                    </ul>
                </div>
                <div className="t615__price-wrap">
                    <div className="t615__price t-name t-name_md"
                         style={{height: 27, fontWeight: 600, fontSize: 20, marginTop: 22}}>
                        {props.array.price} P
                    </div>
                </div>
                <a onClick={handleClickBuyButton}
                   id="sells" target="" className="t615__btn t-btn t-btn_sm"
                >
                    <table style={{width: '100%', height: '100%'}}>
                        <tbody>
                        <tr>
                            <td>Добавить в корзину</td>
                        </tr>
                        </tbody>
                    </table>
                </a>
            </div>
        </div>
    )
}

export default Menu1