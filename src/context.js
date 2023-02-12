import React, { useState, useContext } from 'react'
import sublinks from './data'

//наш глобальный объект контекста
const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    //стейт для сайдбара который появляется на маленький экранах
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    //стейт для открытия/закрытия сабменю(тултипс)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    //стейт для хранения координат ИЗ ссылки в навбаре ДЛЯ позиционирования тултипса/сабменю
    const [location, setLocation] = useState({})
    //хранить здесь название группы саблинков и их хедер
    const [page, setPage] = useState({page: '', links: []})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    //при открытии сабменю мы заранее получаем аргументы из другой части приложения
    //по тексту элемента на который наводимся мы получаем нужную нам группу саблинков и их заголовок и соххраняем в перем состояния
    const openSubmenu = (text,coordinates) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        //сохраняем объект с координатами чтобы потом по этим координатам отобразить тултип в нужном месте
        setLocation(coordinates)
        //ставим тру флаг для отображения тултипса
        setIsSubmenuOpen(true)
    }
    
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    //создаем провайдер и в валуе кидаем все наши приколы, которые станут доступны из любой части приложения по нашему кастом хуку
    return <AppContext.Provider value={{
        isSubmenuOpen,
        isSidebarOpen,
        closeSubmenu,
        closeSidebar,
        openSubmenu,
        openSidebar,
        location,
        setLocation,
        page,
        setPage
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
