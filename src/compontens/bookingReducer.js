// bookingReducer.js

// دالة وهمية ترجع أوقات متاحة حسب التاريخ
export const fetchAPI = (date) => {
  // في الكورس كانوا يعطوك دالة وهمية، هنا بس للتوضيح
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  return times;
};

// دالة وهمية تحاكي إرسال البيانات
export const submitAPI = (formData) => {
  console.log("Booking submitted:", formData);
  return true; // كأنها نجحت
};

// Reducer
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return fetchAPI(action.date);
    default:
      return state;
  }
};

// Initializer
export const initializeTimes = () => {
  return fetchAPI(new Date());
};
