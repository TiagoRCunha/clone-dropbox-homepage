import { FaDropbox } from 'react-icons/fa'

import { styled } from '@material-ui/core'

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  "@media (min-width: 1024px)": {
    maxWidth: "480px",
  },
});

export const Navigation = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 32px",
  minHeight: "61px",
  "& > h1": {
    display: "flex",
    alignItems: "center",
    "& > span": {
      color: theme.palette.quaternary.main,
      marginLeft: "10px",
      fontSize: "29px",
    },
  },
  "& > button": {
    background: "none",
    border: "none",
    fontWeight: "bold",
    fontSize: "17px",
    outline: "0",
    cursor: "pointer",
  },
  "@media (min-width: 1024px)": {
    justifyContent: "flex-end",
    "& > h1": {
      display: "none",
    },
  },
}));

export const DropboxLogo = styled(FaDropbox)(({ theme }) => ({
  width: "36px",
  height: "32px",
  fill: theme.palette.blue.main,
}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 32px",
  maxWidth: "480px",
  margin: "0 auto",
  "& > .title": {
    fontSize: "25px",
    fontWeight: 500,
  },
  "& > .subtitle": {
    fontSize: "12px",
    marginTop: "3px",
  },
  "& > input": {
    background: theme.palette.tertiary.main,
    border: `1px solid ${theme.palette.border.main}`,
    padding: "13px 18px",
    fontSize: "14px",
    marginTop: "18px",
  },
  "& > button": {
    marginTop: "18px",
    padding: "13px 18px",
    fontSize: "16px",
    backgroundColor: theme.palette.blue.main,
    color: theme.palette.tertiary.main,
    border: "none",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.87,
    },
  },
  "& > .terms": {
    fontSize: "12px",
    opacity: "0.6",
    marginTop: "4px",
  },
}));
