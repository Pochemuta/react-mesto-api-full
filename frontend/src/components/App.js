import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import authApi from '../utils/authApi';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [infoToolTipPopupStatus, setInfoToolTipPopupStatus] = React.useState(
    { isOpen: false, status: '' });
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(
    { name: 'Жак-Ив Кусто', about: 'Исследователь океана', avatar: '' });
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleUpdateUser = (userData) => {
    api.updateUserInfo(userData).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  };

  const handleUpdateUserAvatar = (userAvatar) => {
    api.changeProfileAvatar(userAvatar).then(() => {
      setCurrentUser((prevUser) => {
        prevUser.avatar = userAvatar.avatar;
        return prevUser;
      });
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  };

  const handleAddPlace = (placeData) => {
    api.addNewCard(placeData).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setInfoToolTipPopupStatus({ isOpen: false, status: '' });
    setSelectedCard(null);
  };
  const handleCardLike = (card) => {
    const isLiked = card.likes.indexOf(currentUser._id) !== -1;
    if (isLiked) {
      api.removeLike(card._id).then((newCard) => {
        setCards((prevCards) => prevCards.map(
          (cardItem) => cardItem._id === card._id ? newCard : cardItem));
      }).catch((err) => {
        console.error(err);
      });
    } else {
      api.addLike(card._id).then((newCard) => {
        setCards((prevCards) => prevCards.map(
          (cardItem) => cardItem._id === card._id ? newCard : cardItem));
      }).catch((err) => {
        console.error(err);
      });
    }
  };

  const handleCardDelete = (card) => {
    api.removeCard(card._id).then(() => {
      setCards((prevCards) => prevCards.filter((cardItem) => cardItem._id !== card._id));
    }).catch((err) => {
      console.error(err);
    });
  };

  const handleUserRegister = (userData) => {
    authApi.registerUser(userData).then((data) => {
      setInfoToolTipPopupStatus({ isOpen: true, status: 'success' });
    }).catch((err) => {
      setInfoToolTipPopupStatus({ isOpen: true, status: 'fail' });
      console.error(err);
    });
  };

  const handleUserAuthorize = (userData) => {
    authApi.authorizeUser(userData).then(() => {
      setLoggedIn(true);
      setCurrentUser((prevUser) => {
        prevUser.email = userData.email;
        return prevUser;
      });
      navigate('/');
    }).catch((err) => {
      console.error(err);
    });
  };

  const handleLogOut = () => {
    authApi.logoutUser().then(() => {
      setLoggedIn(false)
      navigate('/sing-in');
    }).catch((err) => {
      console.error(err);
    });
  };

  React.useEffect(() => {
    authApi.checkToken().then((user) => {
      setCurrentUser((prevUser) => {
        prevUser.email = user.email;
        prevUser._id = user._id;
        return prevUser;
      });
      api.getInitialCards().then((cardsData) => {
        setCards(cardsData);
      }).catch((err) => {
        console.error(err);
      });
      api.getUserInfo().then((data) => {
        setCurrentUser((prevUser) => {
          return { ...prevUser, ...data };
        });
      }).catch((err) => {
        console.error(err);
      });
      setLoggedIn(true);
      navigate('/');
    }).catch((err) => {
      console.error(err);
    });
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header onLogOut={handleLogOut} loggedIn={loggedIn}/>
        <Routes>
          <Route path="/sign-up" element={<>
            <Register onUserRegister={handleUserRegister}/>
            <InfoTooltip name="info" statusData={infoToolTipPopupStatus} onClose={closeAllPopups}/>
          </>}/>
          <Route path="/sign-in" element={<Login onUserAuthorize={handleUserAuthorize}/>}/>
          <Route path="/*" element={
            <ProtectedRoute loggedIn={loggedIn} component={(
              <>
                <main>
                  <Main onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                        card={selectedCard}/>
                  <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen}
                                    onClose={closeAllPopups}/>
                  <PopupWithForm title="Вы уверены?" name="confirm" submitText="Да"/>
                  <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen}
                                 onClose={closeAllPopups}/>
                  <EditAvatarPopup onUpdateAvatar={handleUpdateUserAvatar}
                                   isOpen={isEditAvatarPopupOpen}
                                   onClose={closeAllPopups}/>
                  {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups}/>}
                </main>
                <Footer/>
              </>
            )}>
            </ProtectedRoute>
          }/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
