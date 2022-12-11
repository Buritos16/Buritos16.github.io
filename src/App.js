import './App.css';
import {Modal} from "antd";
import {MenuOutlined} from '@ant-design/icons'
import {useForm} from 'react-hook-form'
import {useEffect, useRef, useState} from "react";
import Menu1 from "./Menu1";
import {useSelector} from "react-redux";
import Menu2 from "./Menu2";

import camera from '../src/Images/1/camera.png'
import people from '../src/Images/1/people.png'
import key from '../src/Images/1/key.png'
import cube from '../src/Images/1/cube.png'



function App() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//code.tidio.co/onov8scqh1gasttaxq5mlqgurqq7t0pi.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const refAbout = useRef()
    const refHits = useRef()
    const refMenu = useRef()
    const refContacts = useRef()
    const refSet = useRef()

    const counter = useSelector(state => state.shop.counter)
    const price = useSelector(state => state.shop.price)
    const products = useSelector(state => state.shop.data)
    const [isPriceShown, setIsPriceShown] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDropdonwOpen, setIsDropdonwOpen] = useState(false)

    const handeClickRefAbout = () => {
        refAbout.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handeClickRefHits = () => {
        refHits.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handeClickRefMenu = () => {
        refMenu.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handeClickRefContacts = () => {
        refContacts.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handeClickRefSet = () => {
        refSet.current?.scrollIntoView({behavior: 'smooth'});
    }

    const handleClickOpen = () => {
        setIsModalOpen(true)
    }

    const animate = () => {
        document.getElementById('animation').className = 'animation'
        setTimeout(() => {
            document.getElementById('animation').className = 'male-shop'
        }, 600)
    }

    const handleClickDropdown = () => {
        setIsDropdonwOpen(!isDropdonwOpen)
        if(isDropdonwOpen) {
            document.getElementById('dropdown').className = 'dropdown1'
        } else {
            document.getElementById('dropdown').className = 'dropdown'
        }
    }

    const {order, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '',
            phone: '',
            address: '',
        },
        mode: "onChange"
    });


    const submitForm = async (values) => {
       console.log(values)
    }

    const data1 = [
        {
            name: '«Пумба»',
            img: '01',
            count: '48 шт.',
            description: 'ШапкаБоб, Притяжение, Калифорния с крабом, Мачете, Закат креветки 1/2, Аркаим 1/2, Тамаго 1/2, Фокус 1/2.',
            mass: '1241 гр.',
            price: '1549'
        },
        {
            name: '«Ультрасет»',
            img: '02',
            count: '80 шт.',
            description: 'Патриот, ШапкаБоб, Фламинго, Малибу, Запеченный аркаим, Наоми, Адель, Эверест, Притяжение, Феникс.',
            mass: '2063 гр.',
            price: '1890'
        },
        {
            name: '«Суперсет 2»',
            img: '03',
            count: '64 шт.',
            description: 'Миньон, Эверест, Сырный, Запеченный майами, Темпурный с кальмаром, Запеченный под хондаши соусом ролл с окунем...',
            mass: '1588 гр.',
            price: '1699'
        },
        {
            name: '«Унаги мини сет»',
            img: '04',
            count: '18 шт.',
            description: 'Ролл Канада (в угре) 4 шт. - Унаги Урамаки(в угре) 4 шт. - Суши с Угрём 1 шт. - Гункан с Угрём и Сыром 1 шт. - Ролл с угрём 4 шт. - Ролл с угрём и сыром 4 шт.',
            mass: '650 гр.',
            price: '799'
        },
        {
            name: '«Калифорния сет»',
            img: '05',
            count: '36 шт.',
            description: 'Миньон, Эверест, Сырный, Запеченный майами, Темпурный с кальмаром, Запеченный под хондаши соусом ролл с окунем...',
            mass: '1588 гр.',
            price: '1499'
        },
        {
            name: '«Сяке сет»',
            img: '06',
            count: '36 шт.',
            description: 'Ролл Креветка, Ролл Лосось,Ролл Калифорния классик,Ролл Филадельфия классик, Муки Эби,Острый кальмар,Острый угорь',
            mass: '1380 гр.',
            price: '1749'
        },
        {
            name: '«Мураками сет»',
            img: '07',
            count: '32 шт.',
            description: 'Теплый ролл с лососем,Ролл Калифорния,Ролл Криветка,Ролл Лосось,Тори Кунсей',
            mass: '1100 гр.',
            price: '1199'
        },
        {
            name: '«Мексиканский сет»',
            img: '08',
            count: '48 шт.',
            description: 'Ролл с Тунцом,Ролл с Огурцом,Ролл Чикен,Ролл Бонито,Острый кальмар,Острый угорь',
            mass: '1599 гр.',
            price: '1649'
        },
        {
            name: '«Отори сет»',
            img: '09',
            count: '38 шт.',
            description: 'Ролл с Тунцом,Ролл с Угрем,Ролл с Криветкой,Ролл сливочный Лосось,Ролл Овощной с сыром',
            mass: '1250 гр.',
            price: '1299'
        },
    ]
    const data2 = [
        {
            name: 'Зачет',
            img: '1',
            count: '40 шт.',
            description: 'Горячее сердце самурая, Запеченный Сенсей, Притяжение, Красава 1/2, Эгоист 1/2.',
            price: '1350',
            ref: '',
        },
        {
            name: 'Сет Мини',
            img: '2',
            count: ' 16 шт.',
            description: 'Филадельфия Лайт 1/2, Смородина 1/2, Запеченный Сенсей 1/2, Закат Креветки 1/2.',
            price: '749',
            ref: '',
        },
        {
            name: 'Втренде',
            img: '3',
            count: ' 40 шт.',
            description: 'Пикадор, Винвуд, Редбулл, Вегас, Мачете.',
            price: '950',
            ref: '',
        },
        {
            name: '48 удовольствий',
            img: '4',
            count: ' 48 шт.',
            description: 'Притяжение, Хендролл, Эверест, Челлендж, Закат креветки, ШапкаБоб.',
            price: '1090',
            ref: '',
        },
        {
            name: 'Coca-cola',
            img: '5',
            count: '',
            description: '2 литра',
            price: '160',
            ref: '',
        },
        {
            name: 'Пицца "Жульен"',
            img: '6',
            count: '',
            description: 'Средняя (33 см)',
            price: '490',
            price2: ' 700 p.',
            ref: `${refSet}`,
        },
        {
            name: 'Пицца "Элитная с морепродуктами"',
            img: '7',
            count: '',
            description: 'Большая (40 см)',
            price: '790',
            ref: '',
        },
        {
            name: 'Свежевыжатый сок (500 мл)',
            img: '8',
            count: '',
            description: 'Вкус на выбор',
            price: '350',
            ref: '',
        },
        {
            name: 'Суши сет #1',
            img: '9',
            count: '',
            description: 'Состав: Филадельфия радуга маки, Филадельфия ика маки, Аляска маки, Сяке авокадо маки',
            price: '790',
            ref: '',
        },
        {
            name: 'Суши сет #2',
            img: '10',
            count: '',
            description: 'Состав: Унаги маки, Эби маки, Сяке маки, Сяке авокадо маки',
            price: '690',
            ref: '',
        },
        {
            name: 'Коктейль "Голубая Лагуна"',
            img: '11',
            count: '',
            description: 'Состав: Черничный шнапс, голубой ликер "Кюрасао", ананасовый сок',
            price: '290',
            ref: '',
        },
        {
            name: 'Коктейль "Пина Колада"',
            img: '12',
            count: '',
            description: 'Состав: Ром, кокосовое молоко, ананасовый сок',
            price: '290',
            ref: '',
        },
        {
            name: 'Лапша WOK #1',
            img: '13',
            count: '',
            description: 'Состав: Курица, лапша стеклянная, соус Перечно-устричный, яйцо куриное, кунжут, морковь, фасоль стручковая, капуста пекинская, перец болгарский, лук красный',
            price: '260',
            ref: '',
        },
        {
            name: 'Лапша WOK #2',
            img: '14',
            count: '',
            description: 'Состав: Курица, соус Терияки, лук красный, морковь, перец болгарский, фасоль стручковая, чеснок, лапша яичная, кунжут, капуста пекинская, имбирь',
            price: '240',
            ref: '',
        },
        {
            name: 'Лапша WOK #3',
            img: '15',
            count: '',
            description: 'Состав: Cвинина, лук красный, морковь, перец болгарский, фасоль стручковая, соус Терияки, чеснок, имбирь, кунжут, лапша гречневая, капуста пекинская',
            price: '255',
            ref: '',
        },
        {
            name: 'Лапша WOK #4',
            img: '16',
            count: '',
            description: 'Состав: Креветки, кальмар, лук красный, морковь, перец болгарский, фасоль стручковая, соус Пад Тай, чеснок, имбирь, кунжут, лапша стеклянная, капуста пекинская',
            price: '295',
            ref: '',
        },
        {
            name: 'Лапша WOK #5',
            img: '17',
            count: '',
            description: 'Состав: Говядина, лук красный, морковь, перец болгарский, фасоль стручковая, соус Перечно-устричный, чеснок, имбирь, кунжут, лапша гречневая, капуста пекинская',
            price: '280',
            ref: '',
        },
        {
            name: 'Лапша WOK #6',
            img: '18',
            count: '',
            description: 'Состав: Бекон, лук красный, лапша яичная, соус Сливочный, яйцо куриное, сыр пармезан, чеснок, имбирь',
            price: '285',
            ref: '',
        },
        {
            name: 'Фирменный сет #1',
            img: '19',
            count: '',
            description: 'Ролл Сансей (белый соус), Ролл Цезарь, Ролл Ямайка, Ролл Годзилла',
            price: '659',
            ref: '',
        },
        {
            name: 'Фирменный сет #2',
            img: '20',
            count: '',
            description: 'Ролл Огурец, Ролл Хоккайдо (белый соус), Ролл Калифорния классик',
            price: '375',
            ref: '',
        },
        {
            name: 'Фирменный сет #3',
            img: '21',
            count: '',
            description: 'Ролл Хоккайдо (белый соус), Ролл Филадельфия с лососем и крабом (спайси соус), Ролл Итальянский',
            price: '595',
            ref: '',
        },
        {
            name: 'Фирменный сет #4',
            img: '22',
            count: '',
            description: 'Ролл Креветка, Ролл Лосось, Ролл Огурец, Ролл Калифорния классик, Ролл Калифорния с лососем, Ролл Филадельфия классик, Ролл Годзилла, Ролл Вулкан, Ролл Манго-Личи',
            price: '1365',
            ref: '',
        },

    ]

    return (
        <div className="App">
            <div className='header'>
                <div className='navbar'>
                    <div className='navbar-content'>
                        <a className='name' style={{color: "white", fontWeight: "bold", display: "table-cell", width: 117, position: "absolute", left: '12%'}}
                           href='/'><strong>Cloud-Sushi</strong></a>
                        <div style={{display: "table-cell", position: "relative", left: '13%', maxWidth: '65%'}}>
                            <ul className='menu-computer'>
                                <li style={{display: "inline", paddingRight: 15}}>
                                    <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                       onClick={handeClickRefAbout}>О нас</a>
                                </li>
                                <li style={{display: "inline", paddingLeft: 15, paddingRight: 15}}>
                                    <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                       onClick={handeClickRefHits}>Хиты продаж</a>
                                </li>
                                <li style={{display: "inline", paddingLeft: 15, paddingRight: 15}}>
                                    <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                       onClick={handeClickRefMenu}>Меню</a>
                                </li>
                                <li style={{display: "inline", paddingLeft: 15, paddingRight: 15}}>
                                    <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                       onClick={handeClickRefContacts}>Контакты</a>
                                </li>
                            </ul>
                        </div>
                            <div className='menu-phone'>
                                <MenuOutlined onClick={handleClickDropdown} style={{cursor: "pointer", zIndex: 1, textAlign: "center", position: "relative", left: '10%'}} />
                                <div id='dropdown' className='dropdown' >
                                    <div>
                                        <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                       onClick={handeClickRefAbout}>О нас</a>
                                    </div>
                                    <div>
                                        <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                           onClick={handeClickRefHits}>Хиты продаж</a>
                                    </div>
                                    <div>
                                        <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                           onClick={handeClickRefMenu}>Меню</a>
                                    </div>
                                    <div>
                                        <a className='lishka' style={{color: "white", cursor: "pointer"}}
                                           onClick={handeClickRefContacts}>Контакты</a>
                                    </div>
                                </div>

                            </div>

                    </div>
                </div>

                <div className='start'>
                    <div className='cloud-sushi'>Cloud-Sushi</div>
                    <div className='start-text'>
                        <div>
                            Cloud-Sushi — Сеть магазинов «Суши Сетр» предлагает по невысоким ценам заказать
                            традиционные японские суши и роллы с бесплатной доставкой по России.
                        </div>
                        <div style={{marginTop: '5%'}}>
                            Мы будем искренне рады, если вы получите приятное впечатление
                            после того как попробуете приготовленные нами блюда.
                        </div>
                        <div className='hits' onClick={handeClickRefHits}>
                            <a onClick={handeClickRefHits}
                               style={{color: "white", position: "relative", top: '30%', cursor: "pointer"}}>Перейти к Хитам продаж</a>
                        </div>
                        <div className='arrow' onClick={handeClickRefHits}>
                            <svg className='arrow-svg' fill='#ffffff' x="0px" y="0px" width="38.417px"
                                 height="18.592px" viewBox="0 0 38.417 18.592">
                                <g>
                                    <path
                                        d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={refHits} style={{paddingTop: 50}}>
                <div className="sale-wrap">
                    <div className="sale-inner">
                        <div className="sale-text"><h2>Акционное предложение</h2>
                            <p>
                                <span style={{fontWeight: "bold"}}>При покупке сета "Ультрасет", пицца "Жульен" и коктейль <br/>"Пино Колада" в подарок</span>
                            </p>
                            <a className="button" onClick={handeClickRefSet} style={{cursor: "pointer"}}>Перейти к
                                акции</a>
                            <p className="sale-text-info">Вы оплачиваете, мы дарим</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{
                    textAlign: 'center',
                    fontFamily: 'Neucha, Arial, sans-serif',
                    fontWeight: 600,
                    color: '#000',
                    fontSize: 42,
                    lineHeight: 1.23,
                    marginTop: 20,
                    marginBottom: 40,
                }}>
                    «Хиты продаж»
                </div>
                <div className='sets'>
                    <div className='inner'>
                        {data1.map((data) => (
                            <Menu1 array={data} setIsPriceShown={setIsPriceShown} animate={animate}/>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={refAbout} className='fon2' style={{minHeight: '90vh', display: "block"}}>
                <div style={{
                    maxWidth: 1200,
                    textAlign: "center",
                    margin: '0 auto',
                    color: "white"
                }}>
                    <div style={{
                        fontSize: 20,
                        paddingTop: '14%',
                        lineHeight: 1.55,
                        fontFamily: 'Neucha, Arial, sans-serif',
                        fontWeight: 300
                    }}>
                        4 причины,
                        чтобы заказать доставку суши у нас:
                    </div>
                    <div style={{marginTop: 70, alignItems: 'center'}}>
                        <div className="why-us">
                            <img src={camera} alt='no'/>
                            <div className="why-us-text">Ваш
                                заказ поступает на кухню немедленно после согласования с Вами. Ни
                                раньше, ни позже. Доставка суши происходит сразу после приготовления.
                            </div>
                        </div>
                        <div className="why-us">
                            <img src={people} alt='no'/>
                            <div className="why-us-text">Над
                                Вашим заказом работают аттестованные повара-сушисты, на профессиональном
                                оборудовании.
                            </div>
                        </div>
                        <div className="why-us">
                            <img src={cube} alt='no'/>
                            <div className="why-us-text">
                                Доставка суши производится в специальных термосумках,
                                позволяющих сохранить первозданную свежесть и полезные качества
                                продуктов.
                            </div>
                        </div>
                        <div className="why-us">
                            <img src={key} alt='no'/>
                            <div className="why-us-text">Наш
                                шеф-повар постоянно работает над улучшением и доработкой меню, добавляя
                                новые оригинальные блюда.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu" ref={refMenu}>
                <div style={{
                    fontSize: 42,
                    paddingTop: 10,
                    paddingBottom: 3,
                    lineHeight: 1.23,
                    fontFamily: 'Neucha, Arial, sans-serif',
                    fontWeight: 600
                }}>Наше меню
                </div>
                <div
                    style={{
                        fontSize: 24,
                        paddingTop: 41,
                        fontFamily: 'Neucha, Arial, sans-serif',
                        fontWeight: 300,
                    }}>По
                    желанию Вы
                    можете добавить к своему заказу пиццу, напитки...
                </div>
            </div>
            <div className="menu2">
                <div className='inner' ref={refSet}>
                    {data2.map((data) => (
                        <Menu2 data={data} setIsPriceShown={setIsPriceShown} animate={animate}/>
                    ))}
                </div>
            </div>
            <div className='contacts' ref={refContacts}>
                <div id="rec70482973" className="t-rec"
                     style={{paddingTop: 0, paddingBottom: 0, backgroundColor: '#ffffff',}}
                >
                    <center>
                        <div className="t015__title"
                             style={{fontSize: 72,}}>Контакты
                        </div>
                    </center>
                    <div className="t-width">
                        <div className="t-text"
                             style={{color: '#000000', fontSize: 16}}>
                            <div style={{textAlign: 'left', marginBottom: '28%'}}>
                                <img src="http://cdn.onlinewebfonts.com/svg/img_389198.png"
                                     height="100"
                                     width="100" alt="альтернативный текст"/>
                                <div className="t-title"
                                     style={{fontSize: 42}}>Быстрый ответ в чате
                                    <div>(в правом нижнем углу)</div>
                                </div>
                                ДО - "СLOUD SUSHI", "СушиСетр" на базе ООО "Суши-Маркет" ИНН 7714380752,
                                КПП 771401001, ОГРН 1167746307300, ОКПО 97262056.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {counter>0 &&
                <div onClick={handleClickOpen} id='animation' className='male-shop' onMouseEnter={() => setIsPriceShown(true)}
                     onMouseLeave={() => setIsPriceShown(false)}
                >
                <svg style={{padding: '12 13 14'}} xmlns="http://www.w3.org/2000/svg" version="1.0" id="Layer_1" x="0px"
                     y="0px" width="34px"
                     height="34px" viewBox="0 0 64 64">
                    <polygon fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                             points="44,18 54,18 54,63 10,63 10,18 20,18 "/>
                    <path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                          d="M22,24V11c0-5.523,4.477-10,10-10s10,4.477,10,10v13  "/>
                </svg>
                <div className="counter">{counter}</div>
            </div>}
            {isPriceShown &&
                <div style={{animation: 'ani 0.8s forwards'}}
                className="price-all"
                onMouseEnter={() => setIsPriceShown(true)}
                onMouseLeave={() => setIsPriceShown(false)}>
                =&nbsp;{price}&nbsp;р.
                </div>}


            <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} closable={false} footer={null} width={560} bodyStyle={{paddingLeft: 16,paddingRight: 16,paddingTop: 20,paddingBottom: 20, borderRadius: 0}}>
                <div>
                    <div className='modal-buy'>Оплата онлайн</div>
                    <div className='modal-text'>
                        Мы работаем по системе оплаты безналом. Для того, чтобы сделать заказ, необходимо выбрать желаемый сет суш и по вашему выбору дополнительные закуски или спиртные напитки и оплатить данный заказ на сайте. После оплаты, ожидайте звонка оператора для подтверждения адреса.
                    </div>
                    <div className='line' style={{paddingTop: 0}}/>
                    <div className='modal-products'>
                        {products.map((product) => (
                            <div className='modal-product'>
                                <div className='modal-image'><img src={require('../src/Images/2/' +
                                    product.image +
                                    '.jpg')}  alt={product.name} style={{width: 70, height: 55, verticalAlign: "middle", marginRight: 20}}
                                /></div>
                                <div className='modal-name'>{product.name}</div>
                                <div className='modal-price'>{product.price} p.</div>
                                <div className='modal-cancel'><img style={{width: 20, height: 20}} src='https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg' alt='close'/></div>
                            </div>
                        ))}
                    </div>
                    <div className='line'/>
                    <div className='modal-money'>Сума:  р.</div>
                    <form className='modal-info' onSubmit={handleSubmit(submitForm)}>
                        <div className='modal-info-block'>
                            <label htmlFor='name'>ФИО</label>
                            <div>
                                <input type="name"
                                       className="modal-info-block-input"
                                />
                            </div>
                        </div>
                        <div className='modal-info-block'>
                            <label>Телефон</label>
                            <div></div>
                        </div>
                        <div className='modal-info-block'>
                            <label>Город</label>
                            <div></div>
                        </div>
                        <div className='modal-info-block'>
                            <label>Ваш адрес</label>
                            <div></div>
                        </div>
                        <div className='modal-info-block'>
                            <label>Дата доставки</label>
                            <div></div>
                        </div>
                        <div className='modal-info-block'>
                            <label>Время доставки</label>
                            <div></div>
                        </div>
                    </form>
                    <button>Оформить заказ</button>
                </div>
            </Modal>


        </div>);
}

export default App;
