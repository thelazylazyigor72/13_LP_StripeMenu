import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

//динамический тултип/сабменю
const Submenu = () => {
  //получаем нужные приколы из глобального контекста
  const {isSubmenuOpen, location, page:{page,links} } = useGlobalContext()
  //получаем реф - в нем будет наш динамический тултипс/сабменю
  const container = useRef(null)
  //локальный стейт - по факту значение для класса - это уже вопросы реализации css
  const [columns, setColmns] = useState('col-2')
  //эффект взаимодействия с ДОМом без сброса, при изменении глобальных значений контекста
  //конкретно - координаты где отоброзаить и какие ссылки и их хедер
  useEffect(() => {
    //по умолчанию пусть всегда такой класс
    setColmns('col-2')
    //получаем объект рефа
    const submenu = container.current
    //получаем координаты в переменные
    const {center, bottom} = location
    //и на основе координат позиционируем тултип
    submenu.style.left = `${center}px`
    submenu.style.top =`${bottom}px`
    //условные стейтменты для разного отображения ширины ссылочек в зависимости от их количества
    if (links.length === 3) {
      setColmns('col-3')
    }
    if (links.length > 3) {
      setColmns('col-4')
    }
  }, [location,links])
  //сам сабменю открывается появляется в зависимости от значения флага из глоб контекста
  return (
    <aside ref={container} className={`${isSubmenuOpen?'submenu show':'submenu'}`} >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link,index) => {
          const {label,icon,url} = link
          return <a key={index} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  )
}

export default Submenu
