import ReactGA from "react-ga4";

const GA_ID = "G-QGGPB2BT5X";

export const initGA = () => {
    ReactGA.initialize(GA_ID);
};

export const trackPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
