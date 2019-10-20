import ReactGA from "react-ga";

export default function Event({ category, action, label }) {
  ReactGA.event({
    category,
    action,
    label
  });
}
