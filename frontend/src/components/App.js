// import logo from '../images/logo.svg';
import '../index.css';
import React from 'react';
import Header from './Header'
import Footer from  './Footer.js'
import Main from "./Main.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/Api.js'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ProtectedRoute from './ProtectedRoute'
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import * as auth from '../utils/auth.js'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import InfoTooltip from './InfoTooltip';



export function App() {
    const [isAvatarEditPopupOpen, setIsAvatarEditPopupOpen] = React.useState(false)
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false)
    const [isTooltipOpen, setIsTooltipOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    // const [isRegErr, setIsRegErr] = React.useState(false)
    const [isErrMsg, setIsErrMsg] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const history = useHistory();



    React.useEffect(() => {
        const token = localStorage.getItem('token');
        checkToken()
        if (token) {
            
            Promise.all([api.getUserFromSrv(), api.getInitialCards()])
                .then(([profile, card]) =>{
                    setCurrentUser(profile.user)
                    setCards(card)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [isLoggedIn])

    function checkToken() {
        const token = localStorage.getItem('token');
        if (token) {
          auth.checkToken(token)
          .then((data) => {
            setIsLoggedIn(true);
            history.push('/')
            setEmail(data.user.email)
            return setCurrentUser(data.user)
          })
          .catch((err) => {
            console.log(err);
          })
        }
      }


    function onLogin(email, password) {
        auth.login(
            { email, password})
        .then((data)=>{
                localStorage.setItem('token', data.token)
                handleSignin()
                history.push('/')
                setEmail(email)
            })
        .catch((err)=>{
            console.log(err)
        })
        .then(() => {
            console.log(isLoggedIn)
        })
    }

    function onRegister(email, password) {
        auth.register(email, password)
        .then(()=>{
            handleTooltipPopupOpen()
            // setIsRegErr(false)
            setIsErrMsg(false)
        })
        .catch((err)=>{
            
            setIsTooltipOpen(true)
            // setIsRegErr(true)
            setIsErrMsg(true)
            console.log(err)
        })
    }


    function handleSignin() {
        setIsLoggedIn(true)
    }

    function handleEditAvatarPopupOpen() {
        setIsAvatarEditPopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function handleDeletePlace() {
        setIsDeletePlacePopupOpen(true)
    }

    function handleEditProfilePopupOpen() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlacePopupOpen() {
        setIsAddPlacePopupOpen(true)
    }

    function handleTooltipPopupOpen() {
        setIsTooltipOpen(true)
    }

    function closeAllPopups() {
        setIsAvatarEditPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsDeletePlacePopupOpen(false)
        setSelectedCard(null)
        setIsTooltipOpen(false)
    }

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup_open')) {
            closeAllPopups()
        }
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i === currentUser._id);
        
        if (!isLiked) {
            api.sendLike(card._id)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); 
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        else {
            api.deleteLike(card._id)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); 
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    function handleCardDelete(card) {
        api.deleteCardFromSrv(card)
        .then(() => {
            setCards((aCard) => aCard.filter((c) => c._id !== card._id && c)); 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleUpdateUser(data) {
        api.patchProfile(data)
        .then((user)=>{
            setCurrentUser(user)
            closeAllPopups()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleUpdateAvatar(data) {
        api.avatarUpload(data)
        .then((ava)=>{
            setCurrentUser(ava)
            closeAllPopups()
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    function handleAddPlaceSubmit(data) {
        api.sendNewImage(data)
        .then((newCard)=>{
            setCards([newCard, ...cards]);
            closeAllPopups()
        })
        .catch((err)=>{
            console.log(`не добавилась карточка${err}`)
        })
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <Header 
                    isLoggedIn={isLoggedIn}
                    email={email}
                    setIsLoggedIn={setIsLoggedIn}
                />
                
                <Switch>
                
                    <ProtectedRoute
                        exact path='/'
                        isLoggedIn={isLoggedIn}
                        component = {Main}
                        onEditAvatar={handleEditAvatarPopupOpen}
                        onEditProfile={handleEditProfilePopupOpen}
                        onAddPlace={handleAddPlacePopupOpen}
                        deletePlace={handleDeletePlace}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    >
                    
                    </ProtectedRoute>
                    
                    <Route path='/sign-in'>
                        <Login onLogin={onLogin}/>
                    </Route>
                    
                    <Route path='/sign-up' >
                        {/* <Header title="Войти" route="/sign-in"/> */}
                        <Register onRegister={onRegister} />
                    </Route>

                    <Route exact path="*">
                        {isLoggedIn ? (
                        <Redirect to="/" />
                        ) : (
                        <Redirect to="/sign-in" />
                        )}
                    </Route>
                </Switch>

                {/* попап автарки пользователя */}
                <EditAvatarPopup 
                    isOpen={isAvatarEditPopupOpen} 
                    onClose={closeAllPopups}
                    onSubmit={handleUpdateAvatar} 
                    onClickOnOverlay={closeByClickOnOverlay}
                />

                <EditProfilePopup 
                    isOpen={isEditProfilePopupOpen} 
                    onClose={closeAllPopups} 
                    onSubmit={handleUpdateUser}
                    onClickOnOverlay={closeByClickOnOverlay}
                />


                <PopupWithForm
                    isOpen={isDeletePlacePopupOpen}
                    onClose={closeAllPopups}
                    onClickOnOverlay={closeByClickOnOverlay}
                    form={'delete-card-from-srv'}
                    title={'Вы уверены?'}
                    buttonText={'Да'}
                />


                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onSubmit={handleAddPlaceSubmit}
                    onClickOnOverlay={closeByClickOnOverlay}
                />


                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                    onClickOnOverlay={closeByClickOnOverlay}
                />

                <InfoTooltip
                    isOpen={isTooltipOpen}
                    onClose={closeAllPopups}
                    onClickOnOverlay={closeByClickOnOverlay}
                    isErrMsg={isErrMsg}
                />


                <Footer/>

            </CurrentUserContext.Provider>
        </>
    )
}

export default withRouter(App);
