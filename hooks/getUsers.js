import _ from "lodash";
import React, { useState, useRef, useEffect } from 'react';

import users from "./users";

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const contains = ({ name, email }, query) => {
      const { first, last } = name;
      if (first.includes(query) || last.includes(query) || email.includes(query)) {
            return true;
      }

      return false;
};





export const getUsers = (limit = 20, query = "") => {
      
      return new Promise((resolve, reject) => {
            if (query.length === 0) {
                  resolve(_.take(users, limit));
            } else {
                  const formattedQuery = query.toLowerCase();
                  const results = _.filter(users, user => {
                        return contains(user, formattedQuery);
                  });
                  resolve(_.take(results, limit));
            }
      });
};

export default getUsers;