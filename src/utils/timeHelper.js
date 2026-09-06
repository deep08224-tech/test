/**
 * Reusable utility to calculate current showroom open/closed status in Ludhiana (Asia/Kolkata timezone)
 */
export const getLudhianaTime = () => {
  // Get individual datetime components specifically for Ludhiana (Asia/Kolkata Timezone)
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  });
  
  const parts = formatter.formatToParts(new Date());
  const dateObj = {};
  parts.forEach(p => {
    if (p.type !== "literal") {
      dateObj[p.type] = parseInt(p.value, 10);
    }
  });

  // Get week day in Ludhiana
  const dayFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "long"
  });
  const weekday = dayFormatter.format(new Date());

  return {
    hour: dateObj.hour || 0,
    minute: dateObj.minute || 0,
    weekday
  };
};

export const getShowroomStatus = () => {
  const { hour, minute, weekday } = getLudhianaTime();
  
  // Showroom Hours:
  // Mon - Sat: 10:00 AM (10:00) to 8:30 PM (20:30)
  // Sunday: 11:00 AM (11:00) to 06:00 PM (18:00)
  const isSunday = weekday === "Sunday";
  const openTime = isSunday ? 11 * 60 : 10 * 60; // 11:00 AM on Sunday, 10:00 AM otherwise
  const closeTime = isSunday ? 18 * 60 : 20 * 60 + 30; // 6:00 PM on Sunday, 8:30 PM otherwise
  const currentTimeInMinutes = hour * 60 + minute;

  if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
    return {
      isOpen: true,
      message: `Open Now — Closes at ${isSunday ? "6:00 PM" : "8:30 PM"}`,
      shortMessage: "Showroom Open"
    };
  } else {
    if (currentTimeInMinutes < openTime) {
      return {
        isOpen: false,
        message: `Closed Now — Opens today at ${isSunday ? "11:00 AM" : "10:00 AM"}`,
        shortMessage: "Showroom Closed"
      };
    } else {
      const nextOpenDay = isSunday ? "Monday" : (weekday === "Saturday" ? "Sunday" : "tomorrow");
      const nextOpenTime = weekday === "Saturday" ? "11:00 AM" : "10:00 AM";
      return {
        isOpen: false,
        message: `Closed Now — Opens ${nextOpenDay} at ${nextOpenTime}`,
        shortMessage: "Showroom Closed"
      };
    }
  }
};
