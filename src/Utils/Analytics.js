import ReactGA from "react-ga";

export default function analyticsEvent(category, action, label) {
  ReactGA.event({
    category,
    action,
    label
  });
}
