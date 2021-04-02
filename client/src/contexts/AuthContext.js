<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
=======
import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase.jsx';
>>>>>>> f80a7bc980c8289d83b0661c297c1e2c4df68ba3

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
<<<<<<< HEAD
  const [currentUser, setCurrentUser] = useState()
=======
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
>>>>>>> f80a7bc980c8289d83b0661c297c1e2c4df68ba3

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

<<<<<<< HEAD
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
=======
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
>>>>>>> f80a7bc980c8289d83b0661c297c1e2c4df68ba3
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
<<<<<<< HEAD
    signup
=======
    login,
    signup,
    logout
>>>>>>> f80a7bc980c8289d83b0661c297c1e2c4df68ba3
  }

  return (
    <AuthContext.Provider value={value}>
<<<<<<< HEAD
      {children}
=======
      {!loading && children}
>>>>>>> f80a7bc980c8289d83b0661c297c1e2c4df68ba3
    </AuthContext.Provider>
  )
}
