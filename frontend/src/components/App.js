import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import { Route, Switch, useHistory } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';
import { useMediaQuery } from 'react-responsive';
import ProtectedRoute from './ProtectedRoute';
import * as auth from "../utils/auth"

function App() {

  const isMobile = useMediaQuery({ query: `(max-width: 690px)` });
  const history = useHistory();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [isSignupSucced, setSignupSucced] = useState(false);
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: null, link: null });
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([]);

  //Получение начальных данных пользователя и карточек

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt")
      Promise.all([api.getCardsData(jwt), api.getUserData(jwt)])
        .then(([cardsData, userData]) => {
          setCards(cardsData)
          setCurrentUser(userData)
        })
        .catch(err => console.log(err))
    }
  }, [isLoggedIn])

  function handleMobileMenu() {
    setMobileMenuActive(!isMobileMenuActive)
  }

  //Функции обновления данных пользователя

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleUpdateUser(newUserData) {
    const jwt = localStorage.getItem("jwt")
    api.patchUserData(newUserData, jwt)
      .then(newUserData => setCurrentUser(newUserData))
    closeAllPopups()
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(avatarUrl) {
    const jwt = localStorage.getItem("jwt")
    api.patchAvatar(avatarUrl, jwt)
      .then(avatarUrl => setCurrentUser(avatarUrl))
    closeAllPopups()
      .catch(err => console.log(err))
  }

  //Функции обновления данных карточек

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleCardClick(cardData) {
    setImagePopupOpen(true);
    setSelectedCard(cardData)
  }

  function handleCardLike(card) {
    const jwt = localStorage.getItem("jwt")
    const isLiked = card.likes.some(like => like.owner === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked, jwt)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err))
  }

  function hadleCardDelete(card) {
    const jwt = localStorage.getItem("jwt")
    api.deleteCard(card._id, jwt)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id))
      })
      .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit(placeData) {
    const jwt = localStorage.getItem("jwt")
    api.postCard(placeData, jwt)
      .then((placeData) => {
        setCards([placeData, ...cards])
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  //Функции регистрации и входа пользователя

  function handleRegister(evt) {
    evt.preventDefault();
    auth.register(email, password).then((res) => {
      setSignupSucced(true)
      setTooltipOpen(true)
      history.push("/signin")
    })
      .catch((err) => {
        console.log(err)
        setSignupSucced(false)
        setTooltipOpen(true)
      })
  }

  function handleLogin(evt) {
    evt.preventDefault();
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token)
          setLoggedIn(true)
          history.push('/')
        }
      })
      .catch(err => console.log(err));
  }

  function tokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt")
      if (jwt) {
        auth.getContent(jwt).then((res) => {
          if (res) {
            setLoggedIn(true)
            setEmail(res.email)
            history.push("/")
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    } else {
      setLoggedIn(false)
      setEmail('');
    }
  }

  useEffect(() => {
    tokenCheck()
  }, [isLoggedIn])


  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push('/signin');
  }

  //Общие функции

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setImagePopupOpen(false)
    setTooltipOpen(false)
    setSelectedCard({ name: null, link: null });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header isMobile={isMobile} isMobileMenuActive={isMobileMenuActive} handleMobileMenu={handleMobileMenu} email={email} isLoggedIn={isLoggedIn} signOut={signOut} />
          <Switch>
            <ProtectedRoute
              exact path="/"
              isLoggedIn={isLoggedIn}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={hadleCardDelete}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              component={Main}
            />
            <Route path="/signin">
              <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Register email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleRegister={handleRegister} />
            </Route>
          </Switch>
          <InfoTooltip isOpen={isTooltipOpen} onClose={closeAllPopups} isSignupSucced={isSignupSucced} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onCardData={handleAddPlaceSubmit} />
          <PopupWithForm id="submit-popup" title="Вы уверены?" formId="submitForm">
            <button className="popup__button" type="submit">Да</button>
          </PopupWithForm>
          <ImagePopup currentCard={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;