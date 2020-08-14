import { FaDropbox } from 'react-icons/fa'

import { Box, styled } from '@material-ui/core'

export const Container = styled("div")(({ theme }) => ({
  lineHeight: "1.16",
  color: "#00f",
  "--padding-top": "100px",
  "--padding-bottom": "120px",
  "--heading-font-size": "32px",
  "--content-width": "100%",
  "&.blue": {
    "--bg-color": theme.palette.primary.main,
    "--text-color": theme.palette.tertiary.main,
    "--logo-color": theme.palette.secondary.main,
  },
  "&.beige": {
    "--bg-color": theme.palette.secondary.main,
    "--text-color": theme.palette.quaternary.main,
    "--logo-color": theme.palette.primary.main,
  },
  "&.white": {
    "--bg-color": theme.palette.tertiary.main,
    "--text-color": theme.palette.quaternary.main,
    "--logo-color": theme.palette.blue.main,
  },
  "&.black": {
    "--bg-color": theme.palette.quaternary.main,
    "--text-color": theme.palette.tertiary.main,
    "--logo-color": theme.palette.blue.main,
  },
  "&:first-child": {
    "--padding-top": "130px",
    "--heading-font-size": "51px",
    "@media (min-width: 1024px)": {
      "--content-width": "50%",
      "--heading-font-size": "71px",
    },
  },
  background: "var(--bg-color)",
  position: "relative",
}));

export const HeaderWrapper = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clip: "rect(auto, auto, auto, auto)",
});

export const Header = styled(Box)({
  zIndex: 3,
  height: "65px", // force same height as the example
  background: "var(--bg-color)",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "16px 32px",
  "& > h1": {
    display: "flex",
    alignItems: "center",
    "& > span": {
      color: "var(--text-color)",
      marginLeft: "10px",
      fontSize: "29px",
    },
  },
  "& > button": {
    color: "var(--text-color)",
    background: "none",
    border: "none",
    outline: "none",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover,&:focus": {
      textDecoration: "underline",
    },
  },
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
});

export const DropboxLogo = styled(FaDropbox)({
  width: "36px",
  height: "32px",
  fill: "var(--logo-color)",
});

export const Content = styled(Box)({
  zIndex: 2,
  position: "relative",
  maxWidth: "1440px",
  margin: "0 auto",
  "& > h2": {
    fontSize: "var(--heading-font-size)",
    color: "var(--logo-color)",
    maxWidth: "var(--content-width)",
  },
  "& > p": {
    marginTop: "20px",
    fontSize: "16px",
    color: "var(--text-color)",
    maxWidth: "var(--content-width)",
  },
  padding: "var(--padding-top) 32px var(--padding-bottom)",
});
