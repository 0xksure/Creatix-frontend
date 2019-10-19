import ReactGA from "react-ga";

const trackingID = process.env.TRACKING_ID;
ReactGA.initialize(trackingID);
