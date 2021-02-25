import React, { useEffect } from 'react';

const currentDate = () => {
      let date = new Date();
      date = date.toJSON().slice(0, 10);
      date = date.replace(/\-/g, '/');
 
      return  date;

}

export const getCurrentDate = {
      currentDate

}