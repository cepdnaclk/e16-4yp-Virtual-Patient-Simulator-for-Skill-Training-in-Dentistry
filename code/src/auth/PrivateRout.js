import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';
import {Navigate, Route, useNavigate} from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";

const PrivateRoute = ({children,}) => {

    const {isSignIn} = useSelector((state) => state.user)

    if (!isSignIn) {
      return <Navigate to={{pathname: '/'}}/>
    }
    return children;
};

export default PrivateRoute

